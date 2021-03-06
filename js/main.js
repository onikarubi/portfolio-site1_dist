$(function () {

  const $headerSelecter = $('.header');
  const $headerMenuSelecter = $('.header-menu');
  const $pagetopButton = $('.page-top');

  // スクロール後、ヘッダーの背景色が変わる

  // 変更後 -> ヘッダーメニューにactive要素追加

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $headerSelecter.addClass('header--active');
      $headerMenuSelecter.addClass('header-menu--active');
      $pagetopButton.addClass('page-top--active');
    } else {
      $headerSelecter.removeClass('header--active');
      $headerMenuSelecter.removeClass('header-menu--active');
      $pagetopButton.removeClass('page-top--active');
    }
  });

  // ページトップリンク
  const $pageTop = $('#page-top, a[href="#"]');
  const $scrollSpeed = 400;

  $pageTop.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, $scrollSpeed);

    return false; //リンク無効化
  });

  // ドロワーメニュー

  const drawerBtn = $('.drawer-btn');
  const drawerMenu = $('#drawer-menu');

  drawerBtn.on('click', function () {
    $(this).toggleClass('drawer-btn--active');
    drawerMenu.toggleClass('drawer-menu--active');
    $('.header-logo').toggleClass('header-logo--hide')
  });

});