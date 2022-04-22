<template>
  <ShowContentImages class="container" :images="images">
    <p>
      Scoring third in 2020 and losing the fight for third place in the
      <nuxt-link :to="{ path: '/f1rules', hash: '#constructors' }"
        >constructor's championship</nuxt-link
      >
      against Ferrari in the last race in 2021, McLaren is definitely one of the
      top-teams in modern
      <a href="https://f1.com" target="_blank">
        <img
          src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
          height="16" /></a
      >.
    </p>
    <p>
      McLaren Racing is a company based in
      <nuxt-link to="/maps" target="_blank">Woking, Surrey</nuxt-link>. Zak
      Brown has been CEO
      <nuxt-link :to="{ path: '/history', hash: '#ZakBrown' }"
        >since November 2016</nuxt-link
      >,
      <a
        href="https://www.mclaren.com/racing/team/andreas-seidl/"
        target="_blank"
        >Andreas Seidl</a
      >
      was appointed the role of Team Principal (a German engineer and manager)
      at the start of May 2019.
    </p>

    <p>
      Apart from the engagement in Formula 1 since the Monaco GP 1966, McLaren
      Racing recently entered <em>Extreme E</em>, an electric off-road racing
      series and takes part of the
      <em>IndyCar Series</em>
      since 2020, collaborating with Arrow Schmidt Peterson Motorsports in the
      latter.
      <br />
      Until 1974, McLaren became the most successful constructor in the
      <em>Can-Am</em> champianship, before it ceased at the and of the season.

      <br /><br />
      In summary, Mclaren has been taking part of several motorsport series for
      more than 50 years, and has announced to look into the specifications of
      new competitions like <em>Formula E</em> and potentially the
      <em>FIA World Endurance Championship</em>, the latter starting from 2024.
      Most of the series have been sanctionned by the
      <span
        id="fia-shorthand"
        class="shorthand"
        @mouseover="showFIAShort"
        @mouseleave="hideFIAShort"
        >FIA</span
      >.
    </p>

    <ExplainShorthand
      :shown="shorts.showFIAShorthand"
      :tx="fiaTx"
      :ty="fiaTy"
      id="fia-explanation"
    >
      <h3>Fédération Internationale de l'Automobile</h3>
      <p>
        "The FIA is the governing body of motor sport and promotes safe,
        sustainable and accessible mobility for all road users across the world"
        (<a target="_blank" href="https://www.fia.com/fia">fia.com</a>). The
        association organizes the the
        <em>FIA Formula One World Championship</em> since 1981 among other
        competitions. Furthermore, it issues licenses and grade-ratings for
        drivers and circuits.
      </p>
    </ExplainShorthand>
  </ShowContentImages>
</template>

<script>
import Image from '@/types/Image'

export default {
  name: 'Beginning',
  data() {
    return {
      fiaTx: 0,
      fiaTy: 0,
      shorts: {
        showFIAShorthand: false,
      },
      images: [
        new Image({
          url: [
            'https://media-cdn.mclaren.com/media/images/home/bahrain_gp-home-page-web_test_3.jpg',
          ],
          description:
            'The 2022 McLaren during official pre-season testing in Bahrain.',
          alt: 'Img not loaded',
          uploadDate: new Date(2022, 2, 11),
          displaySource: 'McLaren Racing',
          height: 250,
          dataHigherWide: false,
        }),
      ],
    }
  },

  methods: {
    showFIAShort() {
      const e = document.getElementById('fia-shorthand')
      const position = e.getBoundingClientRect()
      this.fiaTx = position.right
      this.fiaTy = position.top
      this.shorts.showFIAShorthand = true
    },
    hideFIAShort() {
      setTimeout(() => {
        this.shorts.showFIAShorthand = false
      }, 1000 * 0.1)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
}

h3 {
  margin: 0;
  text-align: center;
}
</style>
