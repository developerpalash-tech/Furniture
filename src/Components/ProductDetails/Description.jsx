import sofa1 from '../../assets/Images/Sofa1.png'
import sofa2 from '../../assets/Images/Sofa2.png'

const Description = () => {
  return (
    <section>
        <div className="container m-auto border-b-[1px] border-b-[#D9D9D9] pb-16">
            <div className="flex justify-center gap-13">
                <h2 className='text-2xl text-[#9F9F9F] font-poppins font-normal leading-[24px] hover:text-black duration-[0.4s] cursor-pointer'>Description</h2>
                <h2 className='text-2xl text-[#9F9F9F] font-poppins font-normal leading-[24px] hover:text-black duration-[0.4s] cursor-pointer'>Additional Information</h2>
                <h2 className='text-2xl text-[#9F9F9F] font-poppins font-normal leading-[24px] hover:text-black duration-[0.4s] cursor-pointer'>Reviews [5]</h2>
            </div>
            <p className='w-[1026px] pt-9 m-auto text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='w-[1026px] pt-8 m-auto text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div className="flex justify-center gap-7 pt-9">
                <div className="">
                    <img src={sofa1} alt="img" />
                </div>
                <div className="">
                    <img src={sofa2} alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Description