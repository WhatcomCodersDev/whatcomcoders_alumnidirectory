import React, { useContext, useState } from 'react';
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import { AuthContext } from 'contexts/authContext';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const AllProblemTable = ({
  data,
  filter,
  onCheckboxChange,
  selectedTypes,
  editMode,
}) => {
  const { uuid } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData =
    filter === 'All' ? data : data.filter((problem) => problem.type === filter);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSubmit = async () => {
    const selectedProblems = filteredData.filter((problem) =>
      selectedTypes.includes(problem.name)
    );

    try {
      for (const problem of selectedProblems) {
        const payload = {
          difficulty: 2,
          id: problem.id,
          isInBlind50: problem.isInBlind50,
          isInBlind75: problem.isInBlind75,
          isInGrind75: problem.isInGrind75,
          isInNeetcode: problem.isInNeetcode,
          isInSeanPrasadList: problem.isInSeanPrasadList,
          link: problem.link,
          name: problem.name,
          tag: problem.tag,
          type: problem.type,
          user_id: uuid,
          attempted: true,
        };

        await fetch(`${leetcodeAPIURL}/space_repetition/${problem.id}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }
      alert('Submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Failed to submit');
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              {editMode && (
                <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                  Attempted?
                </TableCell>
              )}
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Id
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Problem Name
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Difficulty
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((problem) => (
                <TableRow
                  key={problem.id}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                >
                  {editMode && (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selectedTypes.includes(problem.name)}
                        onChange={() => onCheckboxChange(problem.name)}
                      />
                    </TableCell>
                  )}
                  <TableCell>{problem.id}</TableCell>
                  <TableCell>{problem.name}</TableCell>
                  <TableCell
                    sx={{
                      color: getDifficultyColor(problem.difficulty),
                      textTransform: 'uppercase',
                    }}
                  >
                    {problem.difficulty}
                  </TableCell>
                </TableRow>
              ))}
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50]}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default AllProblemTable;
