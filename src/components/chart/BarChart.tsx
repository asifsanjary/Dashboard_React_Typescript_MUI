import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { EChartsOption, } from 'echarts';

const BarChart: React.FC = () => {

    const [interval, setInterval] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterval(event.target.value as string);
    };

    const chartRef = useRef<any>(null);

    useEffect(() => {
        const chartInstance = chartRef.current.getEchartsInstance();

        const data = {
            categories: [
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
            ],
            values: [
                10, 
                15, 
                22, 
                17, 
                7, 
                2, 
                12, 
                13, 
                24, 
                14, 
                9, 
                23
            ],
            colors: [
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF',
                '#5A32EA',
                '#F2EFFF',
                '#F2EFFF',
                '#F2EFFF'
            ]
        };

        const option : EChartsOption = {
            xAxis: {
                data: data.categories,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                show: false,
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'Value',
                    type: 'bar',
                    data: data.values,
                    itemStyle: {
                        borderRadius: [5, 5, 0, 0],
                        color: params => data.colors[params.dataIndex],
                    }
                },
            ],
        };

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
                width: "70%",
                height: "400px",
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
            <ReactECharts ref={chartRef} option={{}} style={{ height: '400px', margin: "0px" }} />
        </Stack>
    );
};

export default BarChart;
