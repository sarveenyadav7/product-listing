import Logo from '../Images/logo.png'
import Flag from '../Images/flag.png'

function Header(){
    return(
        <>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='navigation'>
                    <div className='men-category'>MEN</div>
                    <div className='women-category'>WOMEN</div>
                    <div className='form-input'>
                        <form>
                            <i class="fa fa-search" aria-hidden="true"></i>
                            <input type='search' placeholder='Search by product, category....'></input>
                        </form>
                    </div>
                    <div className='login-tag'>Login</div>
                    <div className='indian-flag'>
                        <img src={Flag} alt='flag'/>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Header