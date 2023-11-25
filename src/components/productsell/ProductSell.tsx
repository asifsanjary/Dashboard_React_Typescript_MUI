import React from 'react';
import productData from '../../data/productData';
import { Avatar, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Select, MenuItem, SelectChangeEvent, Grid, InputLabel, FormControl } from '@mui/material';
import SearchBar from '../SearchBar';

const ProductSell = () => {
    const [day, setDay] = React.useState('');
    const handleChange = (event: SelectChangeEvent<string>) => {
        setDay(event.target.value as string);
    };

    return (
        <Stack spacing={1} mb={5}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>Product Sell</Typography>
                <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <SearchBar width='10rem' marginTop='0px' />
                    <FormControl variant="standard" sx={{ width: "15rem", }} size="small">
                        <InputLabel>Select Interval</InputLabel>
                        <Select
                            value={day}
                            onChange={handleChange}
                            label="Select Interval"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="last_30_days">Last 30 days</MenuItem>
                            <MenuItem value="last_week">Last Week</MenuItem>
                            <MenuItem value="last_day">Last Day</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>

            <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: '0px 3px 6px #d3d2d2' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Stock</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Total Sales</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productData.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
                                        <Avatar alt={product.title} src={product.url} variant="rounded" />
                                        <Stack>
                                            <Typography>{product.title}</Typography>
                                            <Typography color="#D5D5D5">{product.subTitle}</Typography>
                                        </Stack>
                                    </Stack>

                                </TableCell>
                                <TableCell align="right">{product.stock} in stock</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }} align="right">&#36;{product.price}</TableCell>
                                <TableCell align="right">{product.totalSales}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default ProductSell;