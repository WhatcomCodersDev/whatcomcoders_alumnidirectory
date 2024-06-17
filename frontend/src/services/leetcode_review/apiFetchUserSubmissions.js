import { LEETCODE_API_URL } from './constants';

//Todo - Use the bottom function to infer the top one in the future
export const fetchUserSubmissionsOnlyProblemIds = async (
  uuid,
  setLoading,
  setSubmittedProblems
) => {
  setLoading(true);

  try {
    const response = await fetch(`${LEETCODE_API_URL}/users/${uuid}`);
    const data = await response.json();
    console.log('data:', data);
    setSubmittedProblems(data.map((submission) => Number(submission.id)));
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};

export const fetchUserSubmissions = async (
  uuid,
  setLoading,
  setSubmittedProblems
) => {
  setLoading(true);

  try {
    const response = await fetch(`${LEETCODE_API_URL}/users/${uuid}`);
    const data = await response.json();
    console.log('data:', data);
    setSubmittedProblems(data);
  } catch (error) {
    console.error('Request failed:', error.message);
  } finally {
    setLoading(false);
  }
};
