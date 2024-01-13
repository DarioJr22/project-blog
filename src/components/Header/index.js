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
        <input className='input-search' type='text' name='search' placeholder='pesquisar'/>         </div>
        <div className="menu">
        <ul className='menu'>
            <li><a className='nav-link' href='#'>Categorias</a></li>
            <li><a className='nav-link' href='#'>About</a></li>
            <li><a className='nav-link' href='#'>Contact</a></li>
        </ul>
        </div>
       </header>
    )
}

export default Header;