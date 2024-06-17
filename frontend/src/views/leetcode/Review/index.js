import React, { useContext, useState, useEffect } from 'react';
import ProblemsTable from './ProblemTable';
import ProblemCategoriesTable from './ProblemCategoriesTable';
import { AuthContext } from 'contexts/authContext';
import { Button, Box } from '@mui/material';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const predefinedProblemCategories = [
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
  const [userProblemSubmissions, setUserProblemSubmissions] = useState([]);
  const [view, setView] = useState('types');
  const [
    problemCategoriesMarkedForReview,
    setProblemCategoriesMarkedForReview,
  ] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode

  useEffect(() => {
    const fetchProblemCategoriesMarkedForReviewByUser = async (uuid) => {
      setLoading(true);
      try {
        const response = await fetch(
          `${leetcodeAPIURL}/users/${uuid}/problem/categories/review`
        );
        const data = await response.json();
        console.log('Review Categories', data);
        setProblemCategoriesMarkedForReview(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchUsersLeetcodeQuestionsSubmissions = async (uuid) => {
      setLoading(true);

      try {
        const response = await fetch(`${leetcodeAPIURL}/users/${uuid}`);
        const data = await response.json();
        console.log('user leetcode submissions:', data);
        setUserProblemSubmissions(data);
      } catch (error) {
        console.error('Request failed:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (uuid) {
      fetchUsersLeetcodeQuestionsSubmissions(uuid);
      fetchProblemCategoriesMarkedForReviewByUser(uuid);
    }
  }, [uuid]);

  const userSubmissionsByReviewCategory = predefinedProblemCategories.map(
    (category) => {
      const count =
        userProblemSubmissions.length > 0
          ? userProblemSubmissions.filter(
              (problem) => problem.category === category.name
            ).length
          : 0;
      return { ...category, count };
    }
  );

  console.log('userProblemSubmissions', userProblemSubmissions);

  const handleTypeClick = (category) => {
    setSelectedCategory(category);
    setFilter(category);
    setView('problems');
  };

  const handleCheckboxChange = (category) => {
    setProblemCategoriesMarkedForReview((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const handleBackClick = () => {
    setView('types');
    setSelectedCategory(null);
    setFilter('All');
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
        <Button
          variant='contained'
          color='primary'
          onClick={() => setEditMode((prev) => !prev)}
          sx={{ borderRadius: '50px' }}
        >
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </Box>
      {view === 'types' && !loading && (
        <ProblemCategoriesTable
          userSubmissionsByReviewCategory={userSubmissionsByReviewCategory}
          problemCategoriesMarkedForReview={problemCategoriesMarkedForReview}
          userProblemSubmissions={userProblemSubmissions}
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
          <ProblemsTable
            data={userProblemSubmissions}
            filter={filter}
            editMode={editMode}
          />
        </div>
      )}
    </div>
  );
};

export default LeetcodeView;
