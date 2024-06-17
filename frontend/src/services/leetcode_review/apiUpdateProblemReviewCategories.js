import { LEETCODE_API_URL } from './constants';

export const updateProblemReviewCategories = async (
  uuid,
  problemCategoriesMarkedForReview
) => {
  try {
    let problemCategorySet = [];
    for (const category of problemCategoriesMarkedForReview) {
      problemCategorySet.push(category);
    }

    const payload = { category: problemCategorySet };
    await fetch(
      `${LEETCODE_API_URL}/users/${uuid}/problem/categories/review/submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    alert('Submitted successfully');
  } catch (error) {
    console.error('Error submitting data', error);
    alert('Failed to submit');
  }
};
