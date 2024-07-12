// import { fetch, Agent } from 'undici';

export const fetchGraphQlLibros = async (query) => {
  // Solo en uso de servidor Local
  /* const agent = new Agent({
    connect: {
      rejectUnauthorized: false, // Ignorar certificados autofirmados
    },
  }); */

  try {
    const res = await fetch(import.meta.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      //dispatcher: agent, // Usar el agente configurado
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
};


export const getLibros = async () => {
  const query = `
       query Libros {
        graphQLibros {
          edges {
            node {
              slug
              acfLibros {
                ordenEnumerada
                caratulaLibro {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }


    `;

  try {
    const {graphQLibros}  = await fetchGraphQlLibros(query);
    return graphQLibros.edges.map((node) => node);
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`); 
  }
};

export const getSingleLibro = async (uri) => {
  const query = `
      query SingleLibro {
        graphQLibroBy(uri: "${uri}") {
          title
          content
          acfLibros {
            autor {
              autorPublicacion
              biografiaDelAutor
              fotoAutor {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            caratulaLibro {
              node {
                altText
                mediaItemUrl
              }
            }
            fechaPublicacion
            enlaceDeDescarga {
              node {
                link
              }
            }
          }
          categories {
            nodes {
              name
            }
        }
      }
}
    `;

  try {
    const  {graphQLibroBy}  = await fetchGraphQlLibros(query);
    return graphQLibroBy;
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`); 
  }
};

export const getGalImg = async () => {
  const query = `
      query GaleriaOMM {
        mediaItems(first: 30, where: {search: "OMM"}) {
          nodes {
            id
            title
            altText
            sourceUrl
          }
        }
      }
    `;

  try {
    const  GaleriaOMM  = await fetchGraphQlLibros(query);
    return GaleriaOMM.mediaItems.nodes.map((node) => node);
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`); 
  }
};

/* Iamgenes del carrusel en el HERO */

export const cards = [
  {
    url: "/fotos_octavio/carrusel-1.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 1,
    verMas: "/teatro",
  },
  {
    url: "/fotos_octavio/carrusel-2.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 2,
    verMas: "/folclor",
  },
  {
    url: "/fotos_octavio/carrusel-3.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 3,
    verMas: "/musica",
  },
];
