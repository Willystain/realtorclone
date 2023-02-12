import React, { useState } from 'react'


export default function InputComp(props) {
    
    
    const [formData, setFormData] = useState({data: ""})


    function onChange(e){
       setFormData((prevState)=>({
        data: e.target.value,
       }))
       props.childData(formData.data)
    }
   
  return (
    <>
     <input className='mt-5 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out shadow' placeholder={`${props.placeholder}`} type={`${props.value}`} id={`${props.value}` } onChange={onChange}/>
    </>
  )
}
