import React from 'react'

const Kontakt = () => {
  return (
    <div name="kontakt" className=' bg-mybg text-white '>
      <div className='py-10'>
        <h1 className=' md:pl-16 md:text-left text-4xl md:text-7xl font-bold text-white text-center'>Kontakt</h1>
        <p className="text-gray-500 py-2 text-xl md:pl-16 px-5">
          Schreiben Sie mir gerne eine Email: <a href="mailto:erik.keplinger1@gmail.com" className='text-white'>erik.keplinger1@gmail.com</a>
        </p>

        <p className="text-gray-500 py-2 text-sm md:pl-16 px-5 pt-10">
          Diese Website wurde mit React JS und Tailwind CSS erstellt.
        </p>
      </div>
    </div>
  )
}

export default Kontakt