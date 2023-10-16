import React from 'react'
import '../styles/pages/Dashboard.css';
import SummaryBox from '../components/SummaryBox';
import summary from '../data/summary';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import ProductSell from '../components/productsell/ProductSell';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='dashboard-summary-container'>
                {summary.map((item, index) => (
                    <SummaryBox
                        icon={item.icon}
                        title={item.title}
                        amount={item.amount}
                        isUp={item.isUp}
                        percent={item.percent}
                        hexColor={item.hexColor} />
                ))}
            </div>
            <div className='dashboard-chart-container'>
                <BarChart />
                <PieChart />
            </div>
            <ProductSell />
        </div>
    )
}

export default Dashboard