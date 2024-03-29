$(document).ready(function () {
  //    gnb관련코드 //
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(200);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(200);
  });
  // 메뉴관련
  var mainMenuLi = $(".mainmenu > li");
  var subMenu = $(".submenu");
  //   mainMenuLi 주메뉴로 마우스 이동하는 경우 실행
  $.each(mainMenuLi, function (index, item) {
    $(this).mouseenter(function () {
      //다른 메뉴창으로 빠져나갔을 때 활성화 된 depth3창 닫기
      allDepth3.hide();
      //다른 메뉴창으로 빠져나갔을 때 그 전에 포커스 된 메뉴 포커스해제
      subMenuLi.removeClass("submenu_focus_link");
      // 서브 메뉴가 보여준다
      $(this).find(".submenu").addClass("submenu_focus");
      $(this).css("z-index", 999);
    });
    $(this).mouseleave(function () {
      // 서브메뉴 숨김
      $(this).find(".submenu").removeClass("submenu_focus");
    });
  });
  //   subMenuLi
  $.each(subMenu, function () {});

  //   subMenuLi
  var subMenuLi = $(".submenu > li");
  var allDepth3 = $(".submenu-3rd");
  // 절대로 나올수 없는 값으로 설정해서 초기화에 사용
  var reIndex = -10000;
  $.each(subMenuLi, function (index, item) {
    var aTag = $(this).find(" > a");
    var depth3 = $(this).find(".submenu-3rd");
    aTag.click(function (e) {
      if ($(this).hasClass("link")) {
        return;
      }
      // herf 막는다.
      e.preventDefault();
      if (reIndex == index) {
        // 동일한 버튼을 눌렀을때
      } else {
        // 다른을 눌렸을때
        // 일단 모든 서브메뉴들을 담는다.
        allDepth3.hide();
        reIndex = index;
      }
      // .submenu-3rd 보이게 한다
      var nowDepth3 = depth3.css("display");
      if (nowDepth3 == "none") {
        // nowDepth3가 보이지 않는다면
        depth3.show();
        // 현재 많은 메뉴 중에 몇번째 클릭했는지를 저장한다.
        reIndex = index;
        // 메뉴 포커스 유지
        subMenuLi.removeClass("submenu_focus_link");
        subMenuLi.eq(index).addClass("submenu_focus_link");
      } else {
        depth3.hide();
        subMenuLi.removeClass("submenu_focus_link");
      }
    });
  });
  //상단메뉴 처리관련 코드
  var hTop = $(".header-top");
  var hTop_H = hTop.height();
  var hMiddle = $(".header-middle");
  var hMiddle_H = hMiddle.height();
  var hHeight = hTop_H + hMiddle_H;
  $(window).scroll(function () {
    // 스크롤 위치를 파악한다.
    var scy = $(window).scrollTop();
    if (scy >= hHeight) {
      $(".header").addClass("h-fix");
      $(".content").addClass("h-fix-mt");
      $(".logo-gnb").addClass("h-show");
      $(".gnb").addClass(".h-fix-gnb");
    } else {
      $(".header").removeClass("h-fix");
      $(".content").removeClass("h-fix-mt");
      $(".logo-gnb").removeClass("h-show");
      $(".gnb").removeClass(".h-fix-gnb");
    }
  });
  //gnb 관련
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(500);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(500);
  });
  //swiper
  //main whole swiper (content)
  var sw_content = new Swiper(".sw-content", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loopedSlides: 3,
  });
  //sw-notice (mini slide)
  var sw_notice = new Swiper(".sw-notice", {
    autoplay: {
      delay: 2000,
      speed: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".sw-notice-next",
      prevEl: ".sw-notice-prev",
    },
    pagination: {
      el: ".sw-notice-pg",
      type: "fraction",
    },
  });
  //pause & play
  //pause
  $(".sw-notice-pause").click(function () {
    for (var i = 0; i < sw_notice.length; i++) {
      sw_notice[i].autoplay.stop();
    }
  });
  // auto play
  $(".sw-notice-play").click(function () {
    for (var i = 0; i < sw_notice.length; i++) {
      sw_notice[i].autoplay.start();
    }
  });
  //notice list
  var noticeA = $(".notice-menu > li");
  $.each(noticeA, function (index, item) {
    $(this)
      .find("a")
      .click(function (e) {
        e.preventDefault();
        //focus apply
        //show tab content
        showNotice(index);
      });
  });
  //content zip
  var noticeLi = $(".notice-cont > li");
  //content show / focus move user named fnc : showNotice()
  function showNotice(_index) {
    noticeA.removeClass("notice-menu-focus");
    noticeA.eq(_index).addClass("notice-menu-focus");
    noticeLi.hide();
    if (_index == 1) {
      return;
    }
    noticeLi.eq(_index).show();
  }
  //edu swiper
  var sw_edu = new Swiper(".sw-edu", {
    autoplay: {
      delay: 2000,
      // 사용자가 터치드래그 하고 난 후 자동 실행
      disableOnInteraction: false,
    },
    loop: true,
    //중첩된(swiper 내부에 다른 swiper가 있는) swiper 인스턴스에 대해 스와이프 동작이 가능
    nested: true,
    navigation: {
      nextEl: ".sw-edu-next",
      prevEl: ".sw-edu-prev",
    },
    pagination: {
      el: ".sw-edu-pg",
      type: "fraction",
    },
  });
  //alarm tab menu
  var alarmA = $(".alarm-tab-menu a");
  var alarmCont = $(".alarm-tab-cont");
  $.each(alarmA, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      alarmA.removeClass("alarm-tab-menu-focus");
      alarmA.eq(index).addClass("alarm-tab-menu-focus");
      alarmCont.removeClass("alarm-tab-cont-focus");
      alarmCont.eq(index).addClass("alarm-tab-cont-focus");
    });
  });
  //alarm tab menu swiper
  var sw_navi = new Swiper(".sw-navi", {
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".sw-navi-next",
      prevEl: ".sw-navi-prev",
    },
    centeredSlides: true,
    loopedSlides: 3,
    slideToClickedSlide: true,
  });
  // tab > content 연결
  sw_content.controller.control = sw_navi;
  sw_navi.controller.control = sw_content;
  //hub area
  // hubmenu save
  var hubMenu = $(".hub-menu a");
  // hub information
  var hubInfos = $(".hub-info > li");
  $.each(hubMenu, function (index, item) {
    //hover action
    $(this).mouseenter(function () {
      hubInfos.removeClass("hub-info-focus");
      hubInfos.eq(index).addClass("hub-info-focus");
    });
  });

});
