<!-- <template>
    <button :href="'https://'+project.link">
      <div class = "button-container">
        <span>{{ project.buttonText }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
        <path d="M20.9562 15.3554L12.3493 23.9623L10.9351 22.5481L19.542 13.9412L11.9562 13.9412L11.9562 11.9415H22.9559V22.9413L20.9562 22.9413V15.3554Z" fill="#131412"/>
        </svg>
      </div>
    </button>
  </template> -->

  <template>
    <a v-if="project.class === 'link'" :href="'https://' + project.link" class="button">
      <div class="button-container">
        <span>{{ project.buttonText }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path d="M20.9562 15.3554L12.3493 23.9623L10.9351 22.5481L19.542 13.9412L11.9562 13.9412L11.9562 11.9415H22.9559V22.9413L20.9562 22.9413V15.3554Z" fill="#131412"/>
        </svg>
      </div>
    </a>
    <button v-else-if="project.class === 'noLink'" style="display: none">
      <!-- No link button content goes here (empty for display none) -->
    </button>
  </template> 

<script>
export default {
    name: 'ButtonProject',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>

a.button {
    box-sizing: border-box;
    width: 8.5rem;
    height: 2.5rem;
    border : none;
    border-radius: 1rem;
    font-family: 'inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    background-color: var(--projectColor, #111);
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: .2s transform ease-in-out;
    cursor: pointer;
  }

a.button:hover {
    color : var(--projectColor, #111);
    background-color : transparent;
    border : 1px solid var(--projectColor, #111);
    transform: scale(1.05);
}

a.button:hover svg path {
    fill : var(--projectColor, #111);
}
.button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

@media screen and (max-width : 1024px) {
  .button-container svg{
    width : 24px;
    height : 24px;
  }
}

@media screen and (max-width : 800px) {
  .button-container svg{
    width : 12px;
    height : 12px;
  }
}


</style>