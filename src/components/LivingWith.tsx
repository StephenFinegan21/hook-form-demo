// components/Step1.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { TData } from "@/types/formTypes";




const LivingWith = () => {
  const { register } = useFormContext<TData>(); 

  return (
    <div>
      <Input type="text" placeholder="Spouse" {...register("livingWith.spouse")} /> 
      <Input type="text" placeholder="Children" {...register(`livingWith.children.${0}`)} /> 
      <Input type="text" placeholder="Children" {...register(`livingWith.children.${1}`)} /> 
    </div>
  );
};

export default LivingWith;
