import { useState, useEffect } from 'react';

const IntroLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Duración total del GIF
    const introDuration = 5000; // 5 segundos

    // Comenzar el fade out al final
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, introDuration - 1000);

    // Remover el componente
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, introDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 w-full h-full z-50 flex items-center justify-center overflow-hidden"
      style={{
        opacity: opacity,
        transition: 'opacity 1s ease-in-out'
      }}
    >
      {/* Texto de fondo */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <h1 className="text-white text-[15rem] font-bold tracking-wider">OMM</h1>
      </div>
      
      {/* GIF con máscara */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          maskImage: 'url(/intro_OMM.gif)',
          WebkitMaskImage: 'url(/intro_OMM.gif)',
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  );
};

export default IntroLoader;
