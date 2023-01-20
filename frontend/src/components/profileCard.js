import { CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import stockPhoto from '../static/stock_photo.jpeg';
import { PopupButton } from "react-calendly";


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
    
                    <Typography variant="body">
                        [Bio] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id volutpat libero. 
                        Sed aliquam vitae nunc vel imperdiet. Suspendisse sit amet sapien porttitor, accumsan elit molestie, faucibus nisi. 
                        Sed efficitur eros eu finibus dictum. Pellentesque quis lectus eu odio iaculis luctus in in lorem. Nunc quis scelerisque felis, eu aliquam ligula. 
                        Suspendisse vel sem feugiat, placerat orci ac, luctus leo. Nam lobortis enim ex.
                    </Typography>

                </CardContent>
            </Card>
            <PopupButton url="https://calendly.com/soto26938"
                        /*
                        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                        * see more: https://github.com/tcampb/react-calendly
                        */
                        rootElement={document.getElementById("root")}
                        text="Meet Me!"  
            />
        </Box>
        
    );
};

export default ProfileCard