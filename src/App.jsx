import dataMedia from "./data/socialMedia-data"
import Overview from "./components/Overview"
import OverviewToday from "./components/OverviewToday"
import Up from "../public/icon-up.svg"
import Down from "../public/icon-down.svg"
import { useState } from "react"

function App() {

  const [dark, setDark] = useState(true);

  return (
    <main className={`relative ${dark ? 'bg-veryDarkBlue' : 'bg-white'} font-inter 2xl:py-[.5em] 2xl:px-[16em]`}>
        <div className={`${dark ? 'bg-veryDarkBlueTwo' : 'bg-gray-100'} h-60 absolute z-0`}></div>
        <div className="relative z-10 py-8 px-6">
          <div className="md:flex md:justify-between md:items-center">
            <div className="pb-6 border-b border-gray-700 md:border-0">
              <h2 className={`${dark ? 'text-white' : 'text-black'} font-semibold text-[1.6em]`}>Social Media Dashboard</h2>
              <h3 className={`${dark ? 'text-desatBlue' : 'text-gray-600'} font-semibold`}>Total Followers: {dataMedia[0].totFoll}</h3>
            </div>
            <div className="flex justify-between py-4 md:py-0 md:mb-6">
              <span className="text-desatBlue font-semibold md:me-6">Dark Mode</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={!dark} value="" onClick={() => setDark(!dark)} id="darkMode" className="sr-only peer" />
                <div className="relative w-11 h-6 outline-none peer-focus:outline-none rounded-full peer dark:bg-blue-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-veryDarkBlueTwo after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:bg-white peer-checked:bg-gray-400 hover:peer-checked:bg-blue-400"></div>
              </label>
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Overview up={Up}
                      down={Down}
                      dark={dark} />
          </div>
          <div className="mt-14">
            <h3 className={`${dark ? 'text-white' : 'text-gray-600'} font-semibold text-2xl`}>Overview - Today</h3>
            <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <OverviewToday up={Up}
                             down={Down}
                             dark={dark} />
            </div>
          </div>
        </div>
    </main>
  )
}

export default App
