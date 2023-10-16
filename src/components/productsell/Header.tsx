import React from 'react';
import '../../styles/components/productsell/Header.css';
import SearchBar from '../SearchBar';

const Header = () => {

    const [day, setDay] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDay(event.target.value as string);
    };

    return (
        <div className='productsell-header-container'>
            <div className='productsell-header-container-common'>
                <p className='productsell-header-container-productname' style={{ fontSize: "30px", fontWeight: "bold" }}>Product Sell</p>
                <SearchBar width='150px' marginTop='0px' />
                <select className='productsell-header-container-dropdown' name="day-intervals" onChange={handleChange} value={day}>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_week">Last Week</option>
                    <option value="last_day">Last Day</option>
                </select>
            </div>
            <div className='productsell-header-container-common productsell-header-container-bottom'>
                <p className='productsell-header-container-productname'>Product Name</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '1' }}>Stock</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '0.5' }}>Price</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '0.5' }}>Total Sales</p>
            </div>
        </div>
    )
}

export default Header