import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HTTPService from './HTTPService';
import AuthHeader from '../Services/AuthHeader';

jest.mock('../Services/AuthHeader');

const url = 'http://localhost:8080/api/v1/news';

describe('HTTPService', () => {
  let mock;
  let service;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    service = HTTPService();
    AuthHeader.mockReturnValue('testToken');
  });

  afterEach(() => {
    mock.restore();
  });

  it('gets all data', async () => {
    const data = [{ id: 1 }, { id: 2 }];
    mock.onGet(url).reply(200, data);

    const result = await service.getAllData();

    expect(result).toEqual(data);
  });

  it('gets data by id', async () => {
    const data = { id: 1 };
    mock.onGet(`${url}/1`).reply(200, data);

    const result = await service.getDataById(1);

    expect(result).toEqual(data);
    expect(AuthHeader).toHaveBeenCalled();
  });

  it('creates data', async () => {
    const data = { test: 'data' };
    mock.onPost(url).reply(200, data);

    const result = await service.createData(data);

    expect(result).toEqual(data);
    expect(AuthHeader).toHaveBeenCalled();
  });

  it('updates data', async () => {
    const data = { test: 'data' };
    mock.onPut(`${url}/1`).reply(200, data);

    const result = await service.updateData(1, data);

    expect(result).toEqual(data);
    expect(AuthHeader).toHaveBeenCalled();
  });

  it('deletes data', async () => {
    mock.onDelete(`${url}/1`).reply(200);

    const result = await service.deleteData(1);

    expect(result).toBeUndefined();
    expect(AuthHeader).toHaveBeenCalled();
  });
});
