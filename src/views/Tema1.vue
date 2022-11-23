<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Consolidación de vitroplantas

    p.mb-3 En este apartado lo relacionado con la consolidación del material vegetal, como una de las fases determinantes del proceso de producción #[i in vitro].

    .clr-paleGren
      .row.justify-content-around.align-items-center
        .col-11
          SlyderB.mb-5.mt-5.color-btn(:datos="datosSlyder")  

    separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4
      h2 1.1  Sustratos para el endurecimiento vegetal 

    p.mt-3.mb-3 En el proceso de consolidación de material vegetal se hace necesario reconocer las fases que la componen.

    .tarjeta.tarjeta--linea1.p-4
      LineaTiempoC.color-acento-contenido.estiloLinea1(text-small)
        .row(titulo="Fase de endurecimiento").justify-content-around.align-items-center 
          .col-md-7.mb-5.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea El endurecimiento es entendido como el proceso que consiste en la adaptación de las vitroplantas a las condiciones fisiológicas ambientales; este paso adaptativo es uno de los aspectos que revisten mayor importancia de la micropropagación de material vegetal, esto debido a la dificultad asociada a las características de las vitroplantas en cuanto a la aclimatación al sustrato sólido, espacio donde se evidencian las limitaciones o dificultades relacionadas la baja asimilación del dióxido de carbono, como resultante de las deficiencias en el funcionamiento de los estomas. Es por esta razón que el endurecimiento en general es establecido como un apartado crucial, puesto que es la fase de transición entre las condiciones de laboratorio y las condiciones reales cotidianas del contexto de producción definitiva de las plántulas obtenidas.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-05.svg', alt='Texto que describa la imagen')

        .row(titulo="Fase de acondicionamiento - Parte 1").justify-content-around.align-items-center 
          .col-md-7.mb-4.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea El proceso de acondicionamiento se enfoca en la promoción de la capacidad de respuesta por parte la plántula, respecto a las exigencias del entorno tanto atmosférico como edáfico, por tal motivo, se presenta un énfasis en las condiciones fisiológicas, estructurales y anatómicas propias del material vegetal obtenido, material que, dicho sea de paso, se encuentra adaptado a las condiciones reguladas del ensayo #[i in vitro], con luz artificial, medio de cultivo nutricionalmente balanceado, nivel bajo de intercambio gaseoso, nivel alto de humedad relativa y temperatura regulada.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-06.svg', alt='Texto que describa la imagen')

        .row(titulo="Fase de acondicionamiento - Parte 2").justify-content-around.align-items-center 
          .col-md-7.mb-4.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea Este conjunto de condiciones, genera en la plántula un tipo de características acordes con la levedad manifiesta de dicho entorno de propagación, entre estas se resaltan, por su nivel de relevancia, la menor producción de cera en la superficie de las hojas, el incorrecto funcionamiento de estomas y del sistema radicular, características que ocasionan una mayor fragilidad frente a fenómenos de deshidratación que pueden derivar en la muerte del ejemplar; por lo tanto, no es viable exponer la plántula de manera directa e inmediata, a las condiciones naturales (luz solar, temperatura variable, necesidad de absorción tanto de nutrientes como agua desde el suelo), puesto que el resultado más probable será la mortalidad debido a la imposibilidad por parte de las plántulas para adaptarse en un periodo de tiempo definido por la inmediatez y gravedad de las exigencias asociadas, principalmente, a la alta transpiración vegetal.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-07.svg', alt='Texto que describa la imagen')

        .row(titulo="Proceso de endurecimiento").justify-content-around.align-items-center 
          .col-md-7.mb-4.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea El objetivo del endurecimiento es entonces el retorno al funcionamiento autotrófico y la recuperación de las condiciones normales morfológicas y fisiológicas. Se considera como “retorno” a dichas condiciones debido que el material vegetal originario proviene de un individuo donante que contaba con dichas capacidades; por tal motivo, como resultado de la morfogénesis y la diferenciación celular que permiten la conformación de los diferentes órganos vegetales, el nuevo individuo, bajo las condiciones apropiadas de adaptación, volverá a desarrollar los procesos físicos, químicos y biológicos requeridos para establecer este conjunto de dinámicas por cuenta propia, de manera que pueda enfrentar las condiciones naturales y sus variaciones, tal como una planta producida de forma convencional.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-08.png', alt='Texto que describa la imagen')

        .row(titulo="Fase de generación del sistema radicular").justify-content-around.align-items-center 
          .col-md-7.mb-4.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea En la IV fase del proceso de micropropagación, se induce la generación del sistema radicular.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-09.svg', alt='Texto que describa la imagen')

        .row(titulo="Fase de aclimatación").justify-content-around.align-items-center 
          .col-md-7.mb-4.mb-md-0(data-aos="flip-right")
            p.mt-1.margin-left-linea Se continúa con la V fase, correspondiente a la aclimatación, siendo este el último paso, que se presenta como el pináculo del ensayo, puesto que es donde se establece el logro de los objetivos productivos, en términos de cantidad y calidad del material obtenido. Esta aclimatación debe suceder de forma gradual, en aras de reducir el nivel de estrés asociado a los cambios propios de las condiciones de temperatura y humedad. Para realizar esto de la manera apropiada, se recurre a alguna de dos alternativas que permitan una transición en un ritmo compatible con las posibilidades adaptativas de las plántulas, siendo necesario, en ambos casos, primero la realización de trasplantado a sustrato sólido en contenedores tipo almaciguera.
        
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-10.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        p En concordancia con las fases anteriormente descritas se describen a continuación alternativas que guardan una notable similitud y su selección depende de las posibilidades logísticas y preferencias vigentes para cada ensayo.
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/tema1-img-11.svg', alt='Texto que describa la imagen')

    TabsA.color-secundario.mt-5
      .tarjeta.color-secundario2.p-4(titulo="Primera alternativa")
        h4 Instalación de una cámara húmeda
        p La primera de estas alternativas corresponde a la instalación de una cámara húmeda donde se ubiquen las plántulas objeto de aclimatación; esto consiste en la construcción de espacios cerrados por cortinas plásticas que garanticen el sostenimiento de condiciones de humedad y temperatura determinadas; con el paso de un tiempo prudencial, regularmente de dos semanas posteriores al trasplantado, se procede a ocasionar una reducción progresiva de la humedad alcanzada, mediante la contracción  (hasta la mitad, en la semana dos y completamente, en la semana cuatro) de las cortinas.

      .tarjeta.color-secundario2.p-4(titulo="Segunda alternativa")
        h4 Generación de un recubrimiento de los contenedores
        p La segunda alternativa corresponde a un método más dispendioso, pues remite a la generación de un recubrimiento de los contenedores tipo almaciguera, con las plántulas ubicadas en ellos, mediante la utilización de plástico, de manera que se conserven las condiciones de humedad para cada bandeja de manera individual; en tal sentido, el proceso de adaptación progresiva a nuevas condiciones de humedad, se realiza a través de la generación de agujeros en el plástico, en aras de permitir un intercambio gaseoso con el entorno, intercambio que cada vez debe ser superior, realizando cada vez más agujeros en el plástico hasta que el mismo sea eliminado como barrera.

    p.mt-5 El sustrato a elegir para realizar este proceso adaptativo, es un aspecto también relevante y que debe responder a las características propias de las plántulas generadas #[i in vitro].

    .slyderB_bg_01.px-5.py-4.mb-5.mt-3
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.mt-5 En tal sentido, debe ser un tipo de sustrato de estructura suelta y alta porosidad, donde se puede generar un tipo de mezcla (por citar algunos de los materiales de utilización más común), de turba y cascarilla de arroz.  Estas características son necesarias para permitir el crecimiento y desarrollo oportuno del sistema radicular, de manera que se facilite el desarrollo de las funciones requeridas de las raíces para la consolidación de la plántula. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-13.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.mt-5 Si bien se utiliza el referente de la turba y cascarilla de arroz para la mezcla del sustrato, esta puede ser distinta, toda vez que existen diferentes opciones que al final deben ser establecidas en concordancia con las características específicas del tipo de especie vegetal con la que se está trabajando. Por ejemplo, especies leñosas tipo forestales o frutales de hoja caduca, tienden a requerir sustratos más complejos y la respuesta puede ser más lenta que en especies herbáceas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-14.svg')

    p.mt-5 En general, las características que se resaltan como las de mayor importancia para la selección y elaboración de sustratos para el endurecimiento, son las siguientes:
    
    .row.mt-3
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario1(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Estructura fina libre de agentes tóxicos
              p Buscando reducir la hostilidad del medio para el desarrollo de las funciones naturales de la raíz.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-15.png')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-16.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Peso liviano y de condición porosa
              p Siendo una condición requerida para posibilitar una apropiada movilidad de las raíces durante su crecimiento, así como un adecuado nivel de infiltración del agua y la posibilidad de intercambio gaseoso.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.arriba.color-primario1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-17.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Asequibilidad económica
              p Como condición fundamental, pues si bien pueden existir materiales óptimos, la toma de decisión debe partir de un adecuado balance de costo-beneficio, donde la actividad productiva resulte efectivamente productiva y rentable.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.arriba.color-secundario1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-18.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Inercia
              p Teniendo en cuenta la fragilidad manifiesta de la plántula, derivada de las condiciones controladas del medio de cultivo original, se debe propender por la no presencia de otros agentes biológicos que puedan generar competencia durante los primeros momentos de la consolidación.
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-7
        p Entre las opciones de mezcla de componentes para la elaboración de sustrato, se encuentran los suelos minerales, compost y estiércol, con los que se puede obtener resultados positivos; sin embargo, pueden también generarse resultados adversos asociados a condiciones de sanidad y la complejidad en el manejo complejo. En términos de eficiencia demostrada, se identifican sustratos de amplia utilización para el establecimiento de vitroplantas, el suelo estéril, vermiculita, hojarasca, compost de corteza, entre otros.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-19.svg', alt='Texto que describa la imagen')

    img(src='@/assets/curso/temas/tema1/tema1-decorativa-01.svg', alt='Texto que describa la imagen').tema1-decorativa-01

    separador
    #t_1_2.titulo-segundo.color-acento-contenido.mt-4
      h2 1.2 Trasplantado de vitroplantas

    p.mt-3 Posterior a la selección del sustrato más apropiado para el endurecimiento del material propagado, es necesario realizar el trasplantado del mismo desde el medio de cultivo respectivo, al sustrato previamente organizado en contenedores tipo almaciguera, siendo un procedimiento que reviste un cuidadoso seguimiento de precauciones que permitan una manipulación apropiada de las frágiles plántulas. 

    TabsC.color-secundario.tabs-c-1.mt-5
      .py-3.py-md-4(titulo="Primer paso")
        .row.justify-content-center
          .col-lg-6.order-2.order-lg-1.mb-4.mb-lg-0
            p.margin-left-linea.margin-left.mb-2.mt-5 Para esto, debe generarse limpieza de las raíces de cada uno de los ejemplares y, seguidamente, realizar su siembra en el sustrato.
          .col-lg-6.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-21.svg', alt='').img400.m-auto            

      .py-3.py-md-4(titulo="Segundo paso")
        .row.justify-content-center
          .col-lg-6.order-2.order-lg-1.mb-4.mb-lg-0
            p.margin-left-linea.mt-5 Posteriormente, llevar a cabo el cubrimiento con plástico o traslado a la cámara húmeda, según sea el caso, de manera que se permita conservar las condiciones de humedad acordes con las exigencias de los individuos.
          .col-lg-6.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-22.svg', alt='').img400.m-auto            

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-23.svg', alt='Texto que describa la imagen')
      .col-lg-7
        p.margin-r100 El tipo de manejo que debe llevarse a cabo para lograr esta transición en el trasplantado, se destaca que debe ser gradual y progresivo evitando la generación de traumas, puesto que es el paso donde mayor porcentaje de pérdidas suele ocurrir; el procedimiento estándar, es el siguiente:

    .clr-background-1
      .row.justify-content-around.align-items-center        
        .col-lg-11     
          SlyderF(columnas="col-lg-6 col-xl-4").mt-5.mb-5
            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema1/tema1-img-25.svg' alt='AvatarTop')
              p.text-center Realizar cuidadoso lavado de raíces, buscando eliminar residuos del medio de cultivo, con una baja afectación a las débiles estructuras celulares presentes (pelos absorbentes).

            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema1/tema1-img-26.svg' alt='AvatarTop')
              p.text-center Desarrollar inmersión de las plántulas en solución auxínica de 0,1mg/L, en aras de promover el proceso de crecimiento y desarrollo del sistema radicular.

            .tarjeta.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema1/tema1-img-27.svg' alt='AvatarTop')
              p.text-center Llevar a cabo siembra en sustrato previamente organizado, guardando las medidas de precaución respectivas en la manipulación de la raíz para no afectar sus diferentes partes por fricción o compresión indebida.

    .row.justify-content-around.mt-5
      .col-lg-5
        p.mt-3 De forma complementaria al trasplantado, debe realizarse riego frecuente en bajo volumen, buscando incrementar la humedad relativa y, de la misma forma, reducir la intensidad lumínica en las dos primeras semanas de endurecimiento. Finalmente, se han de transferir las plántulas al invernadero.
      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-28.svg', alt='Texto que describa la imagen')        

    img(src='@/assets/curso/temas/tema1/tema1-decorativa-02.svg', alt='Texto que describa la imagen').tema1-decorativa-02                      
    separador
    #t_1_3.titulo-segundo.color-acento-contenido.mt-4
      h2 1.3 Adaptación de material vegetal

    p.mt-5 Una vez reconocido los elementos destacados en relación con el trasplantado de vitroplantas, se presenta en este apartado lo relacionado con la adaptación de material vegetal.
    
    .slyderB_bg_02.px-5.py-4.mb-5.mt-3
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.mt-1 La totalidad de la fase aclimatación es un proceso de adaptación, razón que origina que cada uno de los pasos o acciones que la integren, proporcionen elementos enfocados en alcanzar la meta de generación de capacidad autotrófica en las plantas obtenidas, como es el caso de la selección de sustrato y el mecanismo de trasplantado; desde dichos momentos, se empiezan a gestar, inducir y facilitar la transición de las plántulas, tal es el caso de la cobertura de plástico que permite el mantenimiento de las condiciones de humedad después del sembrado transitorio.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-30.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.mt-1 Una vez transcurridos 15 días del trasplantado al sustrato, se debe iniciar el levantamiento del plástico en horarios concordantes con los momentos de menor calor, sea en horas del inicio de la mañana o horas de final de tarde, sometiendo las plántulas a las condiciones ambientales en invernadero durante periodos de 30 minutos en la primera semana, 60 minutos desde la segunda semana, la totalidad del día y tapadas en la noche desde cumplido el primer mes hasta el momento en el que las plántulas empiecen a generar hojas nuevas, momento en el que pueden dejarse destapadas de forma total y permanente (Suárez Padrón, 2020).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-31.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="03")
              p.mt-1 Resulta pertinente resaltar que las vitroplantas tienden a enfrentar de una mejor manera la fase de aclimatación cuando hay utilización de micorrizas, pues la simbiosis que estas generan ocasionan un mejoramiento en los procesos de captación y asimilación de nutrientes como el fósforo (de baja movilidad en la plántula), reducción de estrés hídrico y mejoramiento de funcionamiento fotosintético y estomático, además de promover, en algunos casos, la defensa frente a organismos patógenos, incremento del desarrollo foliar y radicular, así como en cuanto a la producción de hormonas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-32.svg')              

    separador
    #t_1_4.titulo-segundo.color-acento-contenido.mt-4
      h2 1.4 Prendimiento vegetal

    p.mt-5 En relación con la adaptación de material vegetal presentada en el anterior apartado, vamos a reconocer algunas características del prendimiento vegetal.
    
    .slyderB_bg_03.px-5.py-4.mb-3.mt-3
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.mt-5 Tan pronto como se obtienen las plántulas, se realiza una clasificación donde se identifique la cantidad de las mismas que cumplen con los requerimientos de producción establecidos por el laboratorio; es importante definir esto para filtrar el número básico con las que se debe trabajar, de manera que no exceda las capacidades logísticas y operativas del lugar. El punto óptimo de esto se encuentra estrechamente relacionado con el sostenimiento de flujo de plántulas hacia la fase de endurecimiento que pueda cubrir la demanda de plantas en el mercado objeto y el mantenimiento de una base en producción #[i in vitro].
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-34.svg')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.mt-5 Entendiendo la fase de aclimatación como el paso más crítico del proceso de micropropagación de material vegetal, debido a que gran parte de los ejemplares no logra superar esta desafiante transición del medio controlado al medio no controlado, es vital para el ejercicio productivo identificar el porcentaje de sobrevivencia logrado una vez concluida la actividad o lote procesado, generando la relación entre el material adaptado y el material sembrado inicialmente, siendo un dato de referencia para la estimación de costos y la posible toma de decisiones frente a la viabilidad de la especie, variedad, lote, entre otros.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-35.svg')

    separador
    #t_1_5.titulo-segundo.color-acento-contenido.mt-4
      h2 1.5 Sanidad vegetal

    p.mt-5 Otro elemento a considerar en la consolidación de las vitroplantas se conoce como sanidad vegetal.
    
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-36.png', alt='Texto que describa la imagen')
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p Las posibilidades que ofrece la micropropagación #[i in vitro] en cuanto a la sanidad del material obtenido, reduce las posibilidades de presentar pérdidas por cuenta de la generación de patologías asociadas a las condiciones del material original o plantas donantes en cuanto a la presencia de virus.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | El cultivo de meristemos permite reducir notablemente dicha condición de amenaza incluso eliminarla en la mayoría de las especies objeto de propagación; sin embargo, esta posibilidad depende de la complejidad de los agentes patógenos y de la falta de certeza al respecto de ausencia de los mismos en el explante; por tal razón, es aconsejable complementar el uso de meristemos de forma combinada con tratamientos sanitarios como termoterapia, quimioterapia o crioterapia, en aras de incrementar el porcentaje de efectividad.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | En este punto, es necesario generar procedimientos de diagnóstico sanitario sobre el proceso de endurecimiento cuando sea necesario, pues diversos síntomas virales pueden confundirse con desórdenes de tipo fisiológico asociados a presencia de hongos y bacterias que también pueden afectar el producto final, incluso sobre la totalidad de la producción.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Para el caso específico del diagnóstico de virus y viroides, las metodologías vigentes son derivadas de las desarrolladas en los campos de la medicina, disponiéndose de técnicas que recurren a la utilización de métodos biológicos, serológicos y moleculares, estas varían tanto en el grado de efectividad, como en la efectividad del diagnóstico (Suárez-Padrón, 2020).
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Los tratamientos sanitarios de termoterapia y crioterapia, pueden inactivar los agentes patógenos, sin afectar el crecimiento vegetal; mientras que la quimioterapia presenta algunas condiciones específicas asociadas a las sustancias utilizadas que pueden resultar fitotóxicas.              

    separador
    #t_1_6.titulo-segundo.color-acento-contenido.mt-4
      h2 1.6  Selección y dosificación de agroinsumos

    p.mt-4 En el proceso de consolidación de vitroplantas se presenta en este apartado lo relacionado con la selección y dosificación de agroinsumos.      

    .clr-paleGren
      .row.justify-content-around.align-items-center
        .col-11
          SlyderB.mb-5.mt-5.color-btn(:datos="datosSlyder2")          

    p.mt-5 En la medida que aumenta el tiempo y el crecimiento, se debe ajustar el uso de fertilizantes, así como establecer un protocolo para la prevención de posibles plagas. En la infografía se presenta un ejemplo de esquema nutricional para la fase de endurecimiento, en el caso de la micropropagación de palma de aceite: 
    
    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-41.svg', alt='Texto que describa la imagen')

      .tarjeta.color-blanco.p-3(x="17.3%" y="39%" numero="")
        p.mb-0 #[b Intensidad (veces por semana):] 2
        p.mb-0 #[b Dosis líquido:] 2 mL/L
        p #[b Dosis granulado:] 1 g/L

      .tarjeta.color-blanco.p-3(x="32.5%" y="27%" numero="")
        p.mb-0 #[b Intensidad (veces por semana):] 3
        p.mb-0 #[b Dosis líquido:] 4 mL/L
        p #[b Dosis granulado:] 3 g/L

      .tarjeta.color-blanco.p-3(x="44%" y="13.5%" numero="")
        p.mb-0 #[b Intensidad (veces por semana):] 3
        p.mb-0 #[b Dosis líquido:] 5 mL/L
        p #[b Dosis granulado:] 4 g/L

      .tarjeta.color-blanco.p-3(x="79.6%" y="80.1%" numero="")
        p.mb-0 #[b Intensidad (veces por semana):] 3
        p.mb-0 #[b Dosis líquido:] 6 mL/L
        p #[b Dosis granulado:] 5 g/L    

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/tema1-img-42.svg', alt='Texto que describa la imagen')        
      .col-lg-7
        p.mt-3 En cuanto a la aplicación de insumos para la prevención de ataques de hongos, se utilizan regularmente dos o más ingredientes activos de forma alternada y en bajas concentraciones, buscando evitar generación de procesos de resistencia a un único tipo de insumo por parte de los agentes patógenos. Continuando con el ejemplo de la palma de aceite, se presenta la propuesta de Sánchez-Rodriguez, Saavedra-Hortúa y Romero (2012), que contiene Mancozeb, Metalaxil y Fosetil Aluminio, en dosis de 1g/L.                  
    separador
    #t_1_7.titulo-segundo.color-acento-contenido.mt-4
      h2 1.7 Mecanismos de seguimiento al proceso  

    p.mt-4 Para finalizar los elementos constitutivos de la consolidación de vitroplantas, se presenta en este apartado los mecanismos de seguimiento al proceso.  

    .slyderB_bg_02.px-5.py-4.mb-5.mt-3
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.mt-5 El éxito del proceso de micropropagación #[i in vitro] de material vegetal, al tratarse de un conjunto de actividades que demanda precisión y conservación de condiciones controladas de cultivo, necesita del reconocimiento permanente del comportamiento de las diferentes variables que configuran el desarrollo de las diferentes prácticas del ensayo.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-43.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.mt-5 Este seguimiento no concluye con la obtención de las plántulas que se logran propagar del material inicialmente obtenido, toda vez que ésta obtención solo se valida cuando este material vegetal es sometido a las condiciones #[i ex vitro] y logra una adaptación positiva a las condiciones ambientales y el desarrollo de su capacidad autotrófica.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-44.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="03")
              p.mt-5 En tal sentido, es necesario establecer un registro oportuno de las diferentes variables que indican de manera progresiva, el desarrollo del endurecimiento o adaptación de las plántulas a las nuevas condiciones preámbulo del destino final del material obtenido. En este caso, la vigorosidad de las plantas se convierte en un aspecto indicador de valor determinante, puesto que desde la observación directa permite identificar las condiciones de respuesta en tiempo real.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-45.svg')   
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="04")
              p.mt-5 Entre las variables que se pueden referenciar o investigar en las vitroplantas para esta fase, se reconocen la altura, coloración, número de brotes, número de hojas, largo y ancho de hojas, número y longitud de entre nudos, diámetro del tallo, entre otras.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-46.svg')        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'La consolidación del material vegetal es fundamental puesto que las plántulas obtenidas a través de esta técnica carecen de la fortaleza necesaria para la enfrentar las condiciones ambientales <i>ex vitro</i>, además de no contar con las características funcionales para obtener los nutrientes de un medio natural como es el suelo. ',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-01.svg'),
      },
      {
        texto:
          'En tal sentido, se hace indispensable generar las condiciones que induzcan en la plántula el desarrollo de las condiciones que le permitan establecerse como un organismo autótrofo, siendo esto el objetivo central en sí mismo, de manera que la plántula pueda adaptarse a los diferentes contextos productivos donde sea requerido el material vegetal para su establecimiento definitivo.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-02.svg'),
      },
      {
        texto:
          'La consolidación de vitroplantas aborda elementos asociados a los cuidados y manipulación necesaria de las plántulas para promover el proceso de adaptación y, de manera complementaria a esto, los elementos requeridos para la sanidad, nutrición y riego, así como el respectivo seguimiento que debe ser llevado a cabo.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-03.svg'),
      },
    ],
    datosSlyder2: [
      {
        texto:
          'Las plántulas en el proceso de endurecimiento, provienen de un medio de cultivo que suministraba las condiciones requeridas para el crecimiento y desarrollo del individuo, aunadas las condiciones ambientales requeridas y reguladas para facilitar su consolidación.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-37.svg'),
      },
      {
        texto:
          'Una vez concluida este proceso en la fase de enraizamiento, la plántula se encuentra con un panorama que presenta otro tipo de exigencias al pasar al sustrato de transición, donde ya debe empezar a generar otro tipo de dinámicas que garanticen su supervivencia.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-38.svg'),
      },
      {
        texto:
          'Teniendo en cuenta el nivel de estrés al que se somete la plántula durante esta transición, es necesario ajustar de manera apropiada la adición de insumos requeridos para el desarrollo de la planta, siendo uno de los principales riesgos la llegada de hongos que pueden generar afectación; en tal sentido, es posible realizar riego con solución fungicida para establecer un proceso preventivo de la colonización de este tipo de organismos oportunistas.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-39.svg'),
      },
      {
        texto:
          'En cuanto al proceso de fertilización, varía dependiendo de la especie vegetal; sin embargo, se establecen elementos comunes en cuanto al tiempo, señalando que las aplicaciones pueden iniciarse después de los 15 o 20 días del trasplantado, iniciando regularmente con fósforo para la promoción de la formación de raíces.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-40.svg'),
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
