// src/App.js
import React, { useContext, useState, useEffect } from 'react';
import ProblemsTable from './ProblemTable';
import ProblemTypesTable from './ProblemTypesTable';
import Filter from '../ProblemTypeFilter';
import { AuthContext } from 'contexts/authContext';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;
console.log(leetcodeAPIURL);

const predefinedProblemTypes = [
  { name: 'Arrays & Hashing', count: 0 },
  // { name: 'String', count: 0 },
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
  const [loading, setLoading] = useState(true); // Add loading state
  const [problemsData, setProblemsData] = useState([]);
  const [view, setView] = useState('types'); // 'types' or 'problems'
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]); // State to manage selected problem types

  useEffect(() => {
    const fetchUsersLeetcodeQuestions = async (uuid) => {
      setLoading(true); // Start loading

      try {
        const response = await fetch(`${leetcodeAPIURL}/users/${uuid}`);
        const data = await response.json();
        console.log(data);
        setProblemsData(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (uuid) {
      fetchUsersLeetcodeQuestions(uuid);
    }
  }, [uuid]);

  // Update the predefined problem types with the actual count
  const problemTypes = predefinedProblemTypes.map((type) => {
    const count = problemsData.filter(
      (problem) => problem.type === type.name
    ).length;
    return { ...type, count };
  });

  console.log(problemTypes);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    // setFilter(type); #todo - Filter properly when clicking type of problems
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

  console.log(problemsData);
  return (
    <div>
      <h1>Problems Table</h1>
      {loading && <p>Loading...</p>}
      {view === 'types' && !loading && (
        <ProblemTypesTable
          problemTypes={problemTypes}
          selectedTypes={selectedTypes}
          onTypeClick={handleTypeClick}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {view === 'problems' && !loading && (
        <div>
          <button onClick={handleBackClick}>Back to Types</button>
          {/* <Filter filter={filter} setFilter={setFilter} /> */}
          <ProblemsTable data={problemsData} filter={filter} />
        </div>
      )}
    </div>
  );
};

export default LeetcodeView;
