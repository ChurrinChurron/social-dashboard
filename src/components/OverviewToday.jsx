import dataMedia from "../data/socialMedia-data"

const OverviewToday = ({up, down, dark}) => {
  return (
    <>
      {dataMedia[0].dashBoardOver.map(dataOver => {
        return <div key={dataOver.idOver} className={`p-6 rounded-md ${dark ? 'bg-darkDesatBlue hover:bg-darkDesatBlueH' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer`}>
          <div className="flex justify-between items-center mb-8">
            <h5 className={`${dark ? 'text-desatBlue' : 'text-gray-500'} font-semibold`}>{dataOver.titleOver}</h5>
            <img src={dataOver.imgMediaOver} className="h-[1.4em]" alt="social media" />
          </div>
          <div className="flex justify-between items-end">
            <h4 className={`text-4xl ${dark ? 'text-white' : 'text-black'} font-bold`}>{dataOver.numberOver}</h4>
            <span className={`${dataOver.colorNumberOver === 'green' ? 'text-green-500' : 'text-red-500'} flex justify-center items-center font-semibold text-sm`}><img src={`${dataOver.colorNumberOver === 'green' ? up : down}`} className="me-2 h-1.5" alt="arrow" />{dataOver.numberStatic}%</span>
          </div>
        </div>
      })}
    </>
  )
}

export default OverviewToday