<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sostenimiento de condiciones para la consolidación

    .row.justify-content-around.align-items-center.mt-5        
      .col-lg-7.up
        p.mt-3 En este tema sobre la consolidación, se hace énfasis sobre las condiciones del entorno inmediato de la plántula que, apropiadas de forma adecuada, pueden permitir la consolidación de la misma, pero también se puede dar alguna falencia relacionada, lo que puede significar el fracaso en la posibilidad de endurecimiento del material vegetal obtenido. Entre los temas que se presentan, tenemos la identificación de las condiciones agroambientales, elemento imperativo en esta fase, puesto que es el referente con respecto al cual, la plántula debe definir su respuesta; una condición similar se establece con los demás temas, específicamente la relación de la planta con el agua y, de igual forma, con la gestión de residuos de la fase. 

        p Lo invitamos a ver el siguiente video donde se profundiza el tema sobre la aclimatación de las plántulas, luego de haber recibido el acondicionamiento para una buena consolidación:        
      .col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-img-01.svg', alt='Texto que describa la imagen')

    img(src='@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg', alt='Texto que describa la imagen').tema2-decorativa-01

    .row
      figure.mt-5
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/Ssp6u7Qmqz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
    
    h3.mt-4 Identificación de condiciones agroambientales  

    .clr-background-2
      .row.justify-content-around.align-items-center.mt-5 
        .col-lg-11
          .row.justify-content-around.align-items-center.mt-5        
            .col-lg-7
              p.mt-3 El proceso de endurecimiento del material vegetal, se reconoce como parte fundamental del proceso de micropropagación <i>in vitro,</i> debido a que es el punto en el que finalmente se reconoce el resultado definitivo del ensayo, donde las plántulas se presentan listas en términos fisiológicos, estructurales y anatómicos, para ser utilizadas con fines productivos, fuera de un contexto de laboratorio. 
            .col-lg-5
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/tema2/tema2-img-03.svg', alt='Texto que describa la imagen')    
          .clr-paleGren.mt-5
            .row.justify-content-around.align-items-center
              .col-11
                SlyderB.mb-5.mt-5.color-btn2(:datos="datosSlyder")   

    p.mt-4 Esta condición hace que sea necesario comprender e interpretar las condiciones agroambientales que deben mantenerse, hasta el momento en el que es posible controlarlas y, la respuesta que debe inducirse a las mismas, en lo que respecta a las plántulas. Por esta razón, se propone:                       

    .puntos-calientes-t2
      ImagenInfografica.color-primario(data-aos="fade-left")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/tema2-img-08.svg', alt='Texto que describa la imagen')

        .tarjeta.color-blanco.p-3(x="16%" y="10%" numero="1")
          p En las primeras dos semanas de la fase de aclimatación o periodo de tiempo inmediatamente posterior al trasplante, deben controlarse las condiciones ambientales, de manera que se aproximen lo máximo posible, a las condiciones que se presentaban <i>in vitro.</i>

        .tarjeta.color-blanco.p-3(x="47%" y="47%" numero="2")
          p Lo anterior, en aras de reducir al mínimo el exceso de transpiración, mientras se establecen los elementos para conservación de una elevada humedad relativa (cercana al 100 %) que permita el desarrollo adecuado de estomas y cutícula, siendo el lugar propicio para la generación de este microclima, la cámara húmeda, permitiendo una temperatura de 12 ± 2 ºC. 

        .tarjeta.color-blanco.p-3(x="65%" y="12%" numero="3")
          p En caso de no contar con la cámara húmeda, el recubrimiento con plástico de los recipientes en los cuales se ha procedido a generar el sembrado de las plántulas, presenta la misma funcionalidad (con niveles de mano de obra superiores), pero dichos plásticos deben perforarse paulatinamente, hasta quedar eliminados en un periodo de 10 a 15 días.

        .tarjeta.color-blanco.p-3(x="48%" y="83%" numero="4")
          p Luego de esta primera etapa, las plántulas deben ser trasladas al exterior de la cámara húmeda o integradas al invernadero (dependiendo del método desarrollado), donde la humedad relativa puede ubicarse entre el 40 % y 60 %, sombra al 70 % y el riego a capacidad de campo, estimándose una duración en esta etapa de hasta 30 días.
    
    h3.mt-4 Identificación de calidad del agua 

    p.mt-5 El agua es un factor fundamental para la vida; en el mundo vegetal esto no es una excepción y, específicamente, en la fase de aclimatación, es demasiado importante.

    .tarjeta.tarjeta--linea1.p-4
      LineaTiempoC.color-acento-contenido.estiloLinea1(text-small)
        .row(titulo="Condiciones de calidad del agua")
          .col-md-6.mb-5.mb-md-0
            p.mt-1.margin-left-linea Lo relacionado con el agua, es uno de los aspectos más neurálgicos para el logro del establecimiento de las plántulas, debido a la situación de estrés que atraviesan los ejemplares al ser sometidos al cambio de condiciones <i>in vitro</i> a condiciones <i>ex vitro</i>. El tema es relevante en varios sentidos, entre los que se destaca la necesidad de retención de humedad por parte de las plántulas generadas, que sufren deficiencias en este respecto; por otro lado, la necesidad de disminuir la probabilidad de afectación accidental con microorganismos a la raíz, en el proceso de lavado de los residuos de medio de cultivo y, finalmente, el suministro de riego, a las plántulas sembradas en el sustrato transitorio.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-09.svg', alt='Texto que describa la imagen')

        .row(titulo="Condiciones de calidad del agua")
          .col-md-6.mb-4.mb-md-0
            p.mt-1.margin-left-linea En todos los casos, las condiciones de calidad del agua son diferenciadas; esto se debe a que las exigencias y situaciones son también diversificadas. Para las situaciones relacionadas con la retención de humedad por parte de la planta, es realmente un aspecto que se vincula directamente con las condiciones de la plántula y la posibilidad de generar absorción desde las raíces, para el desarrollo vegetal, siendo necesario garantizar la disponibilidad de agua de riego con moderados contenidos de sales, pues excesos en los niveles de estas, pueden llegar a afectar el desarrollo de la planta en estructurales y definitivos. (Montes-Cruz, et al., 2016).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-10.svg', alt='Texto que describa la imagen')

        .row(titulo="Condiciones de calidad del agua")
          .col-md-6.mb-4.mb-md-0
            p.mt-1.margin-left-linea En cuanto a la calidad del agua utilizada para realizar limpieza de la raíz al iniciar con el proceso de endurecimiento, es necesario contar con un tipo de agua higienizada, donde no se encuentren microorganismos que podrían llegar a afectar gravemente la plántula, al ingresar por el frágil sistema radicular que es sometido a fricción para extraer los residuos propios del medio de cultivo. En este sentido, es fundamental utilizar agua destilada para llevar a cabo esta actividad de forma segura, reduciendo el riesgo probable de afectación microbiana, al material vegetal obtenido.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-11.svg', alt='Texto que describa la imagen')
   
    h3.mt-4 Funcionamiento y frecuencia del sistema de riego   

    p.mt-4 Una vez identificadas las condiciones de calidad del agua, veamos ahora el funcionamiento y frecuencia del sistema de riego. 

    .slyderB_bg_04.px-5.py-4.mb-5.mt-3
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-5.mb-1.mb-lg-0
            .number(data-number="01")
              p.mt-1 El suministro de agua a las plántulas en consolidación, es un elemento crucial para posibilitar el desarrollo óptimo del proceso de aclimatación al medio<i> ex vitro</i>. Siendo fundamental la generación de una adecuada hidratación de la plántula para su supervivencia, debe proporcionarse, en el entorno productivo del laboratorio y del invernadero, un suministro de agua apropiado para la fase de transición que representa el paso del medio de cultivo al sustrato de siembra, panorama en el que se cuenta con diferentes necesidades y alternativas, dependiendo de las características de las especies a propagar y del tipo de establecimiento productivo que sirve como escenario del ensayo.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-12.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-5.mb-1.mb-lg-0
            .number(data-number="02")
              p.mt-1 Para los casos donde se presenta la posibilidad de contar con cámara húmeda para el desarrollo de la etapa de transición, se recomienda la aplicación del sistema de riego por medio de nebulización; en casos más rudimentarios, aplicar el riego mediante aspersión con pulverizadora manual. En todo caso, debe garantizarse un control sobre el nivel de humedad en los recipientes tipo almacigueras, a partir del mantenimiento de un ambiente húmedo a nivel del sustrato. De todas maneras, es necesario identificar las condiciones específicas del tipo de humedad tolerable por la especie propagada, pues excesos de agua en especies que no lo toleren, pueden derivar en la afectación grave al material.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-13.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-5.mb-1.mb-lg-0
            .number(data-number="03")
              p.mt-1 En concordancia con los requerimientos particulares de cada especie y las diferentes etapas de aclimatación del material vegetal, se determina el volumen de agua y frecuencia de riego durante las semanas siguientes que corresponden a la etapa de adaptación a las condiciones de invernadero donde se encuentran a plena exposición las plántulas. El planteamiento estándar indica la realización de al menos un riego cada 24 horas; para aquellas especies con bajo requerimiento hídrico, se debe focalizar el riego sobre los ejemplares con mayor necesidad, pues excesos de agua pueden ocasionar la aparición de hongos, así como pudrición de raíces.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-14.svg')         

    h3.mt-4 Gestión de residuos en el endurecimiento 

    p.mt-4 Para finalizar este tema, vamos a asimilar lo relacionado con la gestión de residuos en el endurecimiento.

    .row.justify-content-around.align-items-center.mt-5        
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Protocolos en el manejo de residuos")
            .col-md-12.mb-4.mb-md-0
              p En términos de establecimiento del laboratorio y de la práctica asociada con la micropropagación de material vegetal <i>in vitro</i>, se establecen inicialmente protocolos en lo relacionado con el manejo de residuos que, si bien incluyen la totalidad del proceso, es necesario realizar una diferenciación de la fase específica de la aclimatación, debido a que se trata de uno de los momentos más álgidos de la totalidad del ejercicio, pues implica la realización de algunas actividades donde se encuentra en vulnerabilidad manifiesta, el frágil material obtenido frente a las amenazas siempre latentes en contextos productivos de este tipo y que pueden comprometer el logro del objetivo, a las puertas de su consecución.
          .row(titulo="Tipos de residuos")
            .col-md-12.mb-4.mb-md-0
              p Entre los residuos generados en esta fase, se resaltan los asociados con los medios de cultivo que permitieron el desarrollo inicial de las plántulas. Este tipo de compuestos, rico en nutrientes y humedad, puede convertirse en un peligroso foco de contaminación por hongos y bacterias, incluso como atrayente eventual de insectos que arriben en busca de sus contenidos de azúcares y, de paso, traer consigo una carga de posibles agentes patógenos que pueden afectar la endeble integridad de los jóvenes ejemplares en desarrollo; por tal motivo, es fundamental la generación de los posibles residuos en el sistema radicular previo al trasplante, pero también la eliminación de los volúmenes residuales presentes en los recipientes de micropropagación, así como la limpieza y desinfección de superficies e instrumentos utilizados durante la manipulación del material.
          .row(titulo="Eliminación de ejemplares muertos")
            .col-md-12.mb-4.mb-md-0
              p Otro elemento relevante en este campo, es el relacionado con la eliminación de los ejemplares muertos; esto es importante, debido a que la aclimatación es la fase más crítica del proceso de micropropagación y, por tanto, se presentan tasas variables de mortalidad como condición inherente al ejercicio. 
          .row(titulo="Propagación de contaminantes")
            .col-md-12.mb-4.mb-md-0
              p Teniendo en cuenta que se trata de un procedimiento que requiere de ciertos estándares de asepsia, la presencia de plántulas y/o tejidos descartados en el escenario productivo, se convierte en posible foco de propagación de contaminantes que también pueden afectar negativamente al resto de material vegetal en crecimiento y desarrollo, debido a su fragilidad; por lo tanto, deben establecerse rutas concretas de evacuación y disposición segura de dichos residuos.
      .col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-img-15.svg', alt='Texto que describa la imagen')(data-aos="fade-left") 

    p.my-5 El endurecimiento del material vegetal obtenido se presenta como una etapa fundamental del proceso de aclimatación requerido, para finalizar el ejercicio de micropropagación in vitro, siendo el pináculo del experimento que determina el logro de los objetivos del ensayo y que implica una compleja red de situaciones que se enfocan tanto en el fortalecimiento y promoción de ciertas dinámicas en la plántula, como en la interpretación apropiada de las condiciones del entorno a las que debe adaptarse la misma.

    .row.justify-content-center.align-items-center     
      .col-lg-8    
        .cajon.color-acento-botones.p-4.mb-4
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Si bien la plántula establece nuevas condiciones de captura de nutrientes y distribución de los mismos a lo largo de su estructura, también debe responder a las restricciones del ambiente, las cuales serán diferentes a las condiciones controladas a las que se encontraba habituada y, además, serán cambiantes, ocasionando episodios de estrés que pueden ser determinantes para la supervivencia de la plántula. ',
        imagen: require('@/assets/curso/temas/tema2/tema2-img-04.svg'),
      },
      {
        texto:
          'Esta aclimatación que es específicamente el nombre que recibe la última fase del proceso de micropropagación <i>in vitro</i>, permite a la planta alcanzar un crecimiento y desarrollo bajo condiciones de menor humedad relativa, una intensidad de luz superior, en un sustrato si bien séptico, diferente al sustrato proporcionado por el medio de cultivo y, por lo tanto, también exigente en términos de adaptación. ',
        imagen: require('@/assets/curso/temas/tema2/tema2-img-05.svg'),
      },
      {
        texto:
          'Esta aclimatación debe ajustarse en la medida de las exigencias encontradas en el proceso, mediante la observación; en otras palabras, no se cuenta con una fórmula constante que permita obtener invariablemente el resultado esperado, puesto que es una fase que justamente se concentra en el desarrollo de condiciones por parte de la plántula para poder responder a las exigencias propias de un panorama marcado por la variabilidad.',
        imagen: require('@/assets/curso/temas/tema2/tema2-img-06.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
