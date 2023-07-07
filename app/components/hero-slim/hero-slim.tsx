import styles from './hero-slim.module.css'

export default function Hero({ children }) {
  return (
    <div className={styles.hero}>
      <div>
        {children}
      </div>
    </div>
  )
}
