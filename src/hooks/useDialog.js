import { useEffect } from 'react';

export default function useDialog(ref, open, onClose) {
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
      if (open) document.body.style.overflow = previousOverflow;
    };
  }, [ref, open, onClose]);
}
