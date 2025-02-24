import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AlertInicioClases: React.FC = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Estimadas Familias y Comunidad Educativa',
      html: `
        <p style="text-align: justify;">
          Estamos a pocos días de comenzar un nuevo año académico con la energía renovada y con el entusiasmo y profesionalismo que nos caracteriza.
          Es por ello que en esta oportunidad nos dirigimos a ustedes para recordarles que comenzaremos a utilizar los textos escolares de la editorial SM
          a partir del lunes 10 de marzo para que nuestros estudiantes cuenten con ese recurso pedagógico.
        </p>
        <p style="text-align: justify;">
          Es importante mencionar que los textos tienen una vinculación con un espacio digital para alumnos y profesores, por lo que necesariamente deben ser originales,
          ya que de otra forma no podrán acceder a dicho material. Para la adquisición, pueden hacer uso del convenio establecido por el Colegio con la editorial y aprovechar el 40% de descuento al valor total de estos.
        </p>
        <p style="text-align: justify;">
          También comentarles que los horarios de clases de cada curso serán entregados el primer día, por lo que sugerimos que los niños y niñas puedan asistir con un cuaderno borrador y su colación.
          Además, los materiales solicitados en las listas de útiles pueden ser entregados a partir del lunes 3 de marzo en inspectoría con la rotulación correspondiente al nombre del estudiante y curso respectivo.
        </p>
        <p style="text-align: justify;">
          Queridas familias y comunidad, deseamos que puedan seguir disfrutando de estos días que restan de vacaciones y los esperamos el día martes 4 de marzo a las 8:15 hrs.,
          para dar inicio al tan esperado año académico 2025.
        </p>
        <p style="text-align: right;"><strong>Equipo Directivo</strong></p>
      `,
      confirmButtonText: 'Cerrar',
      showCloseButton: true,
      width: '60%',
      padding: '2em',
    });
  }, []);

  return null;
};

export default AlertInicioClases;
