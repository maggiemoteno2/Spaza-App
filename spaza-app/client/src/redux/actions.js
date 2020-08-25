import axios from 'axios'
import jwtDecode from "jwt-decode";
import history from './../history/history'


export const register = (credentials) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:3001/register', credentials)
      const decodedToken = jwtDecode(data.token)
      console.log("decodeToken", decodedToken)
      dispatch({ type: "AUTH_SAVE_USER", payload: decodedToken })
      dispatch({ type: "CHANGE_AUTHORIZATION", payload: true })
      localStorage.setItem("token", data.token)
      history.push('/profile')
    } catch (e) {
      console.log(e)
    }
  }
}


export const signIn = (email, password) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:3001/signIn', email, password)
      if (!data.token) {
        dispatch({ type: 'AUTH_ERROR', payload: data })
        return
      }
      const decodedToken = jwtDecode(data.token)
      dispatch({ type: "SAVE_USER", payload: decodedToken })
      dispatch({ type: "CHANGE_AUTHORIZATION", payload: true })
      localStorage.setItem("token", data.token)
      history.push('/profile')
    } catch (e) {
      console.log(e)
    }
  }
}