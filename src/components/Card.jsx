import clsx from 'clsx'
import SizedBox from './SizedBox'

function Card({ item, className = "", index = 0 }) {
  return <div className={clsx(
    'flex flex-col min-h-[430px] h-full min-w-[340px] max-w-sm border border-black ',
    className,
    index !== 0 && 'ml-8'
  )}>

    <img src={item.image} className="h-64 w-full border-none" />
    <div className='text-left p-4'>
      <h1>{item.title}</h1>
      <SizedBox height={15} />
      <p>{item.desc}</p>
    </div>
  </div>
}

export default Card