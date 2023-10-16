import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PersonCardProps {
    name: string;
    pictureUrl: string;
    role: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, pictureUrl, role }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper elevation={3} style={{ padding: 5, display: 'flex', alignItems: 'center', backgroundColor: "#2D2D69", margin: "8px", marginTop: "auto" }}>
            <Avatar alt={name} src={pictureUrl} />
            <div style={{ marginLeft: 16 }}>
                <Typography variant="body2" component="div" style={{ fontWeight: 'bold', marginBottom: '0px', paddingBottom: '0px' }}>
                    {name}
                </Typography>
                <Typography variant="caption" color="#d5d5d5" style={{ fontSize: '0.6rem', marginTop: '0px', paddingBottom: '0px' }}>{role}</Typography>
            </div>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ marginLeft: 'auto' }}
            >
                <ExpandMoreIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Menu>
        </Paper>
    );
};

export default PersonCard;
