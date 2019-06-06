<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
    mounted() {
        this.renderValine();
    },
    methods: {
        renderValine() {
            if ( typeof window !== 'undefined' ){
                this.window = window
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');   
            new Valine({
                el: "#vcomments",
                appId: "fsVxbLxpHzCuHYAD7clU7kKX-gzGzoHsz",
                appKey: "0jzqwSQd0AeCjBlWGGXUSCeW",
                notify: false,
                verify: false,
                avatar: "retro",
                placeholder: "留言..."
            });
        }
    }
};
</script>

<style>
</style>
