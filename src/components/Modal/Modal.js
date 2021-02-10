import React, { useRef, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const backdropRef = useRef(null);

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  const handleBackdropClick = e => {
    if (backdropRef.current && e.target !== backdropRef.current) return;
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.Overlay}
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div className={styles.Modal}>
        <button type="button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
