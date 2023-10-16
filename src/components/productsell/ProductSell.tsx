import React from 'react';
import '../../styles/components/productsell/ProductSell.css';
import Header from './Header';
import productData from '../../data/productData';
import Product from './Product';

const ProductSell = () => {
    return (
        <div className='productsell-container'>
            <Header />
            <hr style={{ width: "100%", borderTop: "1px solid #D5D5D5" }} />
            {productData.map((product, index) => (<Product
                key={index}
                url={product.url}
                title={product.title}
                subTitle={product.subTitle}
                price={product.price}
                stock={product.stock}
                totalSales={product.totalSales}
            />))}
        </div>
    )
}

export default ProductSell