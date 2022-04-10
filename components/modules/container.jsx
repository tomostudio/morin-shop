export default function Container({ children, className }) {
  return (
    <div
      className={`container px-8 max-w-screen-2xl mx-auto w-full max-md:px-5 ${className}`}
    >
      {children}
    </div>
  )
}
