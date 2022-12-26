import React from 'react';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from './NavBar';


function DonateLayoutRoute(props) {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <NavBar {...props} />
            <Route path={props.path} exact={props.exact} component={props.component} />
        </Box>
    );
}

export default DonateLayoutRoute;