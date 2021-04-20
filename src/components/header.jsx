import React from 'react'

const Header =()=>{
  	return(
		<header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo">
						<a href="/" title="Home"><img src="../images/logo.png" alt="logo" title="logo"/></a>
					</h1>
					{/* <!-- START #fh5co-menu-wrap --> */}
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li className="active">
								<a href="/" title="Home">Home</a>
							</li>
							{/* <li>
								<a href="#" className="fh5co-sub-ddown">
									Projetos <i className="icon-chevron-down"></i>
								</a>
									<ul className="fh5co-sub-menu">
									<li><a href="#">Water World</a></li>
									<li><a href="#">Cloth Giving</a></li>
									<li><a href="#">Medical Mission</a></li>
								</ul>
							</li> */}
							<li><a href="/project" title="Projeto">Projeto</a></li>
							<li><a href="/blog" title="Blog">Blog</a></li>
							<li><a href="/gallery" title="Galeria">Galeria</a></li>
							<li><a href="/about" title="Sobre nós">Sobre nós</a></li>
							<li><a href="/contact" title="Contato">Contato</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
  	)
}
export default Header;