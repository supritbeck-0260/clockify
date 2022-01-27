import React,{useState} from 'react';
import Input from '../Input'
import ListTime from './listTime';
import Timer from './Timer';
const TimeTracker =()=> {
const [trackerData,setTrackerData] = useState([]);
const [dataCollector,setDataCollector] = useState({});
const dataHandler = ({time})=>{
    const {title} = dataCollector;
    setTrackerData(prev=>[...prev,{time,title}])
}
  return(
      <div>
        <Input dataEmitter={setDataCollector}/>
        <Timer dataHandler={dataHandler}/>
        <ListTime list={trackerData}/>
      </div>
  );
}

export default TimeTracker
