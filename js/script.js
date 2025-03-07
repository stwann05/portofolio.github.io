function sendWhatsAppMessage() {
  var phoneNumber = "62895360594129"; // Ganti dengan nomor WhatsApp kamu
  var message = "Halo, saya tertarik dengan portofolio Anda!";

  var url =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
