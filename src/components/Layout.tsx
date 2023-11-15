import React from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import routes, { getPathName } from '../data/routes';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Header from './Header';
import PersonCard from './PersonCard';
import { Grid, Stack, Typography } from '@mui/material';

type SelectChangeEvent = {
    target: {
        value: string;
    };
};

const Layout = () => {

    const [isScreenSmall, setScreenSmall] = React.useState(false);

    React.useEffect(() => {
        function handleResize() {
            setScreenSmall(window.innerWidth <= 750);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const location = useLocation();

    const [selectedOption, setSelectedOption] = React.useState('/');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <Grid
            container
            direction="row"
            md={12}
            lg={12}
            sx={{
                height: "100vh"
            }}>
            <Grid
                item
                container
                direction="column"
                lg={2}
                md={3}
                sx={{
                    background: "#040440",
                    position: "fixed",
                    overflowY: "auto",
                    top: "0px",
                    bottom: "0px",
                    height: "100vh"
                }}
            >
                <Grid
                    item
                    container
                    direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                >
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
                        {getPathName(location.pathname)}
                    </Typography>
                </Grid>

                {routes.map((route, index) => (
                    <NavLink
                        style={{
                            textDecoration: "none",
                        }}
                        key={index}
                        to={route.path}>
                        {({ isActive }) => {
                            if (isActive) return (
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    gap="4px"
                                    sx={{
                                        background: " #2d2d69",
                                        color: "white",
                                        margin: "8px 16px",
                                        borderRadius: "6px",
                                        padding: "6px",
                                        boxShadow: '0px 1px 6px #2d2d69',
                                    }}
                                >
                                    {route.icon}
                                    <Typography
                                        sx=
                                        {{
                                            fontSize: "12px"
                                        }}
                                    >
                                        {route.name}
                                    </Typography>
                                </Stack>
                            );
                            else {
                                return (
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{
                                            color: "white",
                                            margin: "8px 16px",
                                            borderRadius: "4px",
                                            padding: "6px",
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            gap="4px"
                                        >
                                            {route.icon}
                                            <Typography
                                                sx=
                                                {{
                                                    fontSize: "12px"
                                                }}
                                            >
                                                {route.name}
                                            </Typography>
                                        </Stack>
                                        <ArrowForwardIosOutlinedIcon
                                            style=
                                            {{
                                                fontSize: "10px",

                                            }}
                                        />
                                    </Stack>
                                );
                            }
                        }}
                    </NavLink>
                ))}
                <PersonCard name='Evano' role='Project Manager' pictureUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg' isSmallScreen={isScreenSmall} />
            </Grid>
            {/*
                https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
                xs, extra-small: 0px
                sm, small: 600px
                md, medium: 900px
                lg, large: 1200px
                xl, extra-large: 1536px
            */}
            <Grid
                item
                container
                direction="column"
                sx={{
                    marginLeft: {md: "150px", lg: "200px",  xl: "290px" },
                    background: "#f5f6f8",
                }}
            >
                <Header />
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default Layout;