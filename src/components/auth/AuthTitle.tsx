import React from "react";

const AuthTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-8 text-center text-xl font-medium tracking-tight text-black-1 dark:text-white">
      {title}
    </h1>
  );
};

export default AuthTitle;
