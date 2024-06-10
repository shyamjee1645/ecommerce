import axios from 'axios';

// Set the base URL for Axios
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default axios;
