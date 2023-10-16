import * as React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import '../../styles/components/chart/BarChart.css';

const BarChart: React.FC = () => {

    const [interval, setInterval] = React.useState('');
    const [chartSize, setChartSize] = React.useState({ width: 400, height: 300 });
    const [isScreenSmall, setScreenSmall] = React.useState(false);

    React.useEffect(() => {
        function handleResize() {
            setChartSize({ width: window.innerWidth * 0.7, height: 300 });
            setScreenSmall(window.innerWidth <= 750);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterval(event.target.value as string);
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

    return (
        <div className='barchart-container'>
            <div className='barchart-title-container'>
                <div>
                    <h3 style={{ margin: "5px 0px 0px 5px", padding: "0px" }}>Overview</h3>
                    <h6 style={{ margin: "5px 0px 0px 5px", padding: "0px", color: "#D5D5D5" }}>Monthly Earning</h6>
                </div>
                <select style={{ margin: "5px 5px 0px 5px", padding: "3px", background: "#FAFBFF", borderRadius: "5px", border: "none", height: "40px" }} name="data-intervals" onChange={handleChange} value={interval}>
                    <option value="quarterly">Quarterly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <VictoryChart
                theme={VictoryTheme.material}
                width={chartSize.width}
                height={300}
            >
                {isScreenSmall ? (
                    <VictoryAxis
                        style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fill: 'none' }, grid: { stroke: "transparent" }, }}
                    />
                ) :
                    (
                        <VictoryAxis
                            style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fontWeight: 'bold' }, grid: { stroke: "transparent" }, }}
                        />
                    )
                }
                <VictoryBar
                    data={data}
                    style={{
                        data: {
                            fill: ({ datum }) => datum.color,
                            width: isScreenSmall ? 10 : 40,
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
