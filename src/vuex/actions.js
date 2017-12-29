import { setTimeout } from "timers";

export default {
    change(context, o1){
        console.log(o1)
        setTimeout(() => {
            context.commit('getParam', o1)
        }, 3000)
    }
}