<template>
  <div class = "home-page">
  <div class = navbar>
      <TitleHomePage/>
      <div class = "buttons">
          <ButtonGeneric buttonText = "À propos" buttonClass = "general"/>
      </div>
  </div>
      <div class="slider-wrap" ref="sliderWrap" 
      @mousedown="handleMouseDown" 
      @mousemove="handleMouseMove" 
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp">
        <div class="slider" ref="slider">
          <div class="slider-item" v-for="project in duplicatedProjects" :key="project.id">
            <ProjectCard :project="project"/>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import TitleHomePage from './TitleHomePage.vue';
import ButtonGeneric from './ButtonGeneric.vue';
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'HomePage',
    components: {
    TitleHomePage,
    ButtonGeneric,
    ProjectCard
  },
  data() {
    return {
        projects: [
        { id: 1, title: 'Combimac', categories: ['exposition','UX/UI','web'], imageSrc: 'assets/img/combimac/combimac.jpg'},
        { id: 2, title: 'Keycube', categories: ['UX/UI', 'web'], imageSrc: 'assets/img/keycube/mockup1.jpg' },
        { id: 3, title: 'Mikii', categories: ['communication','UX/UI'], imageSrc: 'assets/img/mikii/mikiiMockup.jpg'},
        { id: 4, title: 'Rick and Morty API', categories: ['web'], imageSrc: 'assets/img/rickAndMorty/mockup.jpg'},
        { id: 5, title: 'Hacktivists', categories: ['audiovisuel', '3D'], imageSrc: 'assets/img/Hacktivists/hack.png' },
        { id: 6, title: 'SchoolMouv', categories: ['UX/UI'], imageSrc: 'assets/img/SchoolMouv/schoolMouvMockup.jpg' },
        { id: 7, title: 'The Password Game 2.0', categories: ['web', 'game'], imageSrc: 'assets/img/passwordGame/passwordMockup.jpg' },  
        ], 
        duplicatedProjects: [],
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
      }
    },
    methods: {
      handleMouseDown(event) {
        console.log('handleMouseDown')
        this.isDragging = true;
        event.preventDefault();
        this.startX = event.pageX - this.$refs.sliderWrap.offsetLeft;
        this.scrollLeft = this.$refs.slider.scrollLeft;
      },
      handleMouseMove(event) {
        console.log('handleMouseMove')
        if (!this.isDragging) return;
        event.preventDefault();
        const x = event.pageX - this.$refs.sliderWrap.offsetLeft;
        const walk = (x - this.startX) * 2;
        this.$refs.slider.scrollLeft = this.scrollLeft - walk;
      },
      handleMouseUp() {
        console.log('handleMouseUp')
        this.isDragging = false;
      },
    },
    mounted() {
      this.duplicatedProjects = [...this.projects, ...this.projects];
    },
  }

</script>


<style scoped>

.home-page {
  width : 100%;
  height : 100%;
}


.navbar {
    box-sizing : border-box;
    padding-top : 1%;
    height : 20%;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : start;
}

.buttons {
    padding-right : 3%;
    display : flex;
    column-gap : 10%;
}

.slider-wrap {
    box-sizing : border-box;
    padding-top : 3%;
    height : 80%;
    white-space: nowrap;
    display: flex;
}

.slider {
    height : 100%;
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.slider-item {
  height : 100%;
}

/* Remove scrollbar */
.slider::-webkit-scrollbar {
    display: none;
}

/*remove scrollbar for mozilla*/
.slider {
    overflow: -moz-scrollbars-none;
}


@media screen and (max-width : 465px) {

  .navbar {
    height : 10%;
  }
    .slider-wrap {
      flex-direction: column;
    }

  .slider {
    flex-direction : column; 
  }

  .slider-item {
    width : 100%;
  }

  .navbar{
    margin-left : 2%;
  }

  .buttons{
    display : none;
  }
}

</style>