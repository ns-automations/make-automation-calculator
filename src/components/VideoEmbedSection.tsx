const VIDEO_ID = 'wfURZr7plzs';
const VIDEO_TITLE = 'I Asked ChatGPT to Explain My Zapier Bill — Zapier vs Make.com Cost Compared';

export function VideoEmbedSection() {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="w-full max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        See It Explained in 60 Seconds
      </h2>
      {/* Vertical (9:16) container since this is a YouTube Short —
          constrained width so it doesn't stretch absurdly wide on desktop */}
      <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-black">
        <iframe
          src={embedUrl}
          title={VIDEO_TITLE}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
