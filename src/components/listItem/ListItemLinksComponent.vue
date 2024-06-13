<template>
   <li class="group-links">
            <p class="list__label">{{ label }}:</p>
            <ul class="list">
              <li>{{ value }}</li>
            </ul>
    </li>
</template>
<script>
export default {
  name: 'ListItemLinksComponent',
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      type: String,
      required: true,
      default: 'none'
    },
}
};
</script>