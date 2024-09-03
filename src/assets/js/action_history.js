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
document.addEventListener("DOMContentLoaded", function () {
  var filterButton = document.getElementById("filterButton");

  if (filterButton) {
    filterButton.addEventListener("click", function () {});
  } else {
    console.error('Button with ID "filterButton" not found.');
  }
});
