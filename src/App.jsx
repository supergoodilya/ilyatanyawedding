import Hero from './components/Hero'
import InvitationLetter from './components/InvitationLetter'
import SaveTheDate from './components/SaveTheDate'
import Venue from './components/Venue'
import PhotoGallery from './components/PhotoGallery'
import Wishes from './components/Wishes'
import DressCode from './components/DressCode'
import Contacts from './components/Contacts'
import Cheers from './components/Cheers'
import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* narrow mobile-first column, centered on desktop */}
      <div className="max-w-lg mx-auto shadow-2xl">
        <Hero />
        <InvitationLetter />
        <Venue />
        <SaveTheDate />
        <PhotoGallery />
        <Wishes />
        <DressCode />
        <RSVPForm />
        <Footer />
      </div>
    </div>
  )
}
