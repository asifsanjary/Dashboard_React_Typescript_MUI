import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

interface SearchBarProps {
    width: string;
    marginTop: string;
}

const SearchBar = ({ width, marginTop }: SearchBarProps) => {

    const CustomField = styled(TextField)(({ theme }) => ({
        width: `${width}`,
        marginTop: `${marginTop}`,
        backgroundColor: "white",
        fontSize: "2rem",
        boxShadow: '0px 3px 6px #d3d2d2',
        borderRadius: "6px",
        color: '#e7e7e7',
        '& label.Mui-focused': {
            color: '#d3d2d2',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#d3d2d2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#d3d2d2',
            },
        },
    }));

    return (
        <CustomField
            placeholder="Search"
            size="small"
            InputProps={{
                startAdornment: (
                    <SearchIcon style={{ color: 'gray', fontSize: "1.5rem" }} />
                ),
            }}
        />
    );
};

export default SearchBar;