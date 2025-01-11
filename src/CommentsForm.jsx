import { useState } from "react"

export default function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    });
    let handleInputchange=((event)=>{
        setFormData((currdata)=>{
            return{...currdata,[event.target.name]:event.target.value};
        });
    });
    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5,
        });
        
    }
    return(
        <div>
        <h4>Give a Comment</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputchange} id="username" name="username"/>
            <br /><br />
            <label htmlFor="remark">Username</label>
            <textarea placeholder="remarks" value={formData.remarks} onChange={handleInputchange} id="remark" name="remarks">Remarks</textarea>
            <br /><br />
            <label htmlFor="rating">Username</label>
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputchange} id="rating" name="rating"/>
            <button>Comment</button>
        </form>
        </div>
    )
}