import Header from './components/Header.js';
import Container from './components/Container.js';
import Sidebar from './components/Sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const navLinks = [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Contact', href: '#contact' }
    ];

    const profile = {
        imageSrc: 'path/to/profile.jpg',
        name: 'John Doe',
        level: 'Expert',
        expertise: 'Web Development',
        github: 'https://github.com/johndoe'
    };

    const handleLoginClick = () => {
        alert('Login button clicked!');
    };

    const sidebar = new Sidebar(profile);

    const handleLogoClick = () => {
        sidebar.open();
    };

    const header = new Header('path/to/logo.png', navLinks, 'Login', handleLoginClick, handleLogoClick);

    app.appendChild(header.render());
    app.appendChild(sidebar.render());

    const container = new Container([]); // Assuming you still want to use Container for other elements
    app.appendChild(container.render());
});
