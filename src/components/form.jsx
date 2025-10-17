import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

function Form() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          mail: data.mail,
          offer: data.offer,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

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
        className="w-full border border-[var(--border-accent)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--border-accent)] rounded-lg transition-all duration-300"
        type="text"
        placeholder="What's your name?"
        {...register("name", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-500">
        {errors?.name?.message}
      </span>
      <input
        className="w-full border border-[var(--border-accent)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--border-accent)] rounded-lg transition-all duration-300"
        type="email"
        placeholder="What's your @email?"
        {...register("mail", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-500">
        {errors?.mail?.message}
      </span>

      <textarea
        className="w-full border border-[var(--border-accent)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--border-accent)] rounded-lg transition-all duration-300 min-h-[120px] resize-y"
        placeholder="What do you have to tell me/offer me?"
        {...register("offer", {
          required: "This field is required",
        })}
      />
      <span className="text-sm font-bold text-red-500">
        {errors?.offer?.message}
      </span>

      <button
        className={`w-full p-4 text-xl font-bold text-white rounded-lg transition-all duration-300 ${
          isLoading
            ? "cursor-wait bg-gray-400"
            : "cursor-pointer bg-[var(--gradient-start)] hover:bg-[var(--gradient-end)] active:scale-95"
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
