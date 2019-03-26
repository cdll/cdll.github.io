<app class="mdl-layout mdl-layout--fixed-header">
  <!-- HEADER -->
  <header class="mdl-layout__header mdl-layout__header--waterfall">
    <div class='mdl-layout__header-row'>
      <!-- MDL Spinner Component -->
      <div class="mdl-layout-title mdl-spinner mdl-js-spinner is-active_"></div>
      <a class="mdl-navigation__link" href='javascript:;'>
        <span>C.D.LL</span>
      </a>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50' href="/"><i class="fa fa-home"></i>Home</a>
        <a class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50' href="/"><i class="fa fa-pencil"></i>Dailys</a>
        <a class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50' href="/portfolio"><i class="fa fa-twitch"></i>Portfolios</a>
        <a class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50' href="/darlingshow/index.html"><i class="fa fa-female"></i>Liliane</a>
      </nav>
      <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect demo-menu-lower-right">
        <a class="mdl-navigation__link">
          <i class="fa fa-ellipsis-v"></i>
        </a>
        <span class="mdl-button__ripple-container">
          <span class="mdl-ripple is-animating" style="width: 92.5097px; height: 92.5097px; transform: translate(-50%, -50%) translate(13px, 12px);"></span>
        </span>
      </button>
      <div class="mdl-menu__container -is-visible" style="right: 40px; top: 48px; width: 127.703px; height: 208px;">
        <div class="mdl-menu__outline mdl-menu--bottom-right" style="width: 127.703px; height: 208px;"></div>
        <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events" for="more-button" data-upgraded=",MaterialMenu,MaterialRipple" style="clip: rect(0px 127.703px 208px 0px);">
          <li class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="transition-delay: 0.00923077s;">
          </li>
          <li class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="transition-delay: 0.0646154s;">
            <a class='mdl-navigation__link' href="#"><i class="fa fa-question"></i>What'sMore</a>
          </li>
          <li disabled="" class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="transition-delay: 0.12s;">
            <a class='mdl-navigation__link' href="index_bk.html">here 's the original index page...</a>
          </li>
          <li class="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple" style="transition-delay: 0.175385s;">
          </li>
        </ul>
      </div>
    </div>
  </header>

  <div class="mdl-layout__content clear">
    <div class="loading-spinner" riot-data-is="{opts.mainComp}"></div>
  </div>
  <!-- FOOTER  -->
  <footer class="-footer-index" hidden>
    <div class="footer-container mdl-grid">
      <hr>
      <div class="mdl-cell mdl-cell--3-col">
        <div class='row' data-is='friend-link' ></div>
      </div>
      <div class="mdl-cell mdl-cell--3-col">
        <div class='row'>
          <h4>我在这里：</h4>
          <a href='http://plus.google.com/cd234350150'><i class="fa fa-google-plus-square fa-lg"></i></a>
          <a href='http://weibo.com/234350150'><i class="fa fa-weibo  fa-lg"></i></a>
          <a href='http://user.qzone.qq.com/234350150/' target="_blank"><i class="fa fa-qq fa-lg"></i></a>
          <a href='http://user.qzone.qq.com/234350150/' target="_blank"><i class="fa fa-renren fa-lg"></i></a>
          <a href=''><i class="fa fa-wechat fa-lg"></i></a>
          <a href='https://github.com/cdll'><i class="fa fa-github fa-lg"></i></a>
          <a href='http://steamcommunity.com/id/cdell/'><i class="fa fa-steam-square fa-lg"></i></a>
          <!--<br>-->
          <i class="fa fa-qrcode fa-lg"></i>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--3-col">
        <div class='row'>
          <h4>友情社区：</h4>

          <!-- <a class="center-block" href='https://cnodejs.org/' target="_blank">
            <p class=''><i>Nodejs中文社区</i></p>
          </a> -->

          <a class="center-block" href='http://frontenddev.org/' target="_blank">
            <p class=''><i>FED社区</i></p>
          </a>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--3-col">
        <div class='row'>
          <h4>快速联系：</h4>
          <a href='tel:18521534116'><i class="fa fa-phone fa-lg"></i></a>
          <a href='mailto:234350150@qq.com'><i class="fa fa-envelope fa-lg"></i></a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </footer>
</app>
