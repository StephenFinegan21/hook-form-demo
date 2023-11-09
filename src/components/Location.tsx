// components/Step1.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { TData } from "@/types/formTypes";

const Location = () => {
  const { register} = useFormContext<TData>(); 

  return (
    <div>
      <Input
        type="text"
        placeholder="Street"
        {...register("location.street")}
      />
      <Input
        type="text"
        placeholder="Suite"
        {...register("location.city")}
      />
      <Input
        type="text"
        placeholder="City"
        {...register("location.country")}
      />
      <Input
        type="text"
        placeholder="Zipcode"
        {...register("location.zipCode")}

      />
    </div>
  );
};


export default Location;