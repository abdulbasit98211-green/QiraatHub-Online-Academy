import { OrnamentDivider } from "./IslamicPattern";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  ornament?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
  ornament = false,
  light = false,
}: Props) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-gold-300" : ""} ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold sm:text-[2.6rem] sm:leading-[1.1] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {ornament && <OrnamentDivider className={center ? "mt-5" : "mt-5 justify-start"} />}
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-navy-900/65"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
