import { type Metadata } from "next";

interface ParamsProp {
  params?: {
    title: string;
    description: string;
  };
}

// either Static metadata
export const metadata: Metadata = {
  title: "Admin",
};

// or Dynamic metadata
export async function generateMetadata({ params }: ParamsProp) {
  return {
    title: params?.title,
  };
}

const Page = () => {
  return <div>metadata</div>;
};

export default Page;
