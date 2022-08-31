$(".remove_user").on("click",function(event){
  // debugger
  var user_id = $(this).data('id');
  var row = $(this);

  // alert(user_id);
  event.preventDefault();

  $.ajax({

      type: "POST",
      url: "/users/" + user_id,
      dataType: "script",
      data: {"_method":"delete"},
      success: function() {
        $(row).closest("tr").remove();

    },
      error: function() {
        alert("This is an error!");
  }
});

});
