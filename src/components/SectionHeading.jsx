export default function SectionHeading({ eyebrow, children, description }) {
  return <header className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{children}</h1>{description && <p>{description}</p>}</header>;
}
