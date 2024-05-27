import Component from './Component.js';

class LoginButton extends Component {
    constructor(text, onClick) {
        super();
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.className = 'login-button';
        button.addEventListener('click', this.onClick);
        return button;
    }
}

export default LoginButton;
