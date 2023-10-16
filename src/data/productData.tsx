import React from 'react';

export interface IProductData {
    url: string;
    title: string;
    subTitle: string;
    stock: number;
    price: number;
    totalSales: number;
}

const productData: IProductData[] = [
    {
        url: "https://images.pexels.com/photos/3923277/pexels-photo-3923277.jpeg",
        title: "Abstract 3D",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stock: 32,
        price: 45.99,
        totalSales: 20
    },
    {
        url: "https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg",
        title: "Sarphens Illustration",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stock: 27,
        price: 15.99,
        totalSales: 15
    },

]

export default productData;