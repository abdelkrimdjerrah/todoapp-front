import axios, { axiosPrivate } from "@/api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";
import { logoutUser, selectToken } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const useAxiosPrivate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const refresh = useRefreshToken();
  const token = useSelector(selectToken);

  const requestIntercept = axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const responseIntercept = axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 403) {
        dispatch(logoutUser());
        router.push("/");
        await axios.post(`/api/auth/logout`);
      }
      if (error?.response?.status === 403 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [requestIntercept]);

  return axiosPrivate;
};

export default useAxiosPrivate;
