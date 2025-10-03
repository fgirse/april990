"use client"

import { useRef, useEffect } from "react"

export default function InteractiveSVGPage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Find the path element with id rec15563
    const pathElement = document.getElementById("rec15563")

    if (pathElement && audioRef.current) {
      const handleMouseOver = () => {
        console.log("[v0] Mouse over rec15563, playing audio")
        if (audioRef.current) {
          audioRef.current.currentTime = 0 // Reset to start
          audioRef.current.play().catch((err) => {
            console.error("[v0] Error playing audio:", err)
          })
        }
      }

      const handleMouseOut = () => {
        console.log("[v0] Mouse out rec15563, pausing audio")
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }

      pathElement.addEventListener("mouseover", handleMouseOver)
      pathElement.addEventListener("mouseout", handleMouseOut)

      // Add cursor pointer style
      pathElement.style.cursor = "pointer"

      return () => {
        pathElement.removeEventListener("mouseover", handleMouseOver)
        pathElement.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-foreground">Interaktive Karte</h1>

        <div className="relative w-full flex items-center justify-center">
          {/* SVG Container - The uploaded image should contain the SVG with rec15563 */}
          <div
            className="w-full max-w-4xl"
            dangerouslySetInnerHTML={{
              __html: `
                <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                   Placeholder SVG - Replace with actual SVG content from uploaded image 
                  <rect width="800" height="600" fill="#f0f0f0"/>
                  <path 
                    id="rec15563" 
                    d="M 200 200 L 400 200 L 400 400 L 200 400 Z" 
                    fill="#3b82f6" 
                    stroke="#1e40af" 
                    strokeWidth="2"
                  />
                  <text x="300" y="310" textAnchor="middle" fill="white" fontSize="20">
                    Hover über mich
                  </text>
                </svg>
              `,
            }}
          />
        </div>

        <p className="mt-6 text-center text-muted-foreground">
          Bewegen Sie die Maus über den blauen Bereich, um "Das Badener Lied" abzuspielen
        </p>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="/audio/das-badener-lied.mp3" type="audio/mpeg" />
        <source src="/audio/das-badener-lied.ogg" type="audio/ogg" />
        Ihr Browser unterstützt das Audio-Element nicht.
      </audio>
    </main>
  )
}
