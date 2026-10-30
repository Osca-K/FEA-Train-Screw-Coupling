import { PanelLeft } from 'lucide-react';
import PageNavigation from './PageNavigation';

export default function TopNavigation({ chapter, onToggle, expanded, controls }) {
  return <header className="topbar">
    <div className="topbar-title"><button className="icon-button" onClick={onToggle} aria-label="Toggle report navigation" aria-expanded={expanded} aria-controls={controls}><PanelLeft size={19} /></button><span className="project-name">Train Screw Coupling</span><span className="breadcrumb-divider">/</span><span className="current-chapter">{chapter.title}</span></div>
    <PageNavigation index={chapter.index} compact />
  </header>;
}
