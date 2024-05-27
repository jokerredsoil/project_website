class Component {
    constructor() {
        if (new.target === Component) {
            throw new TypeError("Cannot construct Component instances directly");
        }
    }

    render() {
        throw new Error("Render method must be implemented");
    }
}

export default Component;
