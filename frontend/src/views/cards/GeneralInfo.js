import { Typography, Button, Box } from '@mui/material';

const GeneralInfo = ({ data, isFullscreen }) => {
  return (
    <Box
      sx={{
        marginTop: isFullscreen ? 0 : 28,
        textAlign: 'center',
        fontWeight: 'bold',
        // border: '1px solid red', // For debugging
        width: '300px',
        height: '150px',
        // marginBottom: 1,
        // height: '200px',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {data.name || 'Name'}
      </Typography>

      <Typography
        variant='body2'
        sx={{
          fontSize: '18px',
          fontWeight: 400,
          color: 'grey',
        }}
      >
        {data.company || ''} <br />
        {data.jobTitle || ''}
      </Typography>

      {isFullscreen && data.calendlyUrl && (
        <Button
          sx={{
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: '#00a2ff',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0071B3',
            },
            zIndex: 1000,
            position: 'relative',
          }}
          href={data.calendlyUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          Meet Me!
        </Button>
      )}
    </Box>
  );
};

export default GeneralInfo;
