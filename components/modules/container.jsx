export default function Container({ children, className }) {
  return (
    <div
      className={`container relative lg:px-8 max-w-screen-2xl mx-auto w-full px-4 ${className}`}
    >
      {children}
    </div>
  )
}
