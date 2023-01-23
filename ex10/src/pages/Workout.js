import React,{useState} from 'react'
import AddActivity from '../Components/AddActivity';

export const Workout = () => {
    const [add, setAdd] = useState(false);
    const handleClick = () =>{ //กำหนดฟังชั่น ตัวคลิก และบรรทัด 12 ให้กดแล้วแสดงคำว่า addactivity
        setAdd(!add);
    };
  return (
    <div className='workouts-wrapper'>
        <h2>My Workouts</h2>
        <button onClick={handleClick}>Add activity</button> 
        {add && <AddActivity/>}
        </div>
  )
}

export default Workout