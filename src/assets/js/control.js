// // control.js
// const client = mqtt.connect(
//   "wss://362ad76d24a14b5b9943c3bea23ab581.s1.eu.hivemq.cloud:8884",
//   {
//     username: "nguyenhaiyen",
//     password: "B21dccn129@",
//   }
// );

// client.on("connect", () => {
//   console.log("Connected to MQTT broker");
// });

// // Hàm gửi tin nhắn MQTT
// function publishMessage(topic, message) {
//   client.publish(topic, message, (error) => {
//     if (error) {
//       console.error("Failed to publish:", error);
//     } else {
//       console.log(`Message ${message} published to topic ${topic}`);
//     }
//   });
// }

// // Điều khiển Đèn
// document
//   .getElementById("lightOn")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/light", "on")
//   );
// document
//   .getElementById("lightOff")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/light", "off")
//   );

// // Điều khiển Quạt
// document
//   .getElementById("fanOn")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/fan", "on")
//   );
// document
//   .getElementById("fanOff")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/fan", "off")
//   );

// // Điều khiển Điều hòa không khí
// document
//   .getElementById("acOn")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/airconditioner", "on")
//   );
// document
//   .getElementById("acOff")
//   .addEventListener("click", () =>
//     publishMessage("B21DCCN129/esp8266/airconditioner", "off")
//   );
