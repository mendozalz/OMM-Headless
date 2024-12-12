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
import EncapsulamientoLibros from "./EncapsulamientoLibros";
import LibrosItem from "./LibrosItem";
import Card3DMagicHover from "./Card3DMagicHover";

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
            filters.category.toLowerCase())
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

    posts.forEach((post) => {
      post.node.categories.nodes.forEach((category) => {
        allCategoriesSet.add(category.name);
        if (!categoriesMap.has(category.name)) {
          categoriesMap.set(category.name, new Set());
        }
        if (category.children && category.children.nodes) {
          category.children.nodes.forEach((subCategory) => {
            categoriesMap.get(category.name).add(subCategory.name);
            allCategoriesSet.add(subCategory.name);
          });
        }
      });
    });

    // Filtrar categorías principales que también son subcategorías
    const uniqueCategories = Array.from(allCategoriesSet)
      .map((categoryName) => {
        const subCategories = categoriesMap.get(categoryName) || new Set();
        return {
          name: categoryName,
          children: Array.from(subCategories).filter(
            (subCat) => subCat !== categoryName
          ),
        };
      })
      .filter(
        (category) =>
          !Array.from(categoriesMap.values()).some((subCats) =>
            subCats.has(category.name)
          )
      );

    setCategories(uniqueCategories);
  }, [posts]);

  const renderCategoryOptions = (categories) => {
    return categories.map((category) => (
      <SelectGroup key={category.name}>
        {/* <SelectLabel>{category.name}</SelectLabel> */}
        {category.children.length > 0 ? (
          category.children.map((subCategory) => (
            <SelectItem
              key={`${category.name}-${subCategory}`}
              value={`${category.name}-${subCategory}`}
            >
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
            <Select
              value={filters.type}
              onValueChange={handleSelectChange("type")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Tipo de material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todosLosTipos">
                  Todas las categorías
                </SelectItem>
                {renderCategoryOptions(categories)}
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
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Resultados ({results.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-3 md:p-6">
            <ul className="space-t-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {results.map((resultado) => (
                <li
                key={resultado.node.databaseId}
                className="border-b pb-2 leading-7 mt-0 m-auto"
                >
                  <Card3DMagicHover 
                  title={resultado.node.title} 
                  autorPublicacion={resultado.node.acfLibros.autor.autorPublicacion}
                  ciudad={resultado.node.acfLibros.ciudad}
                  fechaPublicacion={new Date(resultado.node.acfLibros.fechaPublicacion)
                    .toISOString()
                    .slice(0, 4)}
                    mediaItemUrl={resultado.node.acfLibros.caratulaLibro.node.mediaItemUrl}
                    altText={resultado.node.acfLibros.caratulaLibro.node.altText}
                  />                  
                  {resultado.node.acfLibros.verEn && (
                    <div className="disponibleText mt-3 ml-2">
                      <a
                        className="font-bold"
                        href={resultado.node.acfLibros.verEn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <small className="text-[#064F5E] text-base mt-20">
                          Disponible aquí
                        </small>
                      </a>
                    </div>
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
