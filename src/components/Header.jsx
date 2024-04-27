import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Header() {
 return (
    <div>
      <h1 className='text-5xl font-bold font-primary mx-8 mt-8'>React Employee Directory</h1>
      <div className='text-gray-500 mx-8 mb-8'> Made with <FontAwesomeIcon icon={faHeart} style={{color: "#808080",}} /> by <a href="https://github.com/archanaprabhat" target="_blank" rel="noopener noreferrer" style={{color: "skyblue", textDecoration: "underline", textDecorationThickness: "2px",}}>Archana TK</a></div>
      
    </div>
 )
}

export default Header;