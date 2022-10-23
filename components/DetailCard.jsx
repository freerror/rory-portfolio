import Image from 'next/image'

const DetailCard = (props) => (
    <div className='text-center basis-full max-w-2xl padding-10 shadow-xl rounded-2xl space-y-5 pb-10 overflow-hidden border'>
        <h3 className='text-xl font-medium pt-8 p-2'>{props.title}</h3>
        <div className='h-fit mx-8 overflow-hidden'>
            <Image src={props.img} alt="a snippet of code" />
        </div>
        <p className='px-8 py-4'>{props.body}</p>
        <h4 className='pt-4 text-purple-600 text-lg'>{props.detailHeading}</h4>
        <div className='space-y-2 text-s'>
            {props.detailPara.map(para => (
                <p>{para}</p>
            ))}
        </div>
    </div>
)

export default DetailCard