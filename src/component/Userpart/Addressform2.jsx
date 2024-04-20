import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { errorToast,successToast } from '../toast';

function Addressform2() {


  // const [address, setAddress] = useState({
  //   fullname: '',
  //   phoneNumber: '',
  //   pinCode: '',
  //   state: '',
  //   city: '',
  //   houseNo: '',
  //   buildingName: '',
  //   roadName: '',
  //   areaColony: '',
  //   addressType: '', // This will store the selected type of address
  // });

const navigate=useNavigate()
     const[fullname, setFullname]=useState("");
     const [phoneNumber,setphoneNumber]=useState("");
     const [pinCode,setPinCode,]=useState("");
     const [state,setState]=useState("");
     const [houseNo, setHouseNo]=useState("");
     const[ city, setCity]=useState("");
     const [buildingName,setbuildingName]=useState("");
     const [roadName,setroadName]=useState("");
     const [areaColony, setareaColony]=useState("");
    //  const [selectedType, setSelectedType] = useState('');

  // const handleChange = (e) => {
  //   setAddress({
  //     ...address,
  //     [e.target.name]: e.target.value
  //   });
  // };


  
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

//new code

try {
  const response = await axios.post(
    "http://localhost:3000/api/address/create",
    {
      fullname: fullname,
      phoneNumber: phoneNumber,
      pinCode: pinCode,
      state: state,
      houseNo: houseNo,
      city: city,
      buildingName: buildingName,
      roadName: roadName,
      areaColony: areaColony,
      // selectedType:selectedType,

      userId: JSON.parse(localStorage.getItem("userDetails"))?._id,
    }
  );
  
  successToast(response.data.message);
  navigate(`/order/${response.data.result._id}`)
} catch (error) {
  errorToast(error.response.data.message, "error");
}
};


    // Handle form submission, e.g., validation, saving to state or server
    
  

  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Delivery Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block mb-1 text-sm font-semibold">Full Name<span className="text-red-500">*</span></label>
          <input type="text" id="fullname" name="fullname"    onChange={(e) => setFullname(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1 text-sm font-semibold">Phone Number<span className="text-red-500">*</span></label>
          <input type="tel" id="phoneNumber" name="phoneNumber"  onChange={(e) => setphoneNumber(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="pinCode" className="block mb-1 text-sm font-semibold">Pin Code<span className="text-red-500">*</span></label>
          <input type="text" id="pinCode" name="pinCode"  onChange={(e) => setPinCode(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-1 text-sm font-semibold">State<span className="text-red-500">*</span></label>
          <input type="text" id="state" name="state"  onChange={(e) => setState(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1 text-sm font-semibold">City<span className="text-red-500">*</span></label>
          <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)}required className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="houseNo" className="block mb-1 text-sm font-semibold">House No.</label>
          <input type="text" id="houseNo" name="houseNo"  onChange={(e) => setHouseNo(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="buildingName" className="block mb-1 text-sm font-semibold">Building Name</label>
          <input type="text" id="buildingName" name="buildingName"  onChange={(e) => setbuildingName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="roadName" className="block mb-1 text-sm font-semibold">Road Name</label>
          <input type="text" id="roadName" name="roadName"  onChange={(e) => setroadName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="areaColony" className="block mb-1 text-sm font-semibold">Area/Colony</label>
          <input type="text" id="areaColony" name="areaColony" onChange={(e) => setareaColony(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold">Type of Address</label>
          <div>
            <label className="inline-block mr-4">
              <input type="radio" name="addressType" value={selectedType} onChange={handleTypeChange} className="mr-1" />
              Home
            </label>
            <label className="inline-block mr-4">
              <input type="radio" name="addressType" value="Work" onChange={handleTypeChange} className="mr-1" />
              Work
            </label>
            <label className="inline-block">
              <input type="radio" name="addressType" value="Other" onChange={handleTypeChange} className="mr-1" />
              Other
            </label>
          </div>
        </div> */}
        <div className="mt-6">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Addressform2;