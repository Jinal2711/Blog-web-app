import React from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button, HelperText } from "@windmill/react-ui";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function CreateAccount() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <form onSubmit={handleSubmit()}>
                <Label>
                  <span>Email</span>
                  <Input
                    className="mt-1"
                    type="email"
                    valid={!errors.email}
                    name="email"
                    ref={register}
                    placeholder="john@doe.com"
                  />
                  <HelperText valid={!errors.email}>
                    {errors.email?.message}
                  </HelperText>
                </Label>
                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    valid={!errors.password}
                    name="password"
                    ref={register}
                    placeholder="***************"
                    type="password"
                  />
                  <HelperText valid={!errors.password}>
                    {errors.password?.message}
                  </HelperText>
                </Label>
                <Label className="mt-4">
                  <span>Confirm Password</span>
                  <Input
                    className="mt-1"
                    valid={!errors.password}
                    name="confirm password"
                    ref={register}
                    placeholder="***************"
                    type="password"
                  />
                  <HelperText valid={!errors.password}>
                    {errors.password?.message}
                  </HelperText>
                </Label>

                <Button type="submit" to="/login" block className="mt-4">
                  Create account
                </Button>
              </form>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
