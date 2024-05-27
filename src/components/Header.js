import Component from './Component.js';

class Header extends Component {
    constructor(logoSrc, navLinks, loginText, onLoginClick, onLogoClick) {
        super();
        this.logoSrc = logoSrc;
        this.navLinks = navLinks;
        this.loginText = loginText;
        this.onLoginClick = onLoginClick;
        this.onLogoClick = onLogoClick;
    }

    render() {
        const header = document.createElement('header');

        const logo = document.createElement('img');
        logo.src = this.logoSrc;
        logo.alt = 'Logo';
        logo.className = 'logo';
        logo.addEventListener('click', this.onLogoClick);

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        this.navLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        });

        const loginButton = document.createElement('button');
        loginButton.textContent = this.loginText;
        loginButton.className = 'login-button';
        loginButton.addEventListener('click', this.onLoginClick);

        nav.appendChild(ul);
        header.appendChild(logo);
        header.appendChild(nav);
        header.appendChild(loginButton);

        return header;
    }
}

export default Header;
