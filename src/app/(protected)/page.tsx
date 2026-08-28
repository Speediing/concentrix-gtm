import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/concentrix-watercolor.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">
                A fleet of agents for every Concentrix team
              </p>
              <h1>The agents that keep client work moving.</h1>
              <p className="hero-intro">
                Grok Bot follows approved calls, inboxes, and project tools in
                the background. The work starts from a signal, not another
                prompt.
              </p>
            </div>
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              Grok Bot gives each team a chief agent and a group of
              specialists. Each agent has a computer, a clear job, and a path
              back to a person.
            </h2>
            <p>These three scenes show where a first pilot could start.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/concentrix-watercolor.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Concentrix x SpaceXAI</p>
          <p>Grok Bot for Concentrix</p>
        </div>
        <address className="footer-contact">
          <p>Concentrix&apos;s Cursor contact</p>
          <strong>Mike Kelly</strong>
          <a href="mailto:michael.kelly@cursor.com">
            michael.kelly@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
