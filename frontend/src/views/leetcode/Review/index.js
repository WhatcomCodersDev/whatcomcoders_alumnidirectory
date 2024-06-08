import React, { useContext, useState, useEffect } from 'react';
import ProblemsTable from './ProblemTable';
import ProblemTypesTable from './ProblemTypesTable';
import Filter from '../ProblemTypeFilter';
import { AuthContext } from 'contexts/authContext';
import { Button, Box } from '@mui/material';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const predefinedProblemTypes = [
  { name: 'Arrays & Hashing', count: 0 },
  { name: 'Linked List', count: 0 },
  { name: 'Tree', count: 0 },
  { name: 'Graph', count: 0 },
  { name: '1D DP', count: 0 },
  { name: 'Binary Search', count: 0 },
  { name: 'Stack', count: 0 },
  { name: '2D DP', count: 0 },
  { name: 'Bit Manipulation', count: 0 },
  { name: 'Two Pointers', count: 0 },
  { name: 'Sliding Window', count: 0 },
  { name: 'Math', count: 0 },
  { name: 'Matrix', count: 0 },
  { name: 'Intervals', count: 0 },
  { name: 'Heap', count: 0 },
  { name: 'Advanced Graph', count: 0 },
  { name: 'Backtracking', count: 0 },
];

const LeetcodeView = () => {
  const { uuid } = useContext(AuthContext);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const [view, setView] = useState('types');
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode

  useEffect(() => {
    const fetchUsersLeetcodeQuestions = async (uuid) => {
      setLoading(true);

      try {
        const response = await fetch(`${leetcodeAPIURL}/users/${uuid}`);
        const data = await response.json();
        console.log(data);
        setProblemsData(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (uuid) {
      fetchUsersLeetcodeQuestions(uuid);
    }
  }, [uuid]);

  const problemTypes = predefinedProblemTypes.map((type) => {
    // const count = 0;
    // return { ...type, count };
    const count = problemsData.filter(
      (problem) => problem.problem_type === type.name
    ).length;
    return { ...type, count };
  });

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setFilter(type);
    setView('problems');
  };

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const handleBackClick = () => {
    setView('types');
    setSelectedType(null);
    setFilter('All');
  };

  return (
    <div>
      <h1>Problems Table</h1>
      {loading && <p>Loading...</p>}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={() => setEditMode((prev) => !prev)}
          sx={{ borderRadius: '50px' }}
        >
          Edit
        </Button>
      </Box>
      {view === 'types' && !loading && (
        <ProblemTypesTable
          problemTypes={problemTypes}
          selectedTypes={selectedTypes}
          onTypeClick={handleTypeClick}
          onCheckboxChange={handleCheckboxChange}
          editMode={editMode}
        />
      )}
      {view === 'problems' && !loading && (
        <div>
          <Button variant='contained' onClick={handleBackClick}>
            Back to Types
          </Button>
          <ProblemsTable data={problemsData} filter={filter} />
        </div>
      )}
    </div>
  );
};

export default LeetcodeView;
