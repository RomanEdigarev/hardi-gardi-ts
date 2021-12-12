<template>
  <div id="mapContainer"></div>
</template>

<script lang="ts">
export default {
  name: "YMap",
  props: {
    coordinates: {
      type: Array,
      required: true
    }
  },
  setup(props, emit) {

    ymaps.ready().then(() => {
      init()
      emit('YmapReadyEvent')
    })

    const init = () => {
      const myMap = new ymaps.Map("mapContainer", {
        center: props.coordinates,
        zoom: 17
      });
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');

      const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: require('./marker.svg'),
        // Размеры метки.
        iconImageSize: [120, 120],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -50]
      })
      myMap.geoObjects
          .add(myPlacemark)
    }
  }
}
</script>

<style lang="scss" scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}

</style>