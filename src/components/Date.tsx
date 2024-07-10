import React from 'react';

interface DateProps {
  fechaPublicacion: string;
}

const DateComponent: React.FC<DateProps> = ({ fechaPublicacion }) => {
  const fecha = new Date(fechaPublicacion);

  // Arreglo de nombres de los meses
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Obtener día, nombre del mes y año
  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = meses[fecha.getMonth()]; // Obtener el nombre del mes
  const año = fecha.getFullYear();

  // Formatear fecha en dia/mes/año
  const fechaFormateada = `${dia} de ${mes} de ${año}`;

  return (
    <time className="text-[20px] font-bold text-verde-oscuro" dateTime={fechaPublicacion}>
      {fechaFormateada}
    </time>
  );
};

export default DateComponent;
