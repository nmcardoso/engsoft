import './HomeButton.css'
import { Link } from 'react-router-dom'
import homeIcon from './assets/homeIcon.png'

function HomeButton () {
    return (
        <div className="buttonContainer">
            <Link
                to='/'>
                <a>
                    <img src={ homeIcon } alt="icone_home" className='icon'/>
                </a>
            </Link>
        </div>
    )
}

export default HomeButton