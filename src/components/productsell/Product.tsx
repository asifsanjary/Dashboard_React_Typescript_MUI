import React from 'react'
import { IProductData } from '../../data/productData'

const Product = ({ url, title, subTitle, stock, price, totalSales }: IProductData) => {
    return (
        <div style={{ display: 'flex', margin: "0px 0px 15px 15px", alignItems: 'center' }}>
            <div style={{ margin: "0px 10px 0px 5px" }} ><img alt={title} width='66px' height='36px' src={url} style={{ borderRadius: '5px' }} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '5', margin: "0px 0px 0px 5px" }}>
                <p style={{ fontSize: '15px', fontWeight: 'bold', margin: "0px 5px 5px 0px", padding: "0px" }}>{title}</p>
                <p style={{ fontSize: '10px', color: '#D5D5D5', margin: "0px", padding: "0px" }}>{subTitle}</p>
            </div>
            <p style={{ margin: "0px 0px 0px 5px", flexGrow: '1', fontSize: '11px' }}>{`${stock} in stock`}</p>
            <p style={{ margin: "0px 0px 0px 5px", flexGrow: '1', fontSize: '12px', fontWeight: 'bold' }}><span>&#36;</span>{` ${price}`}</p>
            <p style={{ margin: "0px 0px 0px 5px", flexGrow: '1', fontSize: '11px' }}>{totalSales}</p>
        </div>
    )
}

export default Product