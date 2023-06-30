import Navbar from '@/components/navbar'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Home() {
  return (
    <>
      <div>
        <ModeToggle />
        <Navbar />
      </div>
    </>
  )
}
