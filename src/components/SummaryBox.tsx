import React from 'react';
import '../styles/components/SummaryBox.css';
import { ISummary } from '../data/summary';

const SummaryBox = ({ icon, title, amount, isUp, percent, hexColor }: ISummary) => {

    return (
        <div className='summary-container'>
            <div style={{ width: "100px", height: "100px", background: `${hexColor}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0px" }} >
                {icon}
            </div>
            <div className='right-side-info'>
                <p style={{ fontSize: "10px", margin: "0px", color: "#D5D5D5", fontWeight: "bold" }}>{title}</p>
                <p style={{ fontSize: "20px", margin: "0px", fontWeight: "bold", color: "black" }}><span>&#36;</span>{amount}K</p>
                <p style={{ fontSize: "10px", margin: "0px", fontWeight: "bold", color: "#87898C" }}><span style={{ color: `${isUp ? "#00A845" : "#D42D5E"}` }}> {isUp ? <span>&#8593;</span> : <span>&#8595;</span>}{percent}&#37;</span> this month</p>
            </div>
        </div>
    )
}

export default SummaryBox