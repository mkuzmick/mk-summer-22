import styles from './box.module.css'

const Box = ({ color, children }) => {
    return (
        <div style={{ backgroundColor: color }} className={styles.box}>
            {children}
        </div>
    )
}

export default Box