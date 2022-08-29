import React, {useState} from 'react';
import "react-icons/vsc";
import "react-icons/si";
import "react-icons/di";
import AssetGrid from '../Grid/AssetGrid';
import {BsSearch} from 'react-icons/bs'
 
 
interface TagType{
   name : string;
   type : string;
}
 
interface propsType{
   title : string;
   category : string[];
   filter : { title : string; category : string;  }[];
   items : { name: string; author: string; type: string; link: string; }[];
}
 
interface stateType{
   title : string;
   category : string[];
   filter : { title : string; category : string;  }[];
   items : { name: string; author: string; type: string; link: string; }[];
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
                      items : props.items,
                      selected : [],
                      page : 1,
                   }
   }
  
   HandelSelected = (e : any) => {
       this.setState({})
   }
 
   Tag(name : string, type : string)  {
       return (<><span
           className=" m-1 flex flex-wrap justify-between items-center font-medium sm:text-xs bg-emerald-400 hover:opacity-70 dark:bg-emerald-200 dark:hover:opacity-70 rounded-2xl px-2 py-1 text-sm leading-loose cursor-pointer dark:border-white border-[2px] text-black">
           {name}
         </span></>)
   }
 
   Navagation(){
       return(<>
                <div className='sm:w-0 md:w-2/6 h-full shadow-md bg-tertiary absolute left-0 duration-700 '>
                    {this.state.category.map((i,k)=>{
                        return (<div className=' hidden md:block p-5 m-4 duration-700'>
                                    <h1 className=' text-base text-secondary-light font-medium pb-2'>{i}</h1>
                                    <hr/>
                                    <div className='my-3 flex flex-wrap -m-1'>
                                    {this.state.filter.filter(e => e.category == i).map((x,y)=>{
                                        return(<>{this.Tag(x.title, "") }</>)
                                    })}
                                    </div>
                                </div>)})}
                </div>
              </>)
   }
 
   Module({state} : any) {
       console.log(state)
       return (<>
           <div className='sm:w-full md:w-4/6 h-full flex-grow absolute right-0 overflow-scroll duration-700'>
                <div className='flex'>
                    <div className='w-auto'>
                        <h1 className=' pl-10 pr-4 pt-7 text-lg text-left font-medium'>{state.title}  <span className=' pl-4 text-gray-400'>{state.items.length}</span></h1>
                    </div>
                    <div className={`flex items-center rounded-xl bg-light-white mt-6 w-1/3`}>
                    <label className="relative block w-full">
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
                            <BsSearch className="block float-left cursor-pointer mr-2"/>
                        </span>
                        <input className={`placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 border-solid rounded-[2rem] py-2 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-transparent focus:shadow-2xl]`} 
                            placeholder={`Filter by name`}
                            autoComplete="off"
                            type="text" name="search"
                            onChange={(e) => {}}
                            />
                    </label>
                    </div>
                </div>
                <div className='p-4'>
                   <AssetGrid item={state.items}/> {/* this is more concept */}
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

