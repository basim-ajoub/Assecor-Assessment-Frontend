<template>
    <input class="input" :type="type" :id="id" :name="name" :placeholder="placeholder">
</template>
 <script>
 export default {
   name: 'InputComponent',
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
     type: {
        type: String,
        required: true,
        default: "text"
     }
 }
 };
 </script>