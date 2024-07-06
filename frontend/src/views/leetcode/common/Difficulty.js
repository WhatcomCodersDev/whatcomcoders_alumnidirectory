import React from 'react';
import { TableCell } from '@mui/material';

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

const Difficulty = ({ problem_difficulty }) => {
  return (
    <TableCell
      sx={{
        color: getDifficultyColor(problem_difficulty),
        textTransform: 'uppercase',
        fontSize: '18px',
      }}
    >
      {problem_difficulty}
    </TableCell>
  );
};

export default Difficulty;
