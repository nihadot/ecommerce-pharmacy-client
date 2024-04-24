import React, { useState } from 'react'
import { errorToast, successToast } from "../../toast";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

function Buttonadd() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [timeline,setTimeline] = useState('');
    const [offerRate,setOfferRate] = useState('');
    const [cost,setCost]=useState('')
    const [image,setImage] = useState('');
    const [quantity, setQuantity] = useState('');


    const navigate = useNavigate();


      const addCards = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/buttons",{image:image,title:title,description:description,cost:cost,timeline:timeline,offerRate:offerRate,quantity:quantity},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            
            // setAdd(response.data.users)
            successToast("Added Succesfully")
            navigate('/admin/buttons')
        } catch (error) {
            errorToast(error.message)
        }
      }

  return (
    <>
    <div className="">
        <form action="" onSubmit={addCards}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Buttons</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                        <img src={image} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                  <FileBase64 onDone={ (res)=>setImage(res.base64)} />
                </div>

                <input type="text" placeholder='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base   px-2' />
                <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='timeline' name='name' value={timeline} onChange={(e)=>setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='cost' name='cost' value={cost} onChange={(e)=>setCost(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='offer rate' name='name' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input  type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="submit" value="Upload"  className='text-green-900 border-green-900 border text-xs sm:text-base hover:bg-green-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default Buttonadd
