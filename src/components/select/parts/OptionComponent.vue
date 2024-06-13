<template>
    <option :value="value" :selected="selected">{{ label }}</option>
 </template>
 <script>
 export default {
   name: 'OptionComponent',
   props: {
     label: {
       type: String,
       required: true
     },
     value: {
       type: String,
       required: true
     },
     selected: {
        type: Boolean,
        required: false,
        default: false
     }
 }
 };
 </script>