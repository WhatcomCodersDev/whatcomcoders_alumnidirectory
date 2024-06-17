import React, { useContext, useState } from 'react';
import {
  Button,
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
import Difficulty from '../common/Difficulty';
import { addAllProblemsToSubmission } from 'services/leetcode_review/apiAddAllProblemsToSubmission';
import CustomCheckbox from '../common/CustomCheckbox';
import SubmitButton from '../common/SubmitButton';

const AllProblemTable = ({
  data,
  filter,
  onCheckboxChange,
  selectedCategories,
  editMode,
  submittedProblems,
}) => {
  const { uuid } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log('submitted', submittedProblems);
  console.log('problem', data);

  const filteredData =
    filter === 'All'
      ? data
      : data.filter((problem) => problem.category === filter);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSubmit = async () => {
    const selectedProblems = data.filter((problem) =>
      submittedProblems.includes(problem.id)
    );
    addAllProblemsToSubmission(uuid, selectedProblems);
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
                    <CustomCheckbox
                      checked={submittedProblems.includes(problem.id)}
                      onChange={() => onCheckboxChange(problem.id)}
                    />
                  )}
                  <TableCell>{problem.id}</TableCell>
                  <TableCell>{problem.name}</TableCell>
                  <Difficulty problem_difficulty={problem.problem_difficulty} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editMode && <SubmitButton handleSubmit={handleSubmit} />}
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
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
