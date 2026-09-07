export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-12">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
          Presskit Factory
        </div>
        <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
          Press kit introuvable
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-lg">
          Aucun client ne correspond au domaine ou au slug demandé. Vérifie le
          domaine custom configuré sur Vercel, ou utilise le switcher local
          pour charger un client connu.
        </p>
      </div>
    </main>
  );
}
