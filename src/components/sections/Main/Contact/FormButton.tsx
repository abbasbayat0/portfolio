import { CheckLine, RotateCw, Send } from "lucide-react";
import type { Res } from "./Form.type";

const FormButton = ({
  success,
  error,
  isSending,
}: {
  success: Res;
  error: Res;
  isSending: boolean;
}) => {
  return (
    <button
      disabled={isSending || error.status !== 0 || success.status !== 0}
      className="text-md shadow-green/40 bg-green/80 hover:bg-green flex w-full cursor-pointer justify-center gap-3 rounded-full px-7 py-4 font-medium text-white/80 shadow-[0_2px_10px_1px] transition duration-300 text-shadow-white/40 text-shadow-xs hover:text-white disabled:cursor-not-allowed disabled:opacity-50 lg:mx-auto lg:w-10/12"
    >
      {success.status !== 0 ? (
        <>
          Sent
          <CheckLine className="text-green-500" size={20} />
        </>
      ) : error.status !== 0 ? (
        <>Not Sent</>
      ) : isSending ? (
        <>
          Sending ...
          <RotateCw className="animate-spin text-white" size={20} />
        </>
      ) : (
        <>
          Send Message
          <Send className="text-white" size={20} />
        </>
      )}
    </button>
  );
};

export default FormButton;
