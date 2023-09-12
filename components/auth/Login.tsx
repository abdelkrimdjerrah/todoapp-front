'use client'
import { Eye, EyeSlash} from "phosphor-react";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoginData,
  setLoginData,
  setAccessToken,
  setUserData,
} from "@/redux/userSlice";
import Link from 'next/link';
import axios from "@/api/axios";
import { AuthContext, AuthContextType } from "@/context/authContext";

function Login() {

  const { setAuthType } = useContext(AuthContext) as AuthContextType;

  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  const dispatch = useDispatch();

  let { email, password } = useSelector(selectLoginData);
 
  const [loading, setLoading] = useState(false);

  // handle inputs
  const setValue = useCallback((type: string, data: any) => {
    dispatch(setLoginData({ type, data }));
  }, []);

  const [error, setError] = useState("");

  // login
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('')

      let userData = { email, password };
      if(!email){
        email = 'test@gmail.com'
      }
      if(!password){
        password = 'test'
      }

      const { data } = await axios.post(`/api/auth/login`,userData,{
        headers: {
          withCredentials: "true",
          credentials: 'include'
        },
        withCredentials: true,
      });

    
      if (!data?.success) {
        data?.message ? setError(data?.message) : setError('Server error')
        return;
      }

      dispatch(
        setLoginData({
          type: "reset",
        })
      );
      dispatch(
        setAccessToken({
          type: "token",
          data: data?.accessToken,
        })
      );

      dispatch(
        setUserData({
          type: "user",
          data: data?.userData,
        })
      );

      <Link href="/" />

    } catch (error) {
      setError('Server error')
    } finally {
      setLoading(false);
    }
  };

    // clean up
    useEffect(() => {
      return () => {
        dispatch(
          setLoginData({
            type: "reset",
          })
        );
      };
    }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white  h-fit px-5 py-12 rounded-2xl w-1/3  min-w-[400px] border">
        <div className="flex flex-col gap-2 items-center">
         
         <div className="text-3xl">Login</div>
          
          {error.length ? (
            <div className="text-red-500 flex justify-center font-medium">
              <p>{error}</p>
            </div>
          )  : null
         }
          <div className="flex flex-col gap-2 mt-3 mb-3 w-full">
            <div>
                <p>Email</p>
                <Input  
                text="Enter your email"
                type="email"
                widthFull
                onChange={(v) => setValue("email", v)}
                value={email}
                />
            </div>
            <div>
                <p>Password</p>
                <div className="relative">
                    <Input
                    text="Enter your password"
                    type={toggleShowPassword ? "text" : "password"}
                    widthFull
                    onChange={(v) => setValue("password", v)}
                    value={password}
                    />
                    {
                        toggleShowPassword
                        ? <EyeSlash size={20} className="absolute text-zinc-400 right-3 top-3 cursor-pointer" onClick={() => setToggleShowPassword(!toggleShowPassword)} />
                        : <Eye size={20} className="absolute text-zinc-400  right-3 top-3 cursor-pointer" onClick={() => setToggleShowPassword(!toggleShowPassword)} />
                    }
                </div>
            </div>
          </div>

          {
            loading ?
              <Button widthFull loading onClick={handleLogin}>
                Login
              </Button>
              : <Button widthFull onClick={handleLogin}>
                Login
              </Button>

          }

          <div className="text-sm flex justify-center gap-1">
            <span>Don't have an account?</span>
            <span
              className="underline cursor-pointer font-medium"
              onClick={() => {
                setAuthType('signup')
              }}
            >
              Create an account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
