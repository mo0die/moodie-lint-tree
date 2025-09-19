import { api, HydrateClient } from "~/trpc/server";
import { Navigation } from "~/components/navigation";
import { Footer } from "~/components/footer";
import { AlbumsClient } from "../../../components/albums-client";
import { ImagePreloader } from "~/components/image-preloader";
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
      cover: "/albums/honsetly_nevermind.rgb.jpg",
    },
    {
      title: "CERTIFIED LOVER BOY",
      artist: "DRAKE",
      year: "2021",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/certified-lover-boy/1440839718",
      cover: "/albums/certified_lover_boy.jpg",
    },
    {
      title: "VIEWS",
      artist: "DRAKE",
      year: "2016",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/views/1440841363",
      cover: "/albums/views.jpg",
    },
    {
      title: "IF YOU'RE READING THIS IT'S TOO LATE",
      artist: "DRAKE",
      year: "2015",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/if-youre-reading-this-its-too-late/1440839718",
      cover: "/albums/if_your_reading_this_its_too_late.jpg",
    },
    {
      title: "BLONDE",
      artist: "FRANK OCEAN",
      year: "2016",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/blonde/1146195596",
      cover: "/albums/blond.jpeg",
    },
    {
      title: "CHANNEL ORANGE",
      artist: "FRANK OCEAN",
      year: "2012",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/channel-orange/1440765580",
      cover: "/albums/channel_orange.jpg",
    },
    {
      title: "UTOPIA",
      artist: "TRAVIS SCOTT",
      year: "2023",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/astroworld/1421241217",
      cover: "/albums/utopia.jpg",
    },
    {
      title: "ASTROWORLD",
      artist: "TRAVIS SCOTT",
      year: "2018",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/astroworld/1421241217",
      cover: "/albums/astroworld.jpg",
    },
    {
      title: "BIRDS IN THE TRAP SING MCKNIGHT",
      artist: "TRAVIS SCOTT",
      year: "2016",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/birds-in-the-trap-sing-mcknight/1150135681",
      cover: "/albums/birds_in_the_trap_sing_mcknight.jpg",
    },
    {
      title: "RODEO",
      artist: "TRAVIS SCOTT",
      year: "2015",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/rodeo/1456176981",
      cover: "/albums/rodeo.jpg",
    },
    {
      title: "DAYS BEFORE RODEO",
      artist: "TRAVIS SCOTT",
      year: "2014",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/days-before-rodeo/1763919907",
      cover: "/albums/days_before_rodeo.jpg",
    },
    {
      title: "AFTERHOURS",
      artist: "THE WEEKEND",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/after-hours/1499378108",
      cover: "/albums/after_hours.jpg",
    },

    {
      title: "STARBOY",
      artist: "THE WEEKEND",
      year: "2016",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/starboy/1440871397",
      cover: "/albums/starboy.jpeg",
    },

    {
      title: "KISS LAND",
      artist: "THE WEEKEND",
      year: "2013",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/kiss-land/1422667786",
      cover: "/albums/kiss_land.jpg",
    },
    {
      title: "DAMN.",
      artist: "KENDRICK LAMAR",
      year: "2017",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/humble/1440881047?i=1440881684",
      cover: "/albums/damn.jpg",
    },
    {
      title: "Mr.Morale & The Big Steppers",
      artist: "KENDRICK LAMAR",
      year: "2022",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/mr-morale-the-big-steppers/1623854804",
      cover: "/albums/mr_morale_and_the_big_steppers.jpg",
    },
    {
      title: "Chasing Summer",
      artist: "SiR",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/chasing-summer/1710287981",
      cover: "/albums/chasing_summer.jpg",
    },
    {
      title: "Pray For Paris",
      artist: "Westside Gunn",
      year: "2020",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/pray-for-paris/1506521703",
      cover: "/albums/pray_for_paris.jpg",
    },
    {
      title: "And Then You Pray For Me",
      artist: "Westside Gunn",
      year: "2023",
      genre: "HIP HOP",
      url: "https://music.apple.com/ca/album/and-then-you-pray-for-me/1708507240",
      cover: "/albums/and_then_you_pray_for_me.jpg",
    },
    {
      title: "Don't Forget About Me, Demos",
      artist: "Dominic Fike",
      year: "2018",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/dont-forget-about-me-demos/1494065882",
      cover: "/albums/dont_forget_about_me_demos.jpg",
    },
    {
      title: "What Could Possible Go Wrong",
      artist: "Dominic Fike",
      year: "2019",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/what-could-possibly-go-wrong/1521345121",
      cover: "/albums/what_could_possibly_go_wrong.jpg",
    },
    {
      title: "Sunburn",
      artist: "Dominic Fike",
      year: "2020",
      genre: "Alternative",
      url: "https://music.apple.com/ca/album/sunburn/1694067269",
      cover: "/albums/sunburn.jpg",
    },
    {
      title: "Lost & Found",
      artist: "Jorja Smith",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/lost-found/1373567754",
      cover: "/albums/lost_and_found.jpg",
    },
    {
      title: "Falling or Flying",
      artist: "Jorja Smith",
      year: "2023",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/falling-or-flying-deluxe/1773360702",
      cover: "/albums/falling_or_flying.jpg",
    },
    {
      title: "Chapter One",
      artist: "Sinead Harnett",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/chapter-one/1657467637",
      cover: "/albums/chapter_one.jpg",
    },
    {
      title: "Isolation",
      artist: "Kali Uchis",
      year: "2018",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/isolation/1358285249",
      cover: "/albums/isolation.jpg",
    },
    {
      title: "Sin Miedo (del Amor y Otros Demonios)∞",
      artist: "Kali Uchis",
      year: "2020",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/sin-miedo-del-amor-y-otros-demonios-deluxe-version/1589222331",
      cover: "/albums/sin_miedo_del_amor_y_otros_demonios.jpg",
    },
    {
      title: "Igor",
      artist: "Tyler, The Creator",
      year: "2019",
      genre: "R&B",
      url: "https://music.apple.com/ca/album/igor/1463409338",
      cover: "/albums/igor.jpg",
    },
  ];

  return (
    <HydrateClient>
      {/* Silent background image preloader */}
      <ImagePreloader images={albums.map((album) => album.cover)} />

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
