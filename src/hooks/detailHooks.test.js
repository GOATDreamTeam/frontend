import { renderHook, act } from '@testing-library/react-hooks';
import { useDetails } from './detailHooks';

jest.mock('../services/fetchCalls.js', () => ({
  fetchPlantById() {
    return Promise.resolve({
      plantDetail: [
        {
          id: 130924,
          common_name: 'squirting cucumber',
          scientific_name: 'Ecballium elaterium',
          image_url: 'https://bs.floristic.org/image/o/59bae4d4af6bf2e6d6dfa566d03ec04ad1237c10',
          genus: 'plantae',
          family: 'plant family',
          edible: true,
          vegetable: false,
          flower_images: ['image.png'],
          leaf_images: ['image.png'],
          habit_images: ['image.png'],
          fruit_images: ['image.png'],
          bark_images: ['image.png'],
          intro_distributions: [],
          native_distributions: []
        }
      ]
    });
  }
}));

describe('useDetails hooks', () => {
  it('has plantDetail state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetails());
      return waitFor(() => {
        expect(result.current.plantDetail).not.toBeUndefined();
      });
    });
  });
});
