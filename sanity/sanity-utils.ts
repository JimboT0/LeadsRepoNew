import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';

export async function getProjects(): Promise<Project[]>{

    const client = createClient({

        projectId: "gfcigyhw",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "project"]| order(name desc){

            _id,

            _createdAt,

            name,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            content,

            content

        }`,
    );

};

export async function getProject(slug: string): Promise<Project> {

    const client = createClient({

        projectId: "gfcigyhw",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{

            _id,

            _createdAt,

            name,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            heading,

            content,

            content1,

            "image1": image.asset->url,

            content2,

            content3,

            content4



        }`,
        { slug }
    );
};


// export async function getPopularItem(slug: string): Promise<Project> {

//     const client = createClient({

//         projectId: "krtr6fep",
//         dataset: "production",
//         apiVersion: "2023-07-12",

//     });

//      return client.fetch(
//         groq`*[_type == "popular" && slug.current == $slug][0]{

//             _id,

//             _createdAt,

//             name,

//             category,

//             "slug": slug.current,

//             "image": image.asset->url,

//             url,

//             content

//         }`,
//         { slug }
//     );
// };

// export async function getTheProjects(categoryFilter: string): Promise<Project[]>{

//     const client = createClient({

//         projectId: "gfcigyhw",
//         dataset: "production",
//         apiVersion: "2023-07-12",

//     });

//      return client.fetch(
//         groq`*[_type == "project"]{

//             _id,

//             _createdAt,

//             name,

//             "slug": slug.current,

//             "image": image.asset->url,

//             url,

//             heading,

//             content

//         }`,

//     );

// };