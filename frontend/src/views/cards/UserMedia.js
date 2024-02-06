import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import GithubIcon from '@mui/icons-material/GitHub';

import { Link } from '@mui/material';
import { Box } from '@mui/material';

const UserMedia = ({ data, isFullscreen }) => {
  return (
    <Box
      sx={{
        // border: '1px solid red', // For debugging
        height: isFullscreen ? '100px' : '70px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='interest-icons'>
        {data.linkedinUrl && (
          <Link
            href={data.linkedinUrl}
            target='_blank'
            rel='noopener noreferrer'
            sx={{ marginRight: '5px' }} // Added marginRight here
          >
            <LinkedInIcon sx={{ color: '#0e76a8' }} fontSize='large' />
            {/* LinkedIn blue */}
          </Link>
        )}
        {data.githubUrl && (
          <Link
            href={data.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            sx={{ marginRight: '5px' }} // Added marginRight here
          >
            <GithubIcon sx={{ color: 'black' }} fontSize='large' />
            {/* GitHub black */}
          </Link>
        )}

        {data.personalWebsiteUrl && (
          <Link
            href={data.personalWebsiteUrl}
            target='_blank'
            rel='noopener noreferrer'
            sx={{ marginRight: '5px' }} // Added marginRight here
          >
            <PublicIcon className='icon' fontSize='large' />
          </Link>
        )}
      </div>
    </Box>
  );
};

export default UserMedia;
