
import vedio from "../assets/vedio2.mp4";

function Header() {
  return (
    <div>
       <video
        className="  top-1  left-0 w-screen  h-150 object-cover"
        src={vedio}
        autoPlay
        muted
        loop
        playsInline
      />
    

    </div>
  )
}

export default Header
