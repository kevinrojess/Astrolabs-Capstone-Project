import { useEffect, useContext, useState } from "react";
import { UserContext } from '../components/UserContext';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { CircularProgress, Box, Alert, TextField, Avatar, Button, Checkbox } from '@mui/material';



function ProfileScreen() {

    const [userDetails, setUserDetails] = useState();
    const { jsonwebtoken, updateUser } = useContext(UserContext);


    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);
    var [changePassword, setChangePassword] = useState(false);

    var firstNameField;
    var lastNameField;
    var emailField;
    var avatarField;
    var passwordField;
    var addressField;
    var phoneField;
    var passwordRadio;


    useEffect(
        function () {

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,
                {
                    'method': 'POST',
                    'headers': {
                        'Authorization': `Bearer ${localStorage.getItem('jsonwebtoken')}`
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
                        setUserDetails(jsonResponse);
                        updateUser(
                            {
                                jsonwebtoken,
                                ...jsonResponse,
                            }
                        );
                    }
                )
                // This will catch errors if any
                .catch(
                    function (backendError) {
                        console.log('backendError', backendError);
                    }
                );
        },

        []
    );

    var forFormData = new FormData;

    function attachFile(evt) {

        console.log('file data', evt.target.files);
        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(
            function (fileAttachment, index) {
                forFormData.append(index, fileAttachment);
            }
        );
    }

    function update() {

        // 2. Validate the fields
        var errors = [];

        if (emailField.value.length === 0) {
            errors.push('Please enter your email');
        }

        if (passwordField.value.length === 0 && changePassword === true) {
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
            forFormData.append('firstName', firstNameField.value);
            forFormData.append('lastName', lastNameField.value);
            forFormData.append('email', emailField.value);
            forFormData.append('address', addressField.value);
            forFormData.append('phone', phoneField.value);
            forFormData.append('avatar', avatarField.value);
            if (changePassword) {
                forFormData.append('password', passwordField.value);
            }

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/update`,
                {
                    'method': 'PUT',
                    'body': forFormData
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
                            console.log('backend response /users/update', jsonResponse);
                            setFormState("success");

                            // Update the user context
                            updateUser(
                                {
                                    ...userDetails,
                                    ...jsonResponse
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
                        console.log('backendError at /users/update', backendError);
                        setFormState("backend error");
                    }
                );
        }
    }

    function togglePasswordChange(event) {
        setChangePassword(event.currentTarget.checked);
    }

    function addListItem(str) {
        return <li>{str}</li>;
    }

    if (userDetails) {

        return (
            <div style={{ backgroundColor: '#eee' }}>

                {/* lil navbar */}
                <MDBContainer className="py-4">
                    <MDBRow>
                        <MDBCol>
                            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                <MDBBreadcrumbItem>
                                    <a href='/'>Home</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem>
                                    <a href="/">User</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCol>
                    </MDBRow>


                    {/* card with avatar */}
                    <MDBRow>
                        <MDBCol lg="3">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <Avatar
                                        src={userDetails.avatar}
                                        alt=""
                                        className="rounded-circle"
                                        style={{ width: 200, height: 200, margin: '0 auto' }}
                                        fluid />
                                    <br />
                                    <Button sx={{ 'background-color': '#0d6efd' }} size="small" variant="contained" component="label">
                                        Upload
                                        <input
                                            ref={function (thisElement) { avatarField = thisElement; }}
                                            onClick={attachFile}
                                            onChange={attachFile}
                                            accept="image/*"
                                            type='file'
                                            style={{ display: 'none' }}
                                        />
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>


                        </MDBCol>


                        {/* card for update */}
                        <MDBCol lg="8" >
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <form fullWidth sx={{ mb: 2 }}>
                                            <TextField
                                                inputRef={
                                                    function (thisElement) {
                                                        firstNameField = thisElement;
                                                    }
                                                }
                                                label='First Name'
                                                required={true}
                                                defaultValue={userDetails.firstName}
                                            />
                                        </form>
                                    </MDBRow>

                                    <hr />

                                    <MDBRow>
                                        <form>
                                            <TextField
                                                label='Last Name'
                                                inputRef={
                                                    function (thisElement) {
                                                        lastNameField = thisElement;
                                                    }
                                                }
                                                required={true}
                                                defaultValue={userDetails.lastName}
                                            />
                                        </form>
                                    </MDBRow>

                                    <hr />

                                    <MDBRow>
                                        <form>
                                            <TextField
                                                label='Phone'
                                                type="number"
                                                inputRef={
                                                    function (thisElement) {
                                                        phoneField = thisElement;
                                                    }
                                                }
                                                required={true}
                                                defaultValue={userDetails.phone}

                                            />
                                        </form>
                                    </MDBRow>

                                    <hr />

                                    <MDBRow>
                                        <form>
                                            <TextField fullWidth
                                                label='Address'
                                                inputRef={
                                                    function (thisElement) {
                                                        addressField = thisElement;
                                                    }
                                                }
                                                required={true}
                                                defaultValue={userDetails.address}

                                            />
                                        </form>
                                    </MDBRow>

                                    <hr />

                                    <MDBRow>
                                        <form>
                                            <TextField fullWidth
                                                label='Email'
                                                inputRef={
                                                    function (thisElement) {
                                                        emailField = thisElement;
                                                    }
                                                }
                                                required={true}
                                                value={userDetails.email}
                                            />
                                        </form>
                                    </MDBRow>

                                    <hr />

                                    <form fullWidth sx={{ mb: 2 }}>
                                        <TextField
                                            disabled={!changePassword}
                                            inputRef={
                                                function (thisElement) {
                                                    passwordField = thisElement;
                                                }
                                            }
                                            label="Password"
                                        />
                                    </form>
                                    <Checkbox
                                        onChange={togglePasswordChange}
                                        inputRef={function (thisElement) { passwordRadio = thisElement; }} />Change password?

                                    <hr />

                                    <Box display="flex">

                                        {
                                            formState !== "loading" &&
                                            <Button sx={{ 'background-color': '#0d6efd' }} onClick={update} size="large" variant="contained">Update</Button>
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
                                                You have updated your profile successfully!
                                            </Alert>
                                        }
                                    </Box>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
    //Loading
    else {
        return (
            <p>Loading...</p>
        );
    }
}

export default ProfileScreen;