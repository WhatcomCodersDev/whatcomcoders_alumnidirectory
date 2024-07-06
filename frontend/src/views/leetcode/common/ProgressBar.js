import { LinearProgress, Box, TableCell, Typography } from '@mui/material';

const ProgressBar = ({ userProblemSubmissions, category }) => {
  const calculateProgress = (category) => {
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
      streaks: category.count ? (completed / category.count) * 100 : 0,
    };
  };

  const { completed, total, streaks } = calculateProgress(category);

  return (
    <TableCell>
      <Box display='flex' alignItems='center'>
        <Box minWidth={35}>
          <Typography
            sx={{ fontSize: '18px', paddingRight: 7 }}
            variant='body2'
            color='textSecondary'
          >{`(${completed} / ${total})`}</Typography>
        </Box>
        <Box width='80%' ml={1}>
          <LinearProgress
            variant='determinate'
            value={streaks}
            sx={{
              height: 25,
              borderRadius: 5,
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: streaks === 100 ? 'green' : 'orange',
              },
            }}
          />
        </Box>
      </Box>
    </TableCell>
  );
};

export default ProgressBar;
