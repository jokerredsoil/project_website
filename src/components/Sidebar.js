import Component from './Component.js';

class Sidebar extends Component {
    constructor(profile) {
        super();
        this.profile = profile;
    }

    render() {
        const sidebar = document.createElement('aside');
        sidebar.className = 'sidebar';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.className = 'close-button';
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('open');
            document.getElementById('app').classList.remove('blur');
        });

        const profileImage = document.createElement('img');
        profileImage.src = this.profile.imageSrc;
        profileImage.alt = 'Profile Image';

        const profileLevel = document.createElement('p');
        profileLevel.textContent = `Level: ${this.profile.level}`;

        const profileName = document.createElement('h2');
        profileName.textContent = this.profile.name;

        const profileExpertise = document.createElement('p');
        profileExpertise.textContent = `Expertise: ${this.profile.expertise}`;

        const githubLink = document.createElement('a');
        githubLink.href = this.profile.github;
        githubLink.textContent = 'GitHub Profile';
        githubLink.target = '_blank';

        sidebar.appendChild(closeButton);
        sidebar.appendChild(profileImage);
        sidebar.appendChild(profileName);
        sidebar.appendChild(profileLevel);
        sidebar.appendChild(profileExpertise);
        sidebar.appendChild(githubLink);

        return sidebar;
    }

    open() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.add('open');
            // document.getElementById('app').classList.add('blur');
        }
    }
}

export default Sidebar;
