import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContect } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../utilities";

const Login = () => {
  const { loginUser, setLoading } = useContext(AuthContect);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/home";

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const token = useToken(loginUserEmail);
  console.log(token);

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email);
        setLoading(false);
        // setLoginUserEmail(user.email);
        // console.log(user);
        toast.success("Login succesfully !!");
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center my-11 shadow-lg w-[400px] mx-auto ">
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 className="text-4xl text-center text-secondary font-semibold">
          Login
        </h1>
        <div className="form-control w-80 ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email address is required" })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: "Password id required",
              minLength: {
                value: 6,
                message: "Password must should be 6 character or longer",
              },
            })}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt font-semibold ">
              Forget password ?
            </span>
          </label>
        </div>
        {/* <p>{data}</p> */}
        <input type="submit" value={"Login"} className="btn w-full mb-2" />
        <p className="text-sm text-center">
          New to doctor portal?
          <Link to={"/resister"} className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn w-full  mb-4 btn-outline">
          Continiue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
