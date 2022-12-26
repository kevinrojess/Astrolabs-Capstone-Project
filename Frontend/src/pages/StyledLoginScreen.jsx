import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ), url(https://img.freepik.com/premium-photo/hands-holding-paper-heart-blue-background-donation-wellness-world-heart-day-world-health-day-happy-valentines-day-concepts_42256-7229.jpg?w=1800)
     center;

        display: flex;
        align-items: center;
        justify-content: right;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    margin: 70px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;


function StyledLoginScreen() {

    // The states are: 
    // (1) null, (2) "client error", (3) "backend error", (4) "loading", (5) "success"

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);
    var { loggedIn, updateUser } = useContext(UserContext);


    // 1. Declare variables (not defined)
    var emailField;
    var passwordField;


    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function login() {


        // 2. Validate the fields
        var errors = [];

        if (emailField.value.length === 0) {
            errors.push('Please enter your email');
        }

        if (passwordField.value.length === 0) {
            errors.push('Please enter your password');
        }

        // 3. If any field is not validated, go to "client error"
        if (errors.length > 0) {
            setFormState("client error");
            setErrorsState(errors);
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/login`,
                {
                    'method': 'POST',
                    'body': formData
                }
            )
                .then(
                    function (backendResponse) {
                        // Convert the HTTP string response to JSON
                        return backendResponse.json();
                    }
                )
                .then(
                    // 7. If backend sends success, go to "success"
                    function (jsonResponse) {
                        if (jsonResponse.status === "ok") {
                            console.log('backend response /users/login', jsonResponse);
                            setFormState("success");

                            // Update the user context
                            updateUser(
                                {
                                    "email": jsonResponse.message.email,
                                    "firstName": jsonResponse.message.firstName,
                                    "lastName": jsonResponse.message.lastName,
                                    "avatar": jsonResponse.message.avatar,
                                    "jsonwebtoken": jsonResponse.message.jsonwebtoken,
                                    "loggedIn": true
                                }
                            );
                        }
                        else {
                            setFormState("backend error");
                        }
                    }
                )
                .catch(
                    // 8. If backends sends error, go to "backend error"
                    function (backendError) {
                        console.log('backendError at /users/login', backendError);
                        setFormState("backend error");
                    }
                );
        }
    }

    function addListItem(str) {
        return <li>{str}</li>;
    }

    if (formState === "success") {
        return (
            <Redirect to="/" />
        );
    }
    else {
        return (


            <Container maxWidth="sm">
                <Wrapper>
                    <Form>
                        <Box pt={8}>
                            <Typography className="text-center" component="h4" variant="h4">
                                SIGN IN
                            </Typography>
                        </Box>

                        <Box mt={4} mb={2}>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <TextField
                                    inputRef={
                                        function (thisElement) {
                                            emailField = thisElement;
                                        }
                                    }
                                    label="Email" required={true} />
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <TextField
                                    inputRef={
                                        function (thisElement) {
                                            passwordField = thisElement;
                                        }
                                    }
                                    type="password"
                                    label="Password" required={true} />
                            </FormControl>
                            <br />
                            <Link href='/register'>CREATE A NEW ACCOUNT?</Link>
                        </Box>

                        <Box display="flex">

                            {
                                formState !== "loading" &&
                                <Button sx={{ 'background-color': '#0d6efd' }} onClick={login} size="large" variant="contained">Sign in</Button>

                            }

                            {
                                formState === "loading" &&
                                <CircularProgress />
                            }
                        </Box>

                        <Box mt={2}>

                            {
                                formState === "client error" &&
                                <Alert severity="error">
                                    <ul>
                                        {
                                            errorsState.map(addListItem)
                                        }
                                    </ul>
                                </Alert>
                            }

                            {
                                formState === "success" &&
                                <Alert severity="success">
                                    You have logged in successfully!
                                </Alert>
                            }
                        </Box>
                    </Form>
                </Wrapper>
            </Container>


        );
    }

}

export default StyledLoginScreen;