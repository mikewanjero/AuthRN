import axios from "axios";

const BACKEND_URL = "https://authrn-bb7eb-default-rtdb.firebaseio.com/";
const API_KEY = "AIzaSyDsuCuF0dTwHOcXtc4jBBH6CzGyQTeSfQk";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  //console.log(response.data);
  const token = response.data.idToken;
  return token;
}

export function CreateUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
