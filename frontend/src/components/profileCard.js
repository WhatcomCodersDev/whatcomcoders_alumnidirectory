import { CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import stockPhoto from '../static/stock_photo.jpeg';


const ProfileCard = () => {
    return(
        <Box component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            <Card sx={{minWidth: 275, maxWidth: 200, maxHeight: 500}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        [First Name] [Last Name]
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        [Affliation]
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{height: 200}}
                    image={stockPhoto}
                    title="test"
                />

                <CardContent>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Meet me [Link to Calendly]
                    </Typography>
                    <Typography variant="body">
                        [Bio] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id volutpat libero. 
                        Sed aliquam vitae nunc vel imperdiet. Suspendisse sit amet sapien porttitor, accumsan elit molestie, faucibus nisi. 
                        Sed efficitur eros eu finibus dictum. Pellentesque quis lectus eu odio iaculis luctus in in lorem. Nunc quis scelerisque felis, eu aliquam ligula. 
                        Suspendisse vel sem feugiat, placerat orci ac, luctus leo. Nam lobortis enim ex.
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
};

export default ProfileCard