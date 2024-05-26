// src/ProblemsTable.js
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
} from '@mui/material';

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

const ProblemsTable = ({ data, filter }) => {
  const [editableRow, setEditableRow] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [problems, setProblems] = useState(data);

  const filteredData =
    filter === 'All'
      ? problems
      : problems.filter((problem) => problem.type === filter);

  const handleDifficultyChange = (id, newDifficulty) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id ? { ...problem, difficulty: newDifficulty } : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
  };

  const handleDateChange = (id, newDate) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id
          ? { ...problem, lastCompleted: newDate.toISOString().split('T')[0] }
          : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Problem Name</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Last Completed</TableCell>
              <TableCell>Next Review</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell>{problem.id}</TableCell>
                <TableCell>{problem.name}</TableCell>
                <TableCell>
                  {editableRow === problem.id ? (
                    <FormControl variant='outlined' fullWidth>
                      <Select
                        value={problem.difficulty}
                        onChange={(e) =>
                          handleDifficultyChange(problem.id, e.target.value)
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
                      {problem.difficulty}
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {editableRow === problem.id &&
                  editingField === 'lastCompleted' ? (
                    <DatePicker
                      value={new Date(problem.lastCompleted)}
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
                      {problem.lastCompleted}
                    </div>
                  )}
                </TableCell>
                <TableCell>{problem.nextReview}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LocalizationProvider>
  );
};

export default ProblemsTable;
