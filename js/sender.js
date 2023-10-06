function kirimPesan() {
  var nama = document.getElementById("nama");
  var email = document.getElementById("email");
  var pesan = document.getElementById("pesan");
  var mob = document.getElementById("mobilenum");

  var gabungan =
    "%0A🎉💌🌐 Anda telah menerima pesan baru dari formulir kontak website Anda! 🌐💌🎉%0A%0A" +
    "%0A🔍 Berikut adalah detailnya: 🔍%0A" +
    "%0A👤 Nama Lengkap:%0A" +
    nama.value +
    "%0A" +
    "%0A📧 Email:%0A " +
    email.value +
    "%0A" +
    "%0A📱 Nomor Handphone:%0A" +
    mob.value +
    "%0A" +
    "%0A💬 Pesan:%0A" +
    pesan.value +
    "%0A%0A" +
    "%0A==============================%0A%0A" +
    "%0A🎉💌🌐 You have received a new message from your website contact form! 🌐💌🎉%0A%0A" +
    "%0A🔍 Here are the details: 🔍%0A%0A" +
    "%0A👤 Full Name:%0A" +
    nama.value +
    "%0A" +
    "%0A📧 Email:%0A" +
    email.value +
    "%0A" +
    "%0A📱 Mobile Number:%0A" +
    mob.value +
    "%0A" +
    "%0A💬 Message:%0A" +
    pesan.value;

  var token = "6478474280:AAEtVYpSeZGWvW88zxAl5GcH0j6_Q3sHp7g";
  var grup = "-4064464212";

  // Encoding gabungan agar aman digunakan dalam URL
  var encodedMessage = encodeURIComponent(gabungan);

  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
    method: `POST`,
  });

  // Menampilkan modal SweetAlert
  swal({
    title: "Pesan Terkirim!",
    text: "Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda kembali! / Your message has been successfully sent. I will contact you back shortly!",
    icon: "success",
    button: "Oke",
  });
  return false;
}
