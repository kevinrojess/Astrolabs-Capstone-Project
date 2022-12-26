import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useEffect, useContext, useState } from "react";



function ProductCard() {

    const [productDetails, setProductDetails] = useState();

    useEffect(
        function () {
            fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/products/list`, {
                method: "POST"

            })
                // This will recieve string data and convert to json
                .then(function (backendReponse) {
                    return backendReponse.json();
                })
                // This will receie the converted json
                .then(function (jsonResponse) {
                    setProductDetails(jsonResponse);
                })
                // This will catch errors if any
                .catch(function (backendError) {
                    console.log("backendError", backendError);
                });
        },

        // This array is empty because useEffect will run once only
        []
    );

    if (productDetails) {


        const products = productDetails.map(product => {
            return (
                <Grid item key={product.id} gap={10}>
                    <Card sx={{ width: 300, height: 400 }}>
                        <Box sx={{
                            display: 'block',
                            backgroundImage: `url(${product.productImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            width: '100%',
                            height: 150,
                            position: 'center'
                        }}></Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link to={`/products/${product.id}`}>{product.productName}</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.category}
                            </Typography>
                            <p>$ {product.price}</p>
                        </CardContent>
                        <CardActions>
                            <Button href='/product' size="small">Buy</Button>
                            <Button href="/cart" size="small"> Add to cart </Button>
                        </CardActions>
                    </Card>
                </Grid >
            );
        });
        // sx = {{ my: 6, mx: 6; }
        // sx={{ py: 6, px: 4 }}

        return (
            <Box className="listProducts" >
                <Container>
                    <Grid container spacing={4}>
                        {products}
                    </Grid>
                </Container>
            </Box>
        );

    }
    else {
        return <p>Loading...</p>;
    }


};


export default ProductCard;
