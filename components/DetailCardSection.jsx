const DetailCardSection = (props) => (
    <section className='mx-2 pb-4 lg:mx-5'>
        <div className='text-center space-y-8 justify-center'>
            <h3 className="text-3xl">{props.title}</h3>
            <p className='max-w-xl m-auto text-md leading-8 text-gray-700 dark:text-gray-300'>
                I am a <span className='text-purple-800'>developer</span> and competent <span className='text-purple-800'>business analyst </span> with a passion for GNU/Linux, FOSS, art and design.
            </p>
            <p className='text-md leading-8 text-gray-700 dark:text-gray-300'>
                Check out my CV to learn more. Here is a taste:
            </p>
        </div>
        <div className='flex flex-wrap flex-shrink xl:flex-nowrap justify-center my-8 gap-8 xl:gap-5'>
            {props.children}
        </div>
    </section>
)

export default DetailCardSection