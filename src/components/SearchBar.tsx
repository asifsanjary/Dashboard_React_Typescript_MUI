import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
    width: '200px', // Set the desired width
});

const SearchBar = () => {
    return (
        <CustomTextField
            placeholder="Search"
            variant="outlined"
            size="small"
            InputProps={{
                startAdornment: (
                    <SearchIcon style={{ color: 'gray' }} />
                ),
            }}
        />
    );
};

export default SearchBar;