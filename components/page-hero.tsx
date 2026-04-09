type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 animate-fade-up">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-slate-600">{description}</p>
    </section>
  );
}
