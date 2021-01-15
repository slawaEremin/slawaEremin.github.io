$(function() {
  // show mobile version
  var isAndroid = window.navigator.userAgent.match(/Android/i);
  var isIOS = window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
  var isMobile = isAndroid || isIOS;

  if (isMobile) {
    $('body').addClass('is-mobile');
  }

  // modal
  var $open = $('[data-open]');
  var $close = $('[data-close]');

  $open.on('click', function() {
    $('body').addClass('is-open-contact');
  });

  $close.on('click', function() {
    $('body').removeClass('is-open-contact');
  });

  //modal demo
  var $demoOpen = $('[data-demo-open]');
  var $demoClose = $('[data-demo-close]');

  $demoOpen.on('click', function() {
    $('body').addClass('is-open-demo');
  });

  $demoClose.on('click', function() {
    $('body').removeClass('is-open-demo');
  });

  //menu
  var $menu = $('[data-menu-root]');
  var $menuOpen = $('[data-menu-open]');
  var $menuClose = $('[data-menu-close]');

  $menuOpen.on('click', function() {
    $menu.addClass('is-mobile-open');
  });

  $menuClose.on('click', function() {
    $menu.removeClass('is-mobile-open');
  });

  //menu
  $(document).scroll(function () {
    var $nav = $("[data-menu-root]");
    $nav.toggleClass('type-active', $(this).scrollTop() > $nav.height());
  });
})

$(document).ready(function () {

  if (document.getElementById('redoc-container')) {
    (function() {
      if (typeof Redoc !== 'undefined') {
        Redoc.init('/json/api-public.json', {
          theme: {
            breakpoints: {
              medium: '200rem'
            }
          },
          nativeScrollbars: true,
          scrollYOffset: 100
        }, document.getElementById('redoc-container'), () => {
          $('div[data-id]').each(function(){
            $('#' + $(this).data('id')).append($(this));
            $(this).removeClass('d-none');
          })
          var pre = $('.code-block pre'),
              pl = pre.length;
          for (var i = 0; i < pl; i++) {
            pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
            var num = pre[i].innerHTML.split(/\n/).length;
            for (var j = 0; j < num; j++) {
              var line_num = pre[i].getElementsByTagName('span')[0];
              line_num.innerHTML += '<span>' + (j + 1) + '</span>';
            }
          }
        });
      }
    })();
  }
});
