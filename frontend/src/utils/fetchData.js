import { GenericEndpoints } from "../services";

export const fetchData = async (
  url,
  type,
  dispatch,
  payloadReturn
) => {
  dispatch({ type: type.LOADING });
  // setLoading(true);
  try {
    // const res = await axios.get(url);
    const res = await GenericEndpoints.get(url);
    dispatch({
      type: type.SUCCESS,
      payload: payloadReturn
        ? payloadReturn(res.data.data)
        : res.data.data.doc,
    });

    //   setData(res.data);
  } catch (err) {
    dispatch({ type: type.FAIL, payload: err });

    //   setError(err);
  }
  // setLoading(false);
};
