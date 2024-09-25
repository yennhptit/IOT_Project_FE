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
// function updateFanStatus(action) {
//   const fanImage = document.getElementById("fanImage");
//   const isOn = action === "on";
//   fanImage.src = `./assets/media/fan/${action}.svg`;
//   if (isOn) fanImage.classList.add("rotate");
//   else fanImage.classList.remove("rotate");

//   // Cập nhật trạng thái nút
//   document.getElementById("onButton").classList.toggle("active", isOn);
//   document.getElementById("offButton").classList.toggle("active", !isOn);
//   document.getElementById("offButton").classList.toggle("disabled", isOn);
//   document.getElementById("onButton").classList.toggle("disabled", !isOn);

//   // Gọi API
//   fetch(`http://localhost:8080/api/action-histories/fan/${action}`, {
//     method: "POST",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         console.error(`Error turning ${action} fan:`, response.statusText);
//         // Khôi phục trạng thái nếu có lỗi
//         updateFanStatus(isOn ? "off" : "on");
//       }
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       updateFanStatus(isOn ? "off" : "on");
//     });
// }

// document.getElementById("onButton").addEventListener("click", function () {
//   updateFanStatus("on");
// });

// document.getElementById("offButton").addEventListener("click", function () {
//   updateFanStatus("off");
// });
function updateFanStatus(action) {
  // Call the API to perform the action
  fetch(`http://localhost:8080/api/action-histories/fan/${action}`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`Error turning ${action} fan:`, response.statusText);
        return; // Exit if there's an error
      }
      // If action is successful, start checking the status
      checkFanStatus(action);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function checkFanStatus(action) {
  // Check the latest device status
  fetch(`http://localhost:8080/api/device-status/latest/Fan`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch device status");
      }
      return response.json();
    })
    .then((data) => {
      console.log(action);
      if (data.status === action) {
        // If the status matches, update the fan image
        updateFanImage(action);
      } else {
        // If the status does not match, check again after 0.5 seconds
        setTimeout(() => checkFanStatus(action), 500);
      }
    })
    .catch((error) => {
      console.error("Error fetching device status:", error);
      // Retry after 0.5 seconds if there was an error
      setTimeout(() => checkFanStatus(action), 500);
    });
}

function updateFanImage(action) {
  const fanImage = document.getElementById("fanImage");
  const isOn = action === "ON";
  fanImage.src = `./assets/media/fan/${action}.svg`;
  if (isOn) fanImage.classList.add("rotate");
  else fanImage.classList.remove("rotate");

  // Update button states
  document.getElementById("onButton").classList.toggle("active", isOn);
  document.getElementById("offButton").classList.toggle("active", !isOn);
  document.getElementById("offButton").classList.toggle("disabled", isOn);
  document.getElementById("onButton").classList.toggle("disabled", !isOn);
}

// document.getElementById("onButton").addEventListener("click", function () {
//   updateFanStatus("ON");
// });

// document.getElementById("offButton").addEventListener("click", function () {
//   updateFanStatus("OFF");
// });
document.getElementById("onButton").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    // Nếu nút không ở trạng thái active
    updateFanStatus("ON");
  }
});

document.getElementById("offButton").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    // Nếu nút không ở trạng thái active
    updateFanStatus("OFF");
  }
});

function updateLightStatus(action) {
  // Call the API to perform the action
  fetch(`http://localhost:8080/api/action-histories/light/${action}`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`Error turning ${action} light:`, response.statusText);
        return; // Exit if there's an error
      }
      // If action is successful, start checking the status
      checkLightStatus(action);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function checkLightStatus(action) {
  // Check the latest device status
  fetch(`http://localhost:8080/api/device-status/latest/Light`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch device status");
      }
      return response.json();
    })
    .then((data) => {
      console.log(action);
      if (data.status === action) {
        // If the status matches, update the fan image
        updateLightImage(action);
      } else {
        // If the status does not match, check again after 0.5 seconds
        setTimeout(() => checkLightStatus(action), 500);
      }
    })
    .catch((error) => {
      console.error("Error fetching device status:", error);
      // Retry after 0.5 seconds if there was an error
      setTimeout(() => checkLightStatus(action), 500);
    });
}

function updateLightImage(action) {
  const lightImage = document.getElementById("lightImage");
  const isOn = action === "ON";
  lightImage.src = `./assets/media/light/${action}.svg`;

  // Update button states
  document.getElementById("onButtonLight").classList.toggle("active", isOn);
  document.getElementById("offButtonLight").classList.toggle("active", !isOn);
  document.getElementById("offButtonLight").classList.toggle("disabled", isOn);
  document.getElementById("onButtonLight").classList.toggle("disabled", !isOn);
}

document.getElementById("onButtonLight").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    updateLightStatus("ON");
  }
});

document
  .getElementById("offButtonLight")
  .addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      updateLightStatus("OFF");
    }
  });

function updateAirConditionerStatus(action) {
  console.log(action);
  // Call the API to perform the action
  fetch(`http://localhost:8080/api/action-histories/airconditioner/${action}`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        console.error(
          `Error turning ${action} air conditioner:`,
          response.statusText
        );
        return; // Exit if there's an error
      }
      // If action is successful, start checking the status
      checkAirConditionerStatus(action);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function checkAirConditionerStatus(action) {
  // Check the latest device status
  fetch(`http://localhost:8080/api/device-status/latest/Air Conditioner`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch device status");
      }
      return response.json();
    })
    .then((data) => {
      console.log(action);
      if (data.status === action) {
        // If the status matches, update the fan image
        updateAirConditionerImage(action);
      } else {
        // If the status does not match, check again after 0.5 seconds
        setTimeout(() => checkAirConditionerStatus(action), 500);
      }
    })
    .catch((error) => {
      console.error("Error fetching device status:", error);
      // Retry after 0.5 seconds if there was an error
      setTimeout(() => checkAirConditionerStatus(action), 500);
    });
}

function updateAirConditionerImage(action) {
  const lightImage = document.getElementById("acImage");
  const isOn = action === "ON";
  acImage.src = `./assets/media/airconditioner/${action}.svg`;

  // Update button states
  document.getElementById("onAC").classList.toggle("active", isOn);
  document.getElementById("offAC").classList.toggle("active", !isOn);
  document.getElementById("offAC").classList.toggle("disabled", isOn);
  document.getElementById("onAC").classList.toggle("disabled", !isOn);
}

document.getElementById("onAC").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    updateAirConditionerStatus("ON");
  }
});

document.getElementById("offAC").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    updateAirConditionerStatus("OFF");
  }
});
// Tương tự cho đèn
// function updateLightStatus(action) {
//   const lightImage = document.getElementById("lightImage");
//   const isOn = action === "on";
//   lightImage.src = `./assets/media/light/${action}.svg`;

//   // Cập nhật trạng thái nút
//   document.getElementById("onButtonLight").classList.toggle("active", isOn);
//   document.getElementById("offButtonLight").classList.toggle("active", !isOn);
//   document.getElementById("offButtonLight").classList.toggle("disabled", isOn);
//   document.getElementById("onButtonLight").classList.toggle("disabled", !isOn);

//   // Gọi API
//   fetch(`http://localhost:8080/api/action-histories/light/${action}`, {
//     method: "POST",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         console.error(`Error turning ${action} light:`, response.statusText);
//         // Khôi phục trạng thái nếu có lỗi
//         updateLightStatus(isOn ? "off" : "on");
//       }
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       updateLightStatus(isOn ? "off" : "on");
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("onButtonLight")
//     .addEventListener("click", function () {
//       updateLightStatus("on");
//     });

//   document
//     .getElementById("offButtonLight")
//     .addEventListener("click", function () {
//       updateLightStatus("off");
//     });
// });
// function updateACStatus(action) {
//   const acImage = document.getElementById("acImage");
//   const isOn = action === "on";
//   acImage.src = `./assets/media/airconditioner/${action}.svg`;

//   // Cập nhật trạng thái nút
//   document.getElementById("onAC").classList.toggle("active", isOn);
//   document.getElementById("offAC").classList.toggle("active", !isOn);
//   document.getElementById("offAC").classList.toggle("disabled", isOn);
//   document.getElementById("onAC").classList.toggle("disabled", !isOn);

//   // Gọi API
//   fetch(`http://localhost:8080/api/action-histories/airconditioner/${action}`, {
//     method: "POST",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         console.error(
//           `Error turning ${action} air conditioner:`,
//           response.statusText
//         );
//         // Khôi phục trạng thái nếu có lỗi
//         updateACStatus(isOn ? "off" : "on");
//       }
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       updateACStatus(isOn ? "off" : "on");
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("onAC").addEventListener("click", function () {
//     updateACStatus("on");
//   });

//   document.getElementById("offAC").addEventListener("click", function () {
//     updateACStatus("off");
//   });
// });

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

  // Fetch the latest status for the fan
  fetch("http://localhost:8080/api/device-status/latest/Fan")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fan status:", data); // Hiển thị trạng thái quạt
      updateFanImage(data.status); // Cập nhật giao diện người dùng cho quạt
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation for the fan:",
        error
      );
    });
  fetch("http://localhost:8080/api/device-status/latest/Air Conditioner")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Air Conditioner status:", data); // Hiển thị trạng thái điều hòa
      updateAirConditionerImage(data.status); // Cập nhật giao diện người dùng cho điều hòa
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation for the air conditioner:",
        error
      );
    });

  // Fetch the latest status for the light
  fetch("http://localhost:8080/api/device-status/latest/Light")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Light status:", data); // Hiển thị trạng thái đèn
      updateLightImage(data.status); // Cập nhật giao diện người dùng cho đèn
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation for the light:",
        error
      );
    });
});
