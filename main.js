Vue.component('header-bar',{
    template : `
    <header style="height:32px">
        <h1 style="color:#eeeeee;font-size:22px;margin:0px 15px">Wiki<h1>
    </header>
    `,
});

Vue.component('mordal-window',{
    template : `
    <transition>
        <div id="mordal-window" v-show="show_state">
            <span>コピーしました</span>
        </div>
    </transition>
    `,
    props: ["show_state"],
});

Vue.component('nav-area',{
    template : `
    <nav>
        <div style="background-color: #444444;margin: 0 0 7px 0; padding: 3px 6px;color:#ffffff">
            <span>page</span>
        </div>
        <ul>
            <li><a href="index.html">ホーム</a></li>
            <li><a href="">hogehoge</a></li>
            <li><a href="">hogehoge</a></li>
            <li><a href="">hogehoge</a></li>
            <li><a href="">hogehoge</a></li>
            <li><a href="">hogehoge</a></li>
        </ul>
    </nav>
    `
});

Vue.component('footer-bar',{
    template : `
    <footer style="height:32px">
    
    </footer>
    `,
});

Vue.component('link-card',{
    template : `
    <div class="link-card">
        <div>
            <span><slot></slot></span>
            <span>:</span>
            <span>{{description}}</span>
        </div>
        <div style="display:flex;align-items: center">
            <button @click="doCopy">コピー</button>
            <input :value="url" style="flex:1">
        </div>
    </div>
    `,
    props:["url", "description"],
    methods: {
        doCopy: function(){
            navigator.clipboard.writeText(this.url);
            this.$emit("mordal");
        }
    }
});
