import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid2";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; 
import { Button, Typography, Alert, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";

function SignInTemplate() {

    const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "#7ae6a3"
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupSeverity, setPopupSeverity] = useState("success");

  const handleSignInEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignInPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpEmailChange = (e) => {
    setSignUpEmail(e.target.value);
  };

  const handleSignUpPasswordChange = (e) => {
    setSignUpPassword(e.target.value);
  };

  const handleClosePopup = (e) => {
    setPopupOpen(false);
  };

  
  const signIn = async () => { //SIGN IN
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      setPopupSeverity("success");
      setPopupMessage("Sign in successful!");
      setPopupOpen(true);
    } catch (err) {
      console.error("Error signing in:", err.message);
      setPopupSeverity("error");
      setPopupMessage("Sign in failed: " + err.message);
      setPopupOpen(true);
    }
  };

  const signUp = async () => { //SIGN UP
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      console.log("User signed up:", userCredential.user);
      setPopupSeverity("success");
      setPopupMessage("Sign up successful!");
      setPopupOpen(true);
    } catch (err) {
      console.error("Error signing up:", err.message);
      setPopupSeverity("error");
      setPopupMessage("Sign up failed: " + err.message);
      setPopupOpen(true);
    }
  };

  return (
    <>
    <Grid container direction="column" alignItems="center">
      <Grid size={12}>
        <Header title={"Sign In"} subHeader={true} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }} direction="column" alignItems="center">
        <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
          Email
        </Typography>
        <TextField
          sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
          id="sign-in-email"
          label="Email"
          value={email}
          onChange={handleSignInEmailChange}
        />
        <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
          Password
        </Typography>
        <TextField
          sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
          id="sign-in-pass"
          label="Password"
          type="password"
          value={password}
          onChange={handleSignInPasswordChange}
        />
        <Button variant="contained" onClick={signIn}>
          Sign In
        </Button>
      </Grid>

      <Grid container sx={{ flex: "1 1 500px" }} direction="column" alignItems="center">
        <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
          Don't have an Account? Sign up!
        </Typography>

        <TextField
          sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
          id="sign-up-email"
          label="Email"
          value={signUpEmail}
          onChange={handleSignUpEmailChange}
        />
        <TextField
          sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
          id="sign-up-pass"
          label="Password"
          type="password"
          value={signUpPassword}
          onChange={handleSignUpPasswordChange}
        />
        <Button variant="contained" onClick={signUp}>
          Sign Up
        </Button>
      </Grid>
    </Grid>

    <Snackbar //POPUP SIGNIN/SIGNUP
        open={popupOpen}
        autoHideDuration={6000}
        onClose={handleClosePopup}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClosePopup} severity={popupSeverity} sx={{ width: "100%" }}>
          {popupMessage}
        </Alert>
      </Snackbar>
  </>
  );
}
export default SignInTemplate;