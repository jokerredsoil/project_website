import Component from './Component.js';

class Button extends Component {
    constructor(text, onClick) {
        super();
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        return button;
    }
}

export default Button;
