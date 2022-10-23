import replaceEmphasis from "../utils/replaceEmphasis"

const DetailCardSection = (props) => {
    return (
        <section className='mx-2 pb-4 lg:mx-5'>
            <div className='text-center space-y-8 justify-center'>
                <h3 className="text-3xl">{props.title}</h3>
                <p className='m-auto text-md leading-8 text-gray-700 whitespace-pre-line dark:text-gray-300'>
                    {replaceEmphasis(props.para)}
                </p>
            </div>
            <div className='flex flex-wrap flex-shrink xl:flex-nowrap justify-center my-8 gap-8 xl:gap-5'>
                {props.children}
            </div>
        </section>
    )
}

export default DetailCardSection