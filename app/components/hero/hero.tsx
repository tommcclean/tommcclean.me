import styles from './hero.module.css'

export default function Hero({ children }) {
  return (
    <div className={styles.hero}>
      <div>
        {children}
      </div>
    </div>
  )
}
