import { useState } from "react";
import "../NewUser/NewUser.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { createProducts } from "../../redux/apiCalls";
import {useDispatch} from "react-redux";

export default function NewProduct() {
    const [input,setInput]=useState({});
    const [img,setImg]=useState();
    const [Categories,setCategories]=useState([]);
    
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setInput((prev)=>{
              return({...prev,[e.target.name]:e.target.value}); 
        })
    }
    const handleCat=(e)=>{
       setCategories(e.target.value.split(","));
    }
    const handleClick=(e)=>{
       e.preventDefault();
       console.log(input);
       console.log(Categories);
       console.log(img);
       const fileName=new Date().getTime()+img.name;
       console.log(fileName);
       const storage=getStorage(app);
       const storageRef=ref(storage,fileName);

       const uploadTask = uploadBytesResumable(storageRef);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
       uploadTask.on('state_changed', 
         (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
        console.log('Upload is paused');
        break;
        case 'running':
        console.log('Upload is running');
        break;
      }
     }, 
      (error) => {
    // Handle unsuccessful uploads
      }, 
      () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       //console.log('File available at', downloadURL);
         const product={...input,img:downloadURL,Categories:Categories}
          createProducts(product,dispatch);
        });
      }
     );


       //
    }
  return (
    <div className='NewUser'>
        <h2 className='Title'>New Product</h2>
        <form className='UserForm'>
             <div className='UserFormItem'>
                    <labal>Product Img</labal>
                    <input type="file" onChange={(e)=>setImg(e.target.files[0])} />
             </div>
             <div className='UserFormItem'>
                    <labal>Title</labal>
                    <input name="title" type="text" placeholder="AirPods" onChange={handleChange} />
             </div>
             <div className='UserFormItem'>
                    <labal>Description</labal>
                    <input type="text" name="desc" placeholder="AirPods DeSc"  onChange={handleChange} />
             </div>
             <div className='UserFormItem'>
                    <labal>Price</labal>
                    <input type="number" name="price" placeholder="100"  onChange={handleChange} />
             </div>
             <div className='UserFormItem'>
                    <labal>Categories</labal>
                    <input type="text" placeholder="jeens,shirt"  value={Categories} onChange={handleCat}/>
             </div>
             <div className='UserFormItem'>
                    <labal>Stock</labal>
                    <select style={{padding:"15px",borderRadius:"5px"}}  name="inStock" onChange={handleChange} >
                        <option value={true}>YES</option>
                        <option value={false}>NO</option>
                    </select>
             </div>
             <button onClick={handleClick} className='userAddButton'>Create</button>

        </form>
    </div>
  )
}
