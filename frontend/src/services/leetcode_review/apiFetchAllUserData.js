import { fetchAllLeetcodeQuestionsBlocking } from './apiFetchAllLeetcodeQuestions';
import { fetchUserSubmissionsOnlyProblemIds } from './apiFetchUserSubmissions';

export const fetchAllUserData = async (uuid, setLoading) => {
  if (!uuid) return;

  setLoading(true);

  try {
    await Promise.all([
      fetchUserSubmissionsOnlyProblemIds(),
      fetchAllLeetcodeQuestionsBlocking(),
    ]);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  } finally {
    setLoading(false);
  }
};
