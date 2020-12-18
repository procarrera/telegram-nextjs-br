import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <a href="https://github.com/orgs/nextjs-br">
    <div className="bg-gray-800 py-4 flex flex-row items-center justify-center">
      <h1 className="text-white flex flex-row items-center">
        <Image src="/github_logo.svg" width={25} height={25} />
        <span className="underline ml-4">GitHub repository</span>
      </h1>
    </div>
    </a>
  );
};

export default Footer;
