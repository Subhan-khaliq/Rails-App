// $("#remove_user").on("click",function(event){
//   alert("I am clicked");
//   debugger
//   $.ajax({
//       type: "POST",
//       url: "/users/" + id,
//       dataType: "json",
//       data: {"_method":"delete"}
//       // complete: function(){
//       //     $( "#SlotAllocationForm" ).dialog( "close" );
//       //     alert("Deleted successfully");
//       // }
//   });
//   event.preventDefault();
// });
$(".remove_user").on("click", function(){
  alert("I am Clicked!")
  debugger
  if(confirm("Are you sure?")){
       $(this).closest('tr').delay().fadeOut();
   } else{
      return false;
  }
});


