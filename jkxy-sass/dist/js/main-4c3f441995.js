$(function(){var n=new Slider($(".banner"),{time:2888,delay:400,event:"hover",auto:!0,mode:"fade",controller:$(".pagination"),activeControllerCls:"active"});$(".banner-left").click(function(){n.prev()}),$(".banner-right").click(function(){n.next()})}),$(function(){$(".front").mouseenter(function(){$(this).css("transform","rotateY(-180deg)")}),$(".back").mouseleave(function(){$(this).css("transform","rotateY(180deg)"),$(".front").css("transform","rotateY(0deg)"),$(this).css("transform","rotateY(0deg)")})}),$(function(){$(window).scroll(function(){var n=$(window).scrollTop(),e=$(window).width();n>0?($(".top").css("display","block"),$(".top").css("left",e-36+"px")):$(".top").css("display","none")}),$(".top").click(function(){$(window).scrollTop();$("body,html").animate({scrollTop:0},500)})}),$(function(){$(".topnav").mouseenter(function(){$(".navpanel ").show()}),$(".topnav").mouseleave(function(){$(".navpanel ").hide()}),$(".nav-1").mouseenter(function(){$("#nav-1-l .angle").show(),$("#nav-1-l").addClass("nav-l-hover")}),$(".nav-1").mouseleave(function(){$("#nav-1-l .angle").hide(),$("#nav-1-l").removeClass("nav-l-hover")}),$("#nav-1-l").mouseenter(function(){$("#nav-1-l .angle").show()}),$("#nav-1-l").mouseleave(function(){$("#nav-1-l .angle").hide()}),$(".nav-2").mouseenter(function(){$("#nav-2-l .angle").show(),$("#nav-2-l").addClass("nav-l-hover")}),$(".nav-2").mouseleave(function(){$("#nav-2-l .angle").hide(),$("#nav-2-l").removeClass("nav-l-hover")}),$("#nav-2-l").mouseenter(function(){$("#nav-2-l .angle").show()}),$("#nav-2-l").mouseleave(function(){$("#nav-2-l .angle").hide()}),$(".nav-3").mouseenter(function(){$("#nav-3-l .angle").show(),$("#nav-3-l").addClass("nav-l-hover")}),$(".nav-3").mouseleave(function(){$("#nav-3-l .angle").hide(),$("#nav-3-l").removeClass("nav-l-hover")}),$("#nav-3-l").mouseenter(function(){$("#nav-3-l .angle").show()}),$("#nav-3-l").mouseleave(function(){$("#nav-3-l .angle").hide()}),$(".nav-4").mouseenter(function(){$("#nav-4-l .angle").show(),$("#nav-4-l").addClass("nav-l-hover")}),$(".nav-4").mouseleave(function(){$("#nav-4-l .angle").hide(),$("#nav-4-l").removeClass("nav-l-hover")}),$("#nav-4-l").mouseenter(function(){$("#nav-4-l .angle").show()}),$("#nav-4-l").mouseleave(function(){$("#nav-4-l .angle").hide()})}),$(document).ready(function(n){linumA=$(".worklist li").length,wA=187*linumA,$(".worklist").css("width",wA+"px"),$(".swaplist1").html($(".mainlist1").html()),$(".arrow-right").click(function(){$(".swaplist1,.mainlist1").is(":animated")&&$(".swaplist1,.mainlist1").stop(!0,!0),$(".mainlist1 li").length>3&&(mlA=parseInt($(".mainlist1").css("left")),slA=parseInt($(".swaplist1").css("left")),mlA<=0&&mlA>-1*wA?($(".swaplist1").css({left:"561px"}),$(".mainlist1").animate({left:mlA-561+"px"},"slow"),mlA==-1*(wA-561)&&$(".swaplist1").animate({left:"0"},"slow")):($(".mainlist1").css({left:"561px"}),$(".swaplist1").animate({left:slA-561+"px"},"slow"),slA==-1*(wA-561)&&$(".mainlist1").animate({left:"0"},"slow")))}),$(".arrow-left").click(function(){$(".swaplist1,.mainlist1").is(":animated")&&$(".swaplist1,.mainlist1").stop(!0,!0),$(".mainlist1 li").length>3&&(mlA=parseInt($(".mainlist1").css("left")),slA=parseInt($(".swaplist1").css("left")),mlA<=0&&mlA>-1*wA?($(".swaplist1").css({left:-1*wA+"px"}),$(".mainlist1").animate({left:mlA+561+"px"},"slow"),0==mlA&&$(".swaplist1").animate({left:-1*(wA-561)+"px"},"slow")):($(".mainlist1").css({left:-1*(wA-561)+"px"}),$(".swaplist1").animate({left:slA+561+"px"},"slow"),0==slA&&$(".mainlist1").animate({left:"0"},"slow")))})}),$(document).ready(function(n){time=window.setInterval(function(){$(".banner-right2").click()},5e3),linum=$(".mainlist li").length,w=160*linum,$(".piclist").css("width",w+"px"),$(".swaplist").html($(".mainlist").html()),$(".banner-right2").click(function(){$(".swaplist,.mainlist").is(":animated")&&$(".swaplist,.mainlist").stop(!0,!0),$(".mainlist li").length>6&&(ml=parseInt($(".mainlist").css("left")),sl=parseInt($(".swaplist").css("left")),ml<=0&&ml>-1*w?($(".swaplist").css({left:"960px"}),$(".mainlist").animate({left:ml-960+"px"},"slow"),ml==-1*(w-960)&&$(".swaplist").animate({left:"0"},"slow")):($(".mainlist").css({left:"960px"}),$(".swaplist").animate({left:sl-960+"px"},"slow"),sl==-1*(w-960)&&$(".mainlist").animate({left:"0"},"slow")))}),$(".banner-left2").click(function(){$(".swaplist,.mainlist").is(":animated")&&$(".swaplist,.mainlist").stop(!0,!0),$(".mainlist li").length>6&&(ml=parseInt($(".mainlist").css("left")),sl=parseInt($(".swaplist").css("left")),ml<=0&&ml>-1*w?($(".swaplist").css({left:-1*w+"px"}),$(".mainlist").animate({left:ml+960+"px"},"slow"),0==ml&&$(".swaplist").animate({left:-1*(w-960)+"px"},"slow")):($(".mainlist").css({left:-1*(w-960)+"px"}),$(".swaplist").animate({left:sl+960+"px"},"slow"),0==sl&&$(".mainlist").animate({left:"0px"},"slow")))})}),$(function(){$("#search-text").on("click",function(n){$(".hot-words").hide(),$("#search-submit").addClass("search-submit-focus"),$(document).on("click",function(){$(".hot-words").show(),$("#search-submit").removeClass("search-submit-focus")}),n.stopPropagation()}),$("#search-submit").on("click",function(n){n.stopPropagation()}),$(".hot-words").on("click",function(n){n.stopPropagation()})}),$(function(n,e,l,a){Slider=function(e,l){"use strict";function a(){var e=d.children();t(),"hover"==w?e.mouseover(function(){$();var e=n(this).index();o(e,l.mode)}).mouseout(function(){h&&s()}):e.click(function(){$();var e=n(this).index();o(e,l.mode),h&&s()}),h&&s()}function t(){var n=e.children().first();"slide"==l.mode?n.width(b):n.children().css({position:"absolute",left:0,top:0}).first().siblings().hide()}function s(){m=setInterval(function(){i(r)},l.time)}function i(n){var e;e=n==x-1?0:n+1,o(e,l.mode)}function o(n,e){p.stop(!0,!0),g.stop(!0,!0),"slide"==e?function(){if(n>r)p.animate({left:"-="+Math.abs(n-r)*C+"px"},f);else{if(!(r>n))return;p.animate({left:"+="+Math.abs(n-r)*C+"px"},f)}}():function(){p.children(":visible").index()!=n&&p.children().fadeOut(f).eq(n).fadeIn(f)}();try{d.children("."+u).removeClass(u),d.children().eq(n).addClass(u)}catch(a){}r=n,l.exchangeEnd&&"function"==typeof l.exchangeEnd&&l.exchangeEnd.call(this,r)}function $(){clearInterval(m)}function c(){$(),i(0==r?x-2:r-2),h&&s()}function v(){$(),i(r==x-1?-1:r),h&&s()}if(e){var m,l=l||{},r=0,u=l.activeControllerCls,f=l.delay,h=l.auto,d=l.controller,w=l.event,p=e.children().first(),g=p.children(),x=g.length,C=e.width(),b=C*g.length;return a(),{prev:function(){c()},next:function(){v()}}}}}(jQuery,window,document)),$(function(){$("#teb li").each(function(n){var e=$(this);$(this).mouseover(function(){timeoutid=setTimeout(function(){$("div.block").removeClass("block"),$("#teb li.week-day-hover").removeClass("week-day-hover"),$(".week-list").eq(n).addClass("block"),$(e).addClass("week-day-hover")},88)}).mouseout(function(){clearTimeout(timeoutid)})}),$("#teb1 li").each(function(n){var e=$(this);$(this).mouseover(function(){timeoutid=setTimeout(function(){$("div.block1").removeClass("block1"),$("#teb1 li.hot-lesson-hover").removeClass("hot-lesson-hover"),$(".hot-lessonbox").eq(n).addClass("block1"),$(e).addClass("hot-lesson-hover")},88)}).mouseout(function(){clearTimeout(timeoutid)})})}),$(function(){$(".nav-1").mouseenter(function(){$("#nav-1-l .angle").show(),$("#nav-1-l").addClass("nav-l-hover")}),$(".nav-1").mouseleave(function(){$("#nav-1-l .angle").hide(),$("#nav-1-l").removeClass("nav-l-hover")}),$("#nav-1-l").mouseenter(function(){$("#nav-1-l .angle").show()}),$("#nav-1-l").mouseleave(function(){$("#nav-1-l .angle").hide()}),$(".nav-2").mouseenter(function(){$("#nav-2-l .angle").show(),$("#nav-2-l").addClass("nav-l-hover")}),$(".nav-2").mouseleave(function(){$("#nav-2-l .angle").hide(),$("#nav-2-l").removeClass("nav-l-hover")}),$("#nav-2-l").mouseenter(function(){$("#nav-2-l .angle").show()}),$("#nav-2-l").mouseleave(function(){$("#nav-2-l .angle").hide()}),$(".nav-3").mouseenter(function(){$("#nav-3-l .angle").show(),$("#nav-3-l").addClass("nav-l-hover")}),$(".nav-3").mouseleave(function(){$("#nav-3-l .angle").hide(),$("#nav-3-l").removeClass("nav-l-hover")}),$("#nav-3-l").mouseenter(function(){$("#nav-3-l .angle").show()}),$("#nav-3-l").mouseleave(function(){$("#nav-3-l .angle").hide()}),$(".nav-4").mouseenter(function(){$("#nav-4-l .angle").show(),$("#nav-4-l").addClass("nav-l-hover")}),$(".nav-4").mouseleave(function(){$("#nav-4-l .angle").hide(),$("#nav-4-l").removeClass("nav-l-hover")}),$("#nav-4-l").mouseenter(function(){$("#nav-4-l .angle").show()}),$("#nav-4-l").mouseleave(function(){$("#nav-4-l .angle").hide()})});