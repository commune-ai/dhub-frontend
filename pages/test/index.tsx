import {ReactElement} from 'react'
import Module from '../../components/Spaces/Module';
function Test(): ReactElement {
   return (
       <>
       <Module title="Module" category={["byte", "connect"]} filter={[{title : "bitconnect", category : "connect"},{title : "bitconnect", category : "byte"}]}/>
       </>
   )
}
 
export default Test;
 
