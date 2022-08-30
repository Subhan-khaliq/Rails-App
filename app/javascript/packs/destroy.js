$(".remove_user").on("click",function(event){
  // debugger
  var user_id = $(this).data('id');
  // alert(user_id);
  event.preventDefault();

  $.ajax({

      type: "POST",
      url: "/users/" + user_id,
      dataType: "script",
      data: {"_method":"delete"},
      success: function() {
        debugger

        $(".remove_user").closest('tr').remove();

    },
      error: function() {
        alert("This is an error!");
  }
});

});


// $(".remove_user").on("click", function(){
//   alert("I am Clicked!");
//   debugger
//   if(confirm("Are you sure?")){
//        $(this).closest('tr').delay().fadeOut();
//    } else{
//       return false;
//   }
// });


