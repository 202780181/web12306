<template>
  <div id="mytitle">
    <Titlebtn type="min" class="close iconfont icon-zuixiaohua" title="最小化" />
    <Titlebtn type="close" class="close iconfont icon-guanbi" title="关闭"/>
  </div>
</template>

<script>
import Titlebtn from "./Titlebtn";
export default {
  data() {
    return {
      name: "Mytitle"
    };
  },
  methods: {},
  components: {
    Titlebtn
  },
  mounted() {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "http://at.alicdn.com/t/font_1428879_07vqc86bcxin.css";
    document.head.appendChild(link);
  },
};
</script>

<style lang="stylus" scoped>
#mytitle {
  position: relative;
  width: 100%;
  height: 48px;
  background-color: rgb(198, 47, 47);
  -webkit-app-region: drag;
}

.icon-guanbi {
  font-size: 18px;
  color: #fff;
}

.icon-guanbi:hover {
  font-size: 18px;
  color: #f5f9fb;
}

.icon-zuixiaohua {
  font-size: 25px;
  color: #f5f9fb;
  margin-top: 12px;
}

.icon-zuixiaohua:hover {
  color: #ffffff;
}
</style>