import { LEETCODE_API_URL } from './constants';
import Problem from './ProblemData';

export const addAllProblemsToSubmission = async (uuid, selectedProblems) => {
  console.log('selectedProblems', selectedProblems);

  try {
    for (const problemData of selectedProblems) {
      const problem = new Problem(problemData);
      let payload = problem.toDict();
      payload.user_id = uuid;

      console.log('new problem', problem);

      console.log('payload', payload);

      await fetch(`${LEETCODE_API_URL}/users/${problem.id}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    }
    alert('Submitted successfully');
  } catch (error) {
    console.error('Error submitting data', error);
    alert('Failed to submit');
  }
};
