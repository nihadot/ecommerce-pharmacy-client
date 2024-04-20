import React, { useState,useEffect } from 'react';
import { errorToast, successToast } from '../../toast';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';


const Productadd = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const[deliveryCost,setDeliveryCost] =useState('')
  const [description, setDescription] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState([]);
  const [ categories,setCategories ] = useState([]);
  const [mainimage,setMainImage] = useState('');
  const [ dropdown,setDropdown ] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/category",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setCategories(response.data.Category)
      } catch (error) {
        errorToast(error.message)
      }
}









  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response=await axios.post("http://localhost:3000/api/product",
      {
        name:name,
        price:price,
        deliveryCost:deliveryCost,
        description:description,
        quantity:quantity,
        mainimage:mainimage,
        image:image,
        selectedSize:selectedSize,
      
        dropdown

      },{headers:{
        'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
      }})
      
      successToast(response.data.message)
    }catch(error){
      errorToast(error.response.data.message,"error")
    }
  };

  return (
    <div>
      <h2 className='text-green-600 text-center underline mt-16'>Add Product</h2>
      <form  className='text-green-600  border-1' onSubmit={handleSubmit}>
        <div className='flex-col ms-8 mt-6 border-2  border-green-600 w-[400px] h-[620px]'>



        <p className='font-thin text-green-600'> Main Image</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                <img src={mainimage} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]  m-2' />
              <FileBase64 onDone={ (res)=>setMainImage(res.base64)} />  
            </div>




        <div className='ms-6 mt-3 p-2 text-green-600'>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='ms-6 mt-3 p-2 text-green-600'>
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='ms-6 mt-3 p-2 text-green-600'>
        <input type="number" placeholder="DeliveryCost" value={deliveryCost} onChange={(e) => setDeliveryCost(e.target.value)} />
        </div>
        <div className='ms-6 mt-3 p-2'>
       
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='ms-6 mt-3 p-2'>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
        </div>


        
        
<select name="" id="" onChange={(e)=> setDropdown(e.target.value) }>

<option>Select</option>
 { 
   categories && categories.map((item)=>{
   return(
     <>
        {/* <option>Select</option> */}
     <option key={item._id} value={item._id}>{item.name}</option>
     </>
   )
 })
}
</select>




        <div className='ms-6 mt-3 p-2'>
        <input className='' type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
       
          <p className='font-thin text-green-900'>Add Images</p>
            <div className="flex gap-2">
              {
                image.map((items)=>{
                  return(
                    <>
                    <img className='w-12 h-12 rounded-full' src={items.image} alt="Loading..." />
                    </>
                  )
                })
              }
              <FileBase64 onDone={ (res)=>setImage([...image,{image:res.base64}]) } />
            </div>
        <div className='ms-6 mt-3 p-2'>
        <button className='border-2 border-green-800 rounded ms-20 mt-2' type="submit">Add Product</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Productadd;
                 