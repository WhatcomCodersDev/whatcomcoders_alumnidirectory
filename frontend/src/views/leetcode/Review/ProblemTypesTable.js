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
import ProblemsTable from './ProblemTable';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const ProblemTypesTable = ({
  problemTypes,
  selectedTypes,
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
      let problemTypeSet = [];
      for (const type of selectedTypes) {
        problemTypeSet.push(type);
      }

      const payload = { type: problemTypeSet };
      await fetch(`${leetcodeAPIURL}/users/${uuid}/mark_type_for_review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      alert('Submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Failed to submit');
    }
  };

  const filteredProblemTypes =
    filter === 'All'
      ? problemTypes
      : problemTypes.filter((type) => selectedTypes.includes(type.name));

  const calculateProgress = (type) => {
    const problems = problemData.filter(
      (problem) => problem.problem_type === type.name
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
                Type
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Progress
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProblemTypes.map((type) => {
              const { completed, total, progress } = calculateProgress(type);
              return (
                <TableRow
                  key={type.name}
                  sx={{
                    backgroundColor: selectedTypes.includes(type.name)
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'inherit',
                  }}
                >
                  {editMode && (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selectedTypes.includes(type.name)}
                        onChange={() => onCheckboxChange(type.name)}
                      />
                    </TableCell>
                  )}
                  <TableCell onClick={() => onTypeClick(type.name)}>
                    {type.name}
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

export default ProblemTypesTable;
