import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const contentEl = document.getElementById('content');

  useEffect(() => {
    if (contentEl) contentEl.scrollTop = 0;
  }, [pathname, contentEl]);

  return null;
}
