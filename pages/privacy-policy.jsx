import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <NextSeo title="Privacy Policy" />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col text-morin-blue my-10">
          <h2 className="text-mtitle lg:text-h2 leading-none font-nutmeg text-center">Privacy Policy</h2>
          <p className='max-w-screen-md mx-auto font-medium'>
            Updated November 17th, 2021 <br /> <br /> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Bibendum turpis aliquam, viverra netus
            amet in vel auctor amet. Scelerisque a sagittis ornare in sit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Bibendum turpis
            aliquam, viverra netus amet in vel auctor amet. Scelerisque a
            sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Bibendum turpis aliquam, viverra netus amet in vel
            auctor amet. Scelerisque a sagittis ornare in sit. <br /> <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Bibendum turpis
            aliquam, viverra netus amet in vel auctor amet. Scelerisque a
            sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Bibendum turpis aliquam, viverra netus amet in vel
            auctor amet. Scelerisque a sagittis ornare in sit. <br /> <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Bibendum turpis
            aliquam, viverra netus amet in vel auctor amet. Scelerisque a
            sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Bibendum turpis aliquam, viverra netus amet in vel
            auctor amet. Scelerisque a sagittis ornare in sit. <br /> <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Bibendum turpis
            aliquam, viverra netus amet in vel auctor amet. Scelerisque a
            sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Bibendum turpis aliquam, viverra netus amet in vel
            auctor amet. Scelerisque a sagittis ornare in sit.
          </p>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
