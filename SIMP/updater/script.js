function update(){
    console.log("Called");
    var ref = database.ref();
    console.log(ref);
    ref.once("value")
  	.then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var test = document.getElementById("test");
        test.innerHTML = childSnapshot.child("test").val();
  });
  	});
}
var ref = database.ref();
window.setInterval(update,100);
