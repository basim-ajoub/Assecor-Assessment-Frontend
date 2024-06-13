<template>
  <div class="field">
    <label :for="forValue" >{{ label }}</label>
    <slot>
    </slot>
  </div>
</template>
 <script>
 export default {
   name: 'FieldComponent',
   props: {
     forValue: {
       type: String,
       required: true
     },
     label: {
       type: String,
       required: true
     }
 }
 };
 </script>