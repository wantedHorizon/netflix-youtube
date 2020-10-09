import axios from 'axios';

// const KEY = 'AIzaSyCEFfEcLTX9ZKIY2UHfOjY4cBEtiJQy6v8';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
