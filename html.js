$(document).ready(function(){
$(".team-member").click(function(){
   const memberName = $(this).find("h2").text();
   const memberImg = $(this).find("img").attr("src");
   const memberDesc = $(this).find("p").text();
   
    
   $("#modal-title").text(memberName);
   $("#modal-img").attr("src",memberImg);
   $("#modal-img").attr("alt",memberName);
   $("#modal-desc").text(memberDesc);


   $("#modal").fadeIn(300);
})


$("#close-btn,#modal").click(function(event){
if ((event.target = this )) {
    $("#modal").fadeOut(300);
}
})
});























