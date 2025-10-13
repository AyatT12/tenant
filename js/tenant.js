////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  var tableRows = document.getElementById("Tenants-Table").getElementsByTagName("td");
  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].addEventListener("click", function() {
      window.location.href = "tenant-data.html"; 
    });
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var rows = document.getElementById("Tenants-Table").getElementsByTagName("tr");
for (var i = 0; i < rows.length; i++) {
  rows[i].onclick = function () {
    var cells = this.getElementsByTagName("td");
    var tenantIdParagraph = cells[6].getElementsByClassName("Tenant-id")[0];
    console.log(tenantIdParagraph.innerText);
  };
}
