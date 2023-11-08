// components/Step1.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"

export type TCompany = {
    company : string
    catchPhrase : string
    BS : string
}


const Budget = () => {
  const { register } = useFormContext<TCompany>();

  return (
    <div>
      <Input type="text" placeholder="Company" {...register("company")} />
      <Input type="text" placeholder="catchPhrase" {...register("catchPhrase")} />
      <Input type="text" placeholder="BS" {...register("BS")} />
    </div>
  );
};

export default Budget;
