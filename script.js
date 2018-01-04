window.onload = function () {
    // splash screen disembunyikan jika page sudah terload
    $('#splash-screen').hide();
    $('body, html').css("overflow", "visible")
}

$(function () {
    // menyembunyikan semua alert mailer
    $('#mail-success-alert').hide();
    $('#mail-failed-alert').hide();
    $('#mail-sending-alert').hide();

    /** send mail ajax request (doesn't work on github.io)
    $('#mailer-submit').click(function(){
    	try{
    	var mName = escape($('#mailer-name').val());
    	var mEmail = escape($('#mailer-email').val());
    	var mMess = escape($('#mailer-message').val());
    	var errMess = "";
    	
    	if(mName && mEmail && mMess){
    		mMess += " Write with love by "+mName;
    		
    	$.ajax({
    		type: "GET",
    		url: "http://www.bankrut.16mb.com/mail_sender.php",
    		data: "from="+mEmail+"&subject=github+main+page&message="+mMess,
    		success: function(response){
    			//gak work
    			alert(response);
    		}
    	});
    		$('#mailer-name').val("");
    		$('#mailer-email').val("");
    		$('#mailer-message').val("");
    		$('#mail-success-alert').show();
    		$('#mail-success-alert').focus();
    		
    	}else{
    		if(!mName){
    			errMess += "<p>What your name?</p>";
    			
    		}
    		if(!mEmail){
    			errMess += "<p>What your email?</p>";
    			
    		}
    		if(!mMess){
    			errMess += "<p>What your messages to me?</p>";
    			
    		}
    		$('#mail-alert-error').html(errMess);
    		$('#mail-failed-alert').show();
    	}
    	}catch(err){
    		alert(err);
    	}
    	
    });
    **/

    //send mail via MailJs
    $('#mailer-submit').click(function () {
        // menampilkan alert mengirim pesan
        $('#mail-sending-alert').show();
        // menyembunyikan alert sukses
        $('#mail-success-alert').hide();
        // menyembunyikan alert failed
        $('#mail-failed-alert').hide();

        $('html, body').animate({
            scrollTop: $("#go-here").offset().top
        }, 800);

        // mengambil semua value mailer
        var mName = $('#mailer-name').val();
        var mEmail = $('#mailer-email').val();
        var mMess = $('#mailer-message').val();
        var errMess = "";

        // mengirim pesan via email.js
        try {
            if (mName && mEmail && mMess && validateEmail(mEmail)) {
                mMess += " <br>Write with love by " + mName;

                emailjs.init("user_exTxG2pfF22CpBi5quB8e");
                // parameters: service_id, template_id, template_parameters
                emailjs.send("gmail", "template_xN7dwP1P", {
                    "from_email": mEmail,
                    "name": mName,
                    "reply_email": mEmail,
                    "reply_to": "indmind page",
                    "to_name": "indmind",
                    "from_name": mName,
                    "message_html": mMess
                }).then(function (response) {
                    $('html, body').animate({
                        scrollTop: $("#go-here").offset().top
                    }, 800);
                    $('#mail-sending-alert').hide();
                    $('#mailer-name').val("");
                    $('#mailer-email').val("");
                    $('#mailer-message').val("");
                    // menampilkan alert sukses dan otomatis menutupnya selama 1 menit
                    $('#mail-success-alert').show();
                    setTimeout(function () {
                        $('#mail-success-alert').hide();
                    }, 60000);

                }, function (err) {
                    // jika terjadi error seperti koneksi terputus
                    $('html, body').animate({
                        scrollTop: $("#go-here").offset().top
                    }, 800);
                    for (var errM in err) {
                        errMess += err[errM] + " ";
                    }
                    $('#mail-sending-alert').hide();
                    $('#mail-alert-error').html("<p>Failed to send your message...<br>" + errMess + "</p>");
                    $('#mail-failed-alert').show();
                });
            } else {
                // jika mailer belum lengkap
                // validasi mailer
                if (!mName) {
                    errMess += "<p>What is your name?</p>";
                }
                if (!mEmail) {
                    errMess += "<p>What is your email?</p>";
                }
                if (!mMess) {
                    errMess += "<p>What is your messages to me?</p>";
                }
                if (mEmail && !validateEmail(mEmail)) {
                    errMess += "<p>Your email format is wrong!</p>";
                }
                $('html, body').animate({
                    scrollTop: $("#go-here").offset().top
                }, 800);
                $('#mail-sending-alert').hide();
                $('#mail-alert-error').html(errMess);
                $('#mail-failed-alert').show();
            }
        } catch (err) {
            $('#mail-sending-alert').hide();
            $('#mail-alert-error').html(err);
            $('#mail-failed-alert').show();
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $(".to-the-top").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
        var x = document.getElementById("navDemo");
        x.className = x.className.replace(" w3-show", "");
    });

    $(".to-about-me").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
        var x = document.getElementById("navDemo");
        x.className = x.className.replace(" w3-show", "");
    });

    $(".to-my-project").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
        var x = document.getElementById("navDemo");
        x.className = x.className.replace(" w3-show", "");
    });

    $(".to-contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
        var x = document.getElementById("navDemo");
        x.className = x.className.replace(" w3-show", "");
    });
});

try {
    function myMap() {
        myCenter = new google.maps.LatLng(-7.872619, 112.530876);
        var mapOptions = {
            center: myCenter,
            zoom: 14,
            scrollwheel: true,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    }
} catch (err) {
    alert(err);
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " dark-blue";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top dark-blue", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}