import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContect } from "../../context/AuthProvider/AuthProvider";

const Resister = () => {
  const { createUser, updateUser } = useContext(AuthContect);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleResister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User created succesfully!!");
        navigate("/home");
        const UserInfo = {
          displayName: data.name,
        };
        updateUser(UserInfo)
          .then(toast.success("User updated"))
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center my-11 shadow-lg w-[400px] mx-auto ">
      <form onSubmit={handleSubmit(handleResister)}>
        <h1 className="text-4xl text-center text-secondary font-semibold">
          Resister
        </h1>
        <div className="form-control w-80 ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Fullname"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name?.message}</p>
          )}
        </div>
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
                message: "Password must be 6 character or longer",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])./,
                message: "Password should be strong.",
              },
            })}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password?.message}</p>
          )}
        </div>

        <input
          type="submit"
          value={"Resister"}
          className="btn w-full my-2 mt-3"
        />
        <p className="text-sm text-center">
          Have an account? {""}
          <Link to={"/login"} className="text-secondary">
            Login
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

export default Resister;
