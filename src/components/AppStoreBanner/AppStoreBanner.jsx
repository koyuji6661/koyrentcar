import React from 'react'
import pattern from '../../assets/website/pattern.jpeg'
import InstagramLogo from '../../assets/website/instagramlogopng.png'
import WhatsappLogo from '../../assets/website/whatsapplogopng.png'

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
}
const AppStoreBanner = () => {
  return (
        <div className='container pb-14'>
            <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl'
            style={bannerImg}
            >
                <div>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 data-aos='fade-up' className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Visit Our Media Social</h1>
                        <p data-aos='fade-up' className='text-center sm:px-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo vitae dolorem!</p>
                        <div className='flex flex-wrap  justify-center items-center gap-4'>
                            <a data-aos='fade-up' href="#">
                                <img src={InstagramLogo} alt="" className='max-w-[100px] sm:max-w-[60px] md:max-w-[90px]' />
                            </a>
                            <a data-aos='fade-up' href="#">
                                <img src={WhatsappLogo} alt="" className='max-w-[100px] sm:max-w-[60px] md:max-w-[90px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AppStoreBanner