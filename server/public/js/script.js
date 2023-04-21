var parent = document.getElementById("sale_parent");
var child = document.getElementById("sale_description");
var addButton = document.getElementById("add_button");
var duplicate;
addButton.onclick = function () {
  var duplicate = child.cloneNode(true);
  duplicate.id = "duplicate_" + Date.now();
  var removebtn = document.createElement("button");
  removebtn.innerHTML = "x";
  removebtn.onclick = function () {
    duplicate.remove();
  };
  duplicate.appendChild(removebtn);
  parent.appendChild(duplicate);
};

function getData() {
  var inputs = [
    "sr_input",
    "date",
    "year_select",
    "get_po",
    "get_po_date",
    "get_eway",
    "get_challan",
    "get_ch_date",
    "get_transport",
    "get_v_name",
    "get_v_address",
    "get_city",
    "get_state",
    "get_gst",
    "get_pincode",
    "Sr. no",
    "Item Code",
    "Description",
    "HSN Code",
    "Qty",
    "Rate",
    "Amount",
  ];
  var values = [];
  inputs.forEach(function (input) {
    var element = document.querySelector(
      `input[name="${input}"],input[placeholder="${input}"],select[name="${input}"],textarea[name="${input}"]`
    );
    values.push(element.value);
  });
}
