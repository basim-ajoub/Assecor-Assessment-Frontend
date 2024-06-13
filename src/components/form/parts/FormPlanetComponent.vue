<template>
    <Overlay ref="overlayRef" @submit="submitForm" @close="handleCloseOverlay" :OverlayBtnTitle="OverlayBtnTitle" >
      <FormComponent formTitle="Planet hinzufügen" SubmitBtnTitle="Planet hinzufügen" @close="handleCloseOverlay" >
        <div class="row">
        <FieldComponent forValue="p-name" label="Name">
          <InputComponent type="text" id="p-name" name="name" placeholder="Name eingeben" />
        </FieldComponent>
       </div>
       <div class="row">
        <FieldComponent forValue="p-type" label="Type">
          <SelectComponent id="p-type" name="type"> 
            <OptionComponent value="desert-planet" label="Desert planet" :selected="true" />
            <OptionComponent value="rot" label="Rot" />
            <OptionComponent value="blau" label="Blau" />
            <OptionComponent value="weiß" label="Weiß" />
            <OptionComponent value="grün" label="Grün" />
            <OptionComponent value="schwarz" label="Schwarz" />
          </SelectComponent>
        </FieldComponent>
      </div>
      <div class="row">
        <FieldComponent forValue="p-created-by" label="Created by">
          <SelectComponent id="p-created-by" name="created-by"> 
            <OptionComponent value="george-lucas" label="George Lucas" :selected="true" />
            <OptionComponent value="rot" label="Rot" />
            <OptionComponent value="blau" label="Blau" />
            <OptionComponent value="weiß" label="Weiß" />
            <OptionComponent value="grün" label="Grün" />
            <OptionComponent value="schwarz" label="Schwarz" />
          </SelectComponent>
        </FieldComponent>
      </div>
       <div class="row">
        <FieldComponent class="half-width" forValue="p-genre" label="Genre">
          <InputComponent type="text" id="p-genre" name="genre" placeholder="Science fiction" />
        </FieldComponent>
      </div>
      <div class="row">
        <FieldComponent forValue="p-race" label="Race(s)">
          <TextAreaComponent id="p-race" name="race" placeholder="Namen mit Semikolon trennen" />
        </FieldComponent>
      </div>
      </FormComponent>
    </Overlay>
 </template>
 <script>
import Overlay from '@/layout/Overlay.vue';
import FieldComponent from '@/components/field/FieldComponent.vue';
import InputComponent from '@/components/input/InputComponent.vue';
import TextAreaComponent from '@/components/textArea/TextAreaComponent.vue';
import SelectComponent from '@/components/select/SelectComponent.vue';
import OptionComponent from '@/components/select/parts/OptionComponent.vue';
import FormComponent from '@/components/form/FormComponent.vue';
 export default {
   name: 'FormPlanetComponent',
   components: {
    Overlay,
    FieldComponent,
    InputComponent,
    TextAreaComponent,
    SelectComponent,
    OptionComponent,
    FormComponent,
  },
   methods: {
    submitForm() {
      this.$refs.overlayRef.closeOverlay();
      },
      handleCloseOverlay() {
        this.$refs.overlayRef.closeOverlay();
    }
      
   },
   props: {
     formTitle: {
       type: String,
     },
     SubmitBtnTitle: {
       type: String,
     },
     OverlayBtnTitle: {
        type: String,
        required:true
     }
 }
 };
 </script>