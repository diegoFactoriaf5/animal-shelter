import AuthHeader from './AuthHeader';
import '@testing-library/jest-dom/extend-expect';

describe('AuthHeader', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('returns an object with a Bearer token if a user is stored in localStorage', () => {
    const user = { accessToken: 'testToken' };
    localStorage.setItem('user', JSON.stringify(user));

    expect(AuthHeader()).toEqual('Bearer testToken');
  });

  it('returns an empty object if no user is stored in localStorage', () => {
    expect(AuthHeader()).toEqual({});
  });
});
