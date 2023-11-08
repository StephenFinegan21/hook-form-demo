// components/Step1.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export type TUserInfo = {
    name : string
    userName : string
    email : string
    phone : string
}

const UserInfo = () => {
  const { register } = useFormContext<TUserInfo>();

  return (
    <div className="flex flex-col gap-2">
      <Input type="text" placeholder="Name" {...register("name")} />
      <Input type="text" placeholder="UserName" {...register("userName")} />
      <Input type="email" placeholder="Email" {...register("email")} />
      <Input type="phone" placeholder="Phone" {...register("phone")} />
    </div>
  );
};

export default UserInfo;
