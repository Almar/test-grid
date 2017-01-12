import { Component } from '@angular/core';
export var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.projectTitle = 'test grid';
    }
    HelloWorldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'inni-hello-world',
                    template: 'Hello world from the {{ projectTitle }} module!'
                },] },
    ];
    /** @nocollapse */
    HelloWorldComponent.ctorParameters = function () { return []; };
    return HelloWorldComponent;
}());
//# sourceMappingURL=helloWorld.component.js.map