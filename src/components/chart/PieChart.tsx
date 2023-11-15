import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import ReactECharts from 'echarts-for-react';

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
                    { value: 40, name: 'rose 1', itemStyle: { color: '#ff0000' } },
                    { value: 38, name: 'rose 2', itemStyle: { color: '#00ff00' } },
                    { value: 32, name: 'rose 3', itemStyle: { color: '#0000ff' } },
                    { value: 30, name: 'rose 4', itemStyle: { color: '#ffff00' } },
                    { value: 28, name: 'rose 5', itemStyle: { color: '#ff00ff' } },
                    { value: 26, name: 'rose 6', itemStyle: { color: '#00ffff' } },
                    { value: 22, name: 'rose 7', itemStyle: { color: '#000000' } },
                    { value: 18, name: 'rose 8', itemStyle: { color: '#cfff77' } }
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

