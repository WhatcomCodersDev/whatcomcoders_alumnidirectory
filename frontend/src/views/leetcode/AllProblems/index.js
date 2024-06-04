// src/App.js
import React, { useContext, useState, useEffect } from 'react';
import AllProblemTable from './AllProblemTable';
// import Filter from './ProblemTypeFilter';
import { AuthContext } from 'contexts/authContext';
import Filter from '../ProblemTypeFilter';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;
console.log(leetcodeAPIURL);

const LeetcodeView = () => {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true); // Add loading state
  const [problemsData, setProblemsData] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]); // State to manage selected problem types

  useEffect(() => {
    const fetchAllLeetcodeQuestions = async () => {
      setLoading(true); // Start loading

      try {
        const response = await fetch(`${leetcodeAPIURL}/problems/all`);
        const data = await response.json();
        console.log(data);
        setProblemsData(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false); // Stop loading
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

  console.log(problemsData);
  return (
    <div>
      <h1>Problems Table</h1>
      {loading && <p>Loading...</p>}
      <Filter filter={filter} setFilter={setFilter} />
      {!loading && (
        <AllProblemTable
          data={problemsData}
          filter={filter}
          selectedTypes={selectedTypes}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
    </div>
  );
};

export default LeetcodeView;
