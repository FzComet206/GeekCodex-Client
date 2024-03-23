import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../../../context/appContext';
import { DashboardRow } from '../../api/dashboardrow/route';


export const useDashboard = (limit = 4) => {

  const { seed } = useContext(AppContext) || {};
  // const { setPosts, page } = useContext(AppContext) || {};
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [row, setRow] = useState<DashboardRow[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    console.log("client side follower request")

    axios.get(`/api/dashboardrow?page=${page}&limit=${limit}`)
         .then(res => {
          console.log(res.data)

          setRow((prevPosts : any)  => [...prevPosts, ...res.data]);
          setHasMore(res.data.length > 0);
          setLoading(false);

         }).catch(e => console.error(e));

  }, [page, limit]);

  return {page, row, setRow, setPage, loading, hasMore };
};