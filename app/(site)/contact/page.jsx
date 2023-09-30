'use client'
import React from 'react'

import Contact from '../../../components/contact';
import Share from '../../../components/share';

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,

} from "react-share";

const ContactPage = () => {
  return (
    <div>
      <div className='flex py-40 justify-center bg-purple-50'>
        <div className='bg-purple-50 flex flex-col w-[80%] h-[70%] text-black rounded-xl justify-center'>
          <h1 className='text-center text-4xl font-bodoni-moda'>Get an Offer</h1>
          <br />
          <p className='text-center text-base font-lato pt-5'>Have your got some old items around your house? <br />You may not realise that old Watches, Trading cards, Guitars...... can be quite valuable, even in bad condition</p>

          <p className='text-center text-base font-lato pt-5'>Get in touch with us for a quote on your old items. </p>

          <EmailShareButton />
          <FacebookShareButton />
          <InstapaperShareButton />
          <LinkedinShareButton />
          <PinterestShareButton />
          <TwitterShareButton />
          <WhatsappShareButton />





          {/* <div className="w-full text-center mt-10"><span className="text-black font-bold font-lato">You can reach us anytime via</span><span className="text-black font-bold"> </span><span className="text-amber-300 text-xl font-bodoni-moda-bold leading-[30px] ">silvana@silvanajewellery.com<br /></span><span className="text-black font-bold font-lato">or fill out this form below and we’ll get back to you ASAP</span></div> */}
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ContactPage
