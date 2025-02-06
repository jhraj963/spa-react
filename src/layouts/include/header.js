
import { logout } from '../../Api/AllApi'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
    let userdata = localStorage.getItem("front_userdata");


    let parsedUserData = null;
    try {
        parsedUserData = userdata ? JSON.parse(userdata) : null;
    } catch (e) {
        parsedUserData = userdata;
    }
    
    const navigate = useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/login');
    }

    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach(
            function (e) {
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    }

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }

    
    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
               <h1>SPA</h1>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="mdi mdi-menu"></span>
                </button>
                <div className="search-field d-none d-md-block">
                    <form className="d-flex align-items-center h-100" action="#">
                        <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                <i className="input-group-text border-0 mdi mdi-magnify"></i>
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                        </div>
                    </form>
                </div>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link " id="profileDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                    
                            <div className="nav-profile-text">
                                <p className="mb-1 text-black">Julfiqur Haidar Raja</p>
                            </div>
                        </a>
  
                    </li>
             

                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Login")}`}>
                        <Link to="/Login" className="sidebar-link" onClick={handelLogout}>
                            <i className="mdi mdi-power"></i>
                        </Link>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    )
}

export default Header