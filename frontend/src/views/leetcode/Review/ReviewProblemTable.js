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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import SubmitButton from '../common/SubmitButton';
import { submitUserReviewProblems } from 'services/leetcode_review/apiSubmitAllReviewProblems';
import { formatDate } from 'services/leetcode_review/utils';
import EditUserRatingSelection from './EditUserRatingSelection';
import EditableDatePicker from './EditableDatePicker';
import { format } from 'date-fns';

const ReviewProblemsTable = ({ data, filter, editMode }) => {
  const [editableRow, setEditableRow] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [problems, setProblems] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { uuid } = useContext(AuthContext);

  console.log(data);

  const TIME_WINDOW = 24 * 60 * 60 * 1000; // 1 day

  const filteredData = problems.filter(
    (problem) => problem.category === filter
  );

  console.log('filteredData:', filteredData);

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
              last_reviewed_timestamp: newDate, // Store as Date object
            }
          : problem
      )
    );
    setEditableRow(null);
    setEditingField(null);
  };

  const handleSubmit = async () => {
    const dataToSubmit = filteredData.map((problem) => ({
      ...problem,
      last_reviewed_timestamp: problem.last_reviewed_timestamp
        ? format(
            new Date(problem.last_reviewed_timestamp),
            'MMM dd, yyyy, h:mm:ss.SSS a'
          )
        : null,
      next_review_timestamp: problem.next_review_timestamp
        ? format(
            new Date(problem.next_review_timestamp),
            'MMM dd, yyyy, h:mm:ss.SSS a'
          )
        : null,
    }));
    await submitUserReviewProblems(uuid, dataToSubmit);
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
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Id
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Problem Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                User Rating (1-5)
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Last Reviewed
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Next Review
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                Time Window Due Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((problem) => {
                // Convert next_review_timestamp to a Date object
                // Turn it into a millisecond value
                // Add TIME_WINDOW (one day) to it
                const problemTimeWindowMilliSecond =
                  new Date(problem.next_review_timestamp).getTime() +
                  TIME_WINDOW;

                // Convert the millisecond value back to a Date object and then to a string
                const problemTimeWindow = new Date(
                  problemTimeWindowMilliSecond
                ).toISOString();

                console.log('problemTimeWindow:', problemTimeWindow);

                console.log('current date', Date.now());
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
                  link = problem.link,
                } = problem;
                console.log('problem to submit:', problem);

                return (
                  <TableRow
                    key={id}
                    sx={{
                      fontSize: '18px',
                      '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                    }}
                  >
                    <TableCell sx={{ fontSize: '18px' }}>{id}</TableCell>
                    <TableCell sx={{ fontSize: '18px' }}>
                      <a
                        href={`${link}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {name}
                      </a>
                    </TableCell>
                    <TableCell sx={{ fontSize: '18px' }}>
                      {editableRow === id ? (
                        <EditUserRatingSelection
                          user_rating={user_rating}
                          onChange={(e) =>
                            handleUserRatingChange(id, e.target.value)
                          }
                        />
                      ) : (
                        <div onClick={() => setEditableRow(id)}>
                          {user_rating || 'Not Rated'}
                        </div>
                      )}
                    </TableCell>
                    <TableCell sx={{ fontSize: '18px' }}>
                      {editableRow === id &&
                      editingField === 'lastCompleted' ? (
                        <EditableDatePicker
                          value={
                            last_reviewed_timestamp
                              ? new Date(last_reviewed_timestamp)
                              : null
                          }
                          onChange={(newDate) => handleDateChange(id, newDate)}
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
                    <TableCell sx={{ fontSize: '18px' }}>
                      {formatDate(next_review_timestamp)}
                    </TableCell>
                    <TableCell sx={{ fontSize: '18px' }}>
                      {/* Check if current date is greater than next_review_timestamp */}
                      {Date.now() > new Date(next_review_timestamp).getTime()
                        ? formatDate(problemTimeWindow)
                        : 'Not in the review window yet'}
                    </TableCell>
                  </TableRow>
                );
              })}
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
    </LocalizationProvider>
  );
};

export default ReviewProblemsTable;
