import React, { useState } from 'react';
import {
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

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

const ProblemsTable = ({ data, filter }) => {
  const [editableRow, setEditableRow] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [problems, setProblems] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log(data);

  const filteredData = problems.filter(
    (problem) => problem.category === filter
  );

  console.log(filteredData);

  const handleUserRatingChange = (id, newUserRating) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id ? { ...problem, userRating: newUserRating } : problem
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
              last_attempt_timestamp: newDate.toISOString().split('T')[0],
            }
          : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
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
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Id
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Problem Name
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                User Rating (1-5)
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Last Reviewed
              </TableCell>
              <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
                Next Review
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
                  <TableCell>{problem.id}</TableCell>
                  <TableCell>{problem.name}</TableCell>
                  <TableCell>
                    {editableRow === problem.id ? (
                      <FormControl variant='outlined' fullWidth>
                        <Select
                          value={problem.user_rating}
                          onChange={(e) =>
                            handleUserRatingChange(problem.id, e.target.value)
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
                      <div onClick={() => setEditableRow(problem.id)}>
                        {problem.user_rating}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {editableRow === problem.id &&
                    editingField === 'lastCompleted' ? (
                      <DatePicker
                        value={new Date(problem.attempted_timestamp)}
                        onChange={(newDate) =>
                          handleDateChange(problem.id, newDate)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    ) : (
                      <div
                        onClick={() => {
                          setEditableRow(problem.id);
                          setEditingField('lastCompleted');
                        }}
                      >
                        {problem.attempted_timestamp}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{problem.next_review_date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
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
