import { NavLink } from 'react-router-dom';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import { chapters } from '../data/chapters';

export default function Sidebar({ mobile = false, onNavigate, onClose }) {
  return <aside className="sidebar" aria-label="Report sidebar">
    <div className="sidebar-brand"><span className="brand-mark"><BookOpen size={21} strokeWidth={1.5} /></span><div><strong>Engineering report</strong><span>MECN4045 / 2026</span></div>{mobile && <button className="icon-button mobile-close" onClick={onClose} aria-label="Close navigation"><X size={20} /></button>}</div>
    <div className="sidebar-intro"><span className="eyebrow">Contents</span><span>18 chapters</span></div>
    <nav aria-label="Report chapters">{chapters.map((chapter, index) => <div key={chapter.slug}>
      {(index === 0 || chapters[index - 1].group !== chapter.group) && <p className="nav-group">{chapter.group}</p>}
      <NavLink to={chapter.path} end onClick={onNavigate} className={({ isActive }) => `chapter-link ${isActive ? 'active' : ''}`}>
        <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span><span>{chapter.title}</span>
      </NavLink>
    </div>)}</nav>
    <div className="sidebar-footer"><span className="status-dot" /><span>Digital report · First edition</span><ArrowUpRight size={14} /></div>
  </aside>;
}
