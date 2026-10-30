import katex from 'katex';

export default function Equation({ math, inline = false, number, label }) {
  if (!math) return <span className="source-note">Equation pending source verification.</span>;
  let html;
  try {
    html = katex.renderToString(math, { displayMode: !inline, throwOnError: true, trust: false, output: 'htmlAndMathml' });
  } catch {
    return <span className="source-note" role="note">Equation requires manual verification: <code>{math}</code></span>;
  }
  const Tag = inline ? 'span' : 'div';
  return <Tag className={inline ? 'inline-equation' : 'equation'} aria-label={label}>
    <span dangerouslySetInnerHTML={{ __html: html }} />
    {!inline && number != null && <span className="equation-number">({number})</span>}
  </Tag>;
}
