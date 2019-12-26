import axios from 'axios';

const instance = axios.create({
baseURL: 'https://react-my-burger-b7d2c.firebaseio.com/'
});

export default instance;