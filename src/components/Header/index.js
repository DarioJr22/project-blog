import logosvg from '../../svg/Group 5190.png'


function Header(){
    let contador = 1
    let descLogo = 'desc logo'
    return(
       <header className='flex-space-between'>
        <div className="logo">
            <img src={logosvg} alt={descLogo}></img>
        </div>
        <div className="search">

        </div>
        <div className="menu">

        </div>
       </header>
    )
}

export default Header;