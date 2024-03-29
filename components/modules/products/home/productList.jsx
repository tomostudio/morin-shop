import { MoreButton } from '@/components/utils/buttons'
import WaButton from '@/components/utils/buttons/WaButton'
import urlFor from '@/helpers/sanity/urlFor'
import Container from '../../container'
import ProductCard from './productCard'

const ProductList = ({ dataProduct, showButton, loadMore }) => {
  return (
    <Container className="relative grow">
      <div
        className={`relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-24 lg:pt-20 mb-10 md:mb-16`}
      >
        {dataProduct.map(
          (data, index) =>
            data.slug?.current && (
              <ProductCard
                key={index}
                variants={data.shopifyProduct.variants}
                title={data.shopifyProduct.title}
                link={`products/${data.slug.current}`}
                imgSrc={urlFor(data.thumbnail).url()}
                imgPlaceholder={urlFor(data.thumbnail).url()}
                imgAlt={data.shopifyProduct.title}
              />
            ),
        )}
        {showButton && (
          <div className={`absolute left-0 bottom-0 w-full`}>
            <div className="h-52 w-full flex justify-center pt-8 linearMore">
              <MoreButton onClick={loadMore}>See More Products</MoreButton>
            </div>
          </div>
        )}
      </div>
      <WaButton className="pb-10 md:pb-16" />
    </Container>
  )
}

export default ProductList
