/* eslint-disable jsx-a11y/anchor-is-valid */
import {useHistory} from 'react-router-dom'

const Navbar = () => {

  // รับค่าตัวแปรจาก localstorage
  let fullname = localStorage.getItem('fullname')

  // สร้างตัวแปรสำหรับเปลี่ยนหน้า
  let history = useHistory()

  const logout = () =>{

    localStorage.removeItem("fullname")
    // ส่งกลับไปหน้า login
    history.push('/login')

  }

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle d-flex">
        <i className="hamburger align-self-center" />
      </a>
      <form className="d-none d-sm-inline-block">
        <div className="input-group input-group-navbar">
          <input
            type="text"
            className="form-control"
            placeholder="Search…"
            aria-label="Search"
          />
          <button className="btn" type="button">
            <i className="align-middle" data-feather="search" />
          </button>
        </div>
      </form>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle"
              href="#"
              id="alertsDropdown"
              data-toggle="dropdown"
            >
              <div className="position-relative">
                <i className="align-middle" data-feather="bell" />
                <span className="indicator">4</span>
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
              aria-labelledby="alertsDropdown"
            >
              <div className="dropdown-menu-header">4 New Notifications</div>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-danger" data-feather="alert-circle" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Update completed</div>
                      <div className="text-muted small mt-1">
                        Restart server 12 to complete the update.
                      </div>
                      <div className="text-muted small mt-1">30m ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-warning" data-feather="bell" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Lorem ipsum</div>
                      <div className="text-muted small mt-1">
                        Aliquam ex eros, imperdiet vulputate hendrerit et.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-primary" data-feather="home" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Login from 192.186.1.8</div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-success" data-feather="user-plus" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">New connection</div>
                      <div className="text-muted small mt-1">
                        Christina accepted your request.
                      </div>
                      <div className="text-muted small mt-1">14h ago</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">
                  Show all notifications
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle"
              href="#"
              id="messagesDropdown"
              data-toggle="dropdown"
            >
              <div className="position-relative">
                <i className="align-middle" data-feather="message-square" />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
              aria-labelledby="messagesDropdown"
            >
              <div className="dropdown-menu-header">
                <div className="position-relative">4 New Messages</div>
              </div>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        src="../assets/img/avatars/avatar-5.jpg"
                        className="avatar img-fluid rounded-circle"
                        alt="Vanessa Tucker"
                      />
                    </div>
                    <div className="col-10 pl-2">
                      <div className="text-dark">Vanessa Tucker</div>
                      <div className="text-muted small mt-1">
                        Nam pretium turpis et arcu. Duis arcu tortor.
                      </div>
                      <div className="text-muted small mt-1">15m ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        src="../assets/img/avatars/avatar-2.jpg"
                        className="avatar img-fluid rounded-circle"
                        alt="William Harris"
                      />
                    </div>
                    <div className="col-10 pl-2">
                      <div className="text-dark">William Harris</div>
                      <div className="text-muted small mt-1">
                        Curabitur ligula sapien euismod vitae.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        src="../assets/img/avatars/avatar-4.jpg"
                        className="avatar img-fluid rounded-circle"
                        alt="Christina Mason"
                      />
                    </div>
                    <div className="col-10 pl-2">
                      <div className="text-dark">Christina Mason</div>
                      <div className="text-muted small mt-1">
                        Pellentesque auctor neque nec urna.
                      </div>
                      <div className="text-muted small mt-1">4h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img
                        src="../assets/img/avatars/avatar-3.jpg"
                        className="avatar img-fluid rounded-circle"
                        alt="Sharon Lessman"
                      />
                    </div>
                    <div className="col-10 pl-2">
                      <div className="text-dark">Sharon Lessman</div>
                      <div className="text-muted small mt-1">
                        Aenean tellus metus, bibendum sed, posuere ac, mattis
                        non.
                      </div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">
                  Show all messages
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              href="#"
              data-toggle="dropdown"
            >
              <i className="align-middle" data-feather="settings" />
            </a>
            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-toggle="dropdown"
            >
              <img
                src="../assets/img/avatars/avatar.jpg"
                className="avatar img-fluid rounded mr-1"
                alt={fullname}
              />{" "}
              <span className="text-dark">{fullname}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="pages-profile.html">
                <i className="align-middle mr-1" data-feather="user" /> Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="align-middle mr-1" data-feather="pie-chart" />{" "}
                Analytics
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="pages-settings.html">
                <i className="align-middle mr-1" data-feather="settings" />{" "}
                Settings &amp; Privacy
              </a>
              <a className="dropdown-item" href="#">
                <i className="align-middle mr-1" data-feather="help-circle" />{" "}
                Help Center
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#" onClick={logout}>
                Log out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar