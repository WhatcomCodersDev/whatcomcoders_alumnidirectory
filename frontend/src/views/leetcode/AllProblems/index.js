import React, { useContext, useState, useEffect } from 'react';
import AllProblemTable from './AllProblemTable';
import { AuthContext } from 'contexts/authContext';
import ProblemCategoriesFilter from '../ProblemCategoriesFilter';
import { Button, Box } from '@mui/material';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const LeetcodeView = () => {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const [submittedProblems, setSubmittedProblems] = useState([]); // State to hold user's submitted problems
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode

  const { uuid } = useContext(AuthContext);
  console.log('uuid:', uuid);

  useEffect(() => {
    const fetchUserSubmissions = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${leetcodeAPIURL}/users/${uuid}`);
        const data = await response.json();
        console.log('data:', data);
        setSubmittedProblems(data.map((submission) => Number(submission.id)));
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllLeetcodeQuestions = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${leetcodeAPIURL}/problems/all`);
        const data = await response.json();
        setProblemsData(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchData = async () => {
      if (!uuid) return;

      setLoading(true);

      try {
        await Promise.all([
          fetchUserSubmissions(),
          fetchAllLeetcodeQuestions(),
        ]);
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <ProblemCategoriesFilter filter={filter} setFilter={setFilter} />
        <Button
          variant='contained'
          color='primary'
          onClick={() => setEditMode((prev) => !prev)}
          sx={{ borderRadius: '50px' }}
        >
          Edit
        </Button>
      </Box>
      {!loading && (
        <AllProblemTable
          data={problemsData}
          filter={filter}
          selectedCategories={selectedCategories}
          onCheckboxChange={handleCheckboxChange}
          editMode={editMode}
          submittedProblems={submittedProblems} // Pass submitted problems to the table
        />
      )}
    </div>
  );
};

export default LeetcodeView;
