<template>
    <div class="form-container">
            <div>
                <h4 class="form-title">{{ formTitle }}</h4>
            </div>
          <form @submit.prevent="submitForm">
            <slot></slot>
            <div class="btn-group">
              <button @click="closeForm">Abbrechen</button>
              <button type="submit">{{ SubmitBtnTitle }}</button>
            </div>
          </form>
        </div>
 </template>
 <script>
 export default {
   name: 'FormComponent',
   methods: {
    submitForm() {
      this.$emit('submit');
        this.closeForm();
      },
      closeForm() {
      this.$emit('close');
    }
   },
   props: {
     formTitle: {
       type: String,
     },
     SubmitBtnTitle: {
       type: String,
     },
 }
 };
 </script>