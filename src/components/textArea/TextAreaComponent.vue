<template>
  <textarea class="text-area"  rows="5" cols="50" :id="id" :name="name" :placeholder="placeholder"></textarea>
</template>
 <script>
 export default {
   name: 'TextAreaComponent',
   props: {
     id: {
       type: String,
       required: true
     },
     name: {
       type: String,
       required: true
     },
     placeholder: {
       type: String,
       required: true
     },
 }
 };
 </script>