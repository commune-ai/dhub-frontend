import Link from "next/link";

interface Banner {
  title: JSX.Element | string;
  subtitle: string;
  button1?: JSX.Element;
  button2?: JSX.Element;
  image: JSX.Element;
}

function Banner1({
  title,
  subtitle,
  button1,
  button2,
  image,
}: Banner): JSX.Element {
  return (
    <div className="flex flex-col justify-between flex-wrap content-center items-center md:flex-row mt-10 -mb-20 sm:mt-20">
      <div className="w-full md:w-5/12 text-center md:text-left space-y-3">
        <h1 className="text-3xl sm:text-4xl tracking-wider banner-title">
          {title}
        </h1>
        <p className=" max-w-lg m-auto">{subtitle}</p>
        <div>
          <button className="button-1 mr-2">{button1}</button>
          <button className="button-2 ml-2">{button2}</button>
        </div>
      </div>
      <div className="w-8/12 mt-6 md:mt-0 md:w-5/12">{image}</div>
    </div>
  );
}

export default Banner1;
