import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export interface ISummary {
    icon: JSX.Element;
    title: string;
    amount: number;
    isUp: boolean;
    percent: number;
    hexColor: string;
}

const summary: ISummary[] = [
    {
        icon: <CurrencyExchangeIcon style={{ color: '#00A845', fontSize: "50px" }} />,
        title: "Earning",
        amount: 198,
        isUp: true,
        percent: 37.8,
        hexColor: '#DBFFEB'
    },
    {
        icon: <ArticleOutlinedIcon style={{ color: '#A203FF', fontSize: "50px" }} />,
        title: "Orders",
        amount: 22.4,
        isUp: false,
        percent: 22.6,
        hexColor: '#E7DBFF'
    },
    {
        icon: <AccountBalanceWalletOutlinedIcon style={{ color: '#0456BF', fontSize: "50px" }} />,
        title: "Balance",
        amount: 12.9,
        isUp: false,
        percent: 56.4,
        hexColor: '#CCF2FF'
    },
    {
        icon: <LocalMallOutlinedIcon style={{ color: '#DA0016', fontSize: "50px" }} />,
        title: "Total Sales",
        amount: 48.9,
        isUp: true,
        percent: 11.9,
        hexColor: '#FFAED7'
    },
]

export default summary;