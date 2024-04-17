import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import styles from './Modal.module.scss';
import { Close } from '../../assets/icons';

const Modal = ({ onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          <Close />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
