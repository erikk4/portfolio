import React from 'react'
import bootstrap from "../assets/bootstrap.png"
import cImage from "../assets/c.png"
import csharp from "../assets/csharp.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import unity from "../assets/unity.png"
import github from "../assets/github.png"
import java from "../assets/java.png"
import typescript from "../assets/typescript.png"

const Kenntnisse = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-400'
    },
    {
      id: 5,
      src: reactImage,
      title: 'React',
      style: 'shadow-sky-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-400'
    },
    {
      id: 8,
      src: cImage,
      title: 'C',
      style: 'shadow-blue-500'
    },
    {
      id: 9,
      src: csharp,
      title: 'C#',
      style: 'shadow-purple-500'
    },
    {
      id: 10,
      src: java,
      title: 'Java',
      style: 'shadow-red-500'
    },
    {
      id: 11,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 12,
      src: unity,
      title: 'Unity',
      style: 'shadow-gray-500'
    }

  ]

  return (
    <div className='bg-black py-10' name="kenntnisse">
      <h1 className=' md:pl-16 md:text-left text-4xl md:text-7xl font-bold text-white text-center'>Kenntnisse</h1>
      <p className="text-gray-500 py-2 text-xl md:pl-16 px-5">
        Mit diesen Programmiersprachen / Technologien habe ich bereits Erfahrung:
      </p>
      <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full text-white'>
        <div>



        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 md:px-0'>

          {
            techs.map(({ id, src, title, style }) => (
              <div key={id}
                   className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className=' w-24 mx-auto' />
                <p className=' text-white mt-4 text'>{title}</p>
              </div>
            ))
          }


        </div>

      </div>

    </div>
  )
}

export default Kenntnisse