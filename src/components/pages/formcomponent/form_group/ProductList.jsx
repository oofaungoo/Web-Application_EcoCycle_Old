import React, { useState } from 'react';
import './ProductList.css';
import productImg from '../../../images/waste.png';

const productList = [
    { name: 'ขวดน้ำดื่มใส [ไม่แยกฉลาก]', price: 8.00, img: productImg },
    { name: 'ขวดน้ำดื่มใส [แยกฉลาก]', price: 13.00, img: productImg },
    { name: 'ขวดน้ำดื่มฟ้า [แยกฉลาก]', price: 10.00, img: productImg },
    { name: 'ขวดนมขาวขุ่น', price: 11.00, img: productImg },
    { name: 'ขวดพลาสติกอื่น ๆ', price: 2.00, img: productImg },
    { name: 'กระดาษลัง', price: 3.50, img: productImg },
    { name: 'กระดาษ ขาว-ดำ', price: 5.00, img: productImg },
    { name: 'กระดาษสี', price: 2.00, img: productImg },
    { name: 'เหล็กกล่อง/เหล็กเส้น', price: 5.00, img: productImg }
];

const ProductList = () => {
    const [products, setProducts] = useState(productList.map(product => ({ ...product, kg: "" })));
    const [totalKg, setTotalKg] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleKgChange = (index, kg) => {
        const updatedProducts = [...products];
        updatedProducts[index].kg = kg;
        setProducts(updatedProducts);

        const newTotalKg = updatedProducts.reduce((acc, product) => acc + (parseFloat(product.kg) || 0), 0);
        const newTotalPrice = updatedProducts.reduce((acc, product) => acc + ((parseFloat(product.kg) || 0) * product.price), 0);

        setTotalKg(newTotalKg);
        setTotalPrice(newTotalPrice);
    };

    return (
        <div className="product-list">
            <div className='fs-16 fw-5 text-mint'>กรุณาระบุจำนวนกิโลกรัมที่มี</div>
            <div className='fs-13 text-grey'>สามารถระบุเป็นเลขจำนวนเต็ม หรือทศนิยมได้</div>
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} className="product-img" />
                    <div className="product-info">
                        <span className="product-details">
                            <div className="fs-15">{product.name}</div>
                            <div className="fs-13 text-mint">{product.price} THB</div>
                        </span>
                        <span className="product-input">
                            <input
                                type="number"
                                min="0"
                                value={product.kg}
                                onChange={(e) => handleKgChange(index, e.target.value)}
                                className="product-kg-input"
                                placeholder="0"
                            />
                        </span>
                    </div>
                </div>
            ))}
            <div className="total-section">
                <div className="fs-16">รวมเป็นน้ำหนักสุทธิ: {totalKg.toFixed(2)} kg</div>
                <div className="fs-18 text-mint">{totalPrice.toFixed(2)} THB</div>
            </div>
        </div>
    );
};

export default ProductList;
