import { useState } from "react";
import type { Res } from "../components/sections/Main/Contact/Form.type";
import emailjs from "@emailjs/browser";

const useSubmitForm = () => {
  // get the user data of form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const defaultValue = {
    status: 0,
    text: "",
  };

  // to disable submit button
  const [isSending, setIsSending] = useState(false);

  // to report the result
  const [success, setSuccess] = useState<Res>(defaultValue);
  const [error, setError] = useState<Res>(defaultValue);

  // connect to emilJS
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await emailjs.send(serviceId, templateId, formData, publicId);
      setSuccess(res);
    } catch (error) {
      setError(error as Res);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setError(defaultValue);
        setSuccess(defaultValue);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 5000);
    }
  };
  return { handleSubmit, success, error, isSending, formData, setFormData };
};

export default useSubmitForm;
