import React, {useState} from 'react';
import "react-icons/vsc";
import "react-icons/si";
import "react-icons/di";
import AssetGrid from '../Grid/AssetGrid';
 
 
interface TagType{
   name : string;
   type : string;
}
 
interface propsType{
   title : string;
   category : string[];
   filter : { title : string; category : string;  }[];
}
 
interface stateType{
   title : string;
   category : string[];
   filter : { title : string; category : string;  }[];
   selected : [];
   page : number;
}
 
export default class Module extends React.Component<propsType, stateType>{
   constructor(props : any){
       super(props)
       this.state = {
                      title : props.title,
                      category : props.category,
                      filter : props.filter,
                      selected : [],
                      page : 1
                   }
   }
  
   HandelSelected = (e : any) => {
       this.setState({})
   }
 
   Tag(name : string, type : string)  {
       return (<><span
           className=" m-1 flex flex-wrap justify-between items-center font-medium sm:text-xs bg-emerald-400 hover:opacity-70 dark:bg-emerald-200 dark:hover:opacity-70 rounded-2xl px-2 py-1 text-sm leading-loose cursor-pointer dark:border-white border-[2px] text-black">
           {name}
           {/* <svg xmlns="http://www.w3.org/2000/svg"
             className="w-1 h-1 sm:h-4 sm:w-4 ml-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
             viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd"
               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clip-rule="evenodd" />
           </svg> */}
         </span></>)
   }
 
   Navagation(){
       return(<>
       <div className='sm:w-0 md:w-2/6 h-full shadow-md bg-tertiary absolute left-0 duration-1000 '>
           {this.state.category.map((i,k)=>{
               return (<div className=' hidden md:block p-5 m-4 duration-1000'>
                           <h1 className=' text-base text-secondary-light font-medium pb-2'>{i}</h1>
                           <hr className=''></hr>
                           <div className='my-3 flex flex-wrap -m-1'>
                           {this.state.filter.filter(e => e.category == i).map((x,y)=>{
                               return(<>
                                       {this.Tag(x.title, "") }
                                       </>
                                   )
                           })}
                           </div>
                       </div>)
           })}
 
       </div>
       </>)
   }
 
   Module({state} : any) {
       console.log(state)
       return (<>
           <div className='sm:w-full md:w-4/6 h-full flex-grow absolute right-0 overflow-scroll duration-1000'>
           <h1 className=' px-10 pt-4 text-lg text-left font-medium'>{state.title}  <span className=' pl-4 text-gray-400'>{state.filter.length}</span></h1>
           {/* <form className="group relative">
               <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary" aria-hidden="true">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
               </svg>
               <input className="focus:ring-2 focus:ring-primary focus:shadow-2xl focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter by name" placeholder="Filter by name"/>
           </form> */}
               <div className='p-4'>
                   <AssetGrid/> {/* this is more concept */}
               </div>
           </div>
       </>)
   }
 
  render(): React.ReactNode {
   console.log(this.state)
   return(<>
  
       <div className='flex'>
           {this.Navagation()}
           <this.Module state={this.state}/>
       </div>
   </>)
  }
  
}

