import * as api from '../services/api';

describe('Dashboard Integration', () => {
  test('bookmark API functions exist', () => {
    expect(typeof api.getBookmarks).toBe('function');
    expect(typeof api.createBookmark).toBe('function');
    expect(typeof api.deleteBookmark).toBe('function');
  });
});
