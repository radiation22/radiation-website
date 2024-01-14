import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const { createUser, updateUserProfile, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "";

  const handleSignIn = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginError("");
        navigate("/all");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handleSignUp = async (data) => {
    setIsSignUpLoading(true); // Set loading to true when starting the sign-up process
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);
      // console.log(user);

      await handleUpdateUser(data.name, data.email, data.category);
      // saveUser(data.name, data.email, userRole, drivers?.length + 1, imageUrl);

      toast.success("Successfully registered");
      navigate("/all");
    } catch (error) {
      console.error("Image upload or user creation failed:", error);
    } finally {
      setIsSignUpLoading(false); // Set loading to false when the sign-up process is complete
    }
  };

  // const saveUser = (name, email, userRole) => {
  //   const user = { name, email, userRole };
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (loading) {
  //         return <Loader></Loader>;
  //       }
  //       setCreatedUserEmail(email);
  //     });
  // };

  const handleUpdateUser = (name, email) => {
    const profile = {
      displayName: name,
      email,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp); // Toggle between Sign In and Sign Up
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-col p-2  lg:px-3 py-5 rounded-md  bg-gray-100 text-gray-900">
          <div className="mb-4 lg:mb-8 text-center">
            <h1 className="my-3 text-2xl lg:text-4xl font-bold">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>
            <p className="text-[10px] md:text-sm text-gray-400">
              {isSignUp
                ? "Create an account"
                : "Sign in to access your account"}
            </p>
          </div>
          <form
            onSubmit={
              isSignUp ? handleSubmit(handleSignUp) : handleSubmit(handleSignIn)
            }
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full px-3  mt-1 py-2 border border-cyan-600 rounded-md  focus:outline-cyan-500 bg-gray-200 text-gray-900"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email"
                className="w-full  px-3 mt-1 py-2 border border-cyan-600 rounded-md  focus:outline-cyan-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm lg:mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 mt-1 border border-cyan-600 rounded-md  focus:outline-cyan-500 bg-gray-200 text-gray-900"
              />
            </div>
            {isSignUp && (
              <div>
                <label htmlFor="category" className="block mb-2 text-sm">
                  Select Category
                </label>
                <select
                  {...register("category")}
                  id="category"
                  className="w-full px-3 mt-1 py-2 border border-cyan-600 rounded-md  focus:outline-cyan-500 bg-gray-200 text-gray-900"
                >
                  <option value="Northern Ontario">Northern Ontario</option>
                  <option value="Southern Ontario">Southern Ontario</option>
                  <option value="Out of Province">Out of Province</option>
                </select>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full px-8  py-3 font-semibold rounded-md bg-gradient-to-r from-blue-600 to-blue-800 hover:text-white text-gray-100"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
          <div>
            <p className="text-red-600">{loginError}</p>
          </div>
          {!isSignUp && (
            <div className="space-y-2 text-center">
              <button className="text-xs hover:underline text-gray-400">
                Forgot password?
              </button>
            </div>
          )}
          <div className="flex items-center md:pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <p className="lg:px-6  text-sm text-center text-gray-400">
            {isSignUp
              ? "Already have an account?"
              : "Do not have an account yet?"}{" "}
            <button
              onClick={toggleSignUp}
              className="hover:underline text-gray-600"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
