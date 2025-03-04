import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";


const Filter = () => {
  return (
    <section className="bg-[#F9F1E7] py-[22px]">
        <div className="container m-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <p className="flex gap-3 items-center text-[20px] text-black font-poppins font-normal leading-[30px] mr-8">
                    <HiMiniAdjustmentsHorizontal/>
                Filter</p>
                <p className="text-[16px] text-black font-poppins font-normal leading-[24px]  pl-8 border-l-2 border-l-[#9F9F9F]">Showing 1–16 of 32 results</p>
                </div>
                
                <div className="flex items-center gap-8">
                <div className="">
                <label className="mr-4 text-[20px] text-black font-poppins font-normal leading-[30px]">Show</label>
                <input type="number" value={16} className="h-[55px] w-[55px] bg-white text-center"/>
                </div>
                <div className="">
                <label className="text-[20px] text-black font-poppins font-normal leading-[30px] mr-4">Short by</label>
                <select className="py-4 pl-8 pr-[86px] bg-white border-none">
                    <option value="default">Default</option>
                </select>
                </div>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Filter