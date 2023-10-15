import React from 'react'
import { Outlet, NavLink, useLocation } from "react-router-dom";
import '../styles/components/Layout.css';
import routes, { getPathName } from '../routes';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Header from './Header';

const Layout = () => {
    const location = useLocation();
    return (
        <div className='Layout-container'>
            <div className='Layout-nav'>
                <h2 className='Layout-nav-active-item'><span><TokenOutlinedIcon />&nbsp;&nbsp;{getPathName(location.pathname)}</span></h2>
                {
                    routes.map((route, index) => (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link-active nav-link-common" : "nav-link-common"
                            }
                            key={index}
                            to={route.path}>
                            <div className='nav-link-item nav-link-item-common'>
                                <span className='nav-link-item-icon-text'>{route.icon}&nbsp;&nbsp;&nbsp;{route.name}</span>
                                <span className='nav-link-item-arrow'><ArrowForwardIosOutlinedIcon /></span>
                            </div>
                        </NavLink>
                    ))
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