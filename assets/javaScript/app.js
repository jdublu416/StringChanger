$(document).ready(function() {
  let strOrig;
  let strFind;
  let strReplace;
  let newStr;

  function ReplaceString(strOrig, strFind, strReplace) {
    let x = strOrig;
    let y = strFind;
    let z = strReplace;
    let origArr = [];
    /* for testing and UI build
    let newStr = x.replace(y, z);
    */

    if (x.includes(" ")) {
      origArr = x.split(" ");
      console.log(origArr);
      for (let i = 0; i < origArr.length; i++) {
        if (origArr[i] === y) {
          origArr[i] = z;
        }
      }
      return newStr = origArr.join(" ");
    } else {
      origArr = x.split("");
      console.log(origArr);
      for (let i = 0; i < origArr.length; i++) {
        if (origArr[i] === y) {
          origArr[i] = z;
        }
      }
    }
    return newStr = origArr.join("");
  }
 
  function reset() {
    
    $("#strOrig").val("");
    $("#strFind").val("");
    $("#strReplace").val("");
    $("#strOrig").focus();
  }

  $("#formSubmit").on("click", function(e) {
    e.preventDefault();
    //grab value from input
    strOrig = $("#strOrig")
      .val()
      .trim();
    strFind = $("#strFind")
      .val()
      .trim();
    strReplace = $("#strReplace")
      .val()
      .trim();
    //assign function call to variable
    ReplaceString(strOrig, strFind, strReplace);
    console.log(newStr);
    // output to document
    $("#display").text(newStr);
    reset();
  });
});
