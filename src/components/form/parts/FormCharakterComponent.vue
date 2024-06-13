<template>
    <Overlay ref="overlayRef" @submit="submitForm" @close="handleCloseOverlay" :OverlayBtnTitle="OverlayBtnTitle" >
      <FormComponent formTitle="Charakter hinzufügen" SubmitBtnTitle="Charakter hinzufügen" @close="handleCloseOverlay" >
       <div class="row">
        <FieldComponent forValue="c-name" label="Name">
          <InputComponent type="text" id="c-name" name="name" placeholder="Name eingeben" />
        </FieldComponent>
       </div>
       <div class="row">
        <FieldComponent forValue="c-große" label="Große">
          <InputComponent type="number" id="c-große" name="große" placeholder="Meter" />
        </FieldComponent>
        <FieldComponent forValue="c-gweicht" label="Gweicht">
          <InputComponent type="number" id="c-gweicht" name="gweicht" placeholder="Kg" />
        </FieldComponent>
      </div>
      <div class="row">
        <FieldComponent forValue="c-haarfarbe" label="haarfarbe">
          <InputComponent type="text" id="c-haarfarbe" name="haarfarbe" placeholder="Haarfarbe eingeben" />
        </FieldComponent>
        <FieldComponent forValue="c-augenfarbe" label="Augenfarbe">
          <SelectComponent id="c-augenfarbe" name="augenfarbe"> 
            <OptionComponent value="gelb" label="Gelb" :selected="true" />
            <OptionComponent value="rot" label="Rot" />
            <OptionComponent value="blau" label="Blau" />
            <OptionComponent value="weiß" label="Weiß" />
            <OptionComponent value="grün" label="Grün" />
            <OptionComponent value="schwarz" label="Schwarz" />
          </SelectComponent>
        </FieldComponent>
      </div>
      <div class="row">
        <FieldComponent forValue="c-geburtsjahr" label="Geburtsjahr">
          <InputComponent type="text" id="c-geburtsjahr" name="geburtsjahr" placeholder="YYYY" />
        </FieldComponent>
        <FieldComponent forValue="c-augenfarbe" label="Augenfarbe">
          <SelectComponent id="c-augenfarbe" name="augenfarbe"> 
            <OptionComponent value="gelb" label="Gelb" :selected="true" />
            <OptionComponent value="rot" label="Rot" />
            <OptionComponent value="blau" label="Blau" />
            <OptionComponent value="weiß" label="Weiß" />
            <OptionComponent value="grün" label="Grün" />
            <OptionComponent value="schwarz" label="Schwarz" />
          </SelectComponent>
        </FieldComponent>
       </div>
      </FormComponent>
    </Overlay>
 </template>
 <script>
import Overlay from '@/layout/Overlay.vue';
import FieldComponent from '@/components/field/FieldComponent.vue';
import InputComponent from '@/components/input/InputComponent.vue';
import SelectComponent from '@/components/select/SelectComponent.vue';
import OptionComponent from '@/components/select/parts/OptionComponent.vue';
import FormComponent from '@/components/form/FormComponent.vue';
 export default {
   name: 'FormCharakterComponent',
   components: {
    Overlay,
    FieldComponent,
    InputComponent,
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