import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
  tone = "dark",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2
        className={cn(
          "max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          tone === "light" && "text-ivory"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-xl text-lg leading-relaxed",
            tone === "light" ? "text-ivory/75" : "text-ink-soft",
            centered && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
