import dataMedia from "../data/socialMedia-data"
import "./styles/border.css"

const Overview = ({up, down, dark}) => {

  return (
    <>
      {dataMedia[0].dashBoardTotal.map(dataTotal => {
        return <div key={dataTotal.idMedia} className={`p-8 rounded-md flex flex-col justify-center items-center ${dark ? 'bg-darkDesatBlue hover:bg-darkDesatBlueH' : 'bg-gray-100 hover:bg-gray-200'}
         ${dataTotal.borderColor === 'instColor' ? 'border-inst border-t-0' : dataTotal.borderColor === 'faceColor' ? 'border-faceColor border-t-4' : dataTotal.borderColor === 'twitColor' ? 'border-twitColor border-t-4' : 'border-youtColor border-t-4'} cursor-pointer`}>
          <div className="flex justify-center items-center mb-8">
            <img src={dataTotal.imgMedia} className="h-[1.4em] me-2" alt="social media" />
            <p className={`${dark ? 'text-desatBlue' : 'text-gray-500'}  font-semibold text-sm`}>{dataTotal.nameUser}</p>
          </div>
          <h3 className={`${dark ? 'text-white' : 'text-black'} text-6xl font-bold`}>{dataTotal.numberFoll}</h3>
          <h4 className={`mt-2 mb-8 ${dark ? 'text-desatBlue' : 'text-gray-500'} text-sm uppercase tracking-[.4em]`}>{dataTotal.titleFoll}</h4>
          <span className={`${dataTotal.colorNumber === 'green' ? 'text-green-500' : 'text-red-500'} flex justify-center items-center font-semibold text-sm`}><img src={`${dataTotal.colorNumber === 'green' ? up : down}`} className="me-2 h-1.5" alt="arrow" />{dataTotal.numberToday} Today</span>
        </div>
      })}
    </>
  )
}

export default Overview