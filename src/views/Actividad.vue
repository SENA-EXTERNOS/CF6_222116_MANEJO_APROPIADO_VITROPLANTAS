<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-puzzle-piece 
      h1 Actividad didáctica     
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-secundario
          h2 Falso / verdadero
        p.mb-4 Luego de concluir el desarrollo del componente formativo 6, resulta necesario realizar un proceso de evaluación que proporcione un indicio del conocimiento adquirido por parte del aprendiz. En este sentido, se establece la siguiente actividad de “Verdadero y Falso” para generar un balance de la comprensión de los contenidos abordados.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Falso / verdadero
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece                
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
