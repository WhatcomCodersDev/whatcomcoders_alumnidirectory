import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Box,
  Typography,
} from '@mui/material';
import { AuthContext } from 'contexts/authContext';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const ProblemCategoriesTable = ({
  userSubmissionsByReviewCategory,
  problemCategoriesMarkedForReview,
  userProblemSubmissions,
  onTypeClick,
  onCheckboxChange,
  editMode,
}) => {
  const { uuid } = useContext(AuthContext);
  const [filter, setFilter] = useState('All');
  const [allProblemData, setAllProblemData] = useState([]); // To hold all problem data

  useEffect(() => {
    // Fetch problem data once when the component mounts
    const fetchProblemData = async () => {
      try {
        const response = await fetch(`${leetcodeAPIURL}/problems/all`);
        const data = await response.json();
        setAllProblemData(data);
      } catch (error) {
        console.error('Error fetching problem data', error);
      }
    };

    fetchProblemData();
  }, []);

  const handleSubmit = async () => {
    try {
      let problemCategorySet = [];
      for (const category of problemCategoriesMarkedForReview) {
        problemCategorySet.push(category);
      }

      const payload = { category: problemCategorySet };
      await fetch(
        `${leetcodeAPIURL}/users/${uuid}/problem/categories/review/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      alert('Submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Failed to submit');
    }
  };

  const filteredProblemCategories =
    filter === 'All'
      ? userSubmissionsByReviewCategory
      : userSubmissionsByReviewCategory.filter((category) =>
          userSubmissionsByReviewCategory.includes(category.name)
        );

  console.log('filteredProblemCategories:', filteredProblemCategories);
  console.log('userProblemSubmissions:', userProblemSubmissions);
  const calculateProgress = (category) => {
    console.log('category:', category);
    const problems = userProblemSubmissions.filter(
      (problem) => problem.category === category.name
    );

    console.log('problems:', problems);

    const completed = problems.filter(
      (problem) =>
        !problem.next_review_timestamp ||
        new Date(problem.next_review_timestamp) >=
          new Date(problem.last_reviewed_timestamp)
    ).length;

    return {
      completed,
      total: category.count,
      progress: category.count ? (completed / category.count) * 100 : 0,
    };
  };

  return (
    <div>
      <FormControl variant='outlined' fullWidth margin='normal'>
        <InputLabel id='problem-type-filter-label'>Filter</InputLabel>
        <Select
          labelId='problem-type-filter-label'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label='Filter'
        >
          <MenuItem value='All'>All</MenuItem>
          <MenuItem value='Marked for Review'>Marked for Review</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              {editMode && (
                <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                  Reviewing?
                </TableCell>
              )}
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Category
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Progress
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProblemCategories.map((category) => {
              const { completed, total, progress } =
                calculateProgress(category);
              return (
                <TableRow
                  key={category.name}
                  sx={{
                    backgroundColor: problemCategoriesMarkedForReview.includes(
                      category.name
                    )
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'inherit',
                  }}
                >
                  {editMode && (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={problemCategoriesMarkedForReview.includes(
                          category.name
                        )}
                        onChange={() => onCheckboxChange(category.name)}
                      />
                    </TableCell>
                  )}
                  <TableCell onClick={() => onTypeClick(category.name)}>
                    {category.name}
                  </TableCell>
                  <TableCell>
                    <Box display='flex' alignItems='center'>
                      <Box minWidth={35}>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                        >{`${completed} / ${total}`}</Typography>
                      </Box>
                      <Box width='100%' ml={1}>
                        <LinearProgress
                          variant='determinate'
                          value={progress}
                          sx={{
                            '& .MuiLinearProgress-barColorPrimary': {
                              backgroundColor:
                                progress === 100 ? 'green' : 'orange',
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {editMode && (
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          sx={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default ProblemCategoriesTable;
