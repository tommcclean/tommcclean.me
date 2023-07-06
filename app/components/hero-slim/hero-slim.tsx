import './hero.css'

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div>
        {children}
      </div>
    </div>
  )
}
