// "use client";
// import { useState } from "react";

// import Link from 'next/link';
// import FilterButton from './filterbutton';
// import ProjectList from './ProjectList';

// import Speedies from "@/assets/speedies.jpeg"




// export default function filter() {
//     const [categoryFilter, setCategoryFilter] = useState('featured');

//     const handleCategoryButtonClick = (category) => {
//         setCategoryFilter(category);
//     };

//     return (



//         <div className="justify-center items-center text-center">
//             <div
//                 className="justify-center items-center text-center mx-auto"
//             >
//                 <div
//                     className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 justify-center items-center text-center mx-auto"
//                 >
//                     <button onClick={() => handleCategoryButtonClick('featured')} className="inline-block px-3">
//                         <FilterButton backgroundImage="https://www.shorturl.at/img/shorturl-icon.png" buttonText={"Featured"} />
//                     </button>


//                     <button onClick={() => handleCategoryButtonClick('2')} className="inline-block px-3">
//                         <FilterButton backgroundImage="https://www.shorturl.at/img/shorturl-icon.png" buttonText={"2"} />
//                     </button>


//                     <button onClick={() => handleCategoryButtonClick('3')} className="inline-block px-3">
//                         <FilterButton backgroundImage="https://www.shorturl.at/img/shorturl-icon.png" buttonText={"3"}/>
//                     </button>


//                 </div>
//             </div>


//             <div className="">
//                 <ProjectList categoryFilter={categoryFilter} />
//             </div>




//         </div>

//     );
// }