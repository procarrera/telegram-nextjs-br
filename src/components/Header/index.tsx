import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col bg-none md:bg-emojis-pattern md:bg-right-top md:bg-contain bg-no-repeat lg:bg-right lg:bg-auto">
      <div className='h-20 flex my-6 item-center justify-center md:justify-start'>
        <img src="/logo.svg" className={'h-full'}/>
        <img src="/next-br.svg" className={'h-full'}/>
      </div>
      <div className="bg-tele-blue py-2 text-center text-white">
        Ainda não é membro do grupo?
        <a href="https://t.me/nextjs_br" className="font-semibold pl-2">
          Entre agora!
        </a>
      </div>
    </div>
  );
};

export default Header;
