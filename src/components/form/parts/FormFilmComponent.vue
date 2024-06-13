<template>
    <Overlay ref="overlayRef" @submit="submitForm" @close="handleCloseOverlay" :OverlayBtnTitle="OverlayBtnTitle" >
      <FormComponent formTitle="Film hinzufügen" SubmitBtnTitle="Film hinzufügen" @close="handleCloseOverlay" >
       <div class="row">
        <FieldComponent forValue="f-titel" label="Titel">
          <InputComponent type="text" id="f-titel" name="titel" placeholder="Titel eingeben" />
        </FieldComponent>
       </div>
       <div class="row">
        <FieldComponent forValue="f-director" label="Director">
          <InputComponent type="text" id="f-director" name="director" placeholder="Adresszusatz eingeben" />
        </FieldComponent>
       </div>
       <div class="row">
        <FieldComponent forValue="f-producent" label="Producent">
          <SelectComponent id="f-producent" name="producent"> 
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
        <FieldComponent class="half-width" forValue="f-erscheinungsdatum" label="Erscheinungsdatum">
          <InputComponent type="number" id="f-erscheinungsdatum" name="erscheinungsdatum" placeholder="YYYY" />
        </FieldComponent>
      </div>
      <div class="row">
        <FieldComponent forValue="f-beschreibung" label="Beschreibung">
          <TextAreaComponent id="f-beschreibung" name="beschreibung" placeholder="Beschreibung" />
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
   name: 'FormCharakterComponent',
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