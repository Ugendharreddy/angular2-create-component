import { Component } from '@angular/core';

@Component ({
    selector: 'clear-text',
    templateUrl: './bindingTypes.component.html',
    styles: ['']
})

export class BindingTypesComponent {
    username = '';
    clearUserName(event) {
        this.username = '';
    }
    checkingLength() {
        if(this.username.length > 0) {
            return true;
        }
    }
}