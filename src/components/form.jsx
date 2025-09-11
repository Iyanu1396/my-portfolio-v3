import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";

function Form() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    const templateParams = {
      name: data.name,
      mail: data.mail,
      offer: data.offer,
    };

    try {
      setIsLoading(true);
      const response = await emailjs.send(
        "service_r7hua8b",
        "template_f9otiu7",
        templateParams,
        "UAWcnE08apwtLRMBa"
      );
      console.log("SUCCESS!", response.status, response.text);
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-2"
    >
      <input
        className="w-full border border-[#6f1cd7] bg-inherit p-4 focus:outline-none"
        type="text"
        placeholder="What's your name?"
        {...register("name", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-700">
        {errors?.name?.message}
      </span>
      <input
        className="w-full border border-[#6f1cd7] bg-inherit p-4 focus:outline-none"
        type="email"
        placeholder="What's your @email?"
        {...register("mail", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-700">
        {errors?.mail?.message}
      </span>

      <input
        className="w-full border border-[#6f1cd7] bg-inherit p-4 focus:outline-none"
        type="text"
        placeholder="What do you have to tell me/offer me?"
        {...register("offer", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-700">
        {errors?.offer?.message}
      </span>

      <button
        className={`w-full p-4 text-xl font-bold text-white ${
          isLoading ? "cursor-wait bg-gray-400" : "cursor-pointer bg-[#6f1cd7]"
        }`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default Form;
