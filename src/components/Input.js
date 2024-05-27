import Component from './Component.js';

class Input extends Component {
    constructor(placeholder = '') {
        super();
        this.placeholder = placeholder;
    }

    render() {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = this.placeholder;
        return input;
    }
}

export default Input;
