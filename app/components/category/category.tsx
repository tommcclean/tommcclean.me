import './category.css'

export default function Category(props) {
  const {
    title = 'Example Title', 
    description = 'Example Description' 
  } = props;

  return (
    <div className='category'>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
