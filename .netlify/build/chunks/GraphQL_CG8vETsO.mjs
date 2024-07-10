const fetchGraphQlLibros = async (query) => {
  const res = await fetch(
    "https://octaviomarulanda.live-website.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query
      })
    }
  );
  const { data } = await res.json();
  return data;
};
const getLibros = async () => {
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
    const { graphQLibros } = await fetchGraphQlLibros(query);
    return graphQLibros.edges.map((node) => node);
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`);
  }
};
const getSingleLibro = async (uri) => {
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
    const { graphQLibroBy } = await fetchGraphQlLibros(query);
    return graphQLibroBy;
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`);
  }
};
const getGalImg = async () => {
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
    const GaleriaOMM = await fetchGraphQlLibros(query);
    return GaleriaOMM.mediaItems.nodes.map((node) => node);
  } catch (error) {
    console.error("Error fetching libros:", error);
    throw new Error(`Error fetching libros: ${error}`);
  }
};

export { getSingleLibro as a, getLibros as b, getGalImg as g };
