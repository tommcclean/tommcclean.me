import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Not there for some reason</p>
      <p>
        View <Link href="/">Go home</Link>
      </p>
    </div>
  )
}