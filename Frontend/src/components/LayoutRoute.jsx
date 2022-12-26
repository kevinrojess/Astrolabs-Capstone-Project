import React from 'react';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from './NavBar';
import Footer from './Footer';


function LayoutRoute(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <NavBar {...props} />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer {...props} />
        </Box>
    );
}

export default LayoutRoute;