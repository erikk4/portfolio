import React from 'react'

const Ausbildung = () => {
    return (
        <div name="ausbildung">
            <div
                class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black bg-mybg py-5"
            >
                <h1 className=' md:pl-16 md:text-left text-4xl md:text-7xl font-bold text-white text-center'>Ausbildung</h1>
                {/*<!-- left -->*/}
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class=" bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-2xl mb-1">Volkschule St. Veit im Mühlkreis</h3>
                        <p class="leading-tight text-justify text-xl">
                            09/2013 - 07/2017
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-2 bg-myblue pointer-events-none"></div>
                        </div>
                        <div
                            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"
                        ></div>
                    </div>
                </div>
                {/*<!-- right -->*/}
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-2 bg-myblue pointer-events-none"></div>
                        </div>
                        <div
                            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-2xl mb-1">Landesmusikschule Oberösterreich</h3>
                        <p class="leading-tight text-xl">
                            Übertrittsprüfung Bronze Mittelstufe am Schlagwerk <br />
                            09/2014 - 07/2021
                        </p>
                    </div>
                </div>
                {/*<!-- left -->*/}
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-2xl mb-1">Gymnasium Rohrbach</h3>
                        <p class="leading-tight text-xl">
                            4. Platz österreichweit beim internationalen <br /> Mathematik-Teamwettbewerb Bolyai <br />
                            09/2017 - 07/2021
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-2 bg-myblue pointer-events-none"></div>
                        </div>
                        <div
                            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"
                        ></div>
                    </div>
                </div>

                {/*<!-- right -->*/}
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-2 bg-myblue pointer-events-none"></div>
                        </div>
                        <div
                            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-2xl mb-1">HTL Leonding - Informatik</h3>
                        <p class="leading-tight text-justify  text-xl">
                            09/2021 - jetzt
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ausbildung