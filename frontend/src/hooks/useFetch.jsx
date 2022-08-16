import { useEffect, useState } from "react";
import { GenericEndpoints } from "../services";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // const res = await axios.get(url);
      const res = await GenericEndpoints.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, reFetch: fetchData };
};

export default useFetch;
