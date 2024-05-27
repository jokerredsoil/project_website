import Component from './Component.js';

class Container extends Component {
    constructor(children = []) {
        super();
        this.children = children;
    }

    render() {
        const main = document.createElement('main');
        const section = document.createElement('section');

        this.children.forEach(child => {
            section.appendChild(child.render());
        });

        main.appendChild(section);
        return main;
    }
}

export default Container;
