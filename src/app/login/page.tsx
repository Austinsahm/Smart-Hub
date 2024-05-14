// "use-client";
import Image from "next/image";
import React, { FormEvent } from "react";
import Link from "next/link";

const loginPage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 gap-0 h-full">
        <div className="bg-primary-color h-full flex justify-center items-center w-full">
          <Image src="/Logo.png" width={500} height={500} alt="Logo" />
        </div>
        <div className="bg-white h-full flex justify-center items-center w-full ">
          <div className="bg-accent-color p-6 rounded-xl">
            <div className="text-primary-color font-bold w-full justify-center items-center mb-4">
              Welcome Back
            </div>
            <form>
              <div className="label">
                <span className="label-text">Email Address</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 bg-white text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="" placeholder="Email Address" />
              </label>

              <div className="pb-4">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
                <div className="label">
                  <span className="label-text-alt"></span>
                  <Link className="label-text-alt" href="#">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button className="btn border-0 bg-primary-color w-full text-white">
                Submit
              </button>
            </form>
            <div className="text-xs w-full justify-center items-center">
              Don’t have an account? <Link href="#">Sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
