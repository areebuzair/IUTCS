import React from 'react';
//import { blogElements } from '../data';
//import BoxComponent from './../components/BoxComponent';
import { Link } from 'react-router-dom';
//import RightBox from './RightBox';
const HomeEvent = () => {
    //var blogs= blogElements.slice(0,2);
    return (
       
        <div className='mt-4 flex'>
       <div>
       <h1>news and activities</h1>
        <div className='flex justify-center content-center flex-col gap-2 md:flex-row px-24 md:px-10 py-10'>
       
        {/* { blogs.map(blogElement => <BoxComponent data={blogElement}></BoxComponent>)} */}

        
        </div>
        
        {/* <Link to='/Blog' className='text-right'>see all</Link> */}
       </div>
       <div>
       <h1>upcoming events</h1>
        {/* <RightBox data={blogs}></RightBox> */}
       </div>
      
    </div>
     
    );
};

export default HomeEvent;