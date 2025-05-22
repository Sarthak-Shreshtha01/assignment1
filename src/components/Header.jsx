import React from 'react'

const Header = ({headerContent}) => {
  return (
    <div>
        <header className='flex justify-between items-center bg-gray-800 p-4'>
            <h1 className='text-white text-2xl'>{headerContent.title}</h1>
            <nav>
            <ul className='flex space-x-4'>
                {headerContent.links.map((link , index) => (
                    <li key={index} ><a href={link.url} className='text-white'>{link.text}</a></li>
                ) )}
            </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
