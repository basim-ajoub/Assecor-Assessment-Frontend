<template>
  <div class="item-details container">
    <div class="titles-section flex-center">
      <h4 class="details-type flex-center font-light"  v-if="isItemFilmeDetails">Filmdeatils</h4>
      <h1 class="page__title flex-center"  v-if="isItemFilmeDetails">{{film.title}}</h1>
      <h4 class="episode-title flex-center font-light"  v-if="isItemFilmeDetails">Episode {{ film.episode_id }}</h4>
      <h4 class="details-type flex-center font-light"  v-if="isItemPlanetDetails">Planetendeatils</h4>
      <h1 class="page__title flex-center"  v-if="isItemPlanetDetails">{{planet.name}}</h1>
      <h4 class="details-type flex-center font-light"  v-if="isItemCharakterDetails">Charakterdeatils</h4>
      <h1 class="page__title flex-center"  v-if="isItemCharakterDetails">{{charakter.name}}</h1>
    </div>
    <div class="item-infos-section">
     <DetailsComponent v-if="isItemFilmeDetails">
        <ul class="section-details__list">
          <ListItemComponent label="Director" :value="film.director" />
          <ListItemComponent label="Produzenten" :value="film.producer" />
          <ListItemComponent label="Erscheinungsdatum" :value="film.release_date" />
          <ListItemDescriptionComponent :value="film.opening_crawl" />
        </ul>
      </DetailsComponent>
      <DetailsComponent v-if="isItemPlanetDetails">
        <ul class="section-details__list">
          <ListItemComponent label="Type" :value="planet.name" />
          <ListItemComponent label="Created by" value="George Lucas" />
          <ListItemComponent label="Genre" value="Science fiction" />
          <ListItemComponent label="Race(s)" value="Human, Hutt, Jawa, Tusken , Raiders" />
          <ListItemComponent label="Notable" value="Mos Eisley First" />
          <ListItemComponent label="First appearance" :value="planet.created" />
          <ListItemLinksComponent label="Raumschiffe" value="Luke Skywalke" />
        </ul>
      </DetailsComponent>
      <DetailsComponent v-if="isItemCharakterDetails">
        <ul class="section-details__list">
          <ListItemComponent label="Größe" :value="charakter.height" />
          <ListItemComponent label="Gewicht" :value="charakter.mass" />
          <ListItemComponent label="Haarfarbe" :value="charakter.hair_color" />
          <ListItemComponent label="Augenfarbe" :value="charakter.eye_color" />
          <ListItemComponent label="Geburtsjahr" :value="charakter.birth_year" />
          <ListItemComponent label="Geschlecht" :value="charakter.gender" />
          <ListItemLinksComponent label="Raumschiffe" value="Luke Skywalke" />
        </ul>
      </DetailsComponent>
      <div class="section-img-slider">
        <SwiperSlider  />
      </div>
      <div class="section-links">
        <div class="group-links" v-if="isItemFilmeDetails">
          <h4 class="group-links__title">Charaktere:</h4>
          <ul class="list">
            <li  v-for="charakter in this.charaktere" key="{{ this.charaktere.key }}">
              <router-link class="card-list__link" :to="{ name: 'ItemCharakterDetails', params: { itemId: charakter.item_id }}">   
                 {{charakter.name}}
                </router-link> 
            </li>
            <li><FormCharakter OverlayBtnTitle="..." /></li>
          </ul>
        </div>
        <div class="group-links" v-if="isItemFilmeDetails">
          <h4 class="group-links__title">Planeten:</h4>
          <ul class="list">
            <li  v-for="planet in this.planets" key="{{ planet.key }}">
              <router-link class="card-list__link" :to="{ name: 'ItemPlanetenDetails', params: { itemId: planet.item_id }}">   
                {{planet.name}}
              </router-link>       
            </li>
            <li><FormPlanet OverlayBtnTitle="..." /></li>
          </ul>
        </div>
        <div class="group-links" v-if="isItemFilmeDetails || isItemCharakterDetails" >
          <h4 class="group-links__title">Raumschiffe:</h4>
          <ul class="list">
            <li v-for="starship in this.starships" key="{{ starship.key }}">{{starship.name}}</li>
            <li>...</li>
          </ul>
        </div>
        <div class="group-links" v-if="isItemFilmeDetails || isItemCharakterDetails">
          <h4 class="group-links__title">Fahrzeuge:</h4>
          <ul class="list">
            <li v-for="vehicle in this.vehicles" key="{{ vehicle.key }}">{{vehicle.name}}</li>
            <li>...</li>
          </ul>
        </div>
        <div class="group-links" v-if="isItemPlanetDetails || isItemCharakterDetails">
          <h4 class="group-links__title">Filme:</h4>
          <ul class="list">
            <li  v-for="film in this.films" key="{{ film.key }}">  
                <router-link class="card-list__link" :to="{ name: 'ItemFilmeDetails', params: { itemId: film.item_id }}"> {{film.title}}</router-link>       
             </li>
            <li><FormFilm OverlayBtnTitle="..." /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperSlider from "@/components/swiperSlider/SwiperSlider.vue";
import DetailsComponent from "@/components/itemDetails/parts/DetailsComponent.vue";
import swapiApiService from '@/services/swapiApiService';
import ListItemComponent from '@/components/listItem/ListItemComponent.vue';
import ListItemLinksComponent from '@/components/listItem/ListItemLinksComponent.vue';
import ListItemDescriptionComponent from '@/components/listItem/ListItemDescriptionComponent.vue';
import FormCharakter from '@/components/form/parts/FormCharakterComponent.vue';
import FormPlanet from '@/components/form/parts/FormPlanetComponent.vue';
import FormFilm from '@/components/form/parts/FormFilmComponent.vue';

export default {
  name: 'ItemDetails',
  components: {
    SwiperSlider,
    DetailsComponent,
    ListItemComponent,
    ListItemDescriptionComponent,
    ListItemLinksComponent,
    FormCharakter,
    FormFilm,
    FormPlanet
  },
  data() {
    return {
      film: {},
      planet: {},
      planets:[],
      films: [],
      charakter: {},
      charaktere: [],
      vehicles: [],
      species:[],
      planetValue:[],
      starships:[]
    };
  },
  watch: {
  '$route.name': 'fetchData'
},
  computed: {
    isItemFilmeDetails() {
      return this.$route.name === 'ItemFilmeDetails';
    },
    isItemPlanetDetails() {
      return this.$route.name === 'ItemPlanetenDetails';
    },
    isItemCharakterDetails() {
      return this.$route.name === 'ItemCharakterDetails';
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      if(this.isItemFilmeDetails) {
        this.fetchFilm();
      }
      if(this.isItemPlanetDetails) {
        this.fetchPlanet();
      }
      if(this.isItemCharakterDetails) {
        this.fetchCharakter();
      }
    },
    fetchFilm() {
      swapiApiService.getItemById(this.$route.params.itemId, 'films').then(data => { // this.$route.params.itemId -> to get the film id from rout Url
        this.film = data;
        this.fetchRelatedData(data.planets, 'planets');
        this.fetchRelatedData(data.characters, 'people');
        this.fetchRelatedData(data.species, 'species');
        this.fetchRelatedData(data.vehicles, 'vehicles');
        this.fetchRelatedData(data.starships, 'starships');
      });
    },
    fetchPlanet() {
      swapiApiService.getItemById(this.$route.params.itemId, 'planets').then(data => { // this.$route.params.itemId -> to get the Planet id from rout Url
        this.planet = data;
        this.fetchRelatedData(data.films,'films');
      });
    },
    fetchCharakter() {
      swapiApiService.getItemById(this.$route.params.itemId, 'people').then(data => { // this.$route.params.itemId -> to get the charakter id from rout Url
        this.charakter = data;
        this.fetchRelatedData(data.films, 'films');
        this.fetchRelatedData(data.species, 'species');
        this.fetchRelatedData(data.vehicles, 'vehicles');
        this.fetchRelatedData(data.starships, 'starships');
      });
    },
    fetchRelatedData(relatedUrls, dataType) {
    Promise.all(relatedUrls.map(url => {
      return swapiApiService.getItemsByUrl(url)
        .then(relatedData => {
          const itemId = this.extractIdFromUrl(url);
          return { ...relatedData, item_id: itemId }; 
        });
    }))
    .then(relatedData => {
      if(dataType == 'planets'){
        this.planets = relatedData;
      } 
      if(dataType == 'films'){
        this.films = relatedData;
      }
      if(dataType == 'species'){
        this.species = relatedData;
      }
      if(dataType == 'vehicles'){
        this.vehicles = relatedData;
      }
      if(dataType == 'people'){
        this.charaktere = relatedData;
      }
      if(dataType == 'starships'){
        this.starships = relatedData;
      }
      
    });
  },
    extractIdFromUrl(url) {
    const id = url.match(/\/(\d+)\/$/);
    return id ? id[1] : null;
  }
  }
};
</script>
