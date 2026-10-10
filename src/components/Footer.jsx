export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-ink dark:bg-paperSoft text-center">
      <p className="font-mono text-xs text-paper/40 dark:text-ink/40">
        © {new Date().getFullYear()} Pranav Chaudhari
      </p>
    </footer>
  );
}
