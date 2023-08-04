import styles from './overlay.module.css';
import PropTypes from 'prop-types';

const Overlay = ({ onClose }) => {
    return (
        <div onClick={() => onClose()} className={styles.overlay}></div>
    );
}

Overlay.propTypes = {
    onClose: PropTypes.func
};

export default Overlay;