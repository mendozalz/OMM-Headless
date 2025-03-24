import React, { useState, useCallback } from "react";
import ResenasModal from "@/components/Resenas/ResenasModal";

interface Resena {
  id: string;
  autor: string;
  cargo?: string;
  contenido: string;
  imagen?: string;
}

interface ResenasGridProps {
  resenas: Resena[];
}

const ResenasGrid: React.FC<ResenasGridProps> = ({ resenas }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedResena, setSelectedResena] = useState<Resena | null>(null);

  // Usar useCallback para evitar recreaciones innecesarias de la función
  const openModal = useCallback((resena: Resena): void => {
    // Primero establecer la reseña seleccionada
    setSelectedResena(resena);
    // Luego abrir el modal en el siguiente ciclo de renderizado
    setTimeout(() => {
      setModalOpen(true);
    }, 0);
  }, []);

  // Usar useCallback para evitar recreaciones innecesarias de la función
  const closeModal = useCallback((): void => {
    // Primero cerrar el modal
    setModalOpen(false);
    // Luego limpiar la reseña seleccionada después de que termine la animación
    setTimeout(() => {
      setSelectedResena(null);
    }, 300);
  }, []);

  // Función para truncar el texto a un número específico de palabras
  const truncateText = (text: string, maxWords: number): string => {
    // Eliminar saltos de línea y espacios múltiples para el resumen
    const cleanText = text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
    const words = cleanText.split(" ");
    if (words.length <= maxWords) return cleanText;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  // Extraer el primer párrafo significativo del contenido
  const getFirstParagraph = (text: string): string => {
    const paragraphs = text.split("\n").filter((p) => p.trim().length > 0);
    // Buscar el primer párrafo que tenga al menos 100 caracteres
    const significantParagraph = paragraphs.find((p) => p.trim().length >= 100);
    return significantParagraph || paragraphs[0] || text;
  };

  return (
    <div className="container-resenas-grid mx-auto px-0 py-8 lg:px-4 lg:max-w-[85vw] w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resenas.map((resena) => {
          // Obtener un párrafo significativo para mostrar en la tarjeta
          const displayText = getFirstParagraph(resena.contenido);

          return (
            <div
              key={resena.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-verde-oscuro text-center mb-1">
                    {resena.autor}
                  </h3>
                  {resena.cargo && (
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {resena.cargo}
                    </p>
                  )}
                </div>

                <div className="text-gray-700 mb-4 flex-grow overflow-hidden">
                  <p className="italic text-sm leading-relaxed">
                    {truncateText(displayText, 40)}
                  </p>
                </div>

                <div className="mt-auto flex justify-center">
                  <button
                    onClick={() => openModal(resena)}
                    className="text-verde-oscuro hover:text-verde-dark font-medium flex items-center transition-colors duration-200 px-4 py-2 rounded hover:bg-verde-claro hover:bg-opacity-20"
                    aria-label={`Ver testimonio completo de ${resena.autor}`}
                  >
                    Ver testimonio completo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedResena && (
        <ResenasModal
          isOpen={modalOpen}
          onClose={closeModal}
          resena={selectedResena}
        />
      )}
    </div>
  );
};

export default ResenasGrid;
