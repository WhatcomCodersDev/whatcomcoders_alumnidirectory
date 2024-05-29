// src/App.js
import React, { useContext, useState, useEffect } from 'react';
import AllProblemTable from './AllProblemTable';
// import Filter from './ProblemTypeFilter';
import { AuthContext } from 'contexts/authContext';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;
console.log(leetcodeAPIURL);

const LeetcodeView = () => {
  //   const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true); // Add loading state
  const [problemsData, setProblemsData] = useState([]);

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

  console.log(problemsData);
  return (
    <div>
      <h1>Problems Table</h1>
      {loading && <p>Loading...</p>}
      {/* <Filter filter={filter} setFilter={setFilter} /> */}
      {!loading && <AllProblemTable data={problemsData} />}
    </div>
  );
};

export default LeetcodeView;
