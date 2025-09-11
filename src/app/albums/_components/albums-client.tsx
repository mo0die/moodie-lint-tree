"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Album {
  title: string;
  artist: string;
  year: string;
  genre: string;
  url: string;
  cover: string;
}

interface AlbumsClientProps {
  albums: Album[];
}

export function AlbumsClient({ albums }: AlbumsClientProps) {
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);

  // Group albums by artist
  const artistsWithAlbums = albums.reduce(
    (acc, album) => {
      acc[album.artist] ??= [];
      acc[album.artist]!.push(album);
      return acc;
    },
    {} as Record<string, Album[]>,
  );

  // Sort albums within each artist by year (latest first)
  Object.keys(artistsWithAlbums).forEach((artist) => {
    artistsWithAlbums[artist]?.sort(
      (a, b) => parseInt(b.year) - parseInt(a.year),
    );
  });

  // Sort artists alphabetically by name
  const artists = Object.keys(artistsWithAlbums).sort((a, b) =>
    a.localeCompare(b),
  );

  const toggleArtist = (artist: string) => {
    setExpandedArtist(expandedArtist === artist ? null : artist);
  };

  return (
    <div className="space-y-6">
      {artists.map((artist) => {
        const artistAlbums = artistsWithAlbums[artist];
        const albumCount = artistAlbums?.length ?? 0;
        const isExpanded = expandedArtist === artist;

        return (
          <div key={artist} className="border-4 border-black bg-white">
            {/* Artist Header - Clickable */}
            <button
              onClick={() => toggleArtist(artist)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-black">
                  <span className="text-2xl font-black text-white">
                    {artist.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="mb-2 text-2xl font-black tracking-wide uppercase">
                    {artist}
                  </div>
                  <div className="text-sm font-black tracking-widest uppercase opacity-70">
                    {albumCount} ALBUM{albumCount > 1 ? "S" : ""}
                  </div>
                </div>
              </div>
              {isExpanded ? (
                <ChevronUp className="h-8 w-8" />
              ) : (
                <ChevronDown className="h-8 w-8" />
              )}
            </button>

            {/* Albums Dropdown */}
            {isExpanded && artistAlbums && (
              <div className="border-t-4 border-black bg-white">
                <div className="space-y-4 p-6">
                  {artistAlbums.map((album, index) => (
                    <a
                      key={index}
                      href={album.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border-2 border-black bg-white p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden border-2 border-black bg-white">
                          <Image
                            src={album.cover}
                            alt={`${album.title} album cover`}
                            width={64}
                            height={64}
                            priority={true}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 text-lg font-black tracking-wide uppercase">
                            {album.title}
                          </div>
                          <div className="mb-1 text-sm font-black tracking-wide uppercase">
                            {album.year}
                          </div>
                          <div className="text-xs font-black tracking-widest uppercase opacity-70">
                            {album.genre}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
