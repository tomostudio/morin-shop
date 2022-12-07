import ProductCard from '@/components/modules/productCard'
import urlFor from '@/helpers/sanity/urlFor'
import { MoreButton } from '../../buttons'
import PHLoading from './loading'

const ProductList = ({ loading, dataProduct, showButton, loadMore }) => {
  return loading ? (
    <PHLoading />
  ) : dataProduct.length > 0 ? (
    <div
      className={`relative grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-20 mb-16`}
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
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="font-semibold text-morin-blue text-ctitleSmall">
        No Products Available
      </span>
    </div>
  )
}

export default ProductList
