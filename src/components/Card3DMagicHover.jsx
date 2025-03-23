import "../../card.css";

const Card3DMagicHover = ({
  title,
  autorPublicacion,
  ciudad,
  fechaPublicacion,
  mediaItemUrl,
  altText,
  slug,
}) => {
  return (
    <>
      <a href={`/libros/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="card-simple">
          {mediaItemUrl && (
            <img
              src={mediaItemUrl}
              alt={altText || "Carátula del libro"}
              className="caratula-libro m-auto max-w-[200px] md:max-w-[230px] lg:max-w-[200px] mb-4"
            />
          )}
          <div className="libro-info pl-6">
            <p className="text-balance">
              <b>Titulo:</b> {title}
            </p>
            <p className="text-balance">
              <b>Autor:</b> {autorPublicacion}
            </p>
            <p className="text-balance">
              <b>Categoría:</b> {"Libros"}
            </p>
            <p className="text-balance">
              <b>Ciudad:</b> {ciudad}
            </p>
            <p className="text-balance mb-3">
              <b>Fecha de publicación:</b>{" "}
              {new Date(fechaPublicacion).toISOString().slice(0, 4)}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card3DMagicHover;
