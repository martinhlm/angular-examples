import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app'
import { Main, Notes } from './app/containers'
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui'

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        NoteCreator,
        ColorPicker,
        Notes
    ],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
