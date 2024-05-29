import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';

const AllProblemTable = ({ data, filter }) => {
  const filteredData =
    filter === 'All' ? data : data.filter((problem) => problem.type === filter);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Problem Name</TableCell>
            <TableCell>Difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((problem) => (
            <TableRow key={problem.id}>
              <TableCell>{problem.id}</TableCell>
              <TableCell>
                {/* <Link
                  href={`https://leetcode.com/problems/${problem.slug}`}
                  target='_blank'
                  rel='noopener'
                > */}
                {problem.name}
                {/* </Link> */}
              </TableCell>
              <TableCell>{problem.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProblemTable;
