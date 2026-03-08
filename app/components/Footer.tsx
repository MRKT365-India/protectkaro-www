import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-navy-border py-8 px-6 text-center text-sm text-slate-500">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
        <span>© 2026 MRKT365 R&D India Pvt Ltd</span>
        <span className="text-navy-border">·</span>
        <Link href="/privacy" className="hover:text-slate-300 transition-colors no-underline">Privacy Policy</Link>
        <span className="text-navy-border">·</span>
        <Link href="/terms" className="hover:text-slate-300 transition-colors no-underline">Terms</Link>
        <span className="text-navy-border">·</span>
        <a href="mailto:kashif@mrkt365.co.in" className="hover:text-slate-300 transition-colors no-underline">Support</a>
      </div>
    </footer>
  );
}
