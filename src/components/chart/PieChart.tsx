import * as React from 'react';
import { Stack } from '@mui/material';
import { relative } from 'path';

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
        <Stack
            direction="column"
            sx={{
                borderRadius: "10px",
                background: "white",
                padding: "15px",
                boxShadow: '0px 3px 10px #d3d2d2',
                width: { sm: "200px", md: "300px" },
                height: { sm: "200px", md: "300px" },
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
                sx={{
                    width: "80%",
                    position: "relative",
                    borderRadius: "50%",
                    background: "white",
                    margin: "20px",
                    boxShadow: '0px 3px 10px #d3d2d2',
                }}>

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

