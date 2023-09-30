
import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';



export default async function Productpage() {

  const projects = await getProjects();


  return (
    <div className='justify-center items-center text-center'>
      <h1 className="text-7xl font-extrabold font-bodoni-moda">Guide</h1>
      <p className="mt-3 text-xl text-gray-600">Your guide to finding the hidden treasures in your home</p>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center text-center p-10">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-4 border-gray-2 rounded-xl p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              width={200}
              height={200}
              className="object-cover text-center mx-auto"
            />
          )}
          <div className="mt-2 font-extrabold bg-black bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
        

      </div>
      <div>
          <p className="mt-3 text-xl text-gray-600 p-10">
            Dont have what youre looking for? <br /> 
            Dont worry. Theres a wide range of collectables and even if we dont have a guide for that category at the moment, it doesnt mean your item isnt valuable. <br />
            Send us a message and we will get back to you about whatever it is you think might be collectable. <br />
          </p>

        </div>
    </div>
  )
}

