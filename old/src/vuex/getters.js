export default {
    filterPeople: (state) => {
        return state.people.filter(item => {
            if(item.age > 30){
                return true
            }
        })
    }
}