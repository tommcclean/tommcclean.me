import styles from './site-header.module.css'

export default function Category(props) {
  const {
    title = 'Example Title', 
    description = 'Example Description' 
  } = props;

  return (
    <div className={styles.category}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
