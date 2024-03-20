import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostData } from '../api/feed/route';
import { AppContext } from '../../../context/appContext';

export const usePosts = (limit = 4) => {

  const { seed } = useContext(AppContext) || {};
  // const { setPosts, page } = useContext(AppContext) || {};
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    console.log("client side feed request")

    axios.get(`/api/feed?page=${page}&limit=${limit}&seed=${seed}`)
         .then(res => {
          console.log(res.data)

          setPosts((prevPosts : any)  => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [page, limit]);

  return { posts, setPosts, setPage, loading, hasMore };
};