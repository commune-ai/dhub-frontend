import {ReactElement} from 'react'
import Module from '../../components/Spaces/Module';

const dummy_data =[
    {
    name:"Ethereum Historical Price Data",
    author:"0xc4a391C300987FDe197B2072f7837c5eEef2dcAC",
    type:"Data",
    link:"https://market.oceanprotocol.com/asset/did:op:c2874ded256d80537b31c369f985a6df9b3636dba7639ea7e628ea5aee003e10"
    },{
    name:"🧞 Transport Genie Vault",
    author:"🚚 Transport Genie",
    type:"Data",
    link:"https://market.oceanprotocol.com/asset/did:op:39b9fa755de838a1a912e8589f64ce1601157cc2f1418ee9a3e77b7c7342f986"
    },{
    name:"red_caps",
    author:"@mariosasko",
    type:"Data",
    link:"https://huggingface.co/datasets/red_caps",
    },{
    name:"microsoft/deberta-base",
    author:"Microsoft",
    type:"Model",
    link:"https://huggingface.co/microsoft/deberta-base",
    },{
    name:"bert-base-uncased",
    author:"Jacob Devlin and Ming-Wei Chang and Kenton Lee and Kristina Toutanov",
    type:"Model",
    link:"https://huggingface.co/bert-base-uncased"
    },]
const dummy_filter = [{title : "bitconnect", category : "connect"},{title : "bitconnect", category : "byte"}]

function Test(): ReactElement {
   return (
       <>
       <Module title="Module" category={["byte", "connect"]} filter={dummy_filter} items={dummy_data}/>
       </>
   )
}
 
export default Test;
 
