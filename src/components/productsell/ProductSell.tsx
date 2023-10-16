import React from 'react';
import '../../styles/components/productsell/ProductSell.css';
import Header from './Header';
import productData from '../../data/productData';
import Product from './Product';
import useWindowDimensions from '../../hooks/useWindowDimentions';

const ProductSell = () => {
    const { screenWidth } = useWindowDimensions();
    // Set the barchart width
    const isHrVisible = React.useMemo(() => {
        if (screenWidth && screenWidth >= 768) return true;
        return false;
    }, [screenWidth]);

    return (
        <div className='productsell-container'>
            <Header />
            {isHrVisible ? <hr style={{ width: "100%", borderTop: "1px solid #D5D5D5" }} /> : <hr style={{ width: "50%", borderTop: "1px solid #D5D5D5" }} />}
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