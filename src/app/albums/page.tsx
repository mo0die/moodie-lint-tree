import { api, HydrateClient } from "~/trpc/server";
import { Navigation } from "~/components/navigation";
import { Footer } from "~/components/footer";
import { AlbumsClient } from "./_components/albums-client";
export const dynamic = "force-dynamic";

export default async function AlbumsPage() {
  void api.post.getLatest.prefetch();

  const albums = [
    {
      title: "HONESTLY, NEVERMIND",
      artist: "DRAKE",
      year: "2022",
      genre: "ELECTRONIC",
      url: "https://music.apple.com/ca/album/honestly-nevermind/1630230040",
      cover:
        "https://a1.mzstatic.com/r40/Music122/v4/84/2c/b4/842cb419-243c-b3f4-4da9-b6b980996062/22UMGIM67371.rgb.jpg",
    },
    {
      title: "CERTIFIED LOVER BOY",
      artist: "DRAKE",
      year: "2021",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/certified-lover-boy/1440839718",
      cover:
        "https://a1.mzstatic.com/r40/Music115/v4/11/36/38/1136384a-eebc-697a-c005-d890e41c0854/21UM1IM07518.rgb.jpg",
    },
    {
      title: "VIEWS",
      artist: "DRAKE",
      year: "2016",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/views/1440841363",
      cover:
        "https://a1.mzstatic.com/r40/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg",
    },
    {
      title: "IF YOU'RE READING THIS IT'S TOO LATE",
      artist: "DRAKE",
      year: "2015",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/if-youre-reading-this-its-too-late/1440839718",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg",
    },
    {
      title: "BLONDE",
      artist: "FRANK OCEAN",
      year: "2016",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/blonde/1146195596",
      cover: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    },
    {
      title: "CHANNEL ORANGE",
      artist: "FRANK OCEAN",
      year: "2012",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/channel-orange/1440765580",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/04/f8/63/04f863fc-2852-604f-c910-a97ac069506b/12UMGIM40339.rgb.jpg",
    },
    {
      title: "UTOPIA",
      artist: "TRAVIS SCOTT",
      year: "2023",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/astroworld/1421241217",
      cover:
        "https://a1.mzstatic.com/r40/Music126/v4/09/7d/b0/097db06f-8403-3cf7-7510-139e570ca66b/196871341882.jpg",
    },
    {
      title: "ASTROWORLD",
      artist: "TRAVIS SCOTT",
      year: "2018",
      genre: "HIP HOP",
      url: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/30/66/90/306690d4-2a29-402e-e406-6b319ce7731a/886447227169.jpg",
    },
    {
      title: "BIRDS IN THE TRAP SING MCKNIGHT",
      artist: "TRAVIS SCOTT",
      year: "2016",
      genre: "HIP HOP",
      url: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/50/f7/a3/50f7a39d-3bd5-28e9-0264-532f08b5b810/886446074726.jpg",
    },
    {
      title: "RODEO",
      artist: "TRAVIS SCOTT",
      year: "2015",
      genre: "HIP HOP",
      url: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA",
      cover:
        "https://dn721606.ca.archive.org/0/items/mbid-114356f9-333f-45f3-898d-00106f3aee45/mbid-114356f9-333f-45f3-898d-00106f3aee45-27189365965.jpg",
    },
    {
      title: "DAYS BEFORE RODEO",
      artist: "TRAVIS SCOTT",
      year: "2014",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/days-before-rodeo/1763919907",
      cover:
        "https://a1.mzstatic.com/r40/Music211/v4/30/98/ed/3098ed0e-537d-4230-d893-2e7218a3bdf1/196871381420.jpg",
    },
    {
      title: "AFTERHOURS",
      artist: "THE WEEKEND",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/after-hours/1499378108",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg",
    },

    {
      title: "STARBOY",
      artist: "THE WEEKEND",
      year: "2016",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/starboy/1440871397",
      cover:
        "https://a1.mzstatic.com/r40/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg",
    },

    {
      title: "KISS LAND",
      artist: "THE WEEKEND",
      year: "2013",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/kiss-land/1422667786",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/f1/7f/7a/f17f7a98-1e96-b29d-2916-df7fcf63f34e/13UAAIM69533.rgb.jpg",
    },
    {
      title: "DAMN.",
      artist: "KENDRICK LAMAR",
      year: "2017",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/humble/1440881047?i=1440881684",
      cover:
        "https://a1.mzstatic.com/r40/Music112/v4/86/c9/bb/86c9bb30-fe3d-442e-33c1-c106c4d23705/17UMGIM88776.rgb.jpg",
    },
    {
      title: "Mr.Morale & The Big Steppers",
      artist: "KENDRICK LAMAR",
      year: "2022",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/mr-morale-the-big-steppers/1623854804",
      cover:
        "https://a1.mzstatic.com/r40/Music116/v4/72/a1/a9/72a1a9a0-6c42-a37f-aad4-7e8772365c6d/22UMGIM52376.rgb.jpg",
    },
    {
      title: "Chasing Summer",
      artist: "SiR",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/chasing-summer/1710287981",
      cover:
        "https://a1.mzstatic.com/r40/Music116/v4/47/51/f3/4751f36c-4ee9-22b4-ef17-8eb9a017c021/886447892329_cover.jpg",
    },
    {
      title: "Pray For Paris",
      artist: "Westside Gunn",
      year: "2020",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/pray-for-paris/1506521703",
      cover:
        "https://a1.mzstatic.com/r40/Music115/v4/8f/bf/b2/8fbfb2d9-6ef2-951a-c6cd-26495e9c23e1/dj.vbothjgo.jpg",
    },
    {
      title: "And Then You Pray For Me",
      artist: "Westside Gunn",
      year: "2023",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/and-then-you-pray-for-me/1708507240",
      cover:
        "https://a1.mzstatic.com/r40/Music116/v4/48/e9/55/48e95597-83a1-5a71-d94b-acf0a9898513/197342191937_cover.jpg",
    },
    {
      title: "Don't Forget About Me, Demos",
      artist: "Dominic Fike",
      year: "2018",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/dont-forget-about-me-demos/1494065882",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/2d/37/18/2d3718e9-8620-b603-d3cc-f34ce817070d/886447290170.jpg",
    },
    {
      title: "What Could Possible Go Wrong",
      artist: "Dominic Fike",
      year: "2019",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/what-could-possibly-go-wrong/1521345121",
      cover:
        "https://a1.mzstatic.com/r40/Music123/v4/a5/2c/6c/a52c6c69-64cb-15a3-a81d-e30e3720f70b/886448586340.jpg",
    },
    {
      title: "Sunburn",
      artist: "Dominic Fike",
      year: "2020",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/sunburn/1694067269",
      cover:
        "https://a1.mzstatic.com/r40/Music126/v4/e4/4b/ff/e44bff2a-709b-35a7-9071-44a44753fb52/196871265683.jpg",
    },
    {
      title: "Lost & Found",
      artist: "Jorja Smith",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/lost-found/1373567754",
      cover:
        "https://a1.mzstatic.com/r40/Music118/v4/9f/da/5d/9fda5dfb-8be4-e656-6fb3-a83cc9dbd60a/192562402849.jpg",
    },
    {
      title: "Falling or Flying",
      artist: "Jorja Smith",
      year: "2023",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/falling-or-flying-deluxe/1773360702",
      cover:
        "https://a1.mzstatic.com/r40/Music116/v4/67/04/be/6704be3f-90ef-267b-c677-29f78c3f36ea/197188272494.jpg",
    },
    {
      title: "Chapter One",
      artist: "Sinead Harnett",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/chapter-one/1657467637",
      cover:
        "https://a1.mzstatic.com/r40/Music122/v4/79/27/b1/7927b1ad-2636-0ab4-0cc6-d80c926efc12/cover.jpg",
    },
    {
      title: "Isolation",
      artist: "Kali Uchis",
      year: "2018",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/isolation/1358285249",
      cover:
        "https://a1.mzstatic.com/r40/Music126/v4/de/e1/8b/dee18be4-276a-1e90-7aec-883c91a5a43e/17UM1IM08185.rgb.jpg",
    },
    {
      title: "Sin Miedo (del Amor y Otros Demonios)∞",
      artist: "Kali Uchis",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/sin-miedo-del-amor-y-otros-demonios-deluxe-version/1589222331",
      cover:
        "https://a1.mzstatic.com/r40/Music115/v4/c2/21/4a/c2214a0a-1355-770e-eef2-7b872f433e02/20UMGIM71274.rgb.jpg",
    },
    {
      title: "Igor",
      artist: "Tyler, The Creator",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/igor/1463409338",
      cover:
        "https://a1.mzstatic.com/r40/Music125/v4/0c/06/05/0c060581-6242-6a2a-a677-20170f2cf8da/886447710180.jpg",
    },
  ];

  return (
    <HydrateClient>
      <div className="min-h-screen bg-white pb-24">
        <div className="mx-auto max-w-lg px-8 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-black uppercase">
              FAVORITE ALBUMS
            </h1>
            <div className="inline-block bg-black px-6 py-2 text-white">
              <p className="text-sm font-black tracking-wide uppercase">
                LISTEN TO ALBUMS NOT PLAYLISTS
              </p>
            </div>
          </div>

          <AlbumsClient albums={albums} />

          {/* Footer */}
          <Footer />
        </div>
        <Navigation currentPath="/albums" />
      </div>
    </HydrateClient>
  );
}
