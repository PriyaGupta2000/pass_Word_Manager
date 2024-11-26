import React, { useRef,useState,useEffect } from "react";

const Manager = () => {
const ref = useRef()
const [form, setform] = useState({site:"", username:"", Password:""})
const [passwordArray, setPasswordArray] = useState([])

useEffect(() => {
 let passwords = localStorage.getItem("password");
 
 if (passwords){
  //passwordArray = JSON.parse(passwords)
  setPasswordArray(JSON.parse(passwords))
 
 
 }
  
}, [])


  const showPassword = () =>{
    alert("show the password");
    console.log(ref.current.src)

    if(ref.current.src.includes("crosseye.png")){
    ref.current.src ="Eye.png"
    }
    else{
      ref.current.src ="crosseye.png"
    }
  }

    
  const savePassword = () =>{
    setPasswordArray([...passwordArray,form])
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]))

    console.log(...passwordArray,form)


  }


  const handlechange =(e)=>{
    setform({...form, [e.target.name]: e.target.value})


  }


  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="bg-slate-100 mycontainer">
        <h1 className="text-3xl text font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className=" flex flex-col p-4 text-black gap-8 items-center">
          <input value ={form.site} onChange={handlechange}
            placeholder="Enter website URL"   className="rounded-full border border-green-500  w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />

          <div className="flex w-full justify-between gap-8 ">
            <input value={form.username} onChange={handlechange}
            placeholder="Enter Username"  className="rounded-full border border-green-500 w-full p-3 py-1"
              type="text"
              name="username"
              id=""
            />

            <div className="relative">
            <input value ={form.Password} onChange={handlechange}
            placeholder="Enter password"  className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="Password"
              id=""
            />
            <span className="absolute right-[1px] top-[1px] cursor-pointer" onClick={showPassword}>
              <img  ref ={ref} className="p-1 font-bold" width={28} src="Eye.png" alt="" />
              <span></span>
              </span>
          </div>
          </div>
          <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 rounded-full px-8 py-2 w-fit border border-green-900 ">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
