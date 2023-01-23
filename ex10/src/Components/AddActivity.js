import React, { useState } from "react";

function AddActivity() {
  const [data, setData] = useState({
    name: "",
    duration: "",
  });
const handleChange = (e) =>{
    e.persist();
    setData((prev)=>({...prev, [e.target.name]:e.target.value}))//แก้ไข และใช้...ในการใช้ค่าเดิมมาแก้เป็น e.target.name ค่าที่กรอกเข้ามา
}
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity name: </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="Activity name ..."
        />
      </div>
      <div className="input-section">
        <p>Duration: </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="duration"
          placeholder="Duration ..."
        />
      </div>
      <button> Add activity </button>
    </div>
  );
}

export default AddActivity;
