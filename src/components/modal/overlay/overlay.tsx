import { TModalOverlay } from '../../../types/modal';
import styles from './overlay.module.css';
import { FC } from 'react';

const Overlay: FC<TModalOverlay> = ({ onClose }) => {
    return (
        <div onClick={() => onClose()} className={styles.overlay}></div>
    );
}

export default Overlay;