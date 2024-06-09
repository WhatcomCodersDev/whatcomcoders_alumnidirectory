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
  problemCategories,
  selectedCategories,
  onTypeClick,
  onCheckboxChange,
  editMode,
}) => {
  const { uuid } = useContext(AuthContext);
  const [filter, setFilter] = useState('All');
  const [problemData, setProblemData] = useState([]); // To hold problem data

  useEffect(() => {
    // Fetch problem data once when the component mounts
    const fetchProblemData = async () => {
      try {
        const response = await fetch(`${leetcodeAPIURL}/problems/all`);
        const data = await response.json();
        setProblemData(data);
      } catch (error) {
        console.error('Error fetching problem data', error);
      }
    };

    fetchProblemData();
  }, []);

  const handleSubmit = async () => {
    try {
      let problemCategorySet = [];
      for (const category of selectedCategories) {
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
      ? problemCategories
      : problemCategories.filter((category) =>
          problemCategories.includes(category.name)
        );

  const calculateProgress = (category) => {
    const problems = problemData.filter(
      (problem) => problem.category === category.name
    );

    const completed = problems.filter(
      (problem) =>
        !problem.next_review_timestamp ||
        new Date(problem.next_review_timestamp) <=
          new Date(problem.last_attempt_timestamp)
    ).length;

    return {
      completed,
      total: problems.length,
      progress: problems.length ? (completed / problems.length) * 100 : 0,
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
                <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                  Reviewing?
                </TableCell>
              )}
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Category
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
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
                    backgroundColor: selectedCategories.includes(category.name)
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'inherit',
                  }}
                >
                  {editMode && (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selectedCategories.includes(category.name)}
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
