import Image from 'next/image'

const PortfolioCard = ({ title, url, img }) => (
    <div>
        <h3 className='text-xl pb-3'>
            {title}
        </h3>
        <a href={url}>
            <div className='basis-full shadow-xl rounded-2xl border overflow-hidden'>
                <div className='h-fit overflow-hidden flex flex-shrink'>
                    <Image src={img} alt={"Images of " + title} />
                </div>
            </div>
        </a>
    </div>
)

export default PortfolioCard;