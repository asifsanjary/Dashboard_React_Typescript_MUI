import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

interface SearchBarProps {
    width: string;
    marginTop: string;
}

const SearchBar = ({ width, marginTop }: SearchBarProps) => {

    const CustomTextField = styled(TextField)({
        width: `${width}`,
        marginTop: `${marginTop}`,
        backgroundColor: "#FAFBFF",
    });

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