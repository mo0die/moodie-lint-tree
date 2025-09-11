import { api, HydrateClient } from "~/trpc/server";
import { Navigation } from "~/components/navigation";
import { ExternalLink } from "lucide-react";
import { Footer } from "~/components/footer";
export const dynamic = "force-dynamic";
export default async function SponsorsPage() {
  void api.post.getLatest.prefetch();

  const sponsors = [
    {
      name: "GYM 54",
      description: "PROGRESSIVE OVERLOAD GYM APPLICATION",
      url: "https://www.gym54.com/",
      logo: "54",
    },
    {
      name: "VALLEY MOTORSPORTS",
      description: "AUTO CARPARTS",
      url: "https://stripe.com",
      logo: "VMS",
    },
  ];

  return (
    <HydrateClient>
      <div className="min-h-screen bg-white pb-24">
        <div className="mx-auto max-w-lg px-6 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-black uppercase">
              SOFTWARE
            </h1>
            <div className="inline-block bg-black px-6 py-2 text-white">
              <p className="text-sm font-black tracking-wide uppercase">
                SOFTWARE THAT I HAVE CREATED OR CONTRIBUTED TO
              </p>
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="space-y-6">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-4 border-black bg-white p-6"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white text-2xl font-black">
                    {sponsor.logo}
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-black tracking-wide uppercase">
                      {sponsor.name}
                    </div>
                    <div className="text-xs font-black tracking-widest uppercase opacity-70">
                      {sponsor.description}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
        <Navigation currentPath="/software" />
        <Footer />
      </div>
    </HydrateClient>
  );
}
