window.addEventListener("load", function () {
  //sns category
  var snsCate = $(".sns-cate li a");
  var snsCont = $(".sns-cont");
  snsCont.eq(0).show();
  $.each(snsCate, function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      //   index 4 (5) view more prevent effect
      if (index == 4) {
        return;
      }
      snsCate.removeAttr("class");
      snsCate.eq(3).addClass("i-naver");
      snsCont.hide();
      if (index == 0) {
        $(this).addClass("icon-focus-fb");
        snsCont.eq(0).show();
      } else if (index == 1) {
        $(this).addClass("icon-focus-is");
        snsCont.eq(1).show();
      } else if (index == 2) {
        $(this).addClass("icon-focus-yt");
        snsCont.eq(2).show();
      } else if (index == 3) {
        $(this).addClass("icon-focus-nv");
        snsCont.eq(3).show();
      }
    });
  });
  //news cate
  var newsCate = $(".news-cate li a");
  //saved now number on focus
  var newsFocusNum = 0;
  var newsCont = $(".news-cont");
  newsCont.eq(newsFocusNum).show();
  $.each(newsCate, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      //all remove
      newsCate.removeClass("news-focus");
      newsCate.eq(index).addClass("news-focus");
      newsFocusNum = index;
      newsCont.hide();
      newsCont.eq(newsFocusNum).show();
    });
    $(this).mouseenter(function () {
      $(this).addClass("news-focus");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("news-focus");
    });
  });
});
