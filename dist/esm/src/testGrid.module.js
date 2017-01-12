import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './helloWorld.component';
export var TestGridModule = (function () {
    function TestGridModule() {
    }
    TestGridModule.forRoot = function () {
        return {
            ngModule: TestGridModule
        };
    };
    TestGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HelloWorldComponent
                    ],
                    imports: [CommonModule],
                    exports: [HelloWorldComponent]
                },] },
    ];
    /** @nocollapse */
    TestGridModule.ctorParameters = function () { return []; };
    return TestGridModule;
}());
//# sourceMappingURL=testGrid.module.js.map