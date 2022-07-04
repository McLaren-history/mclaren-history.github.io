<template>
  <ShowContentImages class="container" :images="images" :speed="-1">
    <p>
      Scoring third in 2020 and despite losing the fight for third place in the
      <nuxt-link :to="{ path: '/f1rules', hash: '#constructors' }"
        >constructor's championship</nuxt-link
      >
      against Ferrari in the last race in 2021, McLaren is definitely one of the
      top-teams in modern
      <span class="abbr" title="Formula One"
        ><a href="https://f1.com" target="_blank">
          <img
            class="img-small"
            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
            height="16" /></a></span
      >.
    </p>
    <p>
      McLaren Racing is a company based in
      <nuxt-link to="/maps" target="_blank">Woking, Surrey (UK)</nuxt-link>,
      employing about 4,200 people. Zak Brown has been CEO
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
      <em>Can-Am</em> championship, before it ceased at the end of the season.
    </p>
    <p>
      In summary, Mclaren has been taking part of several motorsport series for
      more than 50 years, and has announced to look into the specifications of
      new competitions like <em>Formula E</em> and potentially the
      <em>FIA World Endurance Championship</em>, the latter starting from 2024.
      Most of the series have been sanctioned by the
      <span
        id="fia-shorthand"
        class="shorthand"
        @mouseover="showFIAShort"
        @mouseleave="hideFIAShort"
        >FIA</span
      >.
    </p>

    <div class="additional-container">
      Read more about
      <nuxt-link :to="{ path: '/history' }"
        >the History of McLaren Racing</nuxt-link
      >
      or continue with McLaren's current success in
      <nuxt-link :to="{ path: '/f12022' }">the 2022 season</nuxt-link>.
    </div>

    <h2>Relevance</h2>
    <div class="text">
      But why is McLaren Racing interesting? On the one hand, Mclaren belongs to
      the top-teams in Formula One and has taken part in the championship
      continuously since 1966, which makes it the team with the second-longest
      history in Formula One, only
      <a
        href="https://sports.stackexchange.com/questions/24235/which-formula-one-races-did-scuderia-ferrari-not-take-part-in"
        target="_blank"
        >Ferrari have taken part in every single season since 1950</a
      >. This is, although F1 is a very challenging sport, with the whole
      on-site staff and equipment having to travel every second week to another
      country, mostly even on another continent, and the extremely high costs of
      developing and building F1 cars. McLaren has experienced highs and lows
      during its 56 years of Formula One, but they have not missed a single
      season. The history, how Bruce McLaren built a racing team that would
      claim 8 Constructors' and 12 Drivers' Championships in Formula One alone,
      and the issues the team had to deal with will always be one of the
      greatest histories in modern sport.
      <br />
      Lastly, the history is interesting because currently, the McLaren team are
      "best of the rest" (fourth in the Constructors' Championship) and as such
      one of the most interesting teams as they are always balancing between the
      top three and all other slower teams.
    </div>

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

export default defineComponent({
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
        new Image({
          url: [
            'https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2022-car-with-2021-liveries/F1_2022_McLaren_3_4_Left..jpg.transform/9col-retina/image.jpg',
          ],
          description: 'Render of the 2022 McLaren F1-car',
          alt: 'Img not loaded',
          uploadDate: new Date(2021, 6, 16),
          displaySource: 'Formula 1',
          height: 500,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://media-cdn.mclaren.com/media/images/galleries/IndyCar_2020_3QLow_Car_7_1920x1080.jpg',
          ],
          description: 'The McLaren 2020 IndyCar: Arrow McLaren SP Car',
          alt: 'Img not loaded',
          uploadDate: new Date(2020, 1, 7),
          displaySource: 'McLaren Technology Group',
          height: 500,
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
})
</script>

<style scoped>
.container {
  display: flex;
}

h3 {
  margin: 0;
  text-align: center;
}

.additional-container {
  margin: 0 2rem;
}
</style>
