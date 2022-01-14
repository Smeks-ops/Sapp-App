import React from "react";
import { postData } from "../hooks/usePostData";

export const useAuthForm = callback => {
    const [inputs, setInputs] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (authType) => {
      let data;
      const url = `https://usrauth.herokuapp.com/api/v1/${authType === 'register' ? 'signup' : 'login'}`;
      try {
        setIsSubmitting(true);
        if (authType === "register") { 
          data = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            password: inputs.password,
            userRoleId: 'c5ae281b-54af-4f3c-b463-0457f87b6234'
          };
        } else if (authType === "login") {
          data = {
            email: inputs.email,
            password: inputs.password
          };
        }
        const response = await postData(url, data);
        console.log("🚀 ~ file: useAuthForm.js ~ line 15 ~ response", response)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.loggedInUser));
        setIsSubmitting(false);
      } catch (error) {
        setIsSubmitting(false);
        return error
      }
    };
  
    const handleInputChange = event => {
      event.persist();
      setInputs(inputs => ({
        ...inputs,
        [event.target.name]: event.target.value
      }));
    };
    return {
      handleSubmit,
      isSubmitting,
      handleInputChange,
      inputs
    };
  };