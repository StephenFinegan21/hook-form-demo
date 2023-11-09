import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import LivingWith from "./LivingWith";
import Location from "./Location";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { TData } from "@/types/formTypes";
import router from "next/router";



const FormWrapper = ({ userData, currentStep } : any) => {
  const methods = useForm<TData>({
    defaultValues: userData || {}, // Initialize the form data with userData
    mode: 'onChange',
  });
  const totalSteps = 3; // Set the total number of steps
  const formIsValid = methods.formState.isValid
  const isLastPage = currentStep === 3


  const goToNextStep = async () => {
    if (currentStep < totalSteps) {

     await methods.trigger(); // Trigger form validation before proceeding
      if (formIsValid) {
        if(!isLastPage){
          onSubmitStep()
        }
      
        const nextStep = parseInt(currentStep) + 1;
        router.push(`/profile/${nextStep}`);
        
      }
      else{
        console.log('failed', methods.formState.errors)
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      const previousStep = parseInt(currentStep) - 1;
      router.push(`/profile/${previousStep}`);
    }
  };

  const onSubmitStep = async () => {
    const data = methods.getValues();
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const response = await fetch(`https://654b5c845b38a59f28eeef6b.mockapi.io/api/v1/tenants/tenantprofile/1
    `, requestOptions);
    if (response.ok) {
     
    } else {
      console.error("Error updating user data on the server");
      // Handle the error gracefully
    }
  };

  const {handleSubmit} = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitStep)}>
        {currentStep == 1 && (
          <Card className="p-6">
            <CardHeader>
              <UserInfo  />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous  
                </Button>
                <Button type="button" onClick={goToNextStep}>
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep == 2 && (
          <Card className="p-6">
            <CardHeader>
              <LivingWith  />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous
                </Button>
                <Button type="button" onClick={goToNextStep}>
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep == 3 && (
          <Card className="p-6">
            <CardHeader>
              <Location  />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous
                </Button>
                <Button type="submit">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
