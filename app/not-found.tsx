import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-16 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-vedixx-primary font-bold tracking-widest uppercase text-sm">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Page Not Found</h1>
        <p className="text-vedixx-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-vedixx-ember text-white px-8 py-3.5 rounded-full font-bold hover:bg-vedixx-emberDeep transition-all shadow-ember-sm hover:shadow-ember"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
