import Image from 'next/image'
import design from '../public/images/design512.png'
import code from '../public/images/code512.png'
import analysis from '../public/images/analysis512.png'

const DetailCardSection = (props) => (
    <section className='pt-6 mx-3 lg:mx-0'>
        <div className='text-center space-y-8 justify-center'>
            <h3 className="text-3xl">What I can do</h3>
            <p className='max-w-xl m-auto text-md leading-8 text-gray-700 dark:text-gray-300'>
                I am a <span className='text-purple-800'>developer</span> and competent <span className='text-purple-800'>business analyst </span> with a passion for GNU/Linux, FOSS, art and design.
            </p>
            <p className='text-md leading-8 text-gray-700 dark:text-gray-300'>
                Check out my CV to learn more. Here is a taste:
            </p>
        </div>
        <div className='flex flex-wrap flex-shrink xl:flex-nowrap justify-center my-8 gap-10'>
            <div className='text-center basis-full max-w-2xl padding-10 shadow-xl rounded-2xl space-y-5 pb-10 overflow-hidden border'>
                <h3 className='text-xl font-medium pt-8 p-2'>Develop and Automate</h3>
                <div className='h-fit mx-8 overflow-hidden'>
                    <Image src={code} alt="a snippet of code" />
                </div>
                <p className='p-3'>I design and maintain python automation for a fast-paced enterprise service centre and build apps and websites on proven modern frameworks.</p>
                <h4 className='pt-4 text-purple-600 text-lg'>Dev tools I use</h4>
                <div className='space-y-2 text-s'>
                    <p>Javascript, HTML and CSS</p>
                    <p>Python</p>
                    <p>Next.js</p>
                    <p>React</p>
                    <p>Jest</p>
                    <p>C++</p>
                    <p>GNU/Linux</p>
                </div>
            </div>
            <div className='text-center basis-full max-w-2xl padding-10 shadow-xl rounded-2xl space-y-5 pb-10 overflow-hidden border'>
                <h3 className='text-xl font-medium pt-8 p-2'>Illustration and Design</h3>
                <div className='h-fit mx-8 overflow-hidden'>
                    <Image src={design} alt="a snippet of graphic design work" />
                </div>
                <p className='p-3'>I create visual, 3d and audio assets, with skill in a wide range of tools.</p>
                <h4 className='pt-4 text-purple-600 text-lg'>Design/Workspace tools I use</h4>
                <div className='space-y-2 text-s'>
                    <p>Inkscape</p>
                    <p>Gimp</p>
                    <p>Blender</p>
                    <p>Penpot</p>
                    <p>Illustrator</p>
                    <p>Photoshop</p>
                    <p>Davinci Resolve</p>
                    <p>Premiere</p>
                    <p>Presonus Studio One</p>
                    <p>FL Studio</p>
                    <p>Reaper</p>
                </div>
            </div>
            <div className='text-center basis-full max-w-2xl padding-10 shadow-xl rounded-2xl space-y-5 pb-10 overflow-hidden border'>
                <h3 className='text-xl font-medium pt-8 p-2'>IT business analysis & consulting</h3>
                <div className='h-fit mx-8 overflow-hidden'>
                    <Image src={analysis} alt="Smiling male face" />
                </div>
                <p className='p-3'>I have years of experience as an IT business analyst for a telco. I can go beyond driving a spreadsheet to provide deep insights.</p>
                <h4 className='pt-4 text-purple-600 text-lg'>Business analysis tools I use</h4>
                <div className='space-y-2 text-s'>
                    <p className=''>Excel</p>
                    <p className=''>PowerBI</p>
                    <p className=''>Python</p>
                    <p className=''>o365</p>
                </div>
                <h4 className='pt-4 text-purple-600'>Certifications</h4>
                <div className='space-y-2 text-s'>
                    <p className=''>ITIL</p>
                    <p className=''>Cisco CCENT/CCNA</p>
                </div>
            </div>
        </div>
    </section>
)

export default DetailCardSection