import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  label?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}
export function Section({
  id,
  title,
  label,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("section", className)}>
      {(title || label) && (
        <div className="section-heading">
          <div>
            {label && <p className="eyebrow section-label">{label}</p>}
            {title && <h2>{title}</h2>}
          </div>
          {description && <p className="section-description">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
