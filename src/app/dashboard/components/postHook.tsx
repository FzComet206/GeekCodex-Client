import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostData } from '../../api/feed/route';
import { AppContext } from '../../../../context/appContext';

export const usePosts = (limit = 4) => {

  const { seed } = useContext(AppContext) || {};
  const { selfPosts, setSelfPosts, setPage, selfPage} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("client side self request")

    axios.get(`/api/self?page=${selfPage}&limit=${limit}}`)
         .then(res => {
          console.log(res.data)

          setSelfPosts(prevPosts => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [selfPage, limit]);

  return { loading, hasMore };
};