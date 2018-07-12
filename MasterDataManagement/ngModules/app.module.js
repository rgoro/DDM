import { AppComponent } from "../ngComponents/app.component.js"

var AppModule = function () {

};

AppModule.annotations = [
    new ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
];

document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic
        .platformBrowserDynamic().bootstrapModule(AppModule);
});