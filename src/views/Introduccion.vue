<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center
      .col-lg-6
        .index-dos
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se profundizará en el concepto de endurecimiento de plántulas y la aclimatación necesaria para concluir la producción in vitro de material vegetal. Para comprender este conjunto de condiciones complejas, se estudiarán diferentes aspectos que proporcionan la posibilidad de aprender a definir el tipo de sustrato vegetal a ser utilizado para el proceso de endurecimiento, así como también los procedimientos relacionados con el trasplante de las vitroplantas y los condicionantes para la consolidación de las mismas, entre los que se destaca la necesidad de utilización de agroinsumos y una oportuna lectura del comportamiento progresivo de las plántulas; además de esto, se abordan también condiciones asociadas al uso del agua y la gestión de los residuos sólidos.
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:        
      .col-lg-6
        img(src="@/assets/curso/introduccion/intro-img-01.svg", alt="alt")

    img(src="@/assets/curso/introduccion/intro-img-decorativa-01.svg", alt="alt").intro-decorativa-01

    .row
      figure.mt-5
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
