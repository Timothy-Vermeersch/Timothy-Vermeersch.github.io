
function update(){
    console.log("Called");
    var ref = database.ref();
    console.log(childSnapshot.child("test").val());
    ref.once("value")
  	.then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var test = document.getElementById("test");
        var testtwo = document.createTextNode(childSnapshot.child("test").val());
        var para = document.createElement("P");
        para.append(testtwo);
        test.innerHTML = childSnapshot.child("test").val();
  });
  	});
}

window.setInterval(update,100);
