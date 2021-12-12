import PropTypes from "prop-types";
import cn from 'classnames';
import styles from './UIInput.module.css'
import '../index.css'
import imageCross from './img/cross.svg'

const UIInput = ({
                     type,
                     value,
                     handleInputChange,
                     placeholder,
                     classes
                 }
) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            type={type}
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img
            src={imageCross}
            onClick={() => value && handleInputChange('')}
            className={cn(styles.clear, !value && styles.clear__disabled)}
            alt="Clear"/>
    </div>
)

UIInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UIInput
