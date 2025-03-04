import furniture1 from "../../assets/Images/furniture1.png"
import furniture2 from "../../assets/Images/furniture2.png"
import furniture3 from "../../assets/Images/furniture3.png"
import furniture4 from "../../assets/Images/furniture4.png"
import furniture5 from "../../assets/Images/furniture5.png"
import furniture6 from "../../assets/Images/furniture6.png"
import furniture7 from "../../assets/Images/furniture7.png"
import furniture8 from "../../assets/Images/furniture8.png"
import furniture9 from "../../assets/Images/furniture9.png"


const Funiro = () => {
  return (
    <section className='pt-[67px] pb-[50px]'>
        <h3 className='text-center text-xl text-[#616161] font-poppins font-semibold leading-[30px]'>Share your setup with</h3>
        <h2 className='text-center text-[40px] text-[#3A3A3A] font-poppins font-bold leading-[48px]'>#FuniroFurniture</h2>
        <div className="funiro h-[720px] gap-4">
            <img src={furniture1} alt="img" className="h-full w-full"/>
            <img src={furniture2} alt="img" className="h-full w-full"/>
            <img src={furniture3} alt="img" className="h-full w-full"/>
            <img src={furniture9} alt="img" className="h-full w-full"/>
            <img src={furniture5} alt="img" className="h-full w-full"/>
            <img src={furniture4} alt="img" className="h-full w-full"/>
            <img src={furniture7} alt="img" className="h-full w-full"/>
            <img src={furniture6} alt="img" className="h-full w-full"/>
            <img src={furniture8} alt="img" className="h-full w-full"/>
        </div>
    </section>
  )
}

export default Funiro