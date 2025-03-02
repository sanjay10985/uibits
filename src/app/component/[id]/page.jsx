"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { componentService } from "@/services/component-service";
import {
  Heart,
  Eye,
  MessageSquare,
  Download,
  Share2,
  Bookmark,
  MoreHorizontal,
  Github,
  ExternalLink,
} from "lucide-react";

export default function ComponentDetail({ params }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [component, setComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const data = await componentService.fetchComponents();
        const found = data.find((c) => c.id === parseInt(params.id));
        setComponent(found);
      } catch (error) {
        console.error("Error fetching component:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComponent();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Component Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The component you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-video overflow-hidden bg-gray-100">
            <video
              poster={component.imageUrl}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            >
              <source src={component.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {component.componentName}
              </h1>
              <div className="flex items-center gap-4">
                <button
                  className={`flex items-center gap-1 ${
                    isLiked ? "text-pink-500" : "text-gray-500"
                  } hover:text-pink-500 transition-colors`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span>{component.stats.stars}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                  <Eye className="w-5 h-5" />
                  <span>{component.stats.forks * 10}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {component.techStack.split(",").map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <a
                  href={component.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
                {component.livePreviewUrl && (
                  <a
                    href={component.livePreviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Preview
                  </a>
                )}
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`${
                    isSaved ? "text-blue-500" : "text-gray-500"
                  } hover:text-blue-500 transition-colors`}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Bookmark
                    className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                  />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t">
              <Image
                src={component.creator.avatarUrl}
                alt={component.creator.username}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">
                  {component.creator.username}
                </h3>
                <span className="text-sm text-gray-500">
                  {component.creator.isFeatured
                    ? "Featured Creator"
                    : "Creator"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
