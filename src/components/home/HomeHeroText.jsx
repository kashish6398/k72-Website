import React from 'react'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[6.5vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[6.5vw] leading-[10vw]'>
                qui
                <div className='lg:h-[5.5vw] lg:w-[13vw] h-[7vw] w-[16vw] rounded-full -mt-2 lg:-mt-1.5 overflow-hidden '>
                    <video className='h-full w-full object-cover rounded-full overflow-hidden' autoPlay loop muted src="../../../public/video.mp4"></video>
                </div>
                génère
            </div>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[6.5vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText