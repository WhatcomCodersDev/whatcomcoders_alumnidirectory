import { LEETCODE_API_URL } from './constants';

// The blocking = there is a loading screen
export const fetchAllLeetcodeQuestionsBlocking = async (
  setLoading,
  setAllProblemData
) => {
  setLoading(true);

  try {
    const response = await fetch(`${LEETCODE_API_URL}/problems/all`);
    const data = await response.json();
    setAllProblemData(data);
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};

// Nonblocking = no loading screen
export const fetchAllLeetcodeQuestionsNonBlocking = async (
  setAllProblemData
) => {
  try {
    const response = await fetch(`${LEETCODE_API_URL}/problems/all`);
    const data = await response.json();
    setAllProblemData(data);
  } catch (error) {
    console.error('Error fetching problem data', error);
  }
};
