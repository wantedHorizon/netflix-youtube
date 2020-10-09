import { useState, useEffect } from 'react';
import youtube from '../api/youtube-api';

const useYoutubeVideos = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const response = await youtube.get('/search', {
        params: {
          q: debouncedTerm,
          maxResults: 5,
        },
      });
      setResults([{ ...response.data, title: debouncedTerm }]);
    };
    if (debouncedTerm.length > 2) {
      search();
    }
  }, [debouncedTerm]);

  return [results, term, setTerm];
};

export default useYoutubeVideos;
