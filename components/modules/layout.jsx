export default function Layout({ children, className = '', style }) {
  return (
    <main
      className={`min-h-screen flex w-full flex-col items-center justify-between ${className}`}
      style={style}
    >
      {children}
    </main>
  );
}
