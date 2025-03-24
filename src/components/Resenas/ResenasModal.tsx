import React, { useEffect, useRef, useState } from "react";

interface Resena {
  id: string;
  autor: string;
  cargo?: string;
  contenido: string;
  imagen?: string;
}

interface ResenasModalProps {
  isOpen: boolean;
  onClose: () => void;
  resena: Resena;
}

const ResenasModal: React.FC<ResenasModalProps> = ({
  isOpen,
  onClose,
  resena,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ${
        isVisible ? "bg-opacity-50 opacity-100" : "bg-opacity-0 opacity-0"
      }`}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className={`w-full max-w-3xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 flex flex-col ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          style={{ maxHeight: "calc(100vh - 2rem)" }}
        >
          <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 border-b border-gray-200 bg-verde-claro bg-opacity-20">
            <div>
              <h2
                id="modal-title"
                className="text-xl sm:text-2xl font-bold text-verde-oscuro"
              >
                {resena.autor}
              </h2>
              {resena.cargo && (
                <p className="text-sm sm:text-base text-gray-600">
                  {resena.cargo}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollableContentRef}
            className="p-3 sm:p-4 md:p-6 overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 12rem)",
              overscrollBehavior: "contain",
            }}
            onWheel={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
              {resena.contenido.split("\n").map((paragraph, index) => (
                paragraph.trim() ? (
                  <div 
                    key={index}
                    className={`mb-4 ${index === 0 ? "font-semibold" : ""}`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ) : (
                  <div key={index} className="h-2"></div>
                )
              ))}
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-gray-200 flex justify-end bg-gray-50">
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-2 bg-verde-oscuro text-white rounded hover:bg-verde-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-verde-oscuro focus:ring-opacity-50"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResenasModal;
