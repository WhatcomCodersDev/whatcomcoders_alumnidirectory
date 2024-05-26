// src/App.js
import React, { useState } from 'react';
import ProblemsTable from './ProblemTable';
import Filter from './ProblemTypeFilter';

const LeetcodeView = () => {
  const [filter, setFilter] = useState('All');

  const problemsData = [
    {
      id: 1,
      name: 'Two Sum',
      nextReview: '2024-05-30',
      lastCompleted: '2024-05-25',
      difficulty: 'Easy',
    },
    {
      id: 2,
      name: 'Binary Tree Inorder Traversal',
      nextReview: '2024-06-01',
      lastCompleted: '2024-05-20',
      difficulty: 'Medium',
    },
    // Add more problems as needed
  ];

  return (
    <div>
      <h1>Problems Table</h1>
      <Filter filter={filter} setFilter={setFilter} />;
      <ProblemsTable data={problemsData} />
    </div>
  );
};

export default LeetcodeView;
