import axios from "axios";
import { useState } from "react"
import { message } from "antd";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL|| "http://localhost:5521";

export default function Auth() {

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function submitHandler(){
    setIsLoading(true);
    axios.post(`${backendUrl}/auth/login`, data).then(res => {
      const authToken = res.data;
      localStorage.setItem("auth_token", authToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('auth_token')}`;
      message.success("Hey there! Welcome...");

  
        navigate("/add-ticket");
  
    }).catch(err => {
      console.log(err);
      message.error("Invalid credentials!! Please try again...");
    }).finally(()=>{
      setIsLoading(false);
    })
  }

    return (
      <div className="w-screen h-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-32 w-auto"
              src="/logo.png"
              alt="Your Company"
            /> */}
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="text"
                    type="text"
                    value={data.username}
                    onChange={(e) => {
                        setData(prev => {
                            return ({
                                ...prev,
                                username: e.target.value
                            });
                        });
                    }}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => {
                        setData(prev => {
                            return ({
                                ...prev,
                                password: e.target.value
                            });
                        });
                    }}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                onClick={submitHandler}
                  type="button"
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 disabled:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isLoading}
                >
                  {
                    isLoading && <span className="animate-spin"><ImSpinner9 /></span>
                  }
                  <span>Sign in</span>
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
  