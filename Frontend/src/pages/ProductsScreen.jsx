import { FormControl } from "@mui/material";
import { useEffect, useContext, useState } from "react";
import UserContext from '../components/UserContext';
import Avatar from '@mui/material/Avatar';
import ProductScreen from "./ProductScreen.jsx";

function ProductsScreen() {


    const [productDetails, setproductDetails] = useState();

    useEffect(
        function () {

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,
                {
                    'method': 'POST',
                    'headers': {
                        'Authorization': `Bearer ${localStorage.getItem('id')}`
                    },
                    // 'body': {}
                }
            )
                // This will recieve string data and convert to json
                .then(
                    function (backendReponse) {
                        return backendReponse.json();
                    }
                )
                // This will receie the converted json
                .then(
                    function (jsonResponse) {
                        setproductDetails(jsonResponse);
                    }
                )
                // This will catch errors if any
                .catch(
                    function (backendError) {
                        console.log('backendError', backendError);
                    }
                );
        },

        // This array is empty because useEffect will run once only
        []
    );


    if (productDetails) {
        return (
            <div div className="text-field form-control" >
                <Avatar alt="user-avatar" src={productDetails.avatar} />
                <div>Title: {productDetails.title}</div>
                <div>Desc: {productDetails.description}</div>
                <div>Category: {productDetails.categories}</div>
                <div>Password: </div>
            </div >
        );
    } else {
        return (
            <p>Loading...</p>
        );
    }
}

export default ProductsScreen;