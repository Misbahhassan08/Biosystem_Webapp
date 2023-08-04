import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { baseApiUrl } from "../../config";
import Spinner from "../shared/spinner";
import { fetchPostReq } from "../../services/restService";

function Login() {
  const user_login = baseApiUrl + "/api/login"
  const apiUrl = baseApiUrl + "/api/check_login";

  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    document.title = "Acenxion | Lab Login";
    if (!localStorage.getItem('_session_token')){
    setLoggedIn(false)
  }
  }, []);

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const req_Data={
        _username : userName,
        _password : password,
        _session_token: localStorage.getItem("_session_token")
    }
   console.log(userName, password)
    try {
        const response = await fetchPostReq(user_login, req_Data);
        setIsLoading(true)
        if (response.message === "User Already Logged In" || response.message === "Login successful"){
            setLoggedIn(true)
            console.log("alreay logged in");
        }
        if (response.token){
        localStorage.setItem('_session_token', response.token)
            setLoggedIn(true)
            setIsLoading(false)
        }
        console.log(response, "req datas") ;
    } catch (error) {
        console.log(error);
        setIsLoading(false)
    }
 }

  return (
    <>
    {loggedIn && <Navigate to={process.env.PUBLIC_URL + "/readerstatus"} />}
      <div className="layout-right-side">
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <Container>
            <Row className="justify-content-md-center align-items-center manually-card">
              <Card style={{ width: "40rem" }}>
                <Card.Body>
                  <Card.Title className="mt-2 text-light-blue main-title mb-4 text-uppercase justify-content-center login-title">
                    LAB LOG IN
                  </Card.Title>

                  <Form
                    noValidate
                  >
                    <Form.Control
                      type="text"
                      id="uname"
                      aria-describedby="usernameHelpBlock"
                      className="mt-3"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="password"
                      id="inputPinPassword"
                      aria-describedby="PinPasswordHelpBlock"
                      className="mt-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="d-flex mx-auto justify-content-center">
                      <Button
                        type="submit"
                        className="mt-2 d-flex justify-content-center cancel-btn"
                        onClick={() => {
                          setUserName("");
                          setPassword("");
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="warning"
                        className="mt-2 d-flex justify-content-center  mx-2"
                        onClick={handleSubmit}
                      >
                        Ok
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}

export default Login;
