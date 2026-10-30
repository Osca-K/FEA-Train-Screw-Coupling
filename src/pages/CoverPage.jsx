import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import EngineeringFigure from '../components/EngineeringFigure';

export default function CoverPage() {
  return <article className="cover-page page-enter">
    <div className="cover-kicker"><span className="eyebrow"><span className="tiny-line" /> Finite Element Analysis</span><span className="edition">Engineering case study / 2026</span></div>
    <div className="cover-heading"><p className="cover-overline">MECN4045 — Solid Mechanics II</p><h1>Train Screw<br /><span>Coupling.</span></h1><div className="cover-summary"><span className="summary-rule" /><p>A digital engineering report<br />by Osca Kholopha.</p></div></div>
    <div className="cover-figure-header"><span className="eyebrow">The assembly</span><span>CAD illustration <span className="muted">/ Original source</span></span></div>
    <EngineeringFigure src="/images/cover/cover-coupling.png" description="Original train screw coupling CAD illustration" placeholderTitle="Awaiting original CAD illustration" className="cover-figure" />
    <div className="cover-meta"><div><span className="meta-label">Prepared by</span><strong>Osca Kholopha</strong></div><div><span className="meta-label">Institution</span><strong>University of the Witwatersrand</strong></div><div><span className="meta-label">Academic year</span><strong>2026</strong></div><div className="meta-icon"><GraduationCap size={27} strokeWidth={1.3} /></div></div>
    <section className="cover-introduction" aria-labelledby="about-report"><div><span className="eyebrow">About this report</span><h2 id="about-report">An engineering study,<br />in a digital format.</h2></div><div><p>This digital report presents <em>Finite Element Analysis — Train Screw Coupling</em>, prepared by Osca Kholopha for MECN4045 — Solid Mechanics II at the University of the Witwatersrand, 2026.</p><p className="source-note"><BookOpen size={15} /> Technical introduction pending verification against the original PowerPoint.</p><Link className="primary-button" to="/report/ai-declaration">Explore Report <ArrowRight size={17} /></Link><span className="next-caption">Up next: AI Declaration</span></div></section>
    <div className="cover-end"><span>Finite Element Analysis — Train Screw Coupling</span><span>Cover <span className="muted">/ 01</span></span></div>
  </article>;
}
