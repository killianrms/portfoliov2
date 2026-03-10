import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="relative mb-6 inline-block">
          <span className="text-[8rem] md:text-[12rem] font-serif font-bold gradient-text leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3">
          Page introuvable
        </h1>
        <p className="text-muted mb-2">This page doesn&apos;t exist or has been moved.</p>
        <p className="text-muted mb-10 text-sm">Cette page n&apos;existe pas ou a été déplacée.</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
