import React, { useState } from "react";
import { Form } from "../components";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
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
        <Form.Title>Sign in</Form.Title>
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
        <Form.Submit type="submit" onClick={signIn}>
          Sign in
        </Form.Submit>
        <Form.Text>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </Form.Text>
        <Form.Text>
          New to Amazon?{" "}
          <Form.Link to="/signup"> Create your Amazon Account</Form.Link>
        </Form.Text>
      </Form.Base>
    </Form>
  );
}
