import * as React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import '../../styles/components/chart/BarChart.css';

const BarChart: React.FC = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAge(event.target.value as string);
    };

    const data = [
        { x: 'Jan', y: 10, color: '#F2EFFF' },
        { x: 'Feb', y: 15, color: '#F2EFFF' },
        { x: 'Mar', y: 20, color: '#F2EFFF' },
        { x: 'Apr', y: 5, color: '#F2EFFF' },
        { x: 'May', y: 12, color: '#F2EFFF' },
        { x: 'Jun', y: 18, color: '#F2EFFF' },
        { x: 'Jul', y: 8, color: '#F2EFFF' },
        { x: 'Aug', y: 25, color: '#5A32EA' },
        { x: 'Sep', y: 14, color: '#F2EFFF' },
        { x: 'Oct', y: 22, color: '#F2EFFF' },
        { x: 'Nov', y: 7, color: '#F2EFFF' },
        { x: 'Dec', y: 16, color: '#F2EFFF' },
    ];

    const barWidth = 40; // Set the width for all bars
    const maxYValue = Math.max(...data.map(item => item.y));

    return (
        <div className='barchart-container barchart-container-responsive'>
            <div className='barchart-title-container'>
                <div>
                    <h3 style={{ margin: "5px 0px 0px 5px", padding: "0px" }}>Overview</h3>
                    <h6 style={{ margin: "5px 0px 0px 5px", padding: "0px", color: "#D5D5D5" }}>Monthly Earning</h6>
                </div>
                <select style={{ margin: "5px 5px 0px 5px", padding: "3px", background: "#f2f1f1", borderRadius: "5px", border: "none", height: "40px" }} name="data-intervals" onChange={handleChange}>
                    <option value="quarterly">Quarterly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <VictoryChart
                theme={VictoryTheme.material}
                width={650}
                height={240}
                padding={{ top: 0, bottom: 60, left: 60, right: 60 }}
            >
                <VictoryAxis
                    style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fontWeight: 'bold' }, grid: { stroke: "transparent" }, }}

                />
                <VictoryBar
                    data={data}
                    style={{
                        data: {
                            fill: ({ datum }) => datum.color, // Set different colors for each bar
                            width: barWidth, // Set the same width for all bars
                        },
                        labels: { fontSize: 10 },
                    }}
                    cornerRadius={{ top: 5, bottom: 5 }}
                />
                <VictoryAxis
                    dependentAxis
                    style={{ axis: { stroke: 'none' }, ticks: { stroke: 'none' }, tickLabels: { fill: 'none' }, grid: { stroke: "transparent" }, }}
                />
            </VictoryChart>
        </div>
    );
};

export default BarChart;
