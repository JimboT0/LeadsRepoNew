// import { useState, useEffect } from 'react';
// import { getProjects } from '@/sanity/sanity-utils';
// import Link from 'next/link';

// function ProjectList({ categoryFilter }) {
//   const [projects, setProjects] = useState([]);


//   useEffect(() => {
//     async function fetchProjects() {
//       try {
//         const projectsData = await getProjects(categoryFilter);
//         setProjects(projectsData);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     }

//     fetchProjects();
//   }, [categoryFilter]);

//   return (
//     <div className='text-center'>
//       <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>

//         {projects.map((project) => (

//           <Link
//             href={`/projects/${project.slug}`}
//             key={project._id}
//             className="rounded-lg p-10 text-center">

//             {project.image && (

//               <img
//                 src={project.image}
//                 alt={project.name}
//                 width={300}
//                 height={300}
//                 className="object-cover rounded-lg  mx-auto w-80 h-80"
//               />

//             )}


//           </Link>


//         ))}

//       </div>

//     </div>
    

//   );
// }

// export default ProjectList;
