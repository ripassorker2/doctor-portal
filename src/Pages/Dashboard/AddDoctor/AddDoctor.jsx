import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialities = [], isLoading } = useQuery({
    queryKey: ["specialities"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/apointment/specialty");
      const data = await res.json();
      return data;
    },
  });
  const imageBbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAppointDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageBbKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const img = imgData?.data?.url;
          const doctor = {
            name: data?.name,
            email: data?.email,
            image: img,
            speciality: data?.speciality,
          };
          fetch("http://localhost:5000/dashboard/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem(
                "doctor-user-token"
              )}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Doctor added succesfully !!");
                navigate("/dashboard/manegedoctor");
              }
            })
            .catch((err) => console.error(err));
        }
      });
  };

  //   ------------------loading------------------
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center space-x-2 animate-spin">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-secondary text-center text-5xl font-bold my-10">
        Add Doctor
      </h1>
      <div className="flex justify-center items-center my-11 shadow-xl w-[400px] border mx-auto ">
        <form onSubmit={handleSubmit(handleAppointDoctor)}>
          <div className="form-control w-80 mt-5 ">
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
          <div className="form-control w-80 ">
            <label className="label">
              <span className="label-text">Pick a specility</span>
            </label>
            <select
              {...register("speciality", {
                required: "Speciality is required",
              })}
              name="speciality"
              className="select select-ghost select-bordered my-2 w-full "
            >
              {specialities?.map((speciality) => (
                <option key={speciality?._id}>{speciality?.name}</option>
              ))}
            </select>
          </div>

          <div className="form-control w-80 mt-5 ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              placeholder="Photo"
              className="input input-bordered  w-full"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.image?.message}</p>
            )}
          </div>

          <input
            type="submit"
            value={"Add doctor"}
            className="btn w-full mb-5 my-2 mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
