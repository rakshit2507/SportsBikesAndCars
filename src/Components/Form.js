import React,{useState} from 'react'

function Form() {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setuserErr]=useState(false);
  const [passErr,setpassErr]=useState(false);


   function loginHandle(e){
        if(user.length<3 || password.length<3)
        {
           alert("type correct values") 
        }
        else{
            alert("all good :)")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
        setuserErr(true)
        }
        else
        {
        setuserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
         let item=e.target.value;
         if(item.length<3)
         {
             setpassErr(true)
         }
         else
         {
             setpassErr(false)
         }
         setPassword(item)
    }
    return (
        <div className="fo-rm">
            <h1>Example Of Form Validation</h1>
            <form onSubmit={loginHandle}>
                Enter User Name  <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{userErr?<span>User not valid</span>:""}
                <br/><br/><br/>
                Enter Password  <input type="text" placeholder="Enter Password" onChange={passwordHandler}/>{passErr?<span> Password not valid</span>:""}
                <br/><br/><br/> 
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Form;