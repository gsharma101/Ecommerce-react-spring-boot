import React from "react";

interface ResponseMessageProps {
  message: string;
}

const ResponseMessage = ({ message }: ResponseMessageProps) => {
  return (
    <div className="px-3 py-4 bg-opacity-50 bg-slate-100 rounded-md">
      {message}
    </div>
  );
};

export default ResponseMessage;
