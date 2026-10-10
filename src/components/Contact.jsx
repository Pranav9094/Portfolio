const contact = {
  email: "pranavchoudhari94@gmail.com",
  phone: "+91 751 757 9020",
  github: "https://github.com/Pranav9094",
  linkedin: "https://linkedin.com/in/pranav9094",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-28 bg-ink dark:bg-paperSoft transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper dark:text-ink">
          Let's build something.
        </h2>
        <p className="mt-4 text-paper/70 dark:text-ink/70 max-w-md mx-auto">
          Open to freelance work, e-commerce builds, and hackathon teams.
          Reach out directly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-lg text-paper dark:text-ink hover:text-signal transition-colors"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="font-mono text-sm text-paper/60 dark:text-ink/60 hover:text-signal transition-colors"
          >
            {contact.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-paper/70 dark:text-ink/70 hover:text-signal transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-paper/70 dark:text-ink/70 hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
