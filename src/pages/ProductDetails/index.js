import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct/${productId}`);
            setProduct(response.data.data);
        } catch (err) {
            setError('Failed to fetch product details.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <AdminLayout>Loading...</AdminLayout>;
    }

    if (error) {
        return <AdminLayout>{error}</AdminLayout>;
    }


    return (
        <AdminLayout>
            <div className="product-detail">
                <div className="container-fluid">
                    <div className="row">
                        {product && (
                            <>
                                <div className="col-lg-6">
                                    <div className="product-images">
                                        {product.photo.split(',').map((src, i) => (
                                            <img
                                                key={i}
                                                src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`}
                                                alt={product.productname}
                                                width="100%"
                                                style={{ marginBottom: '10px' }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <h2>{product.productname}</h2>
                                    <p>{product.description}</p>
                                    <p><b>Price:</b> ৳{product.price || 99}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default ProductDetails;
