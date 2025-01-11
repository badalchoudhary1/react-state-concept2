import { useState } from "react"

export default function Form(){
    // let [fullName,setFullName]=useState("");
    // let [userName,setUserName]=useState("");
    let [formData,setFormData]=useState({fullName:"",userName:""});

    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value);
    // }
    // let handleUserName=(event)=>{
    //     setUserName(event.target.value);
    // }   
    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        setFormData((currdata)=>    {
            return {...currdata,[fieldName]:newValue};
        });
        
        
    };
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({fullName:"",userName:""});
        
    };

    
  
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="enter full name" id="fullName" name="fullName" onChange={handleInputChange} value={formData.fullName}/>
        <br /><br />
        <label htmlFor="username">Full Name</label>
        <input type="text" placeholder="enter user name" id="username" name="userName" onChange={handleInputChange} value={formData.userName}/>
        <button>submit</button>
        </form>
    )

}