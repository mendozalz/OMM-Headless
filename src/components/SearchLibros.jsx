import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const AdvancedSearch = ({ posts }) => {
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    publicationDate: "",
    author: "",
    city: "",
    type: "",
  });
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const filteredResults = posts.filter((post) => {
      const { node } = post;

      const publicationDateFromAPI = new Date(node.acfLibros.fechaPublicacion);
      const formattedPublicationDate = publicationDateFromAPI
        .toISOString()
        .slice(0, 10);

      return (
        (filters.title === "" ||
          node.acfLibros.ordenEnumerada
            .toLowerCase()
            .includes(filters.title.toLowerCase())) &&
        (filters.category === "" ||
          node.acfLibros.categoriaLibro === filters.category) &&
        (filters.publicationDate === "" ||
          formattedPublicationDate === filters.publicationDate) &&
        (filters.author === "" ||
          node.acfLibros.autor.autorPublicacion.toLowerCase() ===
            filters.author.toLowerCase()) && // Exact match for author
        (filters.city === "" ||
          node.acfLibros.ciudad.toLowerCase() === filters.city.toLowerCase()) && // Exact match for city
        (filters.type === "" || node.acfLibros.type === filters.type)
      );
    });

    console.log(filteredResults);
    setResults(filteredResults);
  };

  useEffect(() => {
    // Extraer categorías de los datos y aplanarlas
    const allCategories = posts.flatMap((post) =>
      post.node.categories.nodes.map((categoryNode) => categoryNode.name)
    );
    // Eliminar duplicados
    const uniqueCategories = Array.from(new Set(allCategories));

    setCategories(uniqueCategories);
  }, [posts]);

  return (
    <div className="p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Buscador Avanzado de Libros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input
              name="title"
              placeholder="Título"
              value={filters.title}
              onChange={handleInputChange}
            />
            <Select onValueChange={handleSelectChange("category")}>
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  new Set(
                    posts.map((post) => post.node.acfLibros.categoriaLibro)
                  )
                ).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              name="publicationDate"
              type="date"
              value={filters.publicationDate}
              onChange={handleInputChange}
            />
            <Input
              name="author"
              placeholder="Autor"
              value={filters.author}
              onChange={handleInputChange}
            />
            <Input
              name="city"
              placeholder="Ciudad"
              value={filters.city}
              onChange={handleInputChange}
            />
            <Select onValueChange={handleSelectChange("type")}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de material" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleSearch}
            className="w-full bg-verde-oscuro text-white text-[18px]"
          >
            Buscar
          </Button>
        </CardContent>
      </Card>

      {results.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {results.map((resultado) => (
                <li key={resultado.node.databaseId} className="border-b pb-2">
                  <p>{console.log(resultado)}</p>
                  <p className="font-bold">
                    {resultado.node.acfLibros.ordenEnumerada}
                  </p>
                  <p>Titulo: {resultado.node.title}</p>
                  <p>
                    Autor: {resultado.node.acfLibros.autor.autorPublicacion}
                  </p>
                  <p>Categoría: {resultado.node.acfLibros.categoriaLibro}</p>
                  <p>Ciudad: {resultado.node.acfLibros.ciudad}</p>
                  <p>
                    Fecha de publicación:{" "}
                    {new Date(resultado.node.acfLibros.fechaPublicacion)
                      .toISOString()
                      .slice(0, 10)}
                  </p>
                  <p>
                    Tipo de material: {resultado.node.categories.nodes.name}
                  </p>
                  {resultado.node.acfLibros.caratulaLibro?.node
                    ?.mediaItemUrl && (
                    <img
                      src={
                        resultado.node.acfLibros.caratulaLibro.node.mediaItemUrl
                      }
                      alt={
                        resultado.node.acfLibros.caratulaLibro.node.altText ||
                        "Carátula del libro"
                      }
                      className="mt-2 max-w-xs"
                    />
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No se encontraron resultados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdvancedSearch;