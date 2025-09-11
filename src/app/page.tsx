import { HydrateClient } from "~/trpc/server";
import { Navigation } from "~/components/navigation";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Footer } from "~/components/footer";
export const dynamic = "force-dynamic";
export default async function Home() {
  //void api.post.getLatest.prefetch();

  const links = [
    {
      title: "INSTAGRAM",
      url: "https://www.instagram.com/moodie.f22/#",
      icon: Instagram,
    },
    {
      title: "CONTACT",
      url: "mailto:moodie.f22@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <HydrateClient>
      <div className="min-h-screen bg-white pb-24">
        <div className="mx-auto max-w-lg px-6 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-black uppercase">
              MOODIE
            </h1>
            <div className="inline-block bg-black px-6 py-2 text-white">
              <p className="text-sm font-black tracking-wide uppercase">
                STUFF ABOUT ME
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-4 border-black bg-white p-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xl font-black tracking-wide uppercase">
                      {link.title}
                    </span>
                  </div>
                  <ArrowUpRight className="h-8 w-8" />
                </a>
              );
            })}
          </div>
          <Footer />
          {/* Footer */}
        </div>
        <Navigation currentPath="/" />
      </div>
    </HydrateClient>
  );
}
