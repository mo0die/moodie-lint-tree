import { Footer } from "~/components/footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="mx-auto max-w-2xl px-6 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-black uppercase">
            MII54
          </h1>
          <div className="inline-block bg-black px-6 py-2 text-center text-white">
            <p className="text-sm font-black tracking-widest uppercase">
              COMING SOON
            </p>
          </div>
        </div>

        {/* Hero Card */}
        <div className="neubrutalism-card p-8">
          <p className="text-center text-xl font-black tracking-wide text-black uppercase">
            A better way to share your links.
          </p>
          <a
            href="https://mii54.com/moodie"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-black tracking-widest uppercase hover:opacity-80"
          >
            DEMO
          </a>

          {/* Feature list */}

          {/* CTAs */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/moodie.f22/#"
              target="_blank"
              rel="noopener noreferrer"
              className="neubrutalism-btn flex items-center justify-center gap-2"
            >
              Follow Updates
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
