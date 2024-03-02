import CoffeeIcon from '@mui/icons-material/Coffee';
import BusinessIcon from '@mui/icons-material/Business';
import BookIcon from '@mui/icons-material/Book';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

const PersonalInfo = ({ data, isFullscreen }) => {
  return (
    <Box
      sx={{
        border: '1px solid red', // For debugging
      }}
    >
      <div className='interest-icons'>
        {data.coffeeChat && <CoffeeIcon className='icon' fontSize='small' />}
        {data.referral && <BusinessIcon className='icon' fontSize='small' />}
        {data.mentoring && <BookIcon className='icon' fontSize='small' />}
        {data.linkedinUrl && <LinkedInIcon className='icon' fontSize='small' />}
      </div>
    </Box>
  );
};

export default PersonalInfo;
