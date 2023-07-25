function changeInnerHTML() {
    var myDiv = document.getElementById("product");
    myDiv.innerHTML = "We will update our product soon!😊";
    
  }
  
  function changeTitle(newTitle) {
    document.title ="DK Tech - "+newTitle  ;
  }
  function changeContent(){
    changeInnerHTML();
    changeTitle('product');
    change();
  }
  function change(){
    document.getElementById("dk").innerHTML="";
  }
 