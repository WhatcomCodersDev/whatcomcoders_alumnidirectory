import React, { useContext, useState, useEffect } from 'react';
import { fetchAllUpcomingDueProblems } from 'services/leetcode_review/apiFetchAllUpcomingDueProblems';
import { AuthContext } from 'contexts/authContext';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';

const DueProblemsView = () => {
  const { uuid } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [dueProblems, setDueProblems] = useState([]);

  useEffect(() => {
    // Fetch user submissions
    if (uuid) fetchAllUpcomingDueProblems(uuid, setLoading, setDueProblems);
  }, [uuid]);

  return (
    <div>
      <h1>Problems due this week</h1>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '16px',
                  fontSize: '20px',
                }}
              >
                Id
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '16px',
                  fontSize: '20px',
                }}
              >
                Problem Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '16px',
                  fontSize: '20px',
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '16px',
                  fontSize: '20px',
                }}
              >
                Due?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dueProblems.map((problem) => {
              return (
                <TableRow key={problem.id}>
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
                  <TableCell sx={{ fontSize: '18px' }}>
                    {problem.due ? 'Yes' : 'No'}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

//      Data needed
// 1. Fetch user submissions
//

export default DueProblemsView;
