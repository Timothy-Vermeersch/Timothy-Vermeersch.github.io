
function update(){
    console.log("Called");
    var ref = database.ref();
    console.log(ref);
    ref.once("value")
  	.then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var test = document.getElementById("test");
        var testtwo = document.createTextNode(childSnapshot.child("test").val());
        test.innerHTML = childSnapshot.child("test").val();
  });
  	});
}

window.setInterval(update,100);
