<template>
  <div class="container header-container">
    <div class="top">
      <nuxt-link to="/" class="heading">
        <h1>McLaren - History and Development</h1>
      </nuxt-link>
      <a href="https://www.formula1.com/en/teams/McLaren.html" target="_blank">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1488.2 300"
          class="mcl-logo"
        >
          <path
            class="svg-path"
            d="M781.4,197.7c0,5.7-2.5,9.8-10.2,9.8h-49.5c-6.3,0-10-1.8-10-7.7s2.5-8.9,10-8.9h59.7V197.7z M999.6,174.3v-6.6
	c0-5.9,2.5-9.8,10.5-9.8h49.5c6.8,0,10.2,2,10.2,8.4c0,5.4-2.7,7.9-9.8,7.9H999.6z M1129.5,130.5v104.4h50v-76h40.9
	c13.8,0,20.9,4.3,20.9,17.7V235h49.9v-62.5c0-29.3-16.1-42-61.8-42H1129.5z M1006.4,130.5c-40.2,0-56.3,13.4-56.3,43.6v20.7
	c0,26.1,16.1,40.2,52.4,40.2h105.8v-27.5h-95.8c-9.5,0-12.7-2.7-12.7-9.8v-4.3h75.6c26.1,0,40.9-8.2,40.9-27.7v-4.8
	c0-17.7-8.8-30.4-53.1-30.4H1006.4z M845.9,234.9h49.9v-68.6c0-4.5,1.8-7.5,8-7.5h38.8v-28.4H887c-29.7,0-41.1,11.1-41.1,29.7
	L845.9,234.9z M675.2,130.5V158H769c9.3,0,12.5,3.2,12.5,10v4h-75.4c-31.6,0-41.1,13-41.1,29.5v4.1c0,22.9,18.4,29.3,54.5,29.3h55.4
	c39.3,0,56.3-8.9,56.3-39.7v-24.3c0-26.1-16.1-40.4-52.7-40.4H675.2z M376.4,188.6c0,32.9,16.8,46.3,60.2,46.3h95.1v-28.2h-87.9
	c-10.4,0-17.5-4.8-17.5-19.8v-9.1c0-13.4,6.6-19.1,17.3-19.1h88.1v-28.4h-96.5c-42.7,0-58.8,17.9-58.8,46.5L376.4,188.6z
	 M546.7,113.9v121h108.5v-28.4h-58.6v-92.6H546.7z M235,181.6v-67.7h-28.2c-17.5,0-27.5,7-37.9,15.2L35.4,234.9h60.2l88.6-71.7v71.7
	h41.5l85.8-72.2v72.2h50.9v-121h-27.7c-15,0-25.4,6.1-35.9,14.8L235,181.6z"
          ></path>
          <path
            class="st0 orange"
            d="M1411.3,26c-27.9,0-67.2,8.3-109.7,23.9c-38,13.8-74.5,31.8-108.6,53.5c22.2-9.1,66.1-19.4,102.3-19.4
	c48.8,0,83.6,18.7,32.2,84.2C1478.8,69.2,1474.7,26.1,1411.3,26"
          ></path>
        </svg>
      </a>
    </div>
    <div class="bottom">
      <nuxt-link to="/history" class="card small-shadow">History</nuxt-link>
      <nuxt-link to="/f1rules" class="card small-shadow">F1 Rules</nuxt-link>
      <nuxt-link to="/f12022" class="card small-shadow"
        >F1 2022 season</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
.st0.orange {
  fill: var(--mclaren-orange);
}
.svg-path {
  fill: var(--mclaren-bg-light);
}

.mcl-logo {
  position: absolute;
  top: 1rem;
  right: 2.5rem;
  height: 50px;
}

.card {
  width: fit-content;
  padding: 0.5rem 1rem;
}

.bottom {
  display: flex;
  max-width: 100%;
  margin: 1rem 0;
}

.bottom * {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.heading {
  color: var(--mclaren-orange);
}
</style>