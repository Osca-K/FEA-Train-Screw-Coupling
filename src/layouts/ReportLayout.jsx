import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { chapters } from '../data/chapters';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import useDialog from '../hooks/useDialog';

export default function ReportLayout() {
  const { pathname } = useLocation();
  const chapter = chapters.find(item => item.path === pathname) || { title: 'Page not found', index: 0 };
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 900px)').matches);
  const [progress, setProgress] = useState(0);
  const dialog = useRef(null);
  const close = useCallback(() => setMobileOpen(false), []);
  useDialog(dialog, mobileOpen, close);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    const update = () => { setIsMobile(media.matches); if (!media.matches) close(); };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [close]);
  useEffect(() => {
    document.title = `${chapter.title} | Train Screw Coupling`;
    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus({ preventScroll: true });
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, window.scrollY / distance) : 1);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname, chapter.title]);
  const toggle = () => window.matchMedia('(max-width: 900px)').matches ? setMobileOpen(value => !value) : setCollapsed(value => !value);
  return <div className={`report-layout ${collapsed ? 'sidebar-collapsed' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to report</a>
    <div id="report-sidebar" className="desktop-sidebar"><Sidebar /></div>
    <dialog id="mobile-report-sidebar" ref={dialog} className="mobile-drawer" aria-label="Report navigation" onClick={event => { if (event.target === dialog.current) close(); }}><Sidebar mobile onNavigate={close} onClose={close} /></dialog>
    <div className="report-main"><TopNavigation chapter={chapter} onToggle={toggle} expanded={isMobile ? mobileOpen : !collapsed} controls={isMobile ? 'mobile-report-sidebar' : 'report-sidebar'} />
      <div className="reading-track" role="progressbar" aria-label="Current chapter reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}><span style={{ width: `${progress * 100}%` }} /></div>
      <main id="main-content" tabIndex={-1} key={pathname}><Outlet /></main>
      <footer className="report-footer"><span>University of the Witwatersrand</span><span>MECN4045 <span className="footer-dot">·</span> Solid Mechanics II <span className="footer-dot">·</span> 2026</span></footer>
    </div>
  </div>;
}
