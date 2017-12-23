import axios from "axios";
import {AUTH_USER, AUTH_ERROR} from "./types";
const ROOT_URL = "http://localhost:3090";

export function signinUser({email, password}, history){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin` , {email, password})
    .then(function(response){

      dispatch({ type: AUTH_USER });

      localStorage.setItem('token', response.data.token);

      history.push('/feature');
    }).catch(function(){
      dispatch(authError("Bad Login info"));
    })
  }
};

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
