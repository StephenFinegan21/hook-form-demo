import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { TData } from "@/types/formTypes";

const UserInfo = () => {
  const { register  } = useFormContext<TData>();



  return (
 
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Name"
        {...register("personal.firstName", { required: true })}
      />
      <Input
        type="text"
        placeholder="Last Name"
        {...register("personal.lastName")}
      />
      <Input
        type="number"
        placeholder="Age"
        {...register("personal.age")}
      />
      <Input
        type="text"
        placeholder="Gender"
        {...register("personal.gender")}
      />
      <Input
        type="email"
        placeholder="Email"
        {...register("personal.email")}
      />
      <Input
        type="text"
        placeholder="Phone"
        {...register("personal.phone")}
      />
    </div>
  );
};

export default UserInfo;
