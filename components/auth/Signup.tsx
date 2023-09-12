'use client'
import { Eye, EyeSlash } from "phosphor-react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useContext, useState } from "react";
import axios from "../../api/axios";
import { AuthContext, AuthContextType } from "@/context/authContext";

function SignUp() {

  const { setAuthType } = useContext(AuthContext) as AuthContextType;

  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {

      const userDetails = {
        username,
        email,
        password
      };
      const { data } = await axios.post(
        `/api/users`,
        userDetails
      );

      if (!data?.success) {
        console.log("error");
        return;
      }

    } catch (error) {
      console.log("error");
    } finally {
      // setLoading(false);
    }
  };


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white h-fit px-5 py-12 rounded-2xl w-1/3 min-w-[400px] border">
        <div className="flex flex-col gap-2 items-center">
         
         <div className="text-3xl">Create account</div>

          <div className="flex flex-col gap-2 mt-3 mb-3 w-full">
            <div>
              <p>Email</p>
              <Input
                text="Enter your email"
                type="email"
                widthFull
                onChange={(v) => setEmail(v)}
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
                    onChange={(v) => setPassword(v)}
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

          <Button widthFull onClick={handleSignup}>
            Create account
          </Button>

          <div className="text-sm flex justify-center gap-1">
            <span>Already have an account?</span>
            <span
              className="underline cursor-pointer font-medium"
              onClick={() => {
                setAuthType("login");
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
