import { useState } from 'react'
import InputComp from '../components/InputComp'

export default function SignIn() {

  const [pageText, setPageText] = useState("Sign In")


  function handleEmailData(data){
    setPageText(()=>{
      return data
    })
  }
 
  function handlePasswordData(data){
    console.log(data)
  }


  return (
    <section>
      <h1 className='text-3xl text-center font-bold mt-6'>Sign In</h1>
      
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-7xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb-12 m:m-6'>
        <img  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="loginImage" 
        className='w-full rounded-2xl'
        /></div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form >
          <InputComp  placeholder={"Email"} value={"email"} childData={handleEmailData}></InputComp>
          <InputComp  placeholder={"Password"}  value={"password"} childData={handlePasswordData}></InputComp>
        </form>
      </div>
    </div>
    </section>
  )
}
