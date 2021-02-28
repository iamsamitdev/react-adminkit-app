/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="#">
          <span className="align-middle">Smart Stock</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item">
            <NavLink to="/backend/dashboard" className="sidebar-link" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              <i className="align-middle" data-feather="sliders" />&nbsp;
              <span className="align-middle">Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <a
              data-target="#forms"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="align-middle" data-feather="database" />
              <span className="align-middle">Stock</span>
            </a>
            <ul
              id="forms"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <NavLink to="/backend/product" className="sidebar-link" activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>
                  Product
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="#">
                  Report
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <i className="align-middle" data-feather="user" />&nbsp;
              <span className="align-middle">Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <i className="align-middle" data-feather="settings" />&nbsp;
              <span className="align-middle">Settings</span>
            </a>
          </li>
          
          <li className="sidebar-header">Tools &amp; Components</li>
          
          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <i className="align-middle" data-feather="coffee" />&nbsp;
              <span className="align-middle">Icons</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <i className="align-middle" data-feather="list" />&nbsp;
              <span className="align-middle">Tables</span>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar