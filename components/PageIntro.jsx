import Image from 'next/image'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import down from '../public/images/down246.png'
import replaceEmphasis from '../utils/replaceEmphasis'
const PageIntro = (props) => {
    return (
        <section className='px-8 pt-8 min-h-screen flex flex-col justify-between font-asap md:px-20 lg:px-32'>
            <div className='text-center flex flex-col gap-11 items-center'>
                <h2 className='text-3xl text-purple-500 md:text-5xl lg:text-7xl'>{props.title}</h2>
                <h3 className='text-xl md:text-2xl mx-auto'>{props.subtitle}</h3>
                <div>
                    <p className='text-md py-2 md:text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line'>
                        {replaceEmphasis(props.para)}
                        {/* below needed for transpilation to include the emphasis styling */}
                        <span className='text-purple-800'></span>
                    </p>
                </div>
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
            <div className='h-56'></div>
            <div onClick={props.handleScrollClick} className='bottom-0 sticky flex-grow-0 w-fit max-h-fit mx-auto cursor-pointer'>
                <Image src={down} width="128px" height="128px" alt="original vector art of Rory" />
            </div>
        </section>
    )
}

export default PageIntro