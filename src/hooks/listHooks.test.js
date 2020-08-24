import { renderHook, act } from '@testing-library/react-hooks';
import { useList } from './listHooks';

jest.mock('../services/fetchCalls.js', () => ({
  fetchPlantSearch() {
    return Promise.resolve({
      plants: [
        {
          id: 125316,
          common_name: 'garden cucumber',
          scientific_name: 'Cucumis sativus',
          image_url: 'https://bs.floristic.org/image/o/d278dfc3db5de3552484da316ab5925b75f1bea5'
        },
        {
          id: 130924,
          common_name: 'squirting cucumber',
          scientific_name: 'Ecballium elaterium',
          image_url: 'https://bs.floristic.org/image/o/59bae4d4af6bf2e6d6dfa566d03ec04ad1237c10'
        }
      ]
    });
  }
}));

describe('useList hooks', () => {
  it('has plants state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useList());
      return waitFor(() => {
        expect(result.current.plants).not.toBeUndefined();
      });
    });
  });
});
