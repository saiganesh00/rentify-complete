import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // If a token is provided, set it as a default header for all Axios requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token is provided, remove the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
