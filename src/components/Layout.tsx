import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import routes from '../data/routes';
import LoginIcon from '@mui/icons-material/Login';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Header from './Header';
import PersonCard from './PersonCard';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, styled, useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const Main = styled(Stack, { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const Layout = () => {

    const isMediumScreen = useMediaQuery('(min-width: 900px)');
    const [open, setOpen] = React.useState(isMediumScreen);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Stack
            direction="row"
            sx={{
                height: "100vh",
                width: "100%",
            }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: "#040440",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ padding: "10px 20px" }}>
                    <Stack direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <TokenOutlinedIcon
                            style=
                            {{
                                fontSize: "1.5rem",
                                color: "white"
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                color: "white"
                            }}
                        >
                            Demo
                        </Typography>
                    </Stack>
                    <IconButton onClick={handleDrawerClose}>
                        <LoginIcon sx={{ color: "white", transform: 'rotate(180deg)' }} />
                    </IconButton>
                </Stack>
                <Divider sx={{ background: "white" }} />
                <List>
                    {routes.map((route, index) => (
                        <NavLink
                            style={{
                                textDecoration: "none",
                            }}
                            key={index}
                            to={route.path}>
                            {({ isActive }) => {
                                if (isActive) return (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton sx={{
                                            color: "white",
                                            background: " #2d2d69",
                                            boxShadow: '0px 1px 6px #2d2d69',
                                            margin: "4px 8px",
                                            borderRadius: "6px",
                                            padding: "4px 8px",
                                        }}>
                                            <ListItemIcon sx={{
                                                color: "white",
                                            }}>
                                                {route.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={route.name} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                                else return (<ListItem key={index} disablePadding>
                                    <ListItemButton sx={{
                                        color: "white",
                                    }}>
                                        <ListItemIcon sx={{
                                            color: "white",
                                        }}>
                                            {route.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={route.name} />
                                    </ListItemButton>
                                </ListItem>);
                            }}
                        </NavLink>
                    ))}
                </List>
                <PersonCard name='Evano' role='Project Manager' pictureUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg' />
            </Drawer>
            {/*
                https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
                xs, extra-small: 0px
                sm, small: 600px
                md, medium: 900px
                lg, large: 1200px
                xl, extra-large: 1536px
            */}
            <Main
                open={open}
                direction="column"
                sx={{
                    background: "#f5f6f8",
                    width: "100%"
                }}
            >
                <Header handleDrawerOpen={handleDrawerOpen} open={open} />
                <Outlet />
            </Main>
        </Stack>
    );
};

export default Layout;