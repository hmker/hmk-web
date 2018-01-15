export default {
    getParam (state, Object){
        state.START_PARAM = Object
    },
    changeTitle2(state, Object){
        state.title = Object[0].name;
    }
}