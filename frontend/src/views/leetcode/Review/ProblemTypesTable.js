// src/ProblemTypesTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';

const ProblemTypesTable = ({
  problemTypes,
  selectedTypes,
  onTypeClick,
  onCheckboxChange,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reviewing?</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problemTypes.map((type) => (
            <TableRow key={type.name}>
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={selectedTypes.includes(type.name)}
                  onChange={() => onCheckboxChange(type.name)}
                />
              </TableCell>
              <TableCell onClick={() => onTypeClick(type.name)}>
                {type.name}
              </TableCell>
              <TableCell>{type.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProblemTypesTable;
