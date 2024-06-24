import { LEETCODE_API_URL } from './constants';

export const fetchProblemCategoriesMarkedForReviewByUser = async (
  uuid,
  setLoading,
  setProblemCategoriesMarkedForReview
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `${LEETCODE_API_URL}/users/${uuid}/problem/categories/review`
    );
    const data = await response.json();
    console.log('Review Categories', data);
    setProblemCategoriesMarkedForReview(data);
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};
