import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {

    const [interval, setInterval] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterval(event.target.value as string);
    };

    const xLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const uData = [
        { value: 10, color: '#F2EFFF' },
        { value: 15, color: '#F2EFFF' },
        { value: 20, color: '#F2EFFF' },
        { value: 5, color: '#F2EFFF' },
        { value: 12, color: '#F2EFFF' },
        { value: 18, color: '#F2EFFF' },
        { value: 8, color: '#F2EFFF' },
        { value: 25, color: '#5A32EA' },
        { value: 14, color: '#F2EFFF' },
        { value: 22, color: '#F2EFFF' },
        { value: 7, color: '#F2EFFF' },
        { value: 16, color: '#F2EFFF' },
    ];

    const chartRef = useRef<any>(null);

    useEffect(() => {
        // Initialize ECharts
        const chartInstance = chartRef.current.getEchartsInstance();

        // Define your data
        const data = {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
            values: [120, 200, 150, 80, 70],
        };

        // Create the chart
        const option = {
            title: {
                text: 'Bar Chart Example',
            },
            tooltip: {},
            xAxis: {
                data: data.categories,
            },
            yAxis: {},
            series: [
                {
                    name: 'Value',
                    type: 'bar',
                    data: data.values,
                },
            ],
        };

        // Set the chart option
        chartInstance.setOption(option);
    }, []);

    return (
        <Stack
            direction="column"
            sx={{
                borderRadius: "10px",
                background: "white",
                padding: "15px",
                boxShadow: '0px 3px 10px #d3d2d2',
                width: { sm: "300px", md: "500px", lg: "500px" },
                height: { sm: "200px", md: "300px", lg: "300px" },
            }}
        >
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h3 style={{ margin: "5px 0px 0px 5px", padding: "0px" }}>Overview</h3>
                    <h6 style={{ margin: "5px 0px 0px 5px", padding: "0px", color: "#D5D5D5" }}>Monthly Earning</h6>
                </div>
                <select style={{ margin: "5px 5px 0px 5px", padding: "3px", background: "#FAFBFF", borderRadius: "5px", border: "none", height: "40px" }} name="data-intervals" onChange={handleChange} value={interval}>
                    <option value="quarterly">Quarterly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </Stack>
            <ReactECharts ref={chartRef} option={{}} style={{ height: '400px' }} />
        </Stack>
    );
};

export default BarChart;
