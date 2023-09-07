import React from 'react'
import ErikPicture from '../assets/erikpicture.png'

const Home = () => {
    return (
        <div
            name="home"
            className=" w-full bg-black "
            
        >
            <div className="motion-safe:animate-fadeIn max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row py-5 md:h-[calc(100vh-80px)]">
                <div className="flex flex-col justify-center h-full ">
                    <h2 className="text-4xl md:text-7xl text-center md:text-left font-bold text-white">
                        Hi, ich bin <span className='text-myblue'>Erik</span>
                    </h2>
                    <p className="text-gray-500 py-2 text-xl">
                        Derzeit besuche ich die 3. Klasse der HTL Leonding,
                        die eine Ausbildung in Informatik und Betriebswirtschaftslehre kombiniert.
                    </p>
                    <p className="text-gray-500 py-2 text-xl">
                    Ich beherrsche Microsoft Office, sowie die Programmiersprachen
                        C#, C und Javascript.
                    </p>
                    <p className="text-gray-500 py-2 text-xl">Außerdem habe ich gute Kenntnisse mit Webtechnologien 
                        und konnte mit Mitschülern auch schon ein Projekt umsetzen.</p>
                    <p className="text-gray-500 py-2 text-xl">Zudem spiele ich Fußball im Verein und liebe es mich sportlich zu betätigen.</p>

                </div>

                <div>
                    <img
                        src={ErikPicture}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home