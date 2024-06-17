import React, { useContext, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Select,
  MenuItem,
  FormControl,
  TablePagination,
} from '@mui/material';
import { AuthContext } from 'contexts/authContext';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

const leetcodeAPIURL = process.env.REACT_APP_LEETCODE_API_URL;

const ProblemsTable = ({ data, filter, editMode }) => {
  const [editableRow, setEditableRow] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [problems, setProblems] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { uuid } = useContext(AuthContext);

  console.log(data);

  const filteredData = problems.filter(
    (problem) => problem.category === filter
  );

  console.log(filteredData);

  const handleUserRatingChange = (id, newUserRating) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id ? { ...problem, user_rating: newUserRating } : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
  };

  const handleDateChange = (id, newDate) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              last_reviewed_timestamp: newDate.toISOString(),
            }
          : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Not Reviewed';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  };

  const handleSubmit = async () => {
    console.log('filteredData', filteredData);
    try {
      const response = await fetch(
        `${leetcodeAPIURL}/users/${uuid}/review_problems/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filteredData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit changes');
      }

      alert('Changes submitted successfully');
    } catch (error) {
      console.error('Error submitting changes:', error);
      alert('Failed to submit changes');
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Id
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Problem Name
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                User Rating (1-5)
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Last Reviewed
              </TableCell>
              <TableCell sx={{ backgroundColor: '#333', color: 'white' }}>
                Next Review
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((problem) => {
                // Initialize default values if fields are missing
                const {
                  id,
                  name,
                  user_rating = problem.user_rating ? problem.user_rating : '',
                  last_reviewed_timestamp = problem.last_reviewed_timestamp
                    ? problem.last_reviewed_timestamp
                    : '',
                  next_review_timestamp = problem.next_review_timestamp
                    ? problem.next_review_timestamp
                    : '',
                } = problem;
                console.log('problem to submit:', problem);

                return (
                  <TableRow
                    key={id}
                    sx={{
                      '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                    }}
                  >
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      {editableRow === id ? (
                        <FormControl variant='outlined' fullWidth>
                          <Select
                            value={user_rating}
                            onChange={(e) =>
                              handleUserRatingChange(id, e.target.value)
                            }
                            autoWidth
                          >
                            <MenuItem value='1'>1 (Easy)</MenuItem>
                            <MenuItem value='2'>2</MenuItem>
                            <MenuItem value='3'>3</MenuItem>
                            <MenuItem value='4'>4</MenuItem>
                            <MenuItem value='5'>5 (Super Hard)</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        <div onClick={() => setEditableRow(id)}>
                          {user_rating || 'Not Rated'}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {editableRow === id &&
                      editingField === 'lastCompleted' ? (
                        <DateTimePicker
                          value={
                            last_reviewed_timestamp
                              ? new Date(last_reviewed_timestamp)
                              : null
                          }
                          onChange={(newDate) => handleDateChange(id, newDate)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      ) : (
                        <div
                          onClick={() => {
                            setEditableRow(id);
                            setEditingField('lastCompleted');
                          }}
                        >
                          {formatDate(last_reviewed_timestamp)}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{formatDate(next_review_timestamp)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {editMode && (
        <Button
          id='submit-button'
          variant='contained'
          color='secondary'
          onClick={handleSubmit}
          sx={{ marginTop: '16px' }}
        >
          Submit Changes
        </Button>
      )}

      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </LocalizationProvider>
  );
};

export default ProblemsTable;
