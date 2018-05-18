import React from 'react';

const Header = (props) => (
<header className="App-header">
<h1 className="App-title">{props.children}</h1>
</header>);

export default Header;