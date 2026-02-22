import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8">
          <div className="text-4xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Authentication Error
          </h2>
          <p className="text-white/70">
            Something went wrong during authentication. Please try again.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link
              href="/auth/login"
              className="rounded-xl bg-[#e6c200] px-6 py-2.5 font-medium text-black transition hover:brightness-105"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/20 px-6 py-2.5 text-white transition hover:border-white/40"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
