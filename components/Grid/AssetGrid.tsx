import { ReactElement } from "react";
import AssetCard from "../Card/AssetCard";

function AssetGrid(): ReactElement {
  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li>
          <AssetCard
            name="[Data Whale] Ocean ONDA DataFi Directory V4"
            author="Data Whale Curation & Management"
            type="Data"
            link="https://market.oceanprotocol.com/asset/did:op:ba8753de3a2715d05960092f35bc2c74a0d63bb4998a4fcb583bae60e335cf89"
          />
        </li>
        <li>
          <AssetCard
            name="Ethereum Historical Price Data"
            author="0xc4a391C300987FDe197B2072f7837c5eEef2dcAC"
            type="Data"
            link="https://market.oceanprotocol.com/asset/did:op:c2874ded256d80537b31c369f985a6df9b3636dba7639ea7e628ea5aee003e10"
          />
        </li>
        <li>
          <AssetCard
            name="🧞 Transport Genie Vault"
            author="🚚 Transport Genie"
            type="Data"
            link="https://market.oceanprotocol.com/asset/did:op:39b9fa755de838a1a912e8589f64ce1601157cc2f1418ee9a3e77b7c7342f986"
          />
        </li>
        <li>
          <AssetCard
            name="red_caps"
            author="@mariosasko"
            type="Data"
            link="https://huggingface.co/datasets/red_caps"
          />
        </li>
        <li>
          <AssetCard
            name="microsoft/deberta-base"
            author="Microsoft"
            type="Model"
            link="https://huggingface.co/microsoft/deberta-base"
          />
        </li>
        <li>
          <AssetCard
            name="bert-base-uncased"
            author="Jacob Devlin and
               Ming-Wei Chang and
               Kenton Lee and
               Kristina Toutanov"
            type="Model"
            link="https://huggingface.co/bert-base-uncased"
          />
        </li>
      </ul>
    </div>
  );
}

export default AssetGrid;
