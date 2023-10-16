import React from 'react'
import { Outlet, NavLink, useLocation } from "react-router-dom";
import '../styles/components/Layout.css';
import routes, { getPathName } from '../data/routes';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Header from './Header';
import PersonCard from './PersonCard';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

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
        <div className='Layout-container'>
            <div className='Layout-nav'>
                <div className='Layout-nav-active-item'><TokenOutlinedIcon style={{ fontSize: "40px" }} /><h2>{getPathName(location.pathname)}</h2></div>
                {isScreenSmall ?
                    (
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                style={{ backgroundColor: '#2d2d69', color: 'white', flexGrow: "2" }}
                            >
                                {routes.map((route, index) => (
                                    <MenuItem style={{ backgroundColor: '#040440', color: 'white', display: "flex", alignItems: "center" }} value={route.path} key={index}>
                                        <ListItemIcon style={{ color: 'white' }}>
                                            {route.icon}
                                        </ListItemIcon>
                                        <NavLink to={route.path} style={{ color: 'white' }}>{route.name}</NavLink>
                                    </MenuItem>
                                ))}
                            </Select>
                            <PersonCard name='Evano' role='Project Manager' pictureUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg' isSmallScreen={isScreenSmall} />
                        </div>
                    ) : (
                        <>
                            {routes.map((route, index) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link-active nav-link-common" : "nav-link-common"
                                    }
                                    key={index}
                                    to={route.path}>
                                    {({ isActive }) => {
                                        if (isActive) return (
                                            <div className='nav-link-item nav-link-item-common'>
                                                <span className='nav-link-item-icon-text'>{route.icon}&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "12px", fontWeight: "bold" }}>{route.name}</span></span>
                                            </div>
                                        )
                                        else {
                                            return (
                                                <div className='nav-link-item nav-link-item-common'>
                                                    <span className='nav-link-item-icon-text'>{route.icon}&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "12px" }}>{route.name}</span></span>
                                                    <span className='nav-link-item-arrow'><ArrowForwardIosOutlinedIcon style={{ fontSize: "10px" }} /></span>
                                                </div>
                                            )
                                        }
                                    }}
                                </NavLink>
                            ))}
                            <PersonCard name='Evano' role='Project Manager' pictureUrl='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg' isSmallScreen={isScreenSmall} />
                        </>
                    )
                }
            </div>
            <div className='Main-content'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout