import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [passwordhash, setPasswordHash] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
        
            method: "POST",
            body: JSON.stringify({
                user: { username: username, passwordhash: passwordhash },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
    
            .then(
                (response) => response.json()
            )
            .then((data) => {
                props.updateToken(data.sessionToken);
            })
            
                    // if (Input.value === "") {
                    //     Input.style.background = "Yellow";
                    //     let error = "You didn't enter a username.";
                    //     alert(error);
                    //      return false;
                    // }
    };

    return (
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                        value={username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        onChange={(e) => setPasswordHash(e.target.value)}
                        name="passwordhash"
                        value={passwordhash}
                    />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    );
};

export default Signup;
