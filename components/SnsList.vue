<template>
  <ul class="sns-list">
    <li v-for="sns in snss" :key="sns.id">
      <a :href="sns.url">
        <span class="sns-icon"><i :class="'icon-' + sns.id"></i></span>
        <span class="sns-name">{{ sns.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => {
    return {
      snss: [
        { id: 'hateblo',  name: 'Blog',     url: 'https://aikawame.hateblo.jp/' },
        { id: 'qiita',    name: 'Qiita',    url: 'https://qiita.com/aikawame' },
        { id: 'github',   name: 'GitHub',   url: 'https://github.com/aikawame' },
        { id: 'twitter',  name: 'Twitter',  url: 'https://twitter.com/aikawame' },
        { id: 'facebook', name: 'Facebook', url: 'https://facebook.com/aikawa.masahiro' },
        { id: 'wantedly', name: 'Wantedly', url: 'https://www.wantedly.com/users/17860990' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/default.scss";

.sns-list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  li {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    text-align: center;

    .sns-icon {
      align-items: center;
      background-color: #00553e;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      height: 25vw;
      width: 25vw;

      @include from($tablet) {
        height: 155px;
        width: 155px;
      }

      i {
        color: #fff;
        font-size: 13vw;

        @include from ($tablet) {
          font-size: 80px;
        }
      }

      &:hover,
      &:active {
        background-color: #53984d;
      }
    }
  }
}
</style>
