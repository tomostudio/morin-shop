import Container from '@/components/modules/container'
import WaButton from '../../buttons/WaButton'

const PHLoading = () => {
  return (
    <Container className="relative grow">
      <div
        className={`relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-24 lg:pt-20 mb-10 md:mb-16`}
      >
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
        <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden" />
      </div>
      <WaButton className="pb-10 md:pb-16" />
    </Container>
  )
}

export default PHLoading
