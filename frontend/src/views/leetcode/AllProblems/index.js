import React, { useContext, useState, useEffect } from 'react';
import AllProblemTable from './AllProblemTable';
import { AuthContext } from 'contexts/authContext';
import ProblemCategoriesFilter from '../ProblemCategoriesFilter';
import { fetchUserSubmissionsOnlyProblemIds } from 'services/leetcode_review/apiFetchUserSubmissions';
import { fetchAllLeetcodeQuestionsBlocking } from 'services/leetcode_review/apiFetchAllLeetcodeQuestions';
import EditButton from '../common/EditButton';
import { fetchAllUserData } from 'services/leetcode_review/apiFetchAllUserData';

const LeetcodeView = () => {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const [submittedProblems, setSubmittedProblems] = useState([]); // State to hold user's submitted problems
  const [selectedCategories] = useState([]);

  const { uuid } = useContext(AuthContext);
  console.log('uuid:', uuid);

  useEffect(() => {
    fetchUserSubmissionsOnlyProblemIds(uuid, setLoading, setSubmittedProblems);
    fetchAllLeetcodeQuestionsBlocking(setLoading, setProblemsData);

    // Wraps promise around fetchUserSubmissions and fetchAllLeetcodeQuestions
    fetchAllUserData(uuid, setLoading);
  }, [uuid]);

  const handleCheckboxChange = (problemId) => {
    setSubmittedProblems((prevSubmittedProblems) =>
      prevSubmittedProblems.includes(problemId)
        ? prevSubmittedProblems.filter((id) => id !== problemId)
        : [...prevSubmittedProblems, problemId]
    );
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ProblemCategoriesFilter filter={filter} setFilter={setFilter} />

      {!loading && (
        <AllProblemTable
          data={problemsData}
          filter={filter}
          selectedCategories={selectedCategories}
          onCheckboxChange={handleCheckboxChange}
          submittedProblems={submittedProblems} // Pass submitted problems to the table
        />
      )}
    </div>
  );
};

export default LeetcodeView;
