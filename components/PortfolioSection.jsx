const PortfolioSection = (props) => (
    <section className='text-center bg-gray-100 dark:bg-stone-800 shadow-inner shadow-stone-300 dark:shadow-black pb-16 px-3'>
        <div>
            <h3 className='text-3xl pt-11 pb-8'>{props.title}</h3>
            <p>
                {props.subtitle}
            </p>
        </div>
        <div className='flex flex-shrink-0 gap-16 p-3 flex-wrap justify-center align-top py-16 w-96 w-full'>
            {props.children}
        </div>
    </section >
)

export default PortfolioSection