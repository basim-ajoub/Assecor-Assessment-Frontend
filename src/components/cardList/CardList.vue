<template>
    <div class="card-list">
      <!-- case : Films -->
      <CardComponent v-if="catFilm" v-for="film in films" :key="film.gravity" :listType="listType"  :itemId="film.film_id" srcDesktop="Unbenannt-1@2x.webp" srcMobile="Unbenannt-1.webp" :title="film.title">
        <CardDetailItemComponent label="Director" :value="film.director" />
        <CardDetailItemComponent label="Produzenten" :value="film.producer" />
        <CardDetailItemComponent label="Erscheinungsdatum" :value="film.formattedCreated" />
      </CardComponent>  
      <!-- case : Planets -->
      <CardComponent v-if="catPlanets" v-for="planet in planets" :key="planet.key" :listType="listType"  :itemId="planet.planets_id" srcDesktop="planet-1@2x.webp" srcMobile="planet-1.webp" :title="planet.name" >
      <CardDetailItemComponent label="Climate" :value="planet.climate" />
      <CardDetailItemComponent label="Population" :value="planet.population" />
      <CardDetailItemComponent label="Diameter" :value="planet.diameter" />

      </CardComponent>  
       <!-- case : Charaktere -->
      <CardComponent v-if="catCharaktere" v-for="charakter in charaktere" :key="charakter.key" :listType="listType"  :itemId="charakter.charakter_id" srcDesktop="charakter-1@2x.webp" srcMobile="charakter-1.webp" :title="charakter.name">
        <CardDetailItemComponent label="Größe" :value="charakter.height" />
        <CardDetailItemComponent label="Augenfarbe" :value="charakter.eye_color" />
        <CardDetailItemComponent label="Geschlecht" :value="charakter.gender" />
      </CardComponent> 
    </div>
</template>
<script>
import swapiApiService from '@/services/swapiApiService';
import CardComponent from '@/components/card/CardComponent.vue';
import CardDetailItemComponent from '@/components/card/parts/CardDetailItemComponent.vue';
export default {
  name: 'CardList',
  components: {
    CardComponent,
    CardDetailItemComponent
  },
  props: {
    listType: {
      type: String,
      required: true,
      default: 'none'
    },
    catFilm: {
      type: Boolean,
      required: false,
      default: false,
    },
    catPlanets: {
      type: Boolean,
      required: false,
      default: false
    },
    catCharaktere: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      films: [],
      planets: [],
      charaktere: [],
      planets_id: null,
      charakter_id: null,
    };
  },
  created() {
    this.fetchData();
    
  },
  methods: {
    fetchData() {
      if(this.catFilm) {
        this.fetchFilms();
      }
      else if (this.catPlanets) {
        this.fetchPlanets();
      }
      else if (this.catCharaktere) {
        this.fetchCharaktere();
      }
    },
    fetchFilms() {
      swapiApiService.getFilms().then(data => {
        this.films = data.results.map(film => ({
          ...film,
          film_id: this.extractIdFromUrl(film.url),
          formattedCreated: this.ectractDate(film.created)
        }));
      });
    },
    fetchPlanets() {
      swapiApiService.getPlanets().then(data => {
        this.planets = data.results.map(planet => ({
          ...planet,
          planets_id: this.extractIdFromUrl(planet.url)
        }));
      });
    },
    fetchCharaktere() {
      swapiApiService.getCharaktere().then(data => {
       this.charaktere = data.results.map(charakter => ({
          ...charakter,
          charakter_id: this.extractIdFromUrl(charakter.url)
        }));
      });
    },
    extractIdFromUrl(url) {
      const id = url.match(/\/(\d+)\/$/);
      return id ? id[1] : null;
    },
    ectractDate(date) {
      const dateStr = date.split('T')[0];
      const [year, month, day] = dateStr.split('-');
      return `${day}.${month}.${year}`;
    }
  }
}
</script>
  