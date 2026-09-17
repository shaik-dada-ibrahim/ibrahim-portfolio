import Section from "@/components/Section";
import { publications, site } from "@/lib/data";

export const metadata = {
  title: "About — Ibrahim.dev"
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Section title="About Me">
        <div className="card p-6 space-y-4">
          <p>
            I’m a Business Analyst at WyzMindZ Solutions (Suryojasvi Group), working across service delivery
            operations, data analytics, and automation on the AUTOSherpa automotive dealership CRM platform.
            I lead a team of Business Analysts and spend a lot of my time building internal tooling that takes
            manual, repetitive work off people’s plates.
          </p>
          <p>
            Lately that means workflow automation with n8n and agentic AI — end-to-end pipelines where an AI
            agent drafts content or a workflow chases down invoices and sends reminders, with no human in the
            loop for the routine parts. I pair that with solid Python, Next.js, and Git fundamentals, and I’m
            currently based in {site.location}.
          </p>
        </div>
      </Section>

      <Section title="Publications">
        <div className="grid gap-4">
          {publications.map((p) => (
            <div className="card p-5" key={p.title}>
              <h3 className="text-lg">{p.title}</h3>
              <p className="opacity-80">{p.venue}</p>
              <p className="opacity-90 mt-2">{p.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
