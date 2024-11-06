import banner from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className='  md:h-full  md:-mt-52 md:w-8/12 border-2 p-3 flex justify-center mx-auto shadow-lg rounded-2xl backdrop:blur bg-white/50'>
    <img src={banner} alt="" className=' md:h-[450px] w-full rounded-2xl '/>
</div>
  )
}

export default Banner