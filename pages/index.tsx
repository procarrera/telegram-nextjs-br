import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-8 md:pt-0 bg-telegram-pattern text-gray-900 flex-1 flex flex-col items-center justify-center">
      <div className="leading-10 flex flex-col items-center sm:items-start max-w-screen-md mx-6 lg:mx-0">
        <span className="text-5xl font-black">Bem-vindo!</span>
        <span className="text-xl">
          Somos um grupo de Telegram destinado ao aprendizado e evolução em{" "}
          <b>Next.JS</b>
        </span>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 md:justify-self-center my-6'>
          <Image src="/group-feed.svg" width={260} height={500} />
          <Image src="/group-feed.svg" width={260} height={500} />
          <Image src="/group-feed.svg" width={260} height={500} />
        </div>
      </div>
    </div>
  );
}
