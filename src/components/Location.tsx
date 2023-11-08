// components/Step1.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"

export type TLocation = {
    Street : string
    Suite : string
    City : string
    Zipcode : string
}

const Location = () => {
  const { register } = useFormContext<TLocation>();

  return (
    <div>
      <Input type="text" placeholder="Street"{...register("Street")} />
      <Input type="text" placeholder="Suite"{...register("Suite")} />
      <Input type="text" placeholder="City"{...register("City")} />
      <Input type="text" placeholder="Zipcode"{...register("Zipcode")} />
    </div>
  );
};

export default Location;
