import * as React from 'react';
import { VictoryPie } from 'victory';
import '../../styles/components/chart/PieChart.css';

interface DataPoint {
    x: string;
    y: number;
    color: string;
}

const data: DataPoint[] = [
    { x: 'A', y: 20, color: '#F43497' },
    { x: 'B', y: 35, color: '#623AEA' },
    { x: 'C', y: 45, color: '#F1EFFC' },
];

const PieChart: React.FC = () => {
    return (
        <div className='piechart-container'>
            <div className='piechart-title-container'>
                <h3 style={{ margin: "5px 0px 0px 5px", padding: "0px" }}>Customers</h3>
                <h6 style={{ margin: "5px 0px 0px 5px", padding: "0px", color: "#D5D5D5" }}>Customers that buy products</h6>
            </div>
            <div className='piechart-circle-shadow'>
                <VictoryPie
                    width={280}
                    height={280}
                    data={data}
                    innerRadius={({ datum }) => 30 + (7 * ((5 * datum.y) / 50))}
                    radius={({ datum }) => 80 + (7 * (50 / datum.y))}
                    colorScale={data.map((item) => item.color)}
                    labels={() => ''}
                    padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <p style={{ textAlign: "center", fontSize: "10px", fontWeight: "bold" }}>< span style={{ fontSize: "20px", fontWeight: "bolder" }}>65%</span><br />Total New<br />Customers</p>
                </div>
            </div>
        </div>
    );
};

export default PieChart

