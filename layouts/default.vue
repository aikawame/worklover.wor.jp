<template>
  <div class="default">
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item is-size-3" href="/">
              <img class="logo-worklover" src="/img/logo.svg" alt="ワクラバ" />
            </a>
          </div>
        </div>
      </nav>
    </header>
    <nuxt/>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <address class="column is-one-third-desktop">
            <p class="author is-size-3">
              <a href="/">
                <img class="logo-worklover" src="/img/logo.svg" alt="ワクラバ" />
              </a>
            </p>
            <p class="copyright">
              &copy; 2018 <a href="https://worklover.wor.jp/">WorkLover</a>
            </p>
          </address>
          <ul class="column is-one-third-desktop">
            <li>
              <a href="/privacy">
                個人情報保護方針
              </a>
            </li>
            <li>
              <a href="/disclaimer">
                免責事項
              </a>
            </li>
            <li>
              <a href="/inquiry">
                お問い合わせ
              </a>
            </li>
          </ul>
          <div class="column is-one-third-desktop buttons">
            <p class="buttons-twitter has-text-right-tablet">
              <a class="button is-twitter" href="https://twitter.com/intent/follow?screen_name=aikawame" target="blank">
                <i class="icon-twitter" aria-hidden="true"></i>&nbsp;フォロー
              </a>
              <a class="button is-twitter" href="https://twitter.com/share?url=https://worklover.wor.jp/&amp;related=aikawame&amp;hashtags=ワクラバ&amp;text=ワクラバ" target="blank">
                <i class="icon-twitter" aria-hidden="true"></i>&nbsp;ツイート
              </a>
            </p>
            <p class="buttons-facebook has-text-right-tablet">
              <a class="button is-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://worklover.wor.jp/" target="blank">
                <i class="icon-facebook-f" aria-hidden="true"></i>&nbsp;シェア
              </a>
              <a class="button is-hateb" href="https://b.hatena.ne.jp/entry/https://worklover.wor.jp/" target="blank">
                <i class="icon-hateb" aria-hidden="true"></i>&nbsp;ブックマーク
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
