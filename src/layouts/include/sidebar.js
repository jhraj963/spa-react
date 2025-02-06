import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Sidebar() {

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
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
          
          <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Dashboard") ? 'active' : ''}`}>
            <Link to="/" className="sidebar-link nav-link">
              <span className="menu-title">Dashboard</span>
              <i data-feather="home" width="20" className="mdi mdi-home menu-icon"></i>

            </Link>
          </li>

         
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
              <span className="menu-title">Products</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-shopping menu-icon"></i>
            </a>
            <div className="collapse" id="products">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Addproduct") ? 'active' : ''}`}>
                  <Link to="/Addproduct" className="sidebar-link nav-link">
                      <span className="menu-title">All Product</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#customers" aria-expanded="false" aria-controls="customers">
              <span className="menu-title">Users</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-human-male-female menu-icon"></i>
              </a>
             <div className="collapse" id="customers">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Allcustomers") ? 'active' : ''}`}>
                  <Link to="/Allcustomers" className="sidebar-link nav-link">
                    <span className="menu-title">All Users</span>
                  </Link>
                </li>
                </ul>
              </div>
          </li>
                    
          </ul>
        </nav>
    )
}

export default Sidebar