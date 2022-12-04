import DefaultButton from './DefaultButton'

const GradientButton = ({ children, className, ...others }) => {
  return (
    <DefaultButton
      className={`w-44 py-3 md:w-40 lg:w-52 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-default md:text-[20px] lg:text-[26px] text-white ${className}`}
      {...others}
    >
      {children}
    </DefaultButton>
  )
}

export default GradientButton