<template>
    <li>
        <p><span class="list__label">{{label}}:</span>{{ value }}</p>
    </li>
</template>
<script>
export default {
  name: 'ListItemComponent',
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