import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostData } from '../api/feed/route';
import { AppContext } from '../../../context/appContext';
import { time } from 'console';

export const usePosts = (limit = 4) => {

  const { seed } = useContext(AppContext) || {};
  const [posts, setPosts] = useState<PostData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("client side feed request")

    axios.get(`/api/feed?page=${page}&limit=${limit}&seed=${seed}`)
         .then(res => {
          console.log(res.data)

          setPosts(prevPosts => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [page, limit]);

  return { posts, loading, hasMore, setPage };
};