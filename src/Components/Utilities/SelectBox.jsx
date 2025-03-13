

const SelectBox = ({children,title}) => {
  return (
    <div className="pt-9">
        <label className="pb-[22px] block">{title}</label>
        <select className='w-full px-2 py-4  border-[1px] border-[#9F9F9F] rounded-[10px] outline-none'>{children}</select>
    </div>
  )
}

export default SelectBox