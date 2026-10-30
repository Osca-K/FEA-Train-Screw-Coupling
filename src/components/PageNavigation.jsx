import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { chapters } from '../data/chapters';

export default function PageNavigation({ index, compact = false }) {
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  return <nav aria-label={compact ? 'Top page navigation' : 'Chapter navigation'} className={compact ? 'compact-navigation' : 'page-navigation'}>
    {previous ? <Link to={previous.path} aria-label={`Previous chapter: ${previous.title}`}><ArrowLeft size={16} />{!compact && <span><small>Previous chapter</small>{previous.title}</span>}</Link> : <span className={compact ? 'nav-disabled' : ''} aria-hidden="true">{compact && <ArrowLeft size={16} />}</span>}
    {compact && <span className="page-count">{String(index + 1).padStart(2, '0')} <span>/ {chapters.length}</span></span>}
    {next ? <Link to={next.path} aria-label={`Next chapter: ${next.title}`}>{!compact && <span><small>Next chapter</small>{next.title}</span>}<ArrowRight size={16} /></Link> : <span className="nav-disabled" aria-hidden="true">{compact && <ArrowRight size={16} />}</span>}
  </nav>;
}
