import React from 'react'
import '../styles/pages/Dashboard.css';
import SummaryBox from '../components/SummaryBox';
import summary from '../data/summary';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
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
    )
}

export default Dashboard