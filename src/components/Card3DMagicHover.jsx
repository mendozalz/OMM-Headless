import "../../card.css";

const Card3DMagicHover = ({
  title,
  autorPublicacion,
  ciudad,
  fechaPublicacion,
  mediaItemUrl,
  altText,
}) => {
  return (
    <>
      <div class="card">
        <div class="wrapper">
          <div className="text-balance" style={{ zIndex: 9, position: "relative" }}>
            <p className="text-balance">
              <b>Titulo:</b> {title}
            </p>
            <p className="text-balance">
              <b>Autor:</b> {autorPublicacion}
            </p>
            <p className="text-balance">
              <b>Categoría:</b> {"Libros"}{" "}
              {/* {resultado.node.acfLibros.categoriaLibro} */}
            </p>
            <p className="text-balance">
              <b>Ciudad:</b> {ciudad}
            </p>
            <p className="text-balance">
              <b>Fecha de publicación:</b>{" "}
              {new Date(fechaPublicacion).toISOString().slice(0, 4)}
            </p>
          </div>
          {mediaItemUrl && (
            <img
              src={mediaItemUrl}
              alt={altText || "Carátula del libro"}
              className="mt-2 rounded-lg m-0 object-cover max-w-[300px] md:max-w-[300px] caratulaPlana lg:m-auto lg:max-w-[350px]"
            />
          )}
        </div>
        <div className="libros-item " class="character">
          <div className="relative h-[420px] sm:max-w-lg sm:mx-auto -mt-20 md:-mt-10 lg:-mt-10 lg:max-w-none lg:mx-0">
            <div className="book mt-8 md:mt-0 lg:mt-0" style={{ scale: "100%" }}>
              <img src={mediaItemUrl} width={300} height={600} alt="libro" />
            </div>
          </div>
        </div>
        <img
          class="title"
          src="./img/logo octavio-03.png"
          alt="logo tipo de octavio marulanda morales"
          srcset=""
        />
      </div>
    </>
  );
};

export default Card3DMagicHover;
