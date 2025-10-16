"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Track {
  isPlaying: boolean;
  name?: string;
  artist?: string;
  album?: string;
  image?: string;
  url?: string;
}

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch("/api/now-playing");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res}`);
        }

        const data = await res.json();
        setTrack(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch track:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    // Poll every 10 seconds for faster updates
    const interval = setInterval(fetchTrack, 10000);

    return () => clearInterval(interval);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
        <span>Loading music...</span>
      </div>
    );
  }

  // Error state - silent fail
  if (error) {
    return null;
  }

  // Not playing state
  if (!track?.isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm"
      >
        <svg
          className="w-4 h-4 opacity-60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <span className="font-medium">Not listening to anything</span>
      </motion.div>
    );
  }

  // Playing state - compact and subtle design
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center gap-3 bg-[var(--bg-card)]/50 backdrop-blur-sm border border-[var(--border-primary)] rounded-full pl-1 pr-4 py-1 hover:border-[var(--border-accent)] transition-all duration-300 group"
      >
        {/* Compact Spinning Album Cover */}
        <div className="relative flex-shrink-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--border-accent)] shadow-md"
          >
            <img
              src={track.image}
              alt={track.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Small pulsing indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--bg-card)]"
          />
        </div>

        {/* Compact Track Info */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Equalizer bars */}
          <div className="flex items-center gap-0.5">
            <motion.div
              animate={{ height: ["8px", "14px", "8px"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-0.5 bg-[var(--gradient-start)] rounded-full"
            />
            <motion.div
              animate={{ height: ["12px", "6px", "12px"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-0.5 bg-[var(--gradient-start)] rounded-full"
            />
            <motion.div
              animate={{ height: ["6px", "12px", "6px"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="w-0.5 bg-[var(--gradient-start)] rounded-full"
            />
          </div>

          <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 min-w-0"
          >
            <div className="min-w-0">
              <p className="text-[var(--text-primary)] font-medium text-sm truncate max-w-[200px] group-hover:text-[var(--text-accent)] transition-colors duration-300">
                {track.name}
              </p>
              <p className="text-[var(--text-muted)] text-xs truncate max-w-[200px]">
                {track.artist}
              </p>
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
