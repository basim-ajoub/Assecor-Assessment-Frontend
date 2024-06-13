# Assecor-Assessment-Frontend

## Name
<h3>Basim Ajoub</h3>

## Introduction
<p>Welcome to the Star Wars Encyclopedia project! This web application provides users with an immersive experience to explore the vast universe of Star Wars. Built using Vue.js, this app utilizes the Star Wars API (SWAPI) to fetch and display detailed information about films, characters, planets, and more from the Star Wars saga.</p>

## Responsive Design
- Cross-Device Compatibility: Enjoy a seamless experience on various devices, including desktops, tablets, and mobile phones.

## Interactive Experience

- Dynamic Content: Content updates in real-time with the latest information from the SWAPI database.
- Interactive Components: Use interactive elements such as sliders, forms, and dynamic links to enhance user engagement.

## External API Integration
- SWAPI Integration: Fetch and display data from the Star Wars API (SWAPI) to provide up-to-date and accurate information.

## Technologies
 - Vue.js.
 - Vue Router.
 - Axios.
 - HTML.
 - CSS (scss).
 - Javascript.
 - Swiper.js

## Project Structure
    ├── public
    │   └── index.html
    ├── src
    │   ├── assets
    │         ├── css
    │            └── style.scss
    │              └── swiper-custom.css
    │   ├── components
    │         ├── cards
    │             └── CardComponent.vue
    │             ├── parts
    │                 └── CardDetailItemComponent.vue
    │         ├── cardList
    │         ├── form
    │         ├── footer
    │         ├── header
    │         ├── .......
    │   ├── router
    │   ├── store
    │   ├── views
    │       └── CharaktereView.vue
    │       └── FilmeView.vue
    │       └── HomeView.vue
    │       └── PlanetenView.vue
    │   ├── services
    │       └── swapiApiService.js
    │   ├── App.vue
    │   └── main.js
    ├── .gitignore
    ├── README.md
    ├── package.json
    └── vue.config.js

## Project setup

### Installation
  - Clone the repository:
    
     ```
       git clone https://github.com/basim-ajoub/Assecor-Assessment-Frontend.git
     ```
  
  - install:

    ```
    npm install
    ```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
