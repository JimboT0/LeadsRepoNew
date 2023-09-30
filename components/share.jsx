'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


function footer() {

    const [currentPageURL, setCurrentPageURL] = useState('');

    useEffect(() => {
        // Access the window object and get the current URL once the component is mounted
        setCurrentPageURL(window.location.href);
    }, []);

    const quote = 'Discover Hidden Riches in Your Home: Unveiling the Lucrative Journey of Rediscovering the Forgotten Treasures that You May Have Lying Around Your House';

    return (

        <div>
            <EmailShareButton url={currentPageURL} quote={quote}><EmailIcon /></EmailShareButton>
            <FacebookShareButton url={currentPageURL} quote={quote}><FacebookIcon /></FacebookShareButton>
            <PinterestShareButton url={currentPageURL} quote={quote}><PinterestIcon /></PinterestShareButton>
            <TwitterShareButton url={currentPageURL} quote={quote}> <TwitterIcon /></TwitterShareButton>
            <WhatsappShareButton url={currentPageURL} quote={quote}><WhatsappIcon /></WhatsappShareButton>
        </div>



    )
}

export default footer


