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
  /* Todo contenido que permanece comentado es por que esta sujeto a cambios */
  
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
      const publicationYear = new Date(
        node.acfLibros.fechaPublicacion
      ).getFullYear();
  
      // Verificar si el tipo de material coincide
      const typeMatches = filters.type === "todosLosTipos" || 
        node.categories.nodes.some(category => category.name.toLowerCase() === filters.type.toLowerCase());
  
      // Búsqueda por título
      const titleMatches = filters.title === "" ||
        node.title.toLowerCase().includes(filters.title.toLowerCase()) ||
        node.acfLibros.ordenEnumerada.toLowerCase().includes(filters.title.toLowerCase());
  
      console.log(`Title Filter: "${filters.title}", Post Title: "${node.title}", Orden Enumerada: "${node.acfLibros.ordenEnumerada}", Matches: ${titleMatches}`);
  
      return (
        typeMatches &&
        titleMatches &&
        (filters.category === "todasLasCategorias" || 
          node.acfLibros.categoriaLibro.toLowerCase() === filters.category.toLowerCase()) &&
        (filters.publicationYear === "" || 
          publicationYear.toString() === filters.publicationYear) &&
        (filters.city === "todasLasCiudades" || 
          node.acfLibros.ciudad.toLowerCase() === filters.city.toLowerCase())
      );
    });
  
    console.log("Filtered Results:", filteredResults);
    setResults(filteredResults);
  
    setFilters(prev => ({ ...prev, title: "" }));

  };

  

  useEffect(() => {
    // Extraer categorías únicas
    const uniqueCategories = Array.from(
      new Set(posts.map(post => post.node.acfLibros.categoriaLibro))
    );
    setCategories(uniqueCategories);

    // Obtener ciudades únicas
    const uniqueCities = Array.from(
      new Set(posts.map(post => post.node.acfLibros.ciudad))
    );
    setCities(uniqueCities);

    // Obtener tipos de materiales únicos
    const uniqueTypes = Array.from(
      new Set(posts.flatMap(post => post.node.categories.nodes.map(node => node.name)))
    );
    setTypes(uniqueTypes);

    console.log("Unique Categories:", uniqueCategories);
    console.log("Unique Cities:", uniqueCities);
    console.log("Unique Types:", uniqueTypes);
  }, [posts]);

  console.log(results);
  
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
            <Select value={filters.category} onValueChange={handleSelectChange("category")}>
            
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todasLasCategorias">Todas las categorías</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              name="publicationYear"
              type="number"
              placeholder="Año de publicación"
              value={filters.publicationYear}
              onChange={handleInputChange}
            />
            <Select value={filters.city} onValueChange={handleSelectChange("city")}>
            
              <SelectTrigger>
                <SelectValue placeholder="Ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todasLasCiudades">Todas las ciudades</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filters.type} onValueChange={handleSelectChange("type")}>
            
              <SelectTrigger>
                <SelectValue placeholder="Tipo de material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todosLosTipos">Todos los tipos</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
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
                <li key={resultado.node.databaseId} className="border-b pb-2 leading-7">
                 {/*  <p className="font-bold">
                    {resultado.node.acfLibros.ordenEnumerada}
                  </p> */}
                  <p><b>Titulo:</b> {resultado.node.title}</p>
                  <p>
                    <b>Autor:</b> {resultado.node.acfLibros.autor.autorPublicacion}
                  </p>
                  <p><b>Categoría:</b> {resultado.node.acfLibros.categoriaLibro}</p>
                  <p><b>Ciudad:</b> {resultado.node.acfLibros.ciudad}</p>
                  <p>
                    <b>Fecha de publicación:</b>{" "}
                    {new Date(resultado.node.acfLibros.fechaPublicacion)
                      .toISOString()
                      .slice(0, 4)}
                  </p>
                  <p>
                    <b>Tipo de material:</b> {resultado.node.categories.nodes.map(category => category.name).join(", ")}
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
                      className="mt-2 max-w-xs max-h-96 rounded-lg object-cover"
                    />
                  )}
                  {resultado.node.acfLibros.verEn && (
                    <a className="font-bold" href={ resultado.node.acfLibros.verEn} target="_blank" rel="noopener noreferrer"><small className="lg:text-[#064F5E] text-base">Disponible en</small></a>
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
