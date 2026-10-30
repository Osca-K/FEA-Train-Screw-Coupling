import { useCallback, useRef, useState } from 'react';
import { Image, Maximize2, X } from 'lucide-react';
import useDialog from '../hooks/useDialog';

export default function EngineeringFigure({ src, number, caption, description, placeholderTitle = 'Awaiting original engineering image', className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef(null);
  const close = useCallback(() => setExpanded(false), []);
  useDialog(dialog, expanded, close);
  const missing = !src || failedSrc === src;
  return <figure className={`engineering-figure ${className}`}>
    <div className="figure-stage">
      {!missing ? <button className="image-button" onClick={() => setExpanded(true)} aria-label={`Enlarge ${caption || description || 'engineering figure'}`}>
        <img src={src} alt={description || caption || 'Engineering figure'} onError={() => setFailedSrc(src)} />
        <span className="enlarge"><Maximize2 size={15} /> Enlarge</span>
      </button> : <div className="figure-placeholder">
        <span className="placeholder-icon"><Image size={28} strokeWidth={1.2} /></span>
        <span className="eyebrow">Engineering illustration</span>
        <strong>{placeholderTitle}</strong>
        <span className="placeholder-copy">The original image will appear here when supplied.</span>
        <code>{src || 'Image path not supplied'}</code>
      </div>}
      <span className="stage-label">{missing ? 'IMAGE PENDING' : 'ORIGINAL ILLUSTRATION'}</span>
    </div>
    {(number || caption) && <figcaption>{number && <span>Figure {number}. </span>}{caption}</figcaption>}
    <dialog ref={dialog} className="figure-dialog" aria-label={caption || 'Enlarged engineering figure'} onClick={event => { if (event.target === dialog.current) close(); }}>
      <button className="icon-button dialog-close" onClick={close} aria-label="Close enlarged image"><X /></button>
      {expanded && !missing && <img src={src} alt={description || caption || 'Engineering figure'} />}
      {caption && <p>{caption}</p>}
    </dialog>
  </figure>;
}
