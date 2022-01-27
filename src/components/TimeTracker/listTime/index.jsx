import React from 'react';

const ListTime =({list})=> {
  return (
      <>

     {Array.isArray(list) && list.map(({time,title},index)=>
     <div className="row" key={index}>
            <div className="col-6"> {time} </div>
            <div className="col-6">{title}</div>
        </div>
     ) }
      </>
  );
}

export default ListTime;
