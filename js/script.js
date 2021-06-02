$(function(){
  $('.search-sp, .search-delete').on('click',function(){
    $('.search-sp-hide').slideToggle();
  });

  $(function(){
    $('#page-top').hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 80){
        $('#page-top').fadeIn();
      } else{
        $('#page-top').fadeOut();
      }
    });
      $('#page-top').click(function(){
        $('body, html').animate({
          scrollTop: 0
        }, 500)
      });
   });

  
  tippy('.cap', {//指定した要素にツールチップが出現
    placement: 'bottom',//ツールチップの表示位置⇒top、top-start、top-end、right、right-start、right-end、bottom、bottom-start、bottom-end、left、left-start、left-end。指定をしなくてもtopに表示
    animation: 'shift-toward-subtle',//ツールチップ出現の動き。動きを指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/animations/から任意の動きを選び内に読み込むことが必要。使用できる動き⇒shift-away、shift-away-subtle、shift-away-extreme、shift-toward、shift-toward-subtle、shift-toward-extreme、scale、scale-subtle、scale-extreme、perspective、perspective-subtle、perspective-extreme。指定をしなくてもfadeで表示
    theme: 'light-border',//ツールチップのテーマの色。色を指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/themes/からテーマを選び内に読み込んで指定する。テーマの種類⇒light、light-border、material、translucent。指定をしなくても黒色で表示
    duration: 200,//ツールチップの出現の速さをミリ秒単位で指定
  }
  )
  
  $('.menu-sp, .menu-hide-cross').click(function(){
    $('.menu-hide').toggleClass('active');
  });
  
  window.addEventListener(
    "load",
    function() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: "auto",
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    },
    false
    );
    
    $('.beauty-toggle-title1').on('click',function(){
      $('.beauty-toggle-hide1').slideToggle();
    });
    $('.beauty-toggle-title2').on('click',function(){
      $('.beauty-toggle-hide2').slideToggle();
    });
    $('.beauty-toggle-title3').on('click',function(){
      $('.beauty-toggle-hide3').slideToggle();
    });
    
    
    $('.plus1').click(function() {
      $(this).toggleClass('active');
    });
    $('.plus2').click(function() {
      $(this).toggleClass('active');
    });
    $('.plus3').click(function() {
      $(this).toggleClass('active');
    });





    //任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});

function GethotcontentshashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.hot-contents-tab li').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.hot-contents-tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".hot-contents-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
      }
    });
  }
}

//タブをクリックしたら
$('.hot-contents-tab a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得	
  GethotcontentshashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.hot-contents-tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.hot-contents-area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethotcontentshashID (hashName);//設定したタブの読み込み
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});



$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 5,//スライドを画面に3枚見せる
  slidesToScroll: 5,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 3,//スライドを画面に2枚見せる
        slidesToScroll: 3,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 3,//スライドを画面に1枚見せる
        slidesToScroll: 3,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
});

$('.top-news-wrapper').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  dots: false,//下部ドットナビゲーションの表示
  autoplay: true,
  arrows: false,
  autoplaySpeed: 4000
});

$('.mypattern').slick({
  autoplay: true,
  autoplaySpeed: 8000,
  dotsClass: 'slick-dots',
  speed: 1000,
  // dots: true,
  arrows: true,
  centerMode: true,
  dots: true,
  centerPadding: '20%',
  nextArrow: '<div class="slick-top-next"></div>',//矢印部分NextのHTMLを変更
  prevArrow: '<div class="slick-top-prev"></div>',//矢印部分PreviewのHTMLを変更
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '10%',
      }
    },
    {
      breakpoint: 1150,
      settings: {
        centerPadding: '0%'
    }
  }
  ]
});



$('a[href^="#"]').click(function(){
  let speed = 500;
  let id = $(this).attr('href');
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top;
  $('html, body').animate({
    scrollTop: position
  }, speed);
});


$(function(){
  $('.new-item-wrapper').paginathing({
    perPage: 9,
    firstLast: false,
    prevText:'prev' ,
    nextText:'next' ,
    activeClass: 'active',
  })
});



});

