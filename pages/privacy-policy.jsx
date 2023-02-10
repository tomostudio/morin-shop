import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import WaButton from '@/components/utils/buttons/WaButton'

export default function PrivacyPolicy() {
  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title="Privacy Policy" />
        <div className="bg-white w-full">
          <Container className="flex flex-col text-morin-blue mt-4 md:mt-0 mb-10 md:mb-16">
            <h2 className="text-4xl lg:text-h2 leading-none font-nutmeg text-center">
              Privacy Policy
            </h2>
            <p className="max-w-2xl mt-3 mx-auto font-medium px-5 max-w">
              Updated November 17th, 2021 <br /> <br /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Bibendum turpis aliquam,
              viverra netus amet in vel auctor amet. Scelerisque a sagittis
              ornare in sit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Bibendum turpis aliquam, viverra netus amet in vel auctor
              amet. Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Bibendum turpis aliquam,
              viverra netus amet in vel auctor amet. Scelerisque a sagittis
              ornare in sit. <br /> <br /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Bibendum turpis aliquam, viverra
              netus amet in vel auctor amet. Scelerisque a sagittis ornare in
              sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
              Scelerisque a sagittis ornare in sit. <br /> <br /> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Bibendum turpis
              aliquam, viverra netus amet in vel auctor amet. Scelerisque a
              sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Bibendum turpis aliquam, viverra netus amet in
              vel auctor amet. Scelerisque a sagittis ornare in sit. <br />{' '}
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
              Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Bibendum turpis aliquam, viverra
              netus amet in vel auctor amet. Scelerisque a sagittis ornare in
              sit.
            </p>
            <WaButton />
          </Container>
        </div>
        <Footer/>
      </Layout>
    </>
  )
}
