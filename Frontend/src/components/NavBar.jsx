import React from "react";
import { Link as ReactLink } from 'react-router-dom';
import { UserContext } from "./UserContext";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from "@mui/material/Box";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';


function NavBar() {

    const { loggedIn, avatar, logoutUser } = React.useContext(UserContext);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const [userDetails, setUserDetails] = useState();


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav className="navbar navbar-expand-lg py-2 sticky-top navbar-light bg-white">
            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    <img className="logo" src={require("../img/bh.png")} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Donate Now</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/list">Shop Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/involved">Get Involved</a>
                        </li>
                    </ul>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                <Avatar alt="" src={avatar} sx={{ width: 50, height: 50 }} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            {
                                loggedIn ?
                                    <MenuItem>
                                        <a href="/profile">
                                            My Account
                                        </a>
                                    </MenuItem> :
                                    <MenuItem
                                        to={'/profile'}
                                    >
                                    </MenuItem>
                            }

                            {
                                loggedIn ?
                                    <MenuItem onClick={logoutUser}>
                                        <Typography>Log out</Typography>
                                    </MenuItem> :
                                    <React.Fragment>
                                        <MenuItem
                                            to={'/login'}
                                            component={ReactLink}
                                            onClick={handleCloseUserMenu}
                                        >
                                            <Typography>Login</Typography>
                                        </MenuItem>

                                        <MenuItem
                                            to={'/register'}
                                            component={ReactLink}
                                            onClick={handleCloseUserMenu}
                                        >
                                            <Typography>Register</Typography>
                                        </MenuItem>
                                    </React.Fragment>
                            }

                        </Menu>
                    </Box>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;