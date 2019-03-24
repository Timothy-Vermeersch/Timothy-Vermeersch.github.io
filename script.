var currentRestroom = 0;
function update(){
    console.log("Called");
    var ref = database.ref();
    console.log(ref);
     currentRestroom = 0;
    ref.once("value")
  	.then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
        heatValue(childSnapshot);
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
  	});
}

function heatValue(snapshot){
  if(snapshot.child("heating).val()){
    document.createTextNode("The coils are heating.");
   }else{
    document.createTextNode("The coils are not heating.");
   }
}

var resetFunc = function resetFunction(buttonId){
    var resetName = buttonId.substring(5,buttonId.length);
    var ref = database.ref();
    ref.once("value")
  	.then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childSnapshot.child("heating").ref.set(!childSnapshot.child.val());
  });
  	});
}
var ref = database.ref();
//console.log(ref);
window.setInterval(update,100);
