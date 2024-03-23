import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostData } from '../../api/feed/route';
import { AppContext } from '../../../../context/appContext';

export const usePosts = (limit = 4) => {

  const { seed } = useContext(AppContext) || {};
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [ posts, setPosts ] = useState<PostData[]>([]);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    setLoading(true);
    console.log("client side self request")

    axios.get(`/api/self?page=${page}&limit=${limit}}`)
         .then(res => {
          console.log(res.data)

          setPosts(prevPosts => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [page, limit]);

  return { page, posts, setPosts, setPage, loading, hasMore };
};