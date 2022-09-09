import { App } from "vue";
import Wbutton from "./button"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./JSXButton"
export { Wbutton, SFCButton, JSXButton }
export default {
    install(app:App):void{
        app.component(Wbutton.name,Wbutton)
        app.component(SFCButton.name,SFCButton)
        app.component(JSXButton.name,JSXButton)
    }
}