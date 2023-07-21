
interface clickProp {
   onClick?: any;
}

const Backdrop = ({ onClick }: clickProp) => {
   return (
      <div onClick={onClick} className="fixed backdrop top-0 left-0 w-full h-screen z-[1000] bg-[rgba(0,0,0,0.45)]"></div>
   )
}

export default Backdrop;