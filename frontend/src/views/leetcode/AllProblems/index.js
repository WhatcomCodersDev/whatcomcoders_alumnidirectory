import React, { useContext, useState, useEffect } from 'react';
import AllProblemTable from './AllProblemTable';
import { AuthContext } from 'contexts/authContext';
import Filter from '../ProblemTypeFilter';
import { Button, Box } from '@mui/material';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const LeetcodeView = () => {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode

  useEffect(() => {
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

    fetchAllLeetcodeQuestions();
  }, []);

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
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
        <Filter filter={filter} setFilter={setFilter} />
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
          selectedTypes={selectedTypes}
          onCheckboxChange={handleCheckboxChange}
          editMode={editMode}
        />
      )}
    </div>
  );
};

export default LeetcodeView;
