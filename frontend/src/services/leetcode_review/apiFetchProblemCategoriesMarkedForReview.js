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

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0 || Object.keys(data).length === 0) {
      setProblemCategoriesMarkedForReview([]);
      console.log(`User ${uuid} has not set any review problem categories`);
    } else {
      setProblemCategoriesMarkedForReview(data);
      console.log('Review Categories', data);
    }
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
  } finally {
    setLoading(false);
  }
};
