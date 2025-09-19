import { HydrateClient } from "~/trpc/server";
import { Navigation } from "~/components/navigation";
import { Instagram, Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import { Footer } from "~/components/footer";
import { TikTokIcon } from "src/components/icons/tiktok-icon";
import { PalestineIcon } from "src/components/icons/palastine-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
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
      title: "TIKTOK",
      url: "https://x.com/moodie_f22",
      icon: TikTokIcon,
    },
    {
      title: "CONTACT",
      url: "mailto:moodie.f22@gmail.com",
      icon: Mail,
    },
  ];

  const palestineLinks = [
    {
      title: "Decolonize Palestine",
      url: "https://decolonizepalestine.com/",
    },
    {
      title: "BDS",
      url: "https://bdsmovement.net/",
    },
    {
      title: "Food For Palestine",
      url: "https://www.unrwa.org/giveforfood",
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between border-4 border-black bg-white p-6 transition-colors hover:bg-gray-50">
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-white">
                    <PalestineIcon className="h-full w-full" />
                  </div>
                  <span className="text-xl font-black tracking-wide uppercase">
                    PALESTINE SUPPORT
                  </span>
                </div>
                <ChevronDown className="h-8 w-8" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-80 border-4 border-black bg-white shadow-lg"
              align="center"
            >
              {palestineLinks.map((link, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center justify-between border-b-2 border-gray-200 p-4 last:border-b-0 hover:bg-gray-100"
                  >
                    <span className="text-sm font-bold tracking-wide uppercase">
                      {link.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <br />
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

            {/* Palestine Links Dropdown */}
          </div>
          <Footer />
          {/* Footer */}
        </div>
        <Navigation currentPath="/" />
      </div>
    </HydrateClient>
  );
}
