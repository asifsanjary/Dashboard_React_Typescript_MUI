import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import SearchBar from './SearchBar';
import { Stack, Typography } from '@mui/material';

const Header = () => {
    return (
        <Stack
            justifyContent="space-between"
            alignItems="center"
            direction={{ xm: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
            sx={{
                margin: "20px 50px",
            }}
        >
            <Stack
                direction="row"
                gap="4px"
                alignItems="center"
            >
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}>
                    Hello Shahrukh
                </Typography>
                <WavingHandOutlinedIcon style={{ color: '#DAB08D', transform: 'rotate(280deg)' }} />
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}>&#44;</Typography>
            </Stack>
            <SearchBar width='200px' marginTop='0px' />
        </Stack>
    );
};

export default Header;