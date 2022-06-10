<template>
  <div class="container f1-2022-container">
    <MetaHead
      title="2022"
      description="What are the most important developments for McLaren in the current season?"
    />

    <Header />
    <ShowContentImages :images="images">
      <div class="content">
        <h2 class="title">Rule changes</h2>
        <p>
          In 2022, a massive change of rules was introduced, enforcing the need
          for Ground Effect due to aerodynamics on top of the car being
          regulated more, in order to reduce the amount and effect of dirty air
          on the car behind (in order to decrease the difficulty of overtaking).
        </p>

        <h2 class="title">McLaren Mercedes in 2022</h2>
        <p>
          With the driver pairing of Lando Norris and Daniel Ricciardo, the
          team's first results seemed quite disappointing, at least in terms of
          point winning: Only two out of the first seven races left the McLaren
          team with of double-digit results, adding both drivers' individual
          points. Two race weekends, namely Bahrain (round 1) and Miami (round
          5), ended with zero points.
          <br />
          Anyway, the team is currently "best of the rest" (the best team after
          the so-called "top-teams" Red Bull, Ferrari and Mercedes
          AMG-Petronas).
        </p>
        <p>
          However, it is to distinguish between the two drivers' individual
          results: Lando Norris is currently in position 7 of the drivers'
          standings, so he is best of the rest looking at the drivers'
          championship by ending five races third, fifth, sixth, seventh and
          eighth out of the first seven races. Only once, in Bahrain, he did not
          score points while finishing (15th) and he could not finish the Miami
          GP. It is important to keep in mind that Norris suffered a tonsillitis
          at the Barcelona GP and had not completely cured until the Monaco GP.
          <br />
          Daniel Ricciardo is much more unstable than his teammate, only scoring
          points at his home race (round 3). During the first seven races, he
          has already a 37-point deficit to Lando. This, of course, is very
          disappointing for such an ambitious team, and thus CEO Zak Brown
          publicly talks about the
          <a
            href="https://www.formula1.com/en/latest/article.part-of-me-loves-it-ricciardo-says-he-has-no-issue-with-speculation-over.4YAPpY26msKxeew7rFilNk.html"
            >expectations Danny had "not met"</a
          >
          yet. The Australian himself admitted he had
          <a
            href="https://www.formula1.com/en/latest/article.part-of-me-loves-it-ricciardo-says-he-has-no-issue-with-speculation-over.4YAPpY26msKxeew7rFilNk.html"
            >not really done anything spectacular this year"</a
          >.
        </p>
      </div>
    </ShowContentImages>
  </div>
</template>

<script>
import Image from '@/types/Image'

export default {
  name: 'F12022',
  data() {
    return {
      images: [
        new Image({
          url: [
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image4.img.1920.medium.jpg/1646932823104.jpg',
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image6.img.1920.medium.jpg/1645693882401.jpg',
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image2.img.1920.medium.jpg/1647008685857.jpg',
          ],
          description: `Lando Norris driving the McLaren MCL36-Mercedes around the Bahrain International Circuit on the first day of FP, March 10, 2022, Ricciardo in FP3 the next day and at Pre-Season testing in Barcelona-Catalunya on February 24.`,
          alt: 'Img not loaded',
          uploadDate: new Date(2022, 2, 10),
          displaySource: 'Formula One World Championship Limited: Team McLaren',
          height: 520,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image5.img.1920.medium.jpg/1645619394223.jpg',
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image1.img.1920.medium.jpg/1647089221443.jpg',
            'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/gallery/image3.img.1920.medium.jpg/1646995316562.jpg',
          ],
          description: `McLaren driver line-up for 2021 and 2022: (3) Daniel Ricciardo, (4) Lando Norris; and CEO Zak Brown.`,
          alt: 'Img not loaded',
          uploadDate: new Date(2022, 2, 11),
          displaySource: 'Formula One World Championship Limited: Team McLaren',
          height: 520,
          dataHigherWide: false,
        }),
      ],
    }
  },
}
</script>

<style scoped>
</style>