import { fetchCheckout } from "@/helpers/shopify";
import { useAppContext } from "context/state";
import { useEffect } from "react";

export default function Layout({ children, className = '', style }) {
  const appContext = useAppContext();

  useEffect(() => {
    fetchCheckout().then((response) => {
      if(response) appContext.setQuantity(response.jumlah)
    })
  },[])

  return (
    <main
      className={`min-h-screen flex w-full flex-col items-center justify-between ${className}`}
      style={style}
    >
      {children}
    </main>
  );
}
