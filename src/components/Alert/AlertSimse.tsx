import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import topFive from '../../assets/img/top5.png';

const AlertWelcome: React.FC = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Ultimos Resultados SIMCE',
      text: 'Colegio Andes Chile TOP FIVE en resultados SIMCE 2023. ¡Felicidades a toda la comunidad educativa!',
      imageUrl: topFive,
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: 'Ver Más Detalles',
      timer: 10000,
      timerProgressBar: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://www.colegioandeschile.cl/info-simce';
      }
    });
  }, []);

  return null;
};

export default AlertWelcome;
