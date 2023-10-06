<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

setcookie('name', 'value', [
    'samesite' => 'None',
    'secure' => true, // Cookie akan dikirim hanya melalui HTTPS
    'httponly' => true, // Cookie tidak dapat diakses melalui JavaScript
]);
  

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $firstName = isset($_POST["firstname"]) ? $_POST["firstname"] : '';
    $lastName = isset($_POST["lastName"]) ? $_POST["lastName"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $mobileNumber = isset($_POST["mobilenumber"]) ? $_POST["mobilenumber"] : '';
    $emailSubject = isset($_POST["emailsubject"]) ? $_POST["emailsubject"] : '';
    $message = isset($_POST["message"]) ? $_POST["message"] : '';
    
    $botToken = "6478474280:AAEtVYpSeZGWvW88zxAl5GcH0j6_Q3sHp7g";
    $chatId = "893691683";
    
    $text = "🎉💌🌐 Anda telah menerima pesan baru dari formulir kontak website Anda! 🌐💌🎉\n\n" .
            "🔍 Berikut adalah detailnya: 🔍\n\n" .
            "👤 Nama Depan: $firstName\n" .
            "👤 Nama Belakang: $lastName\n" .
            "📧 Email: $email\n" .
            "📱 Nomor Handphone: $mobileNumber\n" .
            "📄 Subjek: $emailSubject\n" .
            "💬 Pesan:\n$message\n\n" .
            "==============================\n\n" .
            "🎉💌🌐 You have received a new message from your website contact form! 🌐💌🎉\n\n" .
            "🔍 Here are the details: 🔍\n\n" .
            "👤 First Name: $firstName\n" .
            "👤 Last Name: $lastName\n" .
            "📧 Email: $email\n" .
            "📱 Mobile Number: $mobileNumber\n" .
            "📄 Subject: $emailSubject\n" .
            "💬 Message:\n$message";

    $url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text);
    file_get_contents($url);
    
    echo "<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>"; // Pastikan Anda memiliki SweetAlert di halaman Anda
    echo "<script>
    swal({
        title: 'Terima Kasih, $firstName $lastName!',
        text: 'Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda kembali! / Your message has been successfully sent. I will contact you back shortly!',
        icon: 'success',
        buttons: {
            confirm: {
                text: 'Tutup',
                value: true,
                visible: true,
                className: 'btn-confirm',
                closeModal: true
            }
        },
        dangerMode: false,
        closeOnClickOutside: true,
        timer: 7000,
        className: 'custom-swal'
    }).then(function() {
        window.location.href='index.html';
    });
</script>";

echo "<style>
    .custom-swal {
        background-color: #ffffff!important;
        border-radius: 15px!important;
        color: #333333!important;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)!important;
        text-align: center!important;
    }
    .swal-title {
        font-size: 2rem!important;
        font-weight: 700!important;
        margin-bottom: 20px!important;
    }
    .swal-text {
        font-size: 1rem!important;
        line-height: 1.5!important;
        margin-bottom: 20px!important;
    }
    .btn-confirm {
        background-color: #4CAF50!important; /* Green background */
        color: #ffffff!important; /* White text */
        border: none!important;
        padding: 10px 20px!important; /* Some padding */
        cursor: pointer!important; /* Pointer/hand icon */
        border-radius: 15px!important; /* Rounded corners */
        font-size: 1rem!important;
    }
    .btn-confirm:hover {
        background-color: #45a049!important; /* Darker green */
    }
</style>";

}
?>
