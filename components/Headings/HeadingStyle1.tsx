interface HeadingStyle1Props {
  heading: string;
  title: string;
  description1: string;
  description2: string;
  action?: JSX.Element;
}

export default function HeadingStyle1({
  heading,
  title,
  description1,
  description2,
  action,
}: HeadingStyle1Props): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-left">
        <h2 className="capped-heading">{heading}</h2>
        <p className="mt-2 title">{title}</p>
        <div className="flex flex-wrap sm:flex-nowrap">
          <p className="mt-4 pr-6 max-w-lg description">{description1}</p>
          <div>
            <p className="mt-4 max-w-lg description pb-3">{description2}</p>
            {action}
          </div>
        </div>
      </div>
    </div>
  );
}
