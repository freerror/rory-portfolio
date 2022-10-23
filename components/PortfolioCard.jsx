import Image from 'next/image'

const PortfolioCard = (props) => (
    <div>
        <h3 className='text-xl pb-3'>
            {props.title}
        </h3>
        <a href={props.url}>
            <div className='basis-full shadow-xl rounded-2xl border overflow-hidden'>
                <div className='h-fit overflow-hidden flex flex-shrink'>
                    <Image src={props.img} alt={"Images of " + props.title} />
                </div>
            </div>
        </a>
    </div>
)

export default PortfolioCard;