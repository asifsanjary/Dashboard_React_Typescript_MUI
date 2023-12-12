import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import SearchBar from './SearchBar';
import { IconButton, Stack, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { getPathName } from '../data/routes';

interface HeaderProps {
    handleDrawerOpen: () => void; // Assuming handleDrawerOpen is a function without any arguments
    open: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleDrawerOpen, open }) => {
    const location = useLocation();
    return (
        <Stack
            justifyContent="space-between"
            alignItems="center"
            direction={{ xm: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
            sx={{
                margin: "20px 0px",
            }}
        >
            <Stack
                direction="row"
                gap="4px"
                alignItems="center"
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <Menu />
                </IconButton>
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
            <Typography
                sx={{
                    fontSize: "1.5rem",
                }}
            >
                {getPathName(location.pathname)}
            </Typography>
            <SearchBar width='200px' marginTop='0px' />
        </Stack>
    );
};

export default Header;