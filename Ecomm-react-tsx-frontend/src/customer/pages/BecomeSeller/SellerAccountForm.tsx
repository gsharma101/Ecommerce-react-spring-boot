import { Button, CircularProgress, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import { useFormik } from "formik";
import * as Yup from "yup";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import SellerLoginForm from "./SellerLoginForm";
import { createSeller } from "../../../Redux Toolkit/Seller/sellerAuthenticationSlice";

const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details",
  ];


const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();
  const {sellerAuth}=useAppSelector(store=>store)

  const handleStep = (value: number) => {
    setActiveStep(activeStep + value);
  };

  const [otp, setOpt] = useState<any>();
 
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail:"",
        businessMobile:"",
        logo:"",
        banner:"",
        businessAddress:""
      },
      password: ""
    },
    // validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values, "formik submitted");
      console.log("active step ", activeStep);
      dispatch(createSeller(formik.values))
    },
  });

  const handleOtpChange = (otpValue: string) => {
    setOpt(otpValue);
    console.log(otpValue);
    // formik.setFieldValue("opt",otpValue)
  };

  const handleSubmit = () => {
    //submit form data to server
    formik.handleSubmit();
    console.log("Form Submitted");
  };



    return (
        <div>  <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
            <div className="mt-20 space-y-10">
                <div>
                    {activeStep === 0 ? (
                        <BecomeSellerFormStep1
                            formik={formik}
                            handleOtpChange={handleOtpChange}
                        />
                    ) : activeStep === 1 ? (
                        <BecomeSellerFormStep2 formik={formik} />
                    ) : activeStep === 2 ? (
                        <BecomeSellerFormStep3 formik={formik} />
                    ) : (
                        <BecomeSellerFormStep4 formik={formik} />
                    )}
                </div>

                <div className="flex items-center justify-between ">
                    <Button
                        disabled={activeStep === 0}
                        onClick={() => handleStep(-1)}
                        variant="contained"
                    >
                        Back
                    </Button>
                    <Button
                    disabled={sellerAuth.loading}
                        onClick={
                            activeStep === steps.length - 1
                                ? handleSubmit
                                : () => handleStep(1)
                        }
                        variant="contained"
                    >
                        {activeStep === steps.length - 1 ? sellerAuth.loading ? <CircularProgress size="small"
                        sx={{ width: "27px", height: "27px" }} /> : "create account" : "Continue"}
                    </Button>
                </div>
            </div> </div>
    )
}

export default SellerAccountForm