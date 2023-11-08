import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Budget from "./Budget";
import Location from "./Location";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TUserInfo } from "@/components/UserInfo";
import { TCompany } from "@/components/Budget";
import { TLocation } from "@/components/Location";

export type TData = {
  userInfo: TUserInfo;
  companyInfo: TCompany;
  locationInfo: TLocation;
};

const FormWrapper = () => {
  const methods = useForm<TData>();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Set the total number of steps

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data : TData) => {
    console.log(data); // You can submit the data to your server here.
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        username: data.userName,
        email: data.email,
        phone: data.phone,
        address: {
          street: data.Street,
          suite: data.Suite,
          city: data.City,
          zipcode: data.Zipcode
        },
        company: {
          name: data.company,
          catchphrase: data.catchPhrase,
          bs: data.BS
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <Card className="p-6">
            <CardHeader>
              <UserInfo />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous
                </Button>
                <Button type="button" onClick={goToNextStep}>
                  Next
                </Button>{" "}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="p-6">
            <CardHeader>
              <Budget />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous
                </Button>
                <Button type="button" onClick={goToNextStep}>
                  Next
                </Button>{" "}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="p-6">
            <CardHeader>
              <Location />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button type="button" onClick={goToPreviousStep}>
                  Previous
                </Button>
                <Button type="submit">Submit</Button>{" "}
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
