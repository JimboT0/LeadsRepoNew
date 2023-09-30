"use client";
import { useState } from "react";

import Link from 'next/link';



export default function filterbutton({ buttonText, backgroundImage }) {

    return (
        <>
            <div
                className="w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover', // Optional: adjust background size as needed
                  }}
            ></div>
            <div className="justify-center items-center text-center text-sm font-serif antialiased">{buttonText}</div>

        </>
    );
}
