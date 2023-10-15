import React from 'react';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';

const routes = [
  {
    path: '/',
    name: "Dashboard",
    icon: <BlurCircularRoundedIcon />,
  },
  {
    path: '/product',
    name: "Product",
    icon: <ViewInArRoundedIcon />,
  },
  {
    path: '/customers',
    name: "Customers",
    icon: < PhotoCameraFrontOutlinedIcon />,
  },
  {
    path: '/income',
    name: "Income",
    icon: < AccountBalanceWalletOutlinedIcon />,
  },
  {
    path: '/promote',
    name: "Promote",
    icon: < Brightness5OutlinedIcon />,
  },
  {
    path: '/help',
    name: "Help",
    icon: < LiveHelpRoundedIcon />,
  },
];

export const getPathName = (path: string) => {
  return routes.find(route => route.path === path)?.name || "Current Page Not Found";
}

export default routes;