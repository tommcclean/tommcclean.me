
import Hero from '../components/hero/hero'
import Category from '../components/category/category'

export default function Home() {
  return (
    <>
      <Hero>
        <h1>Thomas William McClean</h1>
        <h2>Software Engineer and technology enthusiast from Bristol, UK.</h2>
      </Hero>

      <Category
        title="Personal Projects"
        description="Check out my latest personal projects">
      </Category>

      <Category
        title="Employment History"
        description="Check out my latest personal projects">
      </Category>

      <Category
        title="Articles & Blogs"
        description="Check out my latest personal projects">
      </Category>
    </>
  )
}
