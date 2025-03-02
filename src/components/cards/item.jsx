"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

export function CardItem({
  id,
  componentName,
  techStack,
  videoUrl,
  imageUrl,
  githubUrl,
  livePreviewUrl,
  stats = { stars: 0, forks: 0 },
  creator = { username: "username", isFeatured: false },
}) {
  return (
    <article className="group relative" role="listitem">
      <div
        className="block"
        aria-label={`View ${componentName} component details`}
      >
        <div className="relative rounded-lg overflow-hidden bg-zinc-100">
          <video
            poster={imageUrl}
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          {/* Overlay content that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-white">
            <h3 className="text-lg font-semibold mb-2">{componentName}</h3>
            {techStack && (
              <div className="text-sm bg-white/20 px-2 py-1 rounded mb-4">
                {techStack}
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm" aria-label="Star count">
                  {stats.stars >= 1000
                    ? `${(stats.stars / 1000).toFixed(1)}k`
                    : stats.stars}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm" aria-label="Fork count">
                  {stats.forks}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              {livePreviewUrl && (
                <a
                  href={livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  aria-label="View live preview"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
