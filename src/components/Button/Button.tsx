import styles from './Button.module.scss'

type buttonType = "button" | "submit" | "reset"

interface ButtonType {
    type: buttonType
    children: string
}

export const Button: React.FC<ButtonType> = ({ type = "button", children }) => {
    return (
        <button type={type} className={styles.btn}>{children}</button>
    )
}