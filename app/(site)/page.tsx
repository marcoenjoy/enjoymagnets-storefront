import Header from '../../components/Header'
import Container from '../../components/Container'

export default function HomePage() {
  return (
    <Container>
      <Header />
      <div className='py-10'>
        OK ✅ — Next.js funziona su 3001 (sanity check)
      </div>
    </Container>
  )
}
