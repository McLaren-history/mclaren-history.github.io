<template>
  <div class="container history-container">
    <MetaHead
      title="History"
      description="McLaren's History begin in 1963 with Bruce McLaren founding his own Motor Racing company. "
    />

    <Header />

    <ShowContentImages
      :images="images"
      class="content-container-history"
      :speed="0.6"
    >
      <div class="outer">
        <div class="info card">
          <h2 class="title">Founding</h2>
          <p>
            In 1963, Bruce McLaren Motor Racing was founded. Bruce was a factory
            driver for the Cooper Car Company in Formula One. His own racing
            company's history in F1 began in 1966 at the Monaco GP, which was
            held on may 22nd, after Bruce decided the worsening results for his
            team (Cooper Car Company) were not satisfying for him as a driver.
          </p>
        </div>

        <div class="info card">
          <h2 class="title">First tests</h2>
          <p>
            Initially denying that they were building a Formula One competitor,
            McLaren's company started to build their first development car: the
            M2A. This chassis was used for testing (by December 1965, the M2A
            had completed 3,200 km), and the engines from testing were installed
            into the two new chassis of the Model M2B. Among others, Bruce
            McLaren tested the car at Goodwood Circuit (close to the south coast
            of the UK) and in California, US, in December 1965 and February
            1966.
          </p>
        </div>

        <div class="info card">
          <h2 class="title">1966 Formula One season</h2>
          <p>
            Three months later, the Formula One World Championship was set to
            begin at Monaco, where McLaren decided to use a "Ford 406 3.0
            V8"-engined car. While qualifying for tenth and driving to sixth
            place within the first laps, he had to stop the car in the ninth lap
            due to an oil leak. The engine-change to a "Serenissima M166 3.0 V8"
            for the next round, which would take place in Belgium. This engine,
            however, would not be able to hold up to McLaren's dreams, either:
            after the bearings were terminally damaged in FP, Bruce
            <span class="abbr" title="did not start">DNS</span> the race.
            <br />
            These problems would continue over the whole season, the only three
            points of the season were scored by Bruce McLaren in rounds 4 (GBR)
            and 8 (USA) ending sixth and fifth, respectively. All other races
            ended early for the McLaren crew, or they did not start at all.
          </p>
          <p>
            After both M4B and M5A cars, built for the 1967 season, did not
            result in great success (the best result in 1967 was the Monaco
            Grand Prix, where McLaren failed the podium with fourth place).
          </p>
        </div>
        <div class="info card">
          <h2 class="title">1968-1983: Ford-Cosworth DFV engines</h2>
          <p>
            For the 1968 season, Denny Hulme joined the McLaren F1 team after
            having raced for the company in Can-Am (in the years of 1967-1971,
            where McLaren cars were obviously unbeatable, crushing the
            competition with multiple 1-2-3-finishes, due to which Can-Am was,
            during that period, later called "The Bruce and Denny show").
          </p>
          <p>
            After two non-championship races won by the drivers, one by Hulme
            and one by Bruce, respectively, they finally got to celebrate their
            first championship win at race 4 of 12, as Bruce McLaren won the
            1968 Belgian Grand Prix. With two further victories by Hulme (round
            8 and 10, Italian and Canadian GP), they claimed
            <strong>
              second place in the
              <nuxt-link :to="{ path: '/f1rules', hash: '#constructors' }"
                >constructor's championship</nuxt-link
              ></strong
            >. <br />
            The 1969 championship was less victorious than 1968, with
            McLaren-Ford finishing fourth, behind all three other manufacturers
            using the "Ford Cosworth DFV 3.0 V8"-engine. At the end of the
            season, they had used four different chassis (the M7A, M7B, M7C as
            well as the four-wheel-drive M9A, the last mentioned only used at
            McLaren's home Grand Prix (British GP) by Derek Bell).
          </p>
          <h3>1972-1982</h3>
          <p>
            In 1972, Bruce McLaren died mid-season while testing the new M8D
            Can-Am car. Teddy Mayer took over effective control of the team, and
            Hulme continued the season with Dan Gurney and Peter Gethin
            partnering him.
          </p>
          <p>
            The only remarkable season for McLaren between 1972 and 1982 was
            1974, marking the first Constructor's and the first Driver's
            championship for McLaren at the same time, as Emerson Fittipaldi,
            who had joined the team for the same season, after winning the World
            Drivers' Championship title with Lotus two years prior, in 1972.
            <br />
            The 1974 McLaren chassis was the M23, which is the first car
            resembling modern F1 cars, while previous cars were rather
            round-shaped.
          </p>
        </div>
        <div class="info card">
          <h2 class="title">TAG-Porsche 1.5 litres V6 engines (1983-1987)</h2>
          <p>
            Since the early 1980s, Ferrari, Renault and Brabham favored
            1.5-litre turbocharged engines over the
            <span class="abbr" title="Naturally aspirated">N/A</span> engines,
            which then established to become the new standard. While 1983
            presented only one special victory for McLaren (Watson winning from
            22nd on the grid after qualifying), 1984 would be a turning point:
          </p>
          <p>
            Having left the team after his debut season in Formula 1, in 1980,
            Alain Prost returned to drive for McLaren Racing in 1984 to partner
            double world champion Niki Lauda in the McLaren MP 4/2. The drivers
            held 12 victories in total, and although Lauda was responsible for
            only 5 of them, he won the Driver's World Championship by half a
            point, against Prost. Having by far the two best drivers of the
            field (according to the official points and statistics, anyway), it
            was no surprise that they claimed the Constructor's Championship a
            second time, with two-and-a-half times as many constructors' points
            as Ferrari, their nearest rival. After the season, McLaren switched
            from Michelin to The Goodyear Tire &amp; Rubber Company as tyre
            supplier.
          </p>
          <p>
            McLaren Racing's dominance did not stop at the end of the 1984
            season: the 1985 season brought McLaren's third Constructors
            Championship, with Prost winning the Drivers' Championship.
          </p>

          <p>
            After the two dominant seasons for McLaren Racing, the Williams
            Grand Prix Engineering took the Constructors' Championship with
            <em>Honda engines</em>, while the
            <strong>Drivers' trophy was once again lifted by Prost</strong>, who
            remained at the team in contrast to Niki Lauda, who retired a second
            time (after his first retirement (1979) as a consequence to his
            heavy crash nine years prior in a Ferrari at the 1976 German Grand
            Prix (Nürburgring)). In 1987, the MP4/3 could not hold up to the
            dreams of claiming another Championship against the Honda-powered
            Williams.
          </p>
        </div>
        <div class="info card">
          <h2 class="title">Honda-engined dominance (1988-1991)</h2>
          <p>
            Ron Dennis signed the Brazilian Ayrton Senna as driver to partner
            Alain Prost, and the turbocharged Honda-engine in the MP4/4 provided
            best chances to satisfy both the drivers and Dennis. Actually, the
            McLaren drivers were battling each other very hardly, and while
            winning 15 out of the 16 races that season, the hard-fighting Senna
            took the title at Suzuka Circuit (round 15). Prost though complained
            about Senna, who had squeezed him against the pit wall.
            <br />
            The next year did not better the drivers' relation, as Prost felt
            like Senna was favoured by Dennis and Honda, and announced to leave
            to Ferrari for the next season. Anyway, he won the Drivers' title in
            Suzuka, after a crash for which Senna was disqualified, as McLaren
            earned their fifth Constructors' Championship win.
          </p>
          <p>
            The margin to the next team, though, became smaller each year, with
            Ferrari (1990) and Williams (1991) were the winners' closest
            challengers. Twice again, Senna won the Driver's Championship,
            making him three-times Formula One World Champion (1988, 1990,
            1991). McLaren continued to earn two titles, thus having a four-year
            run as champion.
          </p>
        </div>

        <div class="info card">
          <h2 class="title">
            1992-1994: Honda, Ford, Lamborghini and Peugeot engines
          </h2>
          <p>
            In 1992, Williams overtook McLaren in terms of points, leaving the
            team on second place, twice in a row, with a Honda engine in 1992
            (Honda withdrew from the sport at the end of that same season) and a
            Ford engine in 1993. Finally, at the end of the 1993 season, Senna
            left McLaren to sign with Williams.
          </p>
          <p>
            Mika Häkkinen was promoted to the race team in 1994 after having
            moved to McLaren as a test driver in 1993. Ahead of the next season,
            McLaren used a Lamborghini V12 engine before choosing Peugeot as
            their engine supplier for 1994. After just one season, McLaren
            dropped Peugeot due to unreliability.
          </p>
        </div>

        <div class="info card">
          <h2 class="title">Mercedes engines (1995-2014)</h2>
          <p>
            After the 1995 season, which was very unsuccessful for McLaren,
            David Coulthard entered the team alongside Mika Häkkinen for 1996.
            During his first season at McLaren, however, he did not manage to
            win a single race, and neither did Häkkinen, marking a third
            successive year without a single win.
            <br />
            The 1997 season started much better: Coulthard won the season-opener
            in Australia, and both drivers scored another win during the season.
            Their biggest issue was the technical unreliability of the bolides,
            as Häkkinen had to give up before crossing the finish line while
            racing in first place twice during the season.
            <br />
            As Williams lost the works Renault engines in 1998 and a set of new
            technical regulations was introduced, the team managed to win a
            sixth Constructors' Championship, and Häkkinen won the Drivers'
            trophy. The subsequent season again brought a combination of drive
            errors and mechanical failures, and despite Häkkinen's second
            Drivers' Championship in a row, the team was not able to finish at
            the top of the Constructors' standings in 1999.
          </p>
          <p>
            The next years did not provide any chance to beat Ferrari and
            Michael Schumacher, although Kimi Räikkönen won multiple races in
            his early years in Formula 1, as he replaced fellow Finn Mika
            Häkkinen. After finishing fifth in the Drivers' Championship in
            2006, Räikkönen left the team for a contract with Ferrari, where he
            would become World Champion in 2007.
          </p>
          <p>
            Lewis Hamilton started his Formula One career alongside Fernando
            Alonso in the 2007 season, which would become a very controversial
            season for both the drivers and the team: Alonso had issues with the
            competitiveness of Lewis Hamilton, and although both scored four
            wins each, Kimi Räikkönen in the Ferrari would claim the trophy
            after winning the final race in Brazil and ending up one point ahead
            of both McLaren drivers. Alonso left McLaren for the 2008 season.
            <br />
            While both drivers were fighting each other, the team was found
            guilty and fined $100 Million for having technical blueprints of
            Ferrari's car, after the management had blamed one single "rogue
            engineer" at the first hearing.
          </p>
          <p>
            2008 proved to be a successful year for Lewis Hamilton who would
            claim first place in the overall standings over some controversies
            and a dramatic overtake in the final corner of the season. His
            teammate, Heikki Kovalainen, did not manage to win more than one
            Grand prix and only finished seventh.
          </p>
          <p>
            After Ron Dennis had retired ahead of the season, 2009 proved to
            still be more catastrophic; the MP4-24 was clearly off the pace, and
            despite winning two Grand Prix late-season and placing himself first
            on the grid four times, Hamilton finished fifth in the Drivers'
            standings, with Kovalainen finding himself far off pace only scoring
            22 points (12th) over the whole season.
          </p>
          <p>
            For the 2010 season, McLaren-Mercedes lost its status as Mercedes
            works team, but they have continued using customer Mercedes-Benz
            engines for five more years until 2014. Jenson Button replaced
            Kovalainen after disappointing results. Despite scoring five wins in
            total, McLaren lost the championships to Red Bull and Sebastian
            Vettel, with Lewis and Jenson only finishing P4 and P5 respectively.
            <br />
            In 2011, the team stayed second with Red Bull in first place, but
            Button finished ahead of his teammate in second place, while
            Hamilton dropped to fifth.
            <br />
            The 2012 season ended with Hamilton and Button in fourth and fifth,
            while the team was overtaken by Ferrari and Kimi Räikkönen (P3).
            <br />
            The 2013 season was the first since 1980 that McLaren did not score
            a single podium finish. Sergio Pérez, who had come to replace
            Hamilton (he signed with Mercedes, where he currently drives for the
            tenth season), lost his driver place after a disappointing season
            ending in P11 for him. His teammate Button struggled with the car,
            too, and finished in P9, only two spots higher.
            <br />
            Although Ron Dennis returned as CEO, they had a rather unsuccessful
            season with Kevin Magnussen replacing Pérez, and thus switched from
            Mercedes back to Honda engines.
          </p>
        </div>
        <div class="info card">
          <h2 class="title">Return to Honda (2015-2017)</h2>
          <p>
            Fernando Alonso and Jenson Button were appointed race drivers from
            2015-2016, while Magnussen was demoted to test driver. McLaren
            Racing finished in ninth place in the Constructors' Championship,
            which was the team's worst performance since 1980, and the following
            season saw them climbing up three places to sixth in the
            constructors' standings.
          </p>
          <p>
            In 2017, Button stepped down from his racing seat, and reserve
            driver Stoffel Vandoorne took his place alongside Alonso for the
            2017 season. The driver pairing again failed to score many points,
            with the best result over the whole season being sixth for Fernando
            Alonso at the Hungarian Grand Prix. In total, they collected only 30
            points, leaving them in P9 in the constructors' standings. Jenson
            Button returned once in the season to replace Fernando Alonso for
            the Monaco GP who himself participated in the Indianapolis 500, an
            IndyCar series.
          </p>
        </div>
        <div class="info card">
          <h2 class="title">Renault's three year-deal (2018-2020)</h2>
          <p>
            For 2018, radical changes were needed and they turned to Renault as
            engine supplier for a three-year deal. The driver pairing of Alonso
            and Vandoorne, however, was set to remain. Lando Norris, a British
            young driver who signed in February 2017 to McLaren's Young Driver
            Programme, was set to be test and reserve driver. As the drivers did
            not achieve their goal of fighting Red Bull, ending up at a little
            more than one sixth of the declared opponent's points, leaving them
            in sixth place overall.
          </p>
          <p>
            2019, they replaced Alonso who initially retired from F1 after the
            four years with McLaren with Lando Norris, and Carlos Sainz was
            offered a contract after his employment first at Toro Rosso
            (2015-2017) and Renault (2018 season). While Carlos has stayed with
            the team for two years, Lando is still driving for McLaren in his
            fourth Formula One season.
            <br />
            The 2019 season turned out to end positively for McLaren
            establishing themselves as "Best of the Rest" (P4 in Constructors'
            Championship behind Mercedes, Red Bull and Ferrari). Sainz scored a
            podium, which had not happened since 2014.
          </p>
          <p>
            The 2020 season, ended once more one place higher than the year
            before: scoring 202 points in the shortened season (CoVid-19), they
            placed themselves in P3, ahead of Racing-Point (Ferrari had a
            catastrophic season that ended in P6 with only 131 points). In
            total, they secured two podiums, and held the award for the fastest
            lap in three races, showing that the new McLaren-Renault team was
            competitive again, after years of internal crises.
          </p>
        </div>
        <div class="info card">
          <h2 class="title">Mercedes engines (2021-present)</h2>
          <p>
            Carlos Sainz left the team to Ferrari and was replaced by Daniel
            Ricciardo (Renault) to drive the new MCL35M. The season proved to be
            quite successful for the team with the
            <strong>only 1-2-finish for any team during the season</strong> at
            the Italian Grand Prix at the Autodromo Nazionale di Monza. Despite
            this victory they lost the battle for third place in the
            Constructors' Championship against Ferrari, with Mercedes dominating
            the whole season and Red Bull, who built the car for World Champion
            Max Verstappen, second with a margin of 252 championship points.
          </p>
          <p>
            For 2022, the FIA brought quite a few new regulations,
            <nuxt-link :to="{ path: '/f12022' }"
              >read more about this season</nuxt-link
            >.
          </p>
        </div>
      </div>
    </ShowContentImages>
  </div>
</template>

<script>
import Image from '@/types/Image'

export default defineComponent({
  name: 'History',
  data() {
    return {
      images: [
        new Image({
          url: [
            'https://www.oldracingcars.com/Images/henryford/McLarenM2B-McLaren-Mexico1966-600x300.jpg',
          ],
          description:
            'Bruce McLaren in the McLaren M2B with Indy Ford engine at the MEX GP in 1966. Later, he had to retire the car due to an engine failure.',
          alt: 'Img not loaded',
          uploadDate: new Date(1966, 9, 23),
          displaySource: 'OrdRacingCars (original: Henry Ford)',
          height: 300,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://service.archief.nl/gaf/api/file/v1/render/7dd8ce80-5488-42e5-ab84-b24ae4f558e6',
          ],
          description:
            'Bruce McLaren in the McLaren M2B with Indy Ford engine during training at the NED GP (Zandvoort circuit) in 1966. McLaren was not able start at the GP, later.',
          alt: 'Img not loaded',
          uploadDate: new Date(1966, 6, 22),
          displaySource: 'Erich Koch / Anefo (Nationaalarchief NED)',
          height: 400,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://upload.wikimedia.org/wikipedia/commons/1/11/1971_Peter_Gethin%2C_McLaren.jpg',
          ],
          description:
            'The 1971-1972 M19A McLaren, at the Südkehre (Nürburgring). 1971 German GP (FP)',
          alt: 'Img not loaded',
          uploadDate: new Date(1971, 7, 1),
          displaySource: 'Lothar Spurzem',
          height: 360,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://upload.wikimedia.org/wikipedia/commons/8/8c/Emerson_Fittipaldi_McLaren_M23_1974_Britain.jpg',
          ],
          description:
            'The M23, driven by Fittipaldi at Race of Champions in Brands Hatch, England.',
          alt: 'Img not loaded',
          uploadDate: new Date(1974, 2, 17),
          displaySource: 'Gerald Swan',
          height: 360,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.grandprix247.com/wp-content/uploads/2017/02/311rptv.jpg',
          ],
          description: 'The evolution of McLaren F1 cars over time until 2017.',
          alt: 'Img not loaded',
          uploadDate: new Date(2017, 1, 17),
          displaySource: 'GrandPrix 247',
          height: 430,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.supercars.net/blog/wp-content/uploads/2020/02/Honda-F1-2018-engine-RA618H-1024x576.jpg',
          ],
          description: 'Example: Honda 2018 engine.',
          alt: 'Img not loaded',
          uploadDate: new Date(2020, 1),
          displaySource: 'Supercars.net',
          height: 360,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2022-car-with-2021-liveries/F1_2022_McLaren_3_4_Left..jpg.transform/9col-retina/image.jpg',
          ],
          description: 'A render of the 2022 McLaren Mercedes livery.',
          alt: 'Img not loaded',
          uploadDate: new Date(2021, 6, 16),
          displaySource: 'Formula 1',
          height: 360,
          dataHigherWide: false,
        }),
      ],
    }
  },
})
</script>

<style scoped>
/* Credit Timeline: https://alvarotrigo.com/blog/html-css-timelines/ #4 */
.content-container-history {
  margin: 20px auto;
  padding: 20px;
}

/* Outer Layer with the timeline border */
.outer {
  border-left: 2px solid #333;
}

.info {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px 1.5rem;
}

.title::before {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: white;
  border-radius: 999px;
  left: -1em;
  transform: translate(-1.5px, 0.5rem);
  border: 3px solid var(--dark-orange);
}
</style>
