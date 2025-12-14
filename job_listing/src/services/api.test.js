import { createBookmark, deleteBookmark, getBookmarks } from './api';

global.fetch = jest.fn();

describe('Bookmark API Functions', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('createBookmark sends POST request with token', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });

    await createBookmark('job123', 'token123');

    expect(fetch).toHaveBeenCalledWith(
      'https://akil-backend.onrender.com/bookmarks/job123',
      {
        method: 'POST',
        headers: { 'Authorization': 'Bearer token123' }
      }
    );
  });

  test('deleteBookmark sends DELETE request with token', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });

    await deleteBookmark('job123', 'token123');

    expect(fetch).toHaveBeenCalledWith(
      'https://akil-backend.onrender.com/bookmarks/job123',
      {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer token123' }
      }
    );
  });

  test('getBookmarks fetches bookmarks with token', async () => {
    const mockBookmarks = [{ eventID: 'job1' }, { eventID: 'job2' }];
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ data: mockBookmarks })
    });

    const result = await getBookmarks('token123');

    expect(fetch).toHaveBeenCalledWith(
      'https://akil-backend.onrender.com/bookmarks',
      {
        headers: { 'Authorization': 'Bearer token123' }
      }
    );
    expect(result).toEqual(mockBookmarks);
  });

  test('createBookmark throws error on failure', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ message: 'Unauthorized' })
    });

    await expect(createBookmark('job123', 'token123')).rejects.toThrow('Unauthorized');
  });
});
