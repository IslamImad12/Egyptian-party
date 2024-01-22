$('.close').on('click',function(){
    $('.sidenav').slideToggle(1000)
})
$(document).ready(function(){
    $('#loading').fadeOut(800,function(){
        $('body').css('overflow','visible')
    })
})
// toggle section 2
$('.singer-content1').slideDown(500);
$('.singer-content2').slideUp(500);
$('.singer-content3').slideUp(500);
$('.singer-content4').slideUp(500);

$('.singer1').on('click',function(){
    $('.singer-content1').slideToggle(500);
    $('.singer-content2').slideUp(500);
    $('.singer-content3').slideUp(500);
    $('.singer-content4').slideUp(500);

})
$('.singer2').on('click',function(){
    $('.singer-content1').slideUp(500);
    $('.singer-content2').slideToggle(500);
    $('.singer-content3').slideUp(500);
    $('.singer-content4').slideUp(500);
})
$('.singer3').on('click',function(){
    $('.singer-content1').slideUp(500);
    $('.singer-content2').slideUp(500);
    $('.singer-content3').slideToggle(500);
    $('.singer-content4').slideUp(500);
})
$('.singer4').on('click',function(){
    $('.singer-content1').slideUp(500);
    $('.singer-content2').slideUp(500);
    $('.singer-content3').slideUp(500);
    $('.singer-content4').slideToggle(500);
})
// characters
$('button').on('click',function(){
    let x = $('input').val()
    $('input').val('ahmed')
})

// textarea
let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
            $("#chars").text("your available character finished");
            }
        else{
        $("#chars").text(AmountLeft);
        }
});

// section 3
let s=59;
let m=59;
let h=24;
let d=10;

setInterval(function(){
    if(d<0){
        clearInterval();
        
    }
    else {
document.getElementById('days').innerHTML=`
<span class="text-white days"  id="days">${d} d</span>
`;
    }
    d--;
},36000000); 

setInterval(function(){
    if(d<0){
        clearInterval();
    }
    else {
        if(h<0){
            h=24;
        }
        else {
    document.getElementById('hour').innerHTML=`
    <span class="text-white hour"  id="hour">${h} h</span>
    `;
        }
        h--;
    }
},3600000); 


    setInterval(function(){
        if(d<0){
            clearInterval();
        }
        else {
            if(m<0){
                m=59;
            }
            else {
        document.getElementById('minute').innerHTML=`
        <span class="text-white minute"  id="minute">${m} m</span>
        `;
            }
            m--;
        }
    },60000) 

    setInterval(function(){
        if(d<0){
            clearInterval();
        }
        else {
            if(s<0){
                s=59;
            }
            else {
        document.getElementById('second').innerHTML=`
        <span class="text-white second">${s} s</span>
        `;
            }
            s--;
        }
    },1000) 












//// let i=99;
//// function characters(){
////     if(i>=0){
////         document.getElementById('chars').innerHTML=`
////        <span id="chars" class="text-danger">${i}</span>
////         `;
////         console.log(i);
////         i--;
////         if (event.code === "Escape") {
////             i++;
////           }
////     }
//// } 




