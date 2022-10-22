import '@/styles/main.scss'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { AppWrapper } from '../context/state.jsx'
import 'swiper/css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        {/* FAVICON  */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,viewport-fit=cover"
        />
        {/* FAVICON  */}
      </Head>

      <AnimatePresence exitBeforeEnter>
        <AppWrapper>
          <Component {...pageProps} key={router.asPath} />
          {/* BORDER TRIGGER */}
          <div className="fixed bottom-[40px] left-[40px] z-50 space-x-4 pointer-events-none">
            <button
              className="py-1 px-2 text-lg bg-slate-400 bg-opacity-50 shadow-sm pointer-events-auto"
              onClick={() => {
                var allBorder = document.querySelectorAll('body *')
                for (let i = 0; i < allBorder.length; i++) {
                  if (allBorder[i].classList.contains('all-border')) {
                    allBorder[i].classList.remove('all-border')
                  } else {
                    allBorder[i].classList.add('all-border')
                  }
                }
              }}
            >
              All Border
            </button>
          </div>
        </AppWrapper>
      </AnimatePresence>
    </>
  )
}
