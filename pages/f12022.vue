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