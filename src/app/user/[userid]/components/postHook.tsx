import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostData } from '../../../api/feed/route';
import { AppContext } from '../../../../../context/appContext';

export const usePosts = (limit = 4) => {

  const { currSearchId, currSort, currQuery } = useContext(AppContext) || {};
  // const { setPosts, page } = useContext(AppContext) || {};
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    setLoading(true);
    console.log("client side feed request")
    let s = currSort;
    let q = currQuery; 

    axios.get(`/api/user?page=${page}&limit=${limit}&sort=${s}&userid=${currSearchId}&query=${q}`)
         .then(res => {
          console.log(res.data)

          setPosts((prevPosts : any)  => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [page, limit]);

  return {page, posts, setPosts, setPage, loading, hasMore };
};