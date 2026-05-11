import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';
import strawberryImage from '../assets/images/strawberry.jpeg';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    const fetchProduct = async () => {
      // Here, you'll fetch product details from an API or a static array
      const fetchedProduct = {
        id: id,
        name: 'Strawberry',
        description: 'Fresh and organic strawberries.',
        price: 10,
        image: '../assets/images/strawberry.jpeg',
      };
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-detail">
      {product && (
        <>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
