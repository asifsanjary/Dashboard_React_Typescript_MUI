import React from 'react';
import '../styles/components/Header.css';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='Header-content'>
            <div>
                <h2>Hello Shahrukh
                    <WavingHandOutlinedIcon style={{ color: '#DAB08D' }} />
                    <span>&#44;</span>
                </h2>
            </div>
            <div><SearchBar width='150px' marginTop='0px' /></div>
        </div>
    )
}

export default Header