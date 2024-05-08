// import React, { lazy, Suspense } from "react";
// import { type LucideProps } from "lucide-react";
// import dynamicIconImports from "lucide-react/dynamicIconImports";

// const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

// interface IconProps extends Omit<LucideProps, "ref"> {
//   name: keyof typeof dynamicIconImports;
// }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = lazy(dynamicIconImports[name]);

//   return <LucideIcon {...props} />;
// };

// const IconButton = ({ name }: IconProps) => {
//   return (
//     <button className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-2 text-purple-1">
//       <Icon name={name} className="h-5 w-5" />
//     </button>
//   );
// };

// export default IconButton;
