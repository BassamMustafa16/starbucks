<script setup>
import Slider from './Slider.vue';
const sliders = [{
  images: ['card1.png', 'card7.png', 'card12.jpg'],
  title: 'EMPLOYEE APPRECIATION | 3/7'
},
{
  images: ['card3.png', 'card10.png'],
  title: 'BIRTHDAY'
},
{
  images: ['card4.png', 'card8.jpg', 'card13.jpg'],
  title: 'THANK YOU'
},
{
  images: ['card6.png'],
  title: 'CELEBRATION'
},
{
  images: ['card1.png', 'card5.png'],
  title: 'APPRECIATION'
},
{
  images: ['card2.png', 'card13.png'],
  title: 'SPRING'
},
{
  images: ['card11.jpg', 'card14.png'],
  title: 'ENCOURAGEMENT'
},
{
  images: ['card7.png', 'card12.jpg'],
  title: 'WORKPLACE'
},
{
  images: ['card15.png', 'card16.jpg', 'card9.png', 'card12.jpg',],
  title: 'ANYTIME'
},
]
</script>

<template>
<div class="flex flex-col gap-7">
  <Slider v-for="(slider) in sliders" :images="slider.images" :title="slider.title" />
</div>
</template>