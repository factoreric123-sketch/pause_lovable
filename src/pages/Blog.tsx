import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/pause/Footer";
import Navbar from "@/components/pause/Navbar";
import { setCanonical, setSocialMeta } from "@/lib/canonical";

const Blog = () => {
  useEffect(() => {
    setCanonical("/blog");
    setSocialMeta({
      title: "Pause Blog | Screen Time That Actually Holds",
      description: "Practical guides to blocking distracting apps and websites, closing Screen Time loopholes, and making your limits harder to undo.",
      path: "/blog",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <header className="max-w-3xl">
          <p className="section-label">Pause blog</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Make your limits harder to undo.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides for closing Screen Time loopholes and putting real friction between an impulse and an app.
          </p>
        </header>

        <section className="mt-14 border-t border-border pt-10" aria-labelledby="latest-articles">
          <h2 id="latest-articles" className="text-2xl font-bold">Latest</h2>
          <article className="surface-card surface-card-hover mt-6 max-w-3xl p-7 sm:p-9">
            <p className="text-sm font-semibold text-accent">Screen Time</p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              <Link to="/blog/remove-ignore-limit-screen-time" className="transition-colors hover:text-accent">
                How to Remove &quot;Ignore Limit&quot; on Screen Time (And Why It Still Won&apos;t Stop You)
              </Link>
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Close Apple&apos;s most obvious Screen Time escape hatch, check the loopholes that remain, and understand why a passcode you know is not much of a lock.
            </p>
            <Link
              to="/blog/remove-ignore-limit-screen-time"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;