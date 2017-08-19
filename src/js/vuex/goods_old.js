
export default {
    
    // 相当于咱们之前的data配置
    state: {
        count: 200
    },
    // 相当于咱们之前的computed计算属性，使用方式也一样
    getters: {

        // 提供一个获取数据方法，这个方法会接收到state数据对象，
        // 由我们自由去返回数据，也可以对数据进行加工后再返回
        getCount(state) {
            return state.count;
        }
    },
    // 相当于咱们之前的methods，不过这里的方法仅仅是对数据进行改变，
    // 然后还有一个却别就是调用方式不一样，不能使用方法名直接调用这个方法，
    // 必须通过组件实例this.$store.commit(mutations名字)的方式间接调用该方法。
    // 为什么这么复杂：1、vue官方提供的插件要追踪值的变化，必须这样用，否则追踪不到。
    // 为什么这么复杂：2、下面我们写的修改数据方法，vuex会进行二次封装，以给我们提供一些额外的数据
    mutations: {
        
        // 修改count方式1，自增
        countAdd(state) {
            state.count++;
        },

        // 修改count方式2，覆盖
        setCount(state, val) {
            state.count = val;
        }
    }
}