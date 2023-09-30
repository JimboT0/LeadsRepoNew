import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import 'tailwindcss/tailwind.css'; 
import Contact from "../../../components/contact";
import '../../globals.css'

type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className="p-8 border rounded-lg shadow-lg m-5 md:mx-10 bg-slate-100 drop-shadow-lg flex flex-col justify-center items-center text-center">
            <a  href="/" className="left-0 h-11 pt-2 m-2 border rounded-xl absolute top-0  bg-gray-700 md:w-[10%]">
                <a className="text-white">Back</a>
            </a>

            <a  href="/" className="right-0 h-11 pt-2 m-2 border rounded-xl absolute top-0  bg-gray-700 w-[10%]">
                <a className="text-white">Back</a>
            </a>

            <header className="flex items-center justify-between mb-4 text-center">
                <h1 className="text-3xl m-10 font-semibold items-center text-center"><PortableText value={project.heading} /></h1>
                
            </header>


            <div className="text-sm text-gray-700 items-center md:mx-20">
                <PortableText value={project.content} />
            </div>

            <div className="mt-8 relative w-200 h-64 mx-auto justify-center items-center text-center">
                <Image
                    src={project.image1}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-64 h-64"
                />
            </div>


            <div className="text-sm text-gray-700 items-center md:mx-20">
                <PortableText value={project.content2} />
            </div>

            <div className="mt-8 relative w-200 h-64 mx-auto justify-center items-center text-center">
                <Image
                    src={project.image2}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-64 h-64"
                />
            </div>

            <div className="text-sm text-gray-700 items-center md:mx-20">
                <PortableText value={project.content3} />
            </div>

            <div className="mt-8 relative w-200 h-64 mx-auto justify-center items-center text-center">
                <Image
                    src={project.image3}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-64 h-64"
                />
            </div>

            <div className="text-sm text-gray-700 items-center md:mx-20">
                <PortableText value={project.content4} />
            </div>

            <div className="text-sm text-gray-700 mt-10 grid gird-cols-3 place-content-center w-[95vw]">
                <Contact />
            </div>

        </div>
    );
}
