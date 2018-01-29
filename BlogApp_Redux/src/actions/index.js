import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LALALALA123';

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
    console.log( 'request: ', request );

    return {
        type: FETCH_POSTS,
        payload: request
    };
}