import { Link } from 'react-router-dom';
import { FileClock, ArrowLeft } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PageNavigation from '../components/PageNavigation';

export default function ChapterPlaceholder({ chapter }) {
  return <article className="chapter-page page-enter"><SectionHeading eyebrow={chapter ? `Chapter ${String(chapter.index + 1).padStart(2, '0')} / 18` : '404'}>{chapter?.title || 'Page not found'}</SectionHeading>
    <div className="chapter-empty"><FileClock size={34} strokeWidth={1.2} /><h2>{chapter ? 'Chapter awaiting source content' : 'This page could not be found'}</h2><p>{chapter ? 'This chapter is reserved for the original report. Its content will be added after the cover page is approved and the PowerPoint is supplied.' : 'Return to the cover to explore the report.'}</p>{chapter && <code>Source: Assignment_1863498.pptx</code>}<Link className="text-link" to="/"><ArrowLeft size={16} /> Return to cover</Link></div>
    {chapter && <PageNavigation index={chapter.index} />}
  </article>;
}
