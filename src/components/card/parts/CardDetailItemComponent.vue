<template>
    <p>{{ label }}: {{ value }}</p>    
</template>

<script>
export default {
  name: 'CardDetailItemComponent',
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      type: String,
      require: true,
      default: 'none'
    },
}
}
</script>