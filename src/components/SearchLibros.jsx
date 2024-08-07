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
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const AdvancedSearch = ({ posts }) => {
  /* Todo contenido que permanece comentado esta sujeto a cambios */

  const [filters, setFilters] = useState({
    title: "",
    category: "todasLasCategorias",
    publicationYear: "",
    city: "todasLasCiudades",
    type: "todosLosTipos",
  });
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [types, setTypes] = useState([]);

  //const [publicationYears, setPublicationYears] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    setResults([]);
    /* setFilters(prev => ({ ...prev, title: "" })); */ // codigo comentado por si piden el cambio
    const filteredResults = posts.filter((post) => {
      const { node } = post;

      // Obtener el año de publicación
      const publicationYear =
        new Date(node.acfLibros.fechaPublicacion).getFullYear() + 1;

      // Verificar si el tipo de material coincide
      const typeMatches =
        filters.type === "todosLosTipos" ||
        node.categories.nodes.some(
          (category) =>
            category.name.toLowerCase() === filters.type.toLowerCase()
        );

      // Búsqueda por título
      const titleMatches =
        filters.title === "" ||
        node.title.toLowerCase().includes(filters.title.toLowerCase());

      return (
        typeMatches &&
        titleMatches &&
        (filters.category === "todasLasCategorias" ||
          node.acfLibros.categoriaLibro.toLowerCase() ===
            filters.category.toLowerCase()) &&
        (filters.publicationYear === "" ||
          publicationYear.toString() === filters.publicationYear) &&
        (filters.city === "todasLasCiudades" ||
          node.acfLibros.ciudad.toLowerCase() === filters.city.toLowerCase())
      );
    });

    setResults(filteredResults);

    setFilters((prev) => ({ ...prev, title: "" }));
  };

  useEffect(() => {
    // Obtener ciudades únicas
    const uniqueCities = Array.from(
      new Set(posts.map((post) => post.node.acfLibros.ciudad))
    );
    setCities(uniqueCities);

    // Obtener categorias y subCategorias

    const categoriesMap = new Map();
    const allCategoriesSet = new Set();

    posts.forEach(post => {
      post.node.categories.nodes.forEach(category => {
        allCategoriesSet.add(category.name);
        if (!categoriesMap.has(category.name)) {
          categoriesMap.set(category.name, new Set());
        }
        if (category.children && category.children.nodes) {
          category.children.nodes.forEach(subCategory => {
            categoriesMap.get(category.name).add(subCategory.name);
            allCategoriesSet.add(subCategory.name);
          });
        }
      });
    });

    // Filtrar categorías principales que también son subcategorías
    const uniqueCategories = Array.from(allCategoriesSet).map(categoryName => {
      const subCategories = categoriesMap.get(categoryName) || new Set();
      return {
        name: categoryName,
        children: Array.from(subCategories).filter(subCat => subCat !== categoryName)
      };
    }).filter(category => !Array.from(categoriesMap.values()).some(subCats => subCats.has(category.name)));

    setCategories(uniqueCategories);
  }, [posts]);

  const renderCategoryOptions = (categories) => {
    return categories.map((category) => (
      <SelectGroup key={category.name}>
        <SelectLabel>{category.name}</SelectLabel>
        {category.children.length > 0 ? (
          category.children.map((subCategory) => (
            <SelectItem key={`${category.name}-${subCategory}`} value={`${category.name}-${subCategory}`}>
              {subCategory}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={category.name}>{category.name}</SelectItem>
        )}
      </SelectGroup>
    ));
  };

  return (
    <div className="p-4">
      <Card className="w-full md:max-w-[600px] m-auto mb-4">
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
            <Select value={filters.type} onValueChange={handleSelectChange("type")}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todosLosTipos">Todas las categorías</SelectItem>
                {renderCategoryOptions(categories)}
              </SelectContent>
            </Select>
            <Input
              name="publicationYear"
              type="number"
              placeholder="Año de publicación"
              value={filters.publicationYear}
              onChange={handleInputChange}
            />
            <Select
              value={filters.city}
              onValueChange={handleSelectChange("city")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todasLasCiudades">
                  Todas las ciudades
                </SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
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
            <CardTitle>Resultados ({results.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-t-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {results.map((resultado) => (
                <li
                  key={resultado.node.databaseId}
                  className="border-b pb-2 leading-7"
                >
                  <p>
                    <b>Titulo:</b> {resultado.node.title}
                  </p>
                  <p>
                    <b>Autor:</b>{" "}
                    {resultado.node.acfLibros.autor.autorPublicacion}
                  </p>
                  <p>
                    <b>Categoría:</b> {"Libros"} {/* {resultado.node.acfLibros.categoriaLibro} */}
                  </p>
                  <p>
                    <b>Ciudad:</b> {resultado.node.acfLibros.ciudad}
                  </p>
                  <p>
                    <b>Fecha de publicación:</b>{" "}
                    {new Date(resultado.node.acfLibros.fechaPublicacion)
                      .toISOString()
                      .slice(0, 4)}
                  </p>
                  {/* <p>
                    <b>Tipo de material:</b>{" "}
                    {resultado.node.categories.nodes
                      .map((category) => category.name)
                      .join(", ")}
                  </p> */}
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
                      className="mt-2 max-w-xs max-h-96 rounded-lg object-cover"
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
