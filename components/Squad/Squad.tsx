import Image from "next/image";

interface SquadType {
  name: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

function Squad({
  name,
  image,
  description,
  tags,
  link,
}: SquadType): JSX.Element {
  return (
    <a
      className="bg-white drop-shadow-xl dark:bg-tertiary p-5 space-y-6 rounded-lg hover:bg-gray-100  dark:hover:bg-white/[0.12] transition cursor-pointer"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1 className="text-xl font-bold">{name}</h1>
      <div className="flex flex-col gap-3">
        <div className="square w-32 h-32 my-2 place-self-center">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden">
          <p className="secondary-description">Description</p>
          <div className="">{description}</div>
        </div>
      </div>
      <ol className="flex gap-3 flex-wrap">
        {tags?.map((tag: string) => (
          <li
            key={name + tag}
            className="bg-white dark:bg-secondary-dark drop-shadow-md rounded-md px-3 py-2 uppercase text-sm w-fit"
          >
            {tag}
          </li>
        ))}
      </ol>
    </a>
  );
}

export default Squad;
