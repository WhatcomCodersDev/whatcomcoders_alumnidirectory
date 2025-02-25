import React, { useContext, useState } from 'react';
import {
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
  submittedProblems,
}) => {
  const { uuid } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log('submitted', submittedProblems);
  console.log('problem', data);
  console.log('filter', filter);

  // Keep only problems that have a problem.category for now
  // This is a temporary fix for the data inconsistency issue
  let problemsWithCategoryOnly = data.filter((problem) => problem.category);

  let filteredData =
    filter === 'All'
      ? problemsWithCategoryOnly
      : problemsWithCategoryOnly.filter(
          (problem) => problem.category === filter
        );

  // const filteredProblemCategories =
  //   filter === 'All'
  //     ? userSubmissionsByReviewCategory
  //     : userSubmissionsByReviewCategory.filter((category) =>
  //         problemCategoriesMarkedForReview.includes(category.name)
  //       );

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
              <TableCell
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '20px',
                }}
              ></TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Id
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Problem Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
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
                  <CustomCheckbox
                    checked={submittedProblems.includes(problem.id)}
                    onChange={() => onCheckboxChange(problem.id)}
                  />
                  <TableCell sx={{ fontSize: '18px' }}>{problem.id}</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    <a
                      href={`${problem.link}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {problem.name}
                    </a>
                  </TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {problem.category}
                  </TableCell>
                  <Difficulty problem_difficulty={problem.problem_difficulty} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SubmitButton handleSubmit={handleSubmit} />
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
