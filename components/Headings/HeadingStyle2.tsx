interface Point {
  icon: JSX.Element;
  description: string;
  link: JSX.Element;
}

function HeadingStyle2({
  heading,
  title,
  description,
  action,
  point1,
  point2,
}: {
  heading: string;
  title: string;
  description: string;
  action: JSX.Element;
  point1: Point;
  point2: Point;
}): JSX.Element {
  return (
    <div className="sm:max-w-[50%] mx-auto">
      <div className="text-left">
        <h2 className="capped-heading">{heading}</h2>
        <p className="mt-2 title">{title}</p>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div>
            <p className="mt-4 max-w-lg description pb-2">{description}</p>
            {action}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center icon-primary">
                {point1.icon}
              </div>
            </dt>
            <dd className="ml-16 secondary-description pb-3">
              {point1.description}
            </dd>
            {point1.link}
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center icon-primary">
                {point2.icon}
              </div>
            </dt>
            <dd className="ml-16 secondary-description pb-3">
              {point2.description}
            </dd>
            {point2.link}
          </div>
        </dl>
      </div>
    </div>
  );
}

export default HeadingStyle2;
