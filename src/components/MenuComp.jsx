import React from 'react'
import { useNavigate } from 'react-router'

export default function MenuComp(props) {

    const location = `${props.location}`
    const navigate = useNavigate()

    function pathMathRoute(route){
        if(route === location){
          return true
        }
        return false
      }

  return (
    <div>
        <li className={`cursor-pointer py-3 border-b-4 text-gray-400 ${pathMathRoute(`${props.pagePath}`) && "text-black border-red-600"} `} onClick={()=>navigate(`${props.pagePath}`)}>
            {props.pageName}
        </li>
    </div>
  )
}
