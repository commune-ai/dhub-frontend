import { ReactElement, useState } from "react";
import AssetCard from "../Card/AssetCard";

function AssetGrid(props : any): ReactElement {
  const [item, setItem] = useState(props.item)
  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        { item.map( ( i : any) => { 
          return (<li>
            <AssetCard
              name={`${i.name}`}
              author={`${i.author}`}
              type={`${i.type}`}
              link={`${i.link}`}
            />
          </li>)
          })
        }
      </ul>
    </div>
  );
}

export default AssetGrid;