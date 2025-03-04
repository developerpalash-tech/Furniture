import banner from "../../assets/Images/shop_banner.png"
import Breadcrumb from "../Breadcrumb"

const Banner = () => {
  return (
    <section className="pt-[121px] pb-[97px]" style={{backgroundImage: `url(${banner})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="container m-auto">
            <h2 className="text-center text-5xl text-black font-poppins font-medium leading-[72px]">Shop</h2>
            <Breadcrumb/>
        </div>
    </section>
  )
}

export default Banner