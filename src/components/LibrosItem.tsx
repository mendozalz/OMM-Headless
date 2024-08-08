import { motion } from "framer-motion";

interface AcfLibros {
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

interface Node {
  slug: string;
  acfLibros: AcfLibros;
}

interface Post {
  node: Node;
}

interface Props {
  post: Post;
}

const LibrosItem: React.FC<Props> = ({ post }) => {

  console.log(post);
  
  
  if (!post || !post.node || !post.node.acfLibros) {
    console.error("Post data is missing");
    return null;
  }

  const { acfLibros, slug } = post.node;
  const mediaItemUrl = acfLibros?.caratulaLibro?.node?.mediaItemUrl;
  
  if (!mediaItemUrl) {
    console.error("Media item URL is missing");
    return null;
  }


  const librosVariant = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.5, duration: 1, staggerChildren: 0.5 },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div variants={librosVariant} layout className="libros-item">
        <div className="relative h-auto sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
          <a className="book-container w-full h-[230px] lg:h-auto md:h-auto" href={`/libros/${slug}`}>
            <div className="book mt-8 md:mt-0 lg:mt-8">
              <img
                src={mediaItemUrl}
                width={300}
                height={600}
                alt="libro"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LibrosItem;
