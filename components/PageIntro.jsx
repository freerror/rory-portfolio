import Image from 'next/image'
import { useState } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import down from '../public/images/down246.png'
const PageIntro = (props) => {
    return (
        <section className='pt-8 min-h-screen flex flex-col justify-between font-asap md:px-20 lg:px-32 pb-20'>
            <div className='text-center flex flex-col gap-9 items-center'>
                <h2 className='text-3xl text-purple-500 md:text-5xl lg:text-7xl'>Rory Samson</h2>
                <h3 className='text-xl md:text-2xl mx-auto'>Front-to-back developer and IT business analyst</h3>
                <p className='text-md md:text-lg pt-5 text-gray-700 dark:text-gray-300'>Hi, Im Rory.</p>
                <p className='text-md md:text-lg pb-5 text-gray-700 dark:text-gray-300'>I am looking for my next developer job. Please check out my work and get in touch if you think I could be a good fit for your team.</p>
                <div className='text-5xl flex justify-center gap-16 text-gray-600 '>
                    <a href='https://github.com/account-sxf'>
                        <AiFillGithub />
                    </a>
                    <a href='https://nz.linkedin.com/in/rory-samson-441896244'>
                        <AiFillLinkedin />
                    </a>
                </div>
                <div className='w-fit m-auto'>
                    <Image src={props.mainImg} width="375px" height="613.4px" alt="original vector art of Rory" />
                </div>
            </div>
            <div className='bottom-0 sticky flex-grow-0 w-fit max-h-fit mx-auto'>
                <Image src={down} width="128px" height="128px" alt="original vector art of Rory" />
            </div>
        </section>
    )
}

export default PageIntro