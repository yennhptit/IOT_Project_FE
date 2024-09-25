function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB"); // Định dạng ngày theo DD/MM/YYYY
  const time = now.toLocaleTimeString(); // Định dạng thời gian HH:MM:SS

  document.getElementById("currentDate").textContent = date;
  document.getElementById("currentTime").textContent = time;
}

// Cập nhật ngày giờ ngay khi tải trang
updateDateTime();

// Cập nhật giờ mỗi giây
setInterval(updateDateTime, 1000);
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các liên kết theo ID
  const dashboardLink = document.getElementById("dashboardLink");
  const dataSensorLink = document.getElementById("dataSensorLink");
  const actionHistoryLink = document.getElementById("actionHistoryLink");
  const profileLink = document.getElementById("profileLink");

  // Thêm sự kiện click cho từng liên kết
  dashboardLink.addEventListener("click", function () {
    window.location.href = dashboardLink.href;
  });

  dataSensorLink.addEventListener("click", function () {
    window.location.href = dataSensorLink.href;
  });

  actionHistoryLink.addEventListener("click", function () {
    window.location.href = actionHistoryLink.href;
  });

  profileLink.addEventListener("click", function () {
    window.location.href = profileLink.href;
  });
});
// $("#example").DataTable({
//   initComplete: function () {
//     var table = this.api();

//     $("#temp-min, #temp-max").keyup(function () {
//       table.draw();
//     });
//   },
//   drawCallback: function (settings) {
//     var api = this.api();
//     var min = parseFloat($("#temp-min").val(), 10);
//     var max = parseFloat($("#temp-max").val(), 10);

//     api.rows().every(function () {
//       var data = this.data();
//       var temp = parseFloat(data[2]) || 0; // Cột 2 là Temperature
//       if (
//         (isNaN(min) && isNaN(max)) ||
//         (isNaN(min) && temp <= max) ||
//         (min <= temp && isNaN(max)) ||
//         (min <= temp && temp <= max)
//       ) {
//         $(this.node()).show();
//       } else {
//         $(this.node()).hide();
//       }
//     });
//   },
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var filterButton = document.getElementById("filterButton");

//   if (filterButton) {
//     filterButton.addEventListener("click", function () {});
//   } else {
//     console.error('Button with ID "filterButton" not found.');
//   }
// });
