import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuth } from "../../configs/context";
// import { AVATAR_DEFAULT } from "../../constants";
// import "./Navbar.scss";
// import "../../components/common/buttons/ButtonCustom";
// import NotificationButton from "./buttons/notification/NotificationButton";

const Navbar = () => {
    // const auth = useAuth();
    // const { user } = auth;
    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     auth.logout();
    // };
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container-fluid ">
                    <Link
                        className="navbar-brand fw-bold"
                        id="name"
                        to="/"
                    >
                        E-Toeic
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                    >
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                            id="menu"
                        >
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link  "
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/learning"
                                    className="nav-link active "
                                >
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/posts"
                                    className="nav-link active "
                                >
                                    Vùng nguyên liệu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/posts"
                                    className="nav-link active "
                                >
                                    Cửa hàng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/posts"
                                    className="nav-link active "
                                >
                                    Phát triển
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    to="/games"
                                    className="nav-link active fw-bold"
                                >
                                    Game
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/flash-cards"
                                    className="nav-link active fw-bold"
                                >
                                    Flash Case
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link
                                    to="/exercises"
                                    className="nav-link active "
                                >
                                    Exercise
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link
                                    to="/tests"
                                    className="nav-link active fw-bold"
                                >
                                    Test
                                </Link>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-tests"
                                        className={`nav-link active `}
                                    >
                                        Tests
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/tests/skill-tests/list">
                                            Skill test
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/tests/full-test/list">
                                            Full test
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li> */}
                        </ul>
                        {/* {user == null ? (
                            <div className="ms-2">
                                <Link
                                    to="/login"
                                    // className="btn btn-outline-primary rounded-pill"
                                    className="btn btn-custom "
                                    style={{
                                        color: "white",
                                        height: 33,
                                        width: 100,
                                        borderRadius: 15,
                                    }}
                                >
                                    Login
                                </Link>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center">
                                <Dropdown className="ms-2">
                                    <Dropdown.Toggle id="dropdown-user">
                                        <NotificationButton />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        aaaa
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="ms-2">
                                    <Dropdown.Toggle id="dropdown-user">
                                        <div
                                            className="avatar-circle"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            <img
                                                src={
                                                    user.avatar
                                                        ? process
                                                              .env
                                                              .REACT_APP_API_URL +
                                                          user.avatar
                                                        : AVATAR_DEFAULT
                                                }
                                                alt="avatar"
                                                className="avatar-circle-img rounded-circle"
                                                style={{
                                                    width: "45px",
                                                    height: "45px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/profile">
                                            <i className="fa fa-user-circle-o me-2"></i>
                                            Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/change-password">
                                            <i className="fa fa-key me-2"></i>
                                            Change Password
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Header>
                                            <i className="fa fa-history me-2"></i>{" "}
                                            Tests history
                                        </Dropdown.Header>
                                        <Dropdown.Item href="/histories/skill-test">
                                            Skill test
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/histories/full-test">
                                            Full test
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item
                                            href="/logout"
                                            onClick={
                                                handleLogout
                                            }
                                        >
                                            <i className="fa fa-sign-out me-2"></i>
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        )} */}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
