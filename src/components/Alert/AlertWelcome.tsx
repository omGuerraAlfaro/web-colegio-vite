import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AlertWelcome: React.FC = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Aviso',
      text: 'Esta página es nueva y está en construcción.',
      icon: 'info',
      confirmButtonText: 'Entendido'
    });
  }, []);

  return null;
};

export default AlertWelcome;
