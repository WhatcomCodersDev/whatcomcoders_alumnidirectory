import { LinearProgress, Box, TableCell, Typography } from '@mui/material';

const ProgressBar = ({ userProblemSubmissions, category }) => {
  console.log('userProblemSubmissions:', userProblemSubmissions);
  const calculateProgress = (category) => {
    console.log('category:', category);
    const problems = userProblemSubmissions.filter(
      (problem) => problem.category === category.name
    );

    const completed = problems.filter(
      (problem) =>
        !problem.next_review_timestamp ||
        new Date(problem.next_review_timestamp) >=
          new Date(problem.last_reviewed_timestamp)
    ).length;

    return {
      completed,
      total: category.count,
      progress: category.count ? (completed / category.count) * 100 : 0,
    };
  };

  const { completed, total, progress } = calculateProgress(category);

  return (
    <TableCell>
      <Box display='flex' alignItems='center'>
        <Box minWidth={35}>
          <Typography
            variant='body2'
            color='textSecondary'
          >{`${completed} / ${total}`}</Typography>
        </Box>
        <Box width='100%' ml={1}>
          <LinearProgress
            variant='determinate'
            value={progress}
            sx={{
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: progress === 100 ? 'green' : 'orange',
              },
            }}
          />
        </Box>
      </Box>
    </TableCell>
  );
};

export default ProgressBar;
