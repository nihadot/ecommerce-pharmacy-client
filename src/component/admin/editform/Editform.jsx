import React, { useEffect, useState } from 'react';
import { errorToast, successToast } from '../../toast';
import axios from 'axios';
import { useLocation, useParams,useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

function Editform  ()  {

const {state} =useLocation();
const {id} =useParams();
const navigate = useNavigate();
console.log(state);



const [mainimage,setMainImage] = useState("");
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const[deliveryCost,setDeliveryCost] =useState('')
  const [description, setDescription] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState([]);
  const [categories,setCategories] = useState([]);
  const [ dropdown,setDropdown ] = useState('');
  

  

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response=await axios.put(`http://localhost:3000/api/editform/${id}`,
      {
        name:name,
        price:price,
        deliveryCost:deliveryCost,
        description:description,
        quantity:quantity,
        mainimage:mainimage,
        image:image,
        dropdown,},
        {
        headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
          }
      })
      successToast(response.data.message)
    }catch(error){
      errorToast(error.response.data.message,"error")
    }
  };
  
  useEffect(() => {
    setName(state?.name);
    setPrice(state?.price);
    setDeliveryCost(state?.deliveryCost);
    setDescription(state?.description);
    setSelectedSize(state?.selectedSize);
    setQuantity(state?.quantity)
    setCategories(state?.categories)


    fetchAPI()
  }, []);




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



  //edit

  // const handleEdit = async(e)=>{
  //   console.log(e,'ee')
  //   e.preventDefault();

  //   await axios.put(`http://localhost:3000/api/products/${isEdit.id}`,isEditFormData)
  //   setRefresh(!refresh)
  //   //edit btn refresh aakm into "add to cart"
  //   setIsEdit({status:false,id:null})
  // }

  // const handleEditChange = (e)=>{
  //   setIsEditFormData({[e.target.name]:e.target.value})
  // }







  return (
    <>
    <div>
      <h2 className='text-green-600 text-center underline mt-16'>Edit Product</h2>
      <form  className='text-green-600 border-1' onSubmit={handleSubmit}>
        <div className='flex-col ms-8 mt-6 border-2  border-green-600 w-[400px] h-[620px]'>

        <p className='font-thin text-green-900'> Main Image</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                    <img src={mainimage} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
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
        <div className='ms-6 mt-3 p-2'>
        <input className='' type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>


        <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">

<select name="" id="" onChange={(e)=> setDropdown(e.target.value) }>
 { 
   categories && categories.map((item)=>{
   return(
     <>
     <option>Select</option>
     <option key={item._id} value={item._id}>{item.name}</option>
     </>
   )
 })
}
</select>
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
        <button className='border-2 border-green-800 rounded ms-20 mt-2' type="submit">UPDATE</button>
        </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Editform;
                 