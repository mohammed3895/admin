import React from "react";

const AuthTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-16 text-center text-3xl font-semibold leading-tight tracking-tight text-black-1">
      {title}
    </h1>
  );
};

export default AuthTitle;
