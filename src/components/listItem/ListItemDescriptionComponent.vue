<template>
    <li class="description">
          <p>
            {{ value }}
          </p>
    </li>
</template>
<script>
export default {
 name: 'ListItemDescriptionComponent',
 props: {
   value: {
     type: String,
     required: true,
     default: 'none'
   },
}
};
</script>