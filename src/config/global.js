export default {
  global: {
    componenteFormativo: 'Manejo apropiado de vitroplantas',
    descripcionCurso:
      'Este componente formativo se encuentra integrado por temas asociados a la consolidación de las vitroplantas, en cuanto a los elementos necesarios para proporcionar las condiciones inmediatas que garanticen el establecimiento definitivo de los nuevos organismos generados mediante la micropropagación in vitro.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Consolidación de vitroplantas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sustratos para el endurecimiento vegetal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Trasplantado de vitroplantas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Adaptación vegetal',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Prendimiento vegetal',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Sanidad vegetal',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Selección y dosificación de agroinsumos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Mecanismos de seguimiento al proceso',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sostenimiento de condiciones para la consolidación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificación de condiciones agroambientales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Identificación de calidad del agua',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Funcionamiento y frecuencia del sistema de riego',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Gestión de residuos en el endurecimiento',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Consolidación de vitroplantas',
      referencia:
        'Ramos-Amaya, JE. (2012). Avances de la micropropagación in vitro de plantas leñosas. Proyecto de grado especialización en Biotecnología Agraria, Universidad Nacional Abierta y a Distancia.',
      tipo: 'Proyecto de grado (especialización)',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/2515/17127974.pdf;jsessionid=F81E99C24EF92EFB56FB2197A6D90B67.jvm1?sequence=1',
    },
    {
      tema: 'Prácticas aclimatación',
      referencia:
        'Cruz-Pizarro, F. (2012). Micropropagación (manual de prácticas). Universidad Nacional Autónoma de México.',
      tipo: 'Manual',
      link:
        'http://portal.cuautitlan.unam.mx/manuales/micropropagacion_manualprac.pdf',
    },
    {
      tema: 'Protocolos propagación algunas especies',
      referencia:
        'Cárdenas, A. Espinoza, R. (2014). Guía Práctica de Cultivo In Vitro de Especies Vegetales. Universidad Politécnica Salesiana.',
      tipo: 'Guía',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/9611/1/UPS-QT07914.pdf',
    },
    {
      tema: 'Trasplantado',
      referencia:
        'Escobar, RH. Caicedo, E. Muñoz, L. Ríos, A. Azcárate, A. Dorado, C. Tohme, J. (2012). El cultivo in vitro: otra manera de propagar yuca. ISNB-978-958-694-111-2.',
      tipo: 'Guía',
      link:
        'http://ciat-library.ciat.cgiar.org/Articulos_Ciat/biblioteca/el_cultivo_in_vitro_otra_manera_propagar_yuca.pdf',
    },
    {
      tema: 'Trasplante y aclimatación',
      referencia:
        'Cruz, B. (2018). Aclimatación de cultivo <i>in vitro</i> a <i>ex vitro</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-TocB5Mchy8',
    },
  ],
  glosario: [
    {
      termino: 'Almaciguera',
      significado:
        'Recipiente de sembrado temporal donde se dota a la semilla o plántula de las condiciones óptimas para el proceso de crecimiento inicial que antecede a la siembra definitiva de la planta.',
    },
    {
      termino: 'Auxina',
      significado:
        'hormonas que participan durante todo el ciclo de vida de las plantas y son particularmente interesantes ya que se distribuyen diferencialmente dentro de los tejidos lo que da lugar a diferentes procesos morfogenéticos.',
    },
    {
      termino: 'Compost',
      significado:
        'fertilizante compuesto de residuos orgánicos (desechos domésticos, hierbas, deyecciones animales, etc.), tierra y cal.',
    },
    {
      termino: 'Crioterapia',
      significado:
        'método curativo de algunas enfermedades que se fundamenta en la utilización del frío o las bajas temperaturas.',
    },
    {
      termino: '<i>Ex vitro</i>',
      significado:
        'Fuera del vidrio; en el contexto de la micropropagación in vitro, refiere al sometimiento a condiciones ambientales y sanitarias no controladas',
    },
    {
      termino: 'Fitoxicidad',
      significado:
        'término que se emplea para describir el grado de efecto tóxico producido por un compuesto sobre el crecimiento de las plantas.',
    },
    {
      termino: 'Micorrizas',
      significado:
        'asociaciones simbióticas entre hongos y raíces de las plantas vasculares.',
    },
    {
      termino: 'Quimioterapia',
      significado:
        'Método curativo de algunas enfermedades que consiste en la aplicación de sustancias químicas al organismo.',
    },
    {
      termino: 'Termoterapia',
      significado:
        'método curativo de algunas enfermedades que se fundamenta en la aplicación de calor sobre la parte enferma.',
    },
    {
      termino: 'Vermiculita',
      significado:
        'sustancia mineral de la familia de la roca mica que, bajo la acción de calor, se deshidrata y toma volumen mayor y aspecto similar al de una masa de gusanos, siendo usado como aislante o absorbente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Montes-Cruz, S. Lalama-Aguirre, JM. Echeverría-Félix, JM. Salzar-Torres, SM. (2016). Factores bióticos y abióticos en la aclimatación de las vitroplantas en invernadero. En: Dominio de las Ciencias (2) pp. 63-89',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5761558',
    },
    {
      referencia:
        'Roca, WM. Mroginski, LA. (1993). Cultivo de tejidos en la agricultura. ISNB-958-9183-15-8. ',
      link:
        'http://ciat-library.ciat.cgiar.org/Articulos_Ciat/biblioteca/Cultivo_de_tejidos_en_la_agricultura.pdf',
    },
    {
      referencia:
        'Sánchez-Rodríguez, LA. Saavedra-Hortúa, D. Romero, HM. (2012). Aclimatación y endurecimiento de materiales de palma de aceite obtenidos mediante técnicas de cultivo de tejidos vegetales. En: Palmas (33) (4) pp.41-52',
      link:
        'https://docplayer.es/41760216-Aclimatacion-y-endurecimiento-de-materiales-de-palma-de-aceite-obtenidos-mediante-tecnicas-de-cultivo-de-tejidos-vegetales.html ',
    },
    {
      referencia:
        'Suárez-Padrón, I (2020). Cultivo de tejidos vegetales. ISNB-978-958-5104-09-9. ',
      link:
        'https://repositorio.unicordoba.edu.co/handle/ucordoba/2553#:~:text=El%20cultivo%20de%20tejidos%20vegetales,agr%C3%ADcola%20y%20la%20investigaci%C3%B3n%20vegetal.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
