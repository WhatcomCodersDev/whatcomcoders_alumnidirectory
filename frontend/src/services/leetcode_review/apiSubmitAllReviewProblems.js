import { LEETCODE_API_URL } from './constants';

export const submitUserReviewProblems = async (uuid, filteredData) => {
  try {
    const response = await fetch(
      `${LEETCODE_API_URL}/users/${uuid}/review_problems/submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit changes');
    }

    alert('Changes submitted successfully');
  } catch (error) {
    console.error('Error submitting changes:', error);
    alert('Failed to submit changes');
  }
};
