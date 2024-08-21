import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AuthService from './AuthService';

const API_URL = "http://localhost:8080/api/auth/";

describe('AuthService', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    localStorage.clear();
  });

  afterEach(() => {
    mock.restore();
  });

  it('stores the user in localStorage when login is successful', async () => {
    const user = { accessToken: 'testToken' };
    mock.onPost(`${API_URL}signin`).reply(200, user);

    await AuthService.login('testUser', 'testPass');

    expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
  });

  it('removes the user from localStorage when logout is called', () => {
    localStorage.setItem('user', JSON.stringify({ accessToken: 'testToken' }));

    AuthService.logout();

    expect(localStorage.getItem('user')).toBeNull();
  });

  it('returns the current user from localStorage', () => {
    const user = { accessToken: 'testToken' };
    localStorage.setItem('user', JSON.stringify(user));

    expect(AuthService.getCurrentUser()).toEqual(user);
  });
});
