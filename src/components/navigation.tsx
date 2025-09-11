import Link from "next/link";
import { Home, Users, Heart, Briefcase } from "lucide-react";

interface NavigationProps {
  currentPath: string;
}

export function Navigation({ currentPath }: NavigationProps) {
  const tabs = [
    { href: "/", label: "HOME", icon: Home },
    { href: "/software", label: "SOFTWARE", icon: Briefcase },
    { href: "/sponsors", label: "SPONSORS", icon: Users },
    { href: "/albums", label: "ALBUMS", icon: Heart },
  ];

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 flex justify-center p-4">
      <div className="flex border-4 border-black backdrop-blur-sm">
        {tabs.map((tab, _) => {
          const IconComponent = tab.icon;
          const isActive = currentPath === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-3 border-r-4 border-black px-6 py-4 text-sm font-black tracking-wide uppercase last:border-r-0 ${
                isActive ? "bg-black text-white" : "text-black"
              }`}
            >
              <IconComponent className="h-5 w-5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
