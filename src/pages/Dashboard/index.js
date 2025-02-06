import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from '../../components/axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState([]); // All products
    const [filteredData, setFilteredData] = useState([]); // Filtered products based on price
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for price filtering using range slider
    const [priceRange, setPriceRange] = useState([0, 5000]); // Default range from 0 to 5000

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproduct/`);
            setData(response.data.data);
            setFilteredData(response.data.data); // Initialize with all products
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <AdminLayout>
          <>
              <div className="product-view">
                <div className="container-fluid">
                    <h2>All Products</h2>

                    {/* Flexbox to organize the product list and price filter */}
                    <div className="d-flex">
                        {/* Product List (Full Width) */}
                        <div className="col-12 col-md-9">
                            <div className="row">
                                {filteredData.length > 0 ? (
                                    filteredData.map((d) => (
                                        <div className="col-md-3" key={d.id}>
                                            <div className="product-item">
                                                <div className="product-title">
                                                    <Link to={`/product-detail/${d.id}`}>{d.productname}</Link>
                                                    <div className="ratting">
                                                        {[...Array(5)].map((_, index) => (
                                                            <i key={index} className="fa fa-star"></i>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="product-image">
                                                    <a href="product-detail.html">
                                                        {d.photo.split(',').map((src, i) => (
                                                            <img
                                                                key={i}
                                                                src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`}
                                                                alt="Product"
                                                                width="100%"
                                                                style={{ display: i === 0 ? 'block' : 'none' }}
                                                            />
                                                        ))}
                                                    </a>
                                                </div>
                                                <div className="product-price">
                                                    <h3><span>৳</span>{d.price || 99}</h3>                                             
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No products available</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
       
          
          
          </>  
        

            

            

            
        </AdminLayout>
    )
}

export default Dashboard