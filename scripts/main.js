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
  var $modal = $('[data-modal]');

  $open.on('click', function() {
    $modal.addClass('is_open');
  });

  $close.on('click', function() {
    $modal.removeClass('is_open');
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
