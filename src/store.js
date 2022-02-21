import Vue from 'vue'
import Vuex from 'vuex'

console.log(Vue)
console.log(Vuex)

Vue.use(Vuex)

//ストアの定義
const store = new Vuex.Store({
    //実装
    //タスクの実装
    state: {
        tasks: [
            {
                id:1,
                name: '牛乳を買う',
                done: false
            },
            {
                id:2,
                name: 'Vue.jsの本を買う',
                done: false
            }
        ]
    }
})

//ストアをエクスポート
export default store