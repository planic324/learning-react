import axios from 'axios';

export const getPost = id =>
    axios.get(`https://jsonplaceholder.typicode.com/post/${id}`);

export const getUsers = id =>
    axios.get(`https://jsonplaceholder.typicode.com/user`);