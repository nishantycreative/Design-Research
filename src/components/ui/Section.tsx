import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-7 flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-9 bg-brass" />
      <p className="text-[11px] uppercase tracking-[0.32em] text-muted">{children}</p>
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </section>
  );
}
