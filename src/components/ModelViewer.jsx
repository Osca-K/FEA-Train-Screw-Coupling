import { Box } from 'lucide-react';

// The loading boundary stays separate so the cover never downloads Three.js.
// Add a format-specific loader and Canvas only after the original CAD export is supplied.
export default function ModelViewer() {
  return <div className="model-placeholder" role="note"><Box size={30} strokeWidth={1.3} /><h3>Original 3D model pending</h3>
    <p>The interactive viewer will be connected to the supplied CAD export.</p>
    <code>public/models/</code><p className="muted">Planned formats: GLB / GLTF, STL and OBJ. STEP requires separate conversion.</p>
  </div>;
}
