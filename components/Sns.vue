<template>
  <li :class="{ active: isActive }">
    <a :href="sns.url" @mouseover="mouseover" @mouseout="mouseout">
      <span class="sns-icon"><i :class="'icon-' + sns.id"></i></span>
      <span class="sns-name">{{ sns.name }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: ['sns'],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    mouseover() {
      this.isActive = true;
    },
    mouseout() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.sns-list {
  li {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    text-align: center;

    a {
      color: #00553e !important;
    }

    &.active a {
      color: #53984d !important;
    }

    .sns-icon {
      align-items: center;
      background: #00553e;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      height: 20vw;
      width: 20vw;

      @media screen and (min-width: 769px) {
        height: 120px;
        width: 120px;
      }

      i {
        color: #fff;
        font-size: 12vw;

        @media screen and (min-width: 769px) {
          font-size: 72px;
        }
      }
    }

    &.active .sns-icon {
      background: #53984d;
    }
  }
}
</style>
