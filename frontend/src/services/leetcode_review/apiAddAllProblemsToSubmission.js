import { LEETCODE_API_URL } from './constants';

export const addAllProblemsToSubmission = async (uuid, selectedProblems) => {
  console.log('selectedProblems', selectedProblems);

  try {
    for (const problem of selectedProblems) {
      console.log('problem', problem);
      const payload = {
        problem_difficulty: 3,
        id: problem.id,
        isInBlind50: problem.isInBlind50,
        isInBlind75: problem.isInBlind75,
        isInGrind75: problem.isInGrind75,
        isInNeetcode: problem.isInNeetcode,
        isInSeanPrasadList: problem.isInSeanPrasadList,
        link: problem.link,
        name: problem.name,
        tag: problem.tag,
        category: problem.category,
        user_id: uuid,
        user_rating: problem.user_rating ? problem.user_rating : '',
        last_reviewed_timestamp: problem.last_reviewed_timestamp
          ? problem.last_reviewed_timestamp
          : '',
        next_review_timestamp: problem.next_review_timestamp
          ? problem.next_review_timestamp
          : '',
        attempted: true,
      };

      console.log('payload', payload);

      await fetch(`${LEETCODE_API_URL}/space_repetition/${problem.id}/submit`, {
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
