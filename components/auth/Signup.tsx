import { Eye, EyeSlash } from "phosphor-react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useContext, useState } from "react";
import axios from "../../api/axios";
import { AuthContext, AuthContextType } from "@/context/authContext";

function SignUp() {
  const { setAuthType, setHasBeenRegistered } = useContext(
    AuthContext
  ) as AuthContextType;

  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const userDetails = {
        email,
        password,
      };

      const { data } = await axios.post(`/api/users`, userDetails);

      if (!data?.success) {
        setError(data?.message);
        return;
      }

      setAuthType("login");
      setHasBeenRegistered(true);
    } catch (error: any) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white h-fit px-5 py-12 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[33%] border">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-3xl">Create account</div>

          {error && (
            <div className="text-red-500 flex justify-center font-medium">
              {error}
            </div>
          )}

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
                {toggleShowPassword ? (
                  <EyeSlash
                    size={20}
                    className="absolute text-zinc-400 right-3 top-3 cursor-pointer"
                    onClick={() => setToggleShowPassword(!toggleShowPassword)}
                  />
                ) : (
                  <Eye
                    size={20}
                    className="absolute text-zinc-400  right-3 top-3 cursor-pointer"
                    onClick={() => setToggleShowPassword(!toggleShowPassword)}
                  />
                )}
              </div>
            </div>
          </div>

          {loading ? (
            <Button widthFull loading onClick={handleSignup}>
              Create account
            </Button>
          ) : (
            <Button widthFull onClick={handleSignup}>
              Create account
            </Button>
          )}

          <div className="text-sm flex justify-center gap-1">
            <span>Already have an account?</span>
            <span
              className="underline cursor-pointer font-medium text-[#7B3DFF]"
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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
