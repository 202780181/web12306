<template>
  <div class="titlebtn" :style="style" @click="click"> 

  </div>
</template>

<script>
const { ipcRenderer: ipc } = require("electron");
const style = {
  min: {
    right: "60px"
  },
  close: {
    right: "20px"
  }
};
export default {
  name: "Titlebtn",
  props: ["type"],
  data() {
    return {};
  },
  computed: {
    style: function() {
      return style[this.type];
    }
  },
  methods: {
    click() {
      console.log(this.type);
      ipc.send(this.type);
    }
  }
};
</script>

<style scpoed>
.titlebtn {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  bottom: 0;
  cursor: pointer;
  margin: auto 0;
  -webkit-app-region: no-drag;
}
</style>