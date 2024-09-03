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

// Thay đổi hình ảnh của quạt
document.getElementById("onButton").addEventListener("click", function () {
  var fanImage = document.getElementById("fanImage");
  fanImage.src = "./assets/media/fan/on.svg";
  fanImage.classList.add("rotate"); // Thêm lớp để quay
  document.getElementById("onButton").classList.add("active");
  document.getElementById("offButton").classList.remove("active");
});

document.getElementById("offButton").addEventListener("click", function () {
  var fanImage = document.getElementById("fanImage");
  fanImage.src = "./assets/media/fan/off.svg";
  fanImage.classList.remove("rotate"); // Bỏ lớp để dừng quay
  document.getElementById("offButton").classList.add("active");
  document.getElementById("onButton").classList.remove("active");
});

// // Thay đổi hình ảnh của đèn
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("onButtonLight")
    .addEventListener("click", function () {
      document.getElementById("lightImage").src = "./assets/media/light/on.svg";
      document.getElementById("onButtonLight").classList.add("active");
      document.getElementById("offButtonLight").classList.remove("active");
    });

  document
    .getElementById("offButtonLight")
    .addEventListener("click", function () {
      document.getElementById("lightImage").src =
        "./assets/media/light/off.svg";
      document.getElementById("offButtonLight").classList.add("active");
      document.getElementById("onButtonLight").classList.remove("active");
    });
  document.getElementById("offButtonLight").click();
  document.getElementById("offAC").click();
  document.getElementById("offButton").click();
});

// Thay đổi hình ảnh của điều hòa
document.getElementById("onAC").addEventListener("click", function () {
  document.getElementById("acImage").src =
    "./assets/media/airconditioner/on.svg";
  document.getElementById("onAC").classList.add("active");
  document.getElementById("offAC").classList.remove("active");
});

document.getElementById("offAC").addEventListener("click", function () {
  document.getElementById("acImage").src =
    "./assets/media/airconditioner/off.svg";
  document.getElementById("offAC").classList.add("active");
  document.getElementById("onAC").classList.remove("active");
});

const ctx = document.getElementById("lineChart").getContext("2d");

// Hàm để tạo dữ liệu ngẫu nhiên
function getRandomData(baseValue, range, changeRate) {
  const change = Math.random() * changeRate * 2 - changeRate;
  const newValue = baseValue + change;
  return Math.max(Math.min(newValue, baseValue + range), baseValue - range);
}

// Tạo dữ liệu ban đầu
const initialData = {
  labels: [
    "30 sec ago",
    "25 sec ago",
    "20 sec ago",
    "15 sec ago",
    "10 sec ago",
    "5 sec ago",
    "now",
  ],
  datasets: [
    {
      label: "Temperature (°C)",
      borderColor: "red",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
      data: Array.from({ length: 7 }, () => getRandomData(23, 1, 0.5)),
    },
    {
      label: "Humidity (%)",
      borderColor: "blue",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      data: Array.from({ length: 7 }, () => getRandomData(60, 2, 1)),
    },
    {
      label: "Light (Lux)",
      borderColor: "green",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      data: Array.from({ length: 7 }, () => getRandomData(320, 10, 5)),
    },
  ],
};

// Tạo biểu đồ
const chart = new Chart(ctx, {
  type: "line",
  data: initialData,
  options: {
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: initialData.labels,
      },
      y: {
        beginAtZero: false,
      },
    },
  },
});

// Cập nhật dữ liệu mỗi 5 giây
setInterval(() => {
  // Xóa nhãn đầu tiên (30 sec ago)
  chart.data.labels.shift();
  // Thêm nhãn mới "now"
  chart.data.labels.push("now");

  // Thêm dữ liệu mới cho mỗi dòng
  chart.data.datasets.forEach((dataset, index) => {
    const baseValue = dataset.data[dataset.data.length - 1];
    const newData = getRandomData(
      baseValue,
      index === 0 ? 1 : index === 1 ? 2 : 10,
      index === 0 ? 0.5 : index === 1 ? 1 : 5
    );
    dataset.data.shift(); // Loại bỏ dữ liệu cũ nhất
    dataset.data.push(newData);
  });

  // Cập nhật nhãn còn lại
  for (let i = 0; i < chart.data.labels.length - 1; i++) {
    const secondsAgo = parseInt(chart.data.labels[i].split(" ")[0]) - 5;
    chart.data.labels[i] = `${secondsAgo} sec ago`;
  }

  chart.update(); // Cập nhật biểu đồ
}, 5000);

// Chuyển hướng trang
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
