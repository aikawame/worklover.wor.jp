<template>
  <article id="index" class="page">
    <section class="hero is-primary">
      <div class="hero-body has-text-centered">
        <h1 class="title">
          <span class="logo">ワクラバ</span>
          <span class="title-en">WorkLover</span>
        </h1>
      </div>
    </section>
    <section class="contents">
      <section id="works" class="container">
        <h2 class="title has-text-centered">Works</h2>
        <section class="work card">
          <div class="card-content">
            <h3 class="title is-4 has-text-centered">
              <a href="https://rss.wor.jp/">
                <img class="icon-rss" src="/img/icon_rss.svg" alt="RSS愛好会アイコン" aria-hidden="true" />
                <img class="logo-rss" src="/img/logo_rss.svg" alt="RSS愛好会" />
              </a>
            </h3>
          </div>
          <div class="card-footer">
            <p class="card-footer-item">
              各種RSSフィードの勝手配信サービスです。
            </p>
          </div>
        </section>
      </section>
      <section id="about" class="container">
        <h2 class="title has-text-centered">About me</h2>
        <p class="avatar has-text-centered">
          <img src="/img/profile.png" alt="顔アイコン" />
        </p>
        <dl class="profile has-text-centered">
          <dt>相川昌裕（aikawame）</dt>
          <dd>社寺と鉄道を愛でる中二病エンジニア</dd>
        </dl>
        <sns-list />
      </section>
    </section>
  </article>
</template>

<script>
import SnsList from "~/components/SnsList";

export default {
  components: {
    SnsList
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/default.scss";

h1 {
  font-size: 3.5rem !important;
  font-weight: bold !important;

  .logo {
    content: url(/img/logo_white.svg);
    display: inline-block;
    margin-right: 1rem;
    width: 280px !important;
  }
}

.avatar img {
  border-radius: 50%;
  height: 25vw;
  width: 25vw;

  @include from($tablet) {
    height: 155px;
    width: 155px;
  }
}

.card,
.profile {
  margin-bottom: 1.5rem;
}

.card-content {
  padding: 0;

  a {
    align-items: center;
    display: flex;
    height: 240px;
    justify-content: center;

    &:hover {
      background: #f0fffc;
    }
  }
}

.container {
  @include from($tablet) {
    width: 600px;
  }
}

.icon-rss,
.logo-rss {
  height: 4rem;
  margin: 0 0.5rem;
  max-height: 8vh;
}

.profile {
  font-size: 1.2rem;
}

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

    &:hover {
      color: #20b446 !important;
    }

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
