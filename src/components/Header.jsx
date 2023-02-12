import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import MenuComp from './MenuComp'

export default function Header() {

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location.pathname)

  return (
    <div>
       <header className='flex justify-between items-center px-5 max-w-7xl mx-auto py-4 '>
            <div>
            <img className='h-5 cursor-pointer' src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" onClick={()=>navigate('/')}/>
            </div >
             <div>
                <ul className='flex space-x-10'>
                    <MenuComp pageName='Home' pagePath='/' location={location.pathname }/>
                    <MenuComp pageName='Offers' pagePath='/offers' location={location.pathname} onClick={()=>navigate('offers')}/>
                    <MenuComp pageName='Sign In' pagePath='/sign-in' location={location.pathname} onClick={()=>navigate('sign-in')}    />
                  
                </ul>
            </div>
       </header>
    </div>
  )
}
