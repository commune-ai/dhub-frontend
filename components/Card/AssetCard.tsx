interface AssetType {
  name: string;
  author: string;
  type: string;
  link: string;
}

function AssetCard({ name, author, type, link }: AssetType): JSX.Element {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-secondary-light drop-shadow-lg dark:bg-tertiary px-4 py-6 space-y-3 rounded-lg hover:bg-gray-100  dark:hover:bg-white/[0.12]">
        <h1 className="text-lg leading-[1.5em] h-[3em] overflow-hidden">
          {name}
        </h1>
        <div>
          <p className="text-subheading-gray">Author Name</p>
          <div className="flex justify-between">
            <p className="leading-[1.5em] h-[3em] text-ellipsis overflow-hidden break-all mr-10">
              {author}
            </p>
            <p className="justify-self-end self-center px-4 py-1 text-white bg-primary rounded-lg capitalize">
              {type}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default AssetCard;
