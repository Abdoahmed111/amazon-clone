import React, { useState } from "react";
import { Form } from "../components";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) =>
        auth.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            history.push("/");
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <Form>
      <Link to="/">
        <Form.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>

      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base>
        <Form.Title>Sign up</Form.Title>
        <Form.Label>First Name</Form.Label>
        <Form.Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Label>E-mail</Form.Label>
        <Form.Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Submit type="submit" onClick={register}>
          Create a New Account
        </Form.Submit>
        <Form.Text>
          By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </Form.Text>
        <Form.Text>
          Already have an account?
          <Form.Link to="/login"> Login </Form.Link>
        </Form.Text>
      </Form.Base>
    </Form>
  );
}
