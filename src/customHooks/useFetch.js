import { useCallback, useEffect, useState } from "react";
import { api } from "../api/apiResource";

const useFetch = (url, userData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await api.get(url).catch((error) => {
      return setError(error.message);
    });
    setData(res.data);
    setLoading(false);
    setError(null);

    if (userData) {
      const res = await api.post(url, userData);
      console.log(res.data);
      return setData((prev) => [...prev, res.data]);
    }
  }, [url, userData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!error) {
    return { data, error, loading };
  } else {
    return { error, loading };
  }
};

export default useFetch;
