import { WhatsApp } from "../svg"
import DefaultButton from "./DefaultButton"

const WaButton = ({className = ""}) => (
  <div className={`absolute right-0 top-0 h-full flex items-end pointer-events-none ${className}`}>
    <DefaultButton className="sticky z-10 bottom-8 cursor-pointer w-[66px] h-fit mr-8 pointer-events-auto">
      <WhatsApp />
    </DefaultButton>
  </div>
)

export default WaButton