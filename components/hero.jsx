'use client'
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Share from './share';

function hero() {

    const guidesRef = useRef(null);

    const scrollToGuides = () => {
        if (guidesRef.current) {
            guidesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const shareRef = useRef(null);

    const scrollToShare = () => {
        if (shareRef.current) {
            shareRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div>
            <div className="w-[100%] h-100vh  flex flex-col md:flex-row justify-center items-center text-center">
                <div style={{
                    backgroundImage: "url(/olditems3.jpg)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    height: '100vh'

                }} className=' flex flex-col justify-center items-center text-center order-2 md:order-1'>
                    <div className="w-[100%] text-white text-3xl md:text-3xl font-bold leading-[106.69px] tracking-wide font-bodoni-moda ">Discover Hidden Riches in Your Home:</div>
                    <div className="w-[100%] text-slate-200 leading-7 font-lato px-5 pt-6 text-xl md:text-xl tracking-wide pb-5 mx-auto">Unveiling the Lucrative Journey of Rediscovering the Forgotten Treasures <br />that You May Have Lying Around Your House</div>
                    <div className='flex flex-col lg:flex-row justify-center items-center text-center p-4'>
                        <button onClick={scrollToShare} className="w-[290px] h-[50px] bg-indigo-800 rounded-[20px] flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-200 text-[17px] font-black tracking-tight font-lato">Share</div></button>
                        <button onClick={scrollToGuides} className="w-[290px] h-[50px] bg-purple-50 rounded-[20px] border border-indigo-200 flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-800 text-[17px] font-black tracking-tight font-lato">Our Guide</div></button>
                    </div>
                </div>

            </div>
            <div className="w-[100%] h-100vh p-10 flex flex-col justify-center items-center text-center">
                <div className=' flex flex-col justify-center items-center text-center'>
                    <div>
                        <div className="w-[100%] text-slate-400 md:text-xl font-2xl leading-7 font-lato px-7 pt-6">
                            Welcome to a thrilling journey that promises not only the joy of discovery but the potential for substantial financial gain. 
                            In our blog, "Discover Hidden Riches in Your Home," we delve into the fascinating world of forgotten items, 
                            each with the potential to transform your life in more ways than one.
                            Your home, often viewed as a sanctuary of comfort, warmth, and familiarity, may also be harboring a wealth of untapped riches.
                            As you sit in your living room, you may have never imagined that the
                            <a className='font-extrabold' href='https://origintime.co.za/'> old watch </a>
                            in the cupboard could be worth a small fortune, or that the
                            <a className='font-extrabold' href='https://origintime.co.za/'> vintage stamp collection </a>
                            gathering dust in your attic could be a ticket to financial freedom.
                        </div>
                        <img className="w-[486px] h-[200px] rounded-[20px] m-10 mx-auto" src="https://via.placeholder.com/486x200" />

                    </div>
                    <div>
                        <div className="w-[100%] text-slate-400 md:text-xl font-2xl leading-7 font-lato px-7 pt-6 "> In this blog, we invite you to become a modern-day treasure hunter, armed with knowledge and curiosity. 
                        We'll guide you through the process of identifying and selling items that could change your financial landscape. From
                            timepieces
                            ,
                            automobiles
                            ,
                            vintage jewelry
                            and
                            even trading cards!
                            , we'll unveil the secrets of each hidden gem.

                        </div>
                        <img className="w-[486px] h-[200px] rounded-[20px] m-10 mx-auto" src="https://via.placeholder.com/486x200" />

                    </div>
                    <div>
                        <div className="w-[100%] text-slate-400 md:text-xl font-2xl leading-7 font-lato px-7 pt-6"> 
                        The world of collectibles, antiques, and vintage items is a thriving marketplace where items of astonishing worth change hands every day. 
                        We'll share stories of ordinary people who stumbled upon extraordinary finds right in their own homes, leading to life-altering windfalls.

                        </div>
                        <img className="w-[486px] h-[200px] rounded-[20px] m-10 mx-auto" src="https://via.placeholder.com/486x200" />

                    </div>
                    <div>
                        <div className="w-[100%] text-slate-400 md:text-xl font-2xl leading-7 font-lato px-7 pt-6"> Our experts will provide valuable insights into the world of appraisals, auctions, and online marketplaces. 
                        You'll gain the know-how to recognize the hidden potential of your posessions.
                            But this isn't just about financial gain; 
                            it's about unlocking the potential that has been locked away in your home for years. 
                            It's about turning the ordinary into the extraordinary and the mundane into the exceptional. 
                            It's about uncovering treasures that have the power to reshape your life and open doors you never thought possible.

                        </div>
                        <img className="w-[486px] h-[200px] rounded-[20px] m-10 mx-auto" src="https://via.placeholder.com/486x200" />

                    </div>
                    <div>
                        <div className="w-[100%] text-slate-400 md:text-xl font-2xl leading-7 font-lato px-7 pt-6 pb-7"> 
                        So, are you ready to embark on this thrilling journey into the world of hidden riches? 
                        Are you prepared to explore the untapped potential within the very walls of your home? 
                        Join us, as we venture into a world where your possessions could hold the keys to a brighter, more prosperous future.
                            Get ready to be inspired, amazed, and motivated to discover the lucrative side of your belongings. 
                            It's time to turn your curiosity into cash, and your home into a treasure trove of opportunity. 
                            Let's begin this exciting adventure together, where wealth and wonder await just around the corner!

                        </div>
                        <img className="w-[486px] h-[200px] rounded-[20px] m-10 mx-auto" src="https://via.placeholder.com/486x200" />

                    </div>
                    <div>
                        <div className='flex flex-col  justify-center items-center text-center p-10 m-10' ref={shareRef}>
                            <p className='text-center text-base font-lato pt-5 p-10'>
                                Have some friends that could benefit from this information? 
                                <br />
                                How about sharing this website with them.</p>

                            <Share ></Share>
                        </div >
                    </div>
                    <div ref={guidesRef}></div>

                </div>
            </div>
        </div>
    )
}

export default hero
