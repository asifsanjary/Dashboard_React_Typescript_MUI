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
                <p style={{ flexGrow: "7", margin: "0px", padding: "0px", fontSize: "30px", fontWeight: "bold" }}>Product Sell</p>
                <SearchBar width='150px' marginTop='0px' />
                <select style={{ margin: "0px 15px 0px 15px", padding: "3px", background: "#f2f1f1", borderRadius: "5px", border: "none", height: "40px" }} name="day-intervals" onChange={handleChange} value={day}>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_week">Last Week</option>
                    <option value="last_day">Last Day</option>
                </select>
            </div>
            <div className='productsell-header-container-common productsell-header-container-bottom'>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '7' }}>Product Name</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '1' }}>Stock</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '0.5' }}>Price</p>
                <p style={{ margin: "0px 0px 0px 5px", flexGrow: '0.5' }}>Total Sales</p>
            </div>
        </div>
    )
}

export default Header