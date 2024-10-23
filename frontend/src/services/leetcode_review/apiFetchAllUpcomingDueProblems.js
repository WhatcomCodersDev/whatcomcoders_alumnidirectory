import { LEETCODE_API_URL } from './constants';

// The blocking = there is a loading screen
export const fetchAllUpcomingDueProblems = async (
  uuid,
  setLoading,
  setDueProblems
) => {
  setLoading(true);

  try {
    const response = await fetch(
      `${LEETCODE_API_URL}/space_repetition/${uuid}/upcoming`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log('data:', data);

    if (data['review_problems'] == null) {
      setDueProblems([]);
      return;
    }
    setDueProblems(data['review_problems']);
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};
