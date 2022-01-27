import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/AddCircleOutline';
export default function Input({dataEmitter}) {
  const [title,setTitle] =useState('');
  const changeHander = (e)=>{
    const value = e.targer;
    setTitle(value);
    dataEmitter({title:value})
  }
  return (
      <>
      <div className="row justify-content-center align-items-center ">
      <div className="form-group p-3 col-9">
        <input type="text" value={title} onChange={changeHander} className="form-control " id="usr" placeholder='What are you working on?'/>
     </div>
      <div className="add-project col-3">
          <AddIcon className='pointer'/>
            Project
      </div>
    </div>
      </>
  );
}
