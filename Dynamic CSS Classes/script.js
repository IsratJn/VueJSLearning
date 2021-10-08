new Vue({
    el:'#app',
    data:{
        available:false,
        nearby:false
    },
    computed: {
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});