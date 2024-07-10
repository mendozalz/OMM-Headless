export interface AcfLibros {
    ordenEnumerada: number; // Añadido para compatibilidad
    fotoAutor: {
      altText: string;
      mediaItemUrl: string;
    };
    caratulaLibro: {
      node: {
        mediaItemUrl: string;
      };
    };
  }
  
  export interface Node {
    slug: string;
    acfLibros: AcfLibros;
  }
  
  export interface Post {
    node: Node;
  }
  
  export interface Props {
    posts: Post[];
  }
  