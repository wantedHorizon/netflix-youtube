import { useState, useEffect } from 'react';
import youtube from '../api/youtube-api';

const useYoutubeVideos = (defaultSearchTerm, setCategories) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        maxResults: 5,
      },
    });
    setCategories((cat) => {
      return [{ ...response.data, title: term }, ...cat];
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    if (defaultSearchTerm.length > 2) {
      search(defaultSearchTerm);
    }
  }, [defaultSearchTerm]);

  return [videos, search];
};

export default useYoutubeVideos;
