import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Allcustomers() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/user/`).then(function (response) {
            setData(response.data.data);
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>All Users</h3>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0 text-center table-info">
                                        <thead class="table-danger">
                                            <tr>
                                                <th><h5>ID No.</h5></th>
                                                <th><h5>User Name</h5></th>
                                                <th><h5>Email</h5></th>
                                                <th><h5>Country</h5></th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.id}</td>
                                                    <td>{d.name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.country}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>



      </>







    </AdminLayout>
  )
}

export default Allcustomers