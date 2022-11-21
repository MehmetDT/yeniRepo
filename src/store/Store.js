import { observable, action } from 'mobx'

class Store {
    @observable username


    @action usernameUpdate(val) {
        this.username = val
    }
}


export default new Store()
