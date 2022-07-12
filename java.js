$(".selectFilter").on("change",function(){var e=$(this).data("target"),i=$(this).find(":selected").data("ref");$("select."+e).val("-1"),null==i?$("select."+e).find("option").each(function(){console.log("inside undefined"),$(this).removeAttr("disabled hidden")}):$("select."+e).find("option").each(function(){var e=$(this).data("belong"),t=$(this).val();i!=e&&-1!=t?($(this).prop("disabled",!0),$(this).prop("hidden",!0)):($(this).prop("disabled",!1),$(this).prop("hidden",!1))})});

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

let pstate = document.querySelector("#pstate")
    let pcity = document.querySelector("#pcity")
    let pzip = document.querySelector("#pzip")
    let pphonenumber = document.querySelector("#pphonenumber")

    let tstate = document.querySelector("#tstate")
    let tcity = document.querySelector("#tcity")
    let tzip = document.querySelector("#tzip")
    let tphonenumber = document.querySelector("#tphonenumber")

    let sameaspermanent = document.querySelector("#sameaspermanent")
    sameaspermanent.addEventListener('change', () => {
            if (sameaspermanent.checked === true) {
                tstate.value = pstate.value;
                tcity.value = pcity.value;
                tzip.value = pzip.value;
                tphonenumber.value = pphonenumber.value;
            } else if (sameaspermanent.checked === false) {
                tstate.value = "";
                tcity.value = "";
                tzip.value = "";
                tphonenumber.value = "";
            }
        })