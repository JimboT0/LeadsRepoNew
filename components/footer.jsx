
import Link from 'next/link';
import Share from './share';
import Image from 'next/image';


function footer() {
    return (
        <div className="w-[100%] h-50vh bg-gray-800 justify-center items-center text-center" >


            <div className=' md:columns-5 columns-1 md:pt-60'>
                <Image alt='image' className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Home</Link></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/guide' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Guide</Link></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/contact' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Contact Us</Link></div>
                <Image alt='image' className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
            </div>

            <div>
                <Share />
            </div>


            <div className='flex flex-col justify-center items-center text-center'>
                <div className="w-[70%] h-[0px] border border-slate-800 mt-10"></div>
                <div className="w-[308.70px] h-[38.89px] text-center text-slate-300 text-sm font-normal leading-snug mt-10 font-bodoni-moda">© </div>
            </div>



        </div>
    )
}

export default footer


