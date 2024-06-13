<template>
    <div class="select-container">
        <select class="select" :id="id" :name="name">
            <slot></slot>
        </select>
    </div>
</template>
 <script>
 export default {
   name: 'SelectComponent',
   props: {
     id: {
       type: String,
       required: true
     },
     name: {
       type: String,
       required: true
     },
 }
 };
 </script>