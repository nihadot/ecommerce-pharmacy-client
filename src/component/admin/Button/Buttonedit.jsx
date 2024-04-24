import axios from 'axios';
import React, { useState } from 'react'
import { errorToast, successToast } from "../../toast";
import { useNavigate, useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

function Buttonedit() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [timeline,setTimeline] = useState('');
    const [offerRate,setOfferRate] = useState('');
    const [image,setImage] = useState('');
    const [cost,setCost]=useState('')
    const [quantity, setQuantity] = useState('');



    const {id} = useParams();
    const navigate = useNavigate();

    const editCards = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3000/api/buttons/${id}`,{image:image,title:title,description:description,cost:cost,timeline:timeline,offerRate:offerRate,quantity:quantity},
            {
                headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
            }})

            // setProduct(response.data.users)

            successToast("Cards Edited Succesfully")
            navigate('/admin/buttons')
          } catch (error) {
            errorToast(error.message);
          }
    }


  return (
    <>
    <div className="">
        <form action="" onSubmit={editCards}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Button</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                        <img src={image} alt="loading..." className='bg-green-200 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                  <FileBase64 onDone={ (res)=>setImage(res.base64)} />
                </div>

               <input type="text" placeholder='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='descripion' name='descripion' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='timeline' name='timeline' value={timeline} onChange={(e)=>setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='cost' name='cost' value={cost} onChange={(e)=>setCost(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input type="text" placeholder='offer rate' name='offerRate' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base   px-2' />
                <input  type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='outline outline-1 text-xs sm:text-base   px-2' />
                <input type="submit" value="submit"  className='text-green-900 border-green-900 border text-xs sm:text-base hover:bg-green-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default Buttonedit
