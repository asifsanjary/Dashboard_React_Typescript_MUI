import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import ReactECharts from 'echarts-for-react';

const PieChart: React.FC = () => {
    const chartRef = useRef<any>(null);

    useEffect(() => {

        const chartInstance = chartRef.current.getEchartsInstance();

        const option = {
            legend: {
                show: false,
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [60, 150],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 38, name: 'rose 5', itemStyle: { color: '#5a32ea' } },
                        { value: 27, name: 'rose 2', itemStyle: { color: '#6a46ec' } },
                        { value: 20, name: 'rose 4', itemStyle: { color: '#9c84f2' } },
                        { value: 12, name: 'rose 1', itemStyle: { color: '#bdadf6' } },
                        { value: 3, name: 'rose 8', itemStyle: { color: '#ded6fa' } }
                    ],
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                }
            ]
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
                width: "25%",
                height: "400px",
            }}
            alignItems="center"
        >
            <Stack
                direction="column"
                justifyContent={{ sm: "center", md: "flex-start" }}
                alignSelf={{ sm: "center", md: "flex-start" }}
            >
                <h3 style={{ margin: "5px 0px 0px 5px", padding: "0px" }}>Customers</h3>
                <h6 style={{ margin: "5px 0px 0px 5px", padding: "0px", color: "#D5D5D5" }}>Customers that buy products</h6>
            </Stack>

            <Stack
                justifyContent="center"
                alignSelf="center"
                sx={{
                    width: "330px",
                    height: "330px",
                    position: "relative",
                    borderRadius: "50%",
                    background: "white",
                    margin: "20px",
                }}>
                <ReactECharts ref={chartRef} option={{}} style={{ height: '400px', margin: "0px" }} />
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
            </Stack>
        </Stack>
    );
};

export default PieChart

