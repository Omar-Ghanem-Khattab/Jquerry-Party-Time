$(function () {
    // SECTION - Loading page 
  $('.sk-circle').fadeOut(1000,function () { 
     $('.LoadingPage').fadeOut(1000 ,function () { 
        $('body').css('overflow','auto');
        $('.LoadingPage').remove();
      });
   });
//SECTION -  Opening 
    $("#opening").click(()=>{
        $(".side-nav-bar").animate({left:"0"},700)
      })
      $(".closser").click(()=> {
        let width = $(".side-nav-bar").innerWidth();
        $(".side-nav-bar").animate({left:`-${width}`},700)
    })

//SECTION - duration
   
$('.Singer h3').click(function () { 
    $(this).next().slideToggle(500);
    $(this).parent().siblings().children('p').slideUp();
});
 
//SECTION - Details

let counterDownDate = new Date("Oct 25,2023 23:59:59").getTime()
 setInterval(()=>{
  let dateNow = new Date().getTime();
  let dateDiff = counterDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60 ) / 1000);
  $("#days").html(days<10?`0${days}`:days)
  $("#hours").html(hours<10?`0${hours}`:hours)
  $("#mins").html(minutes<10?`0${minutes}`:minutes)
  $("#secs").html(seconds<10?`0${seconds}`:seconds)
},1000)


//SECTION - Contacts 

$('#charCounter').keyup(function () { 
    let maxLength = 100;
    let textVal = $(this).val();
    let textLength =  textVal.length;
    let diffLength = maxLength - textLength;
    if (diffLength>0) {
        $('#length').html(diffLength);
        $('#alerting').removeClass('d-none')
        $('#alert').addClass('d-none')
    } else{
       $('#alerting').addClass('d-none')
       $('#alert').removeClass('d-none')
    }
});



//SECTION - Scroll speed

$("a[href^='#']").click(function (eventInfo) { 
    let aHref =  eventInfo.target.getAttribute('href');
    let sectionOffset =  $(aHref).offset().top;
   $('html,body').animate({scrollTop:sectionOffset}, 1500)
  });


let clintLocation = $('#duration').offset().top
$(window).scroll(function () {

let windowScroll = $(window).scrollTop();
if (windowScroll > clintLocation -500) {
 
    $('#opening').fadeOut(200)
    
}else{
    $('#opening').fadeIn(500)
} 
console.log(clintLocation);
})




});








































