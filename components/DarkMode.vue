<template>
  <span class="theme-mode-setting" @click="handleToggleMode" :title="title">
    <Icon icon="moon" v-if="status === 1" :key="status" />
    <Icon icon="sun" v-else :key="status"/>
  </span>
</template>
<script>
export default {
  data() {
    return {
      status: 1 // 0: auto, 1: dark, 2: light
    }
  },
  computed: {
    title() {
      const arr = ['auto', 'dark', 'light'];
      return arr[this.status];
    }
  },
  mounted() {
    let status = +window.localStorage.getItem('mode');

    if (status !== 0) {
      this.setMode(status);
    }
  },
  methods: {
    handleToggleMode() {
      // if (this.status === 0) {
      //   this.setMode(1);
      // } else
      if (this.status === 1) {
        this.$eventBus.$emit('EV_SET_LIGHT_MODE')
        this.setMode(2);
      } else if (this.status === 2) {
        this.$eventBus.$emit('EV_SET_DARK_MODE')
        this.setMode(1);
      }
      window.localStorage.setItem('mode', this.status);
    },
    setMode(status) {
      if (status === 1) {
        this.status = 1;
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      } else if (status === 2) {
        this.status = 2;
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else if (status === 0) {
        this.status = 0;
        document.documentElement.classList.remove('dark', 'light');
      }
    }
  }
}
</script>
<style lang="stylus">
.theme-mode-setting
  overflow hidden
  border-radius 50%
  display flex
  align-items center
  justify-content center
  .theme-icon
    font-size 1.6rem
</style>