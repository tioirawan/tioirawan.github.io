window.onload = () => {
    $('#splash-screen').hide();
    $('body, html').css('overflow', 'visible');
};

$(() => {
    const navbar = document.getElementById('mainNavbar');

    $('#mail-success-alert').hide();
    $('#mail-failed-alert').hide();
    $('#mail-sending-alert').hide();

    $('#mailer-message').keydown(event => {
        if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
            $('#mailer-submit').click();
        }
    });

    $('#mailer-submit').click(() => {
        $('#mail-sending-alert').show();
        $('#mail-success-alert').hide();
        $('#mail-failed-alert').hide();

        $('html, body').animate(
            {
                scrollTop: $('#go-here').offset().top
            },
            800
        );

        const formName = $('#mailer-name').val();
        const formEmail = $('#mailer-email').val();
        const formMessage = $('#mailer-message').val();

        let errorMessage = '';

        try {
            if (
                formName &&
                formEmail &&
                formMessage &&
                validateEmail(formEmail)
            ) {
                const config = {
                    from_email: formEmail,
                    name: formName,
                    reply_email: formEmail,
                    reply_to: 'indmind page',
                    to_name: 'indmind',
                    from_name: formName,
                    message_html: formMessage
                };

                emailjs.init('user_exTxG2pfF22CpBi5quB8e');

                // parameters: service_id, template_id, template_parameters
                emailjs.send('gmail', 'template_xN7dwP1P', config).then(
                    () => {
                        $('html, body').animate(
                            {
                                scrollTop: $('#go-here').offset().top
                            },
                            800
                        );

                        $('#mail-sending-alert').hide();
                        $('#mailer-name').val('');
                        $('#mailer-email').val('');
                        $('#mailer-message').val('');

                        $('#mail-success-alert').show();

                        setTimeout(() => {
                            $('#mail-success-alert').hide();
                        }, 60000);
                    },
                    err => {
                        $('html, body').animate(
                            {
                                scrollTop: $('#go-here').offset().top
                            },
                            800
                        );

                        for (const key in err) {
                            errorMessage += `${err[key]} `;
                        }

                        alertError(
                            `<p>Failed to send your message...<br>${errorMessage}</p>`
                        );
                    }
                );
            } else {
                if (!formName) errorMessage += '<p>What is your name?</p>';
                if (!formEmail) errorMessage += '<p>What is your email?</p>';
                if (!formMessage)
                    errorMessage += '<p>What is your messages to me?</p>';

                if (formEmail && !validateEmail(formEmail))
                    errorMessage += '<p>Your email format is wrong!</p>';

                $('html, body').animate(
                    {
                        scrollTop: $('#go-here').offset().top
                    },
                    800
                );

                alertError(errorMessage);
            }
        } catch (err) {
            alertError(err);
        }
    });

    function alertError(error) {
        $('#mail-sending-alert').hide();
        $('#mail-alert-error').html(error);
        $('#mail-failed-alert').show();
    }

    function validateEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }

    $('.to-the-top').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#home').offset().top
            },
            1500
        );

        navbar.className = navbar.className.replace(' w3-show', '');
    });

    $('.to-about-me').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#about').offset().top
            },
            1500
        );

        navbar.className = navbar.className.replace(' w3-show', '');
    });

    $('.to-my-project').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#portfolio').offset().top
            },
            1500
        );

        navbar.className = navbar.className.replace(' w3-show', '');
    });

    $('.to-contact').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#contact').offset().top
            },
            1500
        );

        navbar.className = navbar.className.replace(' w3-show', '');
    });
});

try {
    function myMap() {
        const position = new google.maps.LatLng(-7.872619, 112.530876);

        const mapOptions = {
            center: position,
            zoom: 3,
            scrollwheel: true,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        const map = new google.maps.Map(
            document.getElementById('googleMap'),
            mapOptions
        );

        const marker = new google.maps.Marker({
            position
        });

        marker.setMap(map);
    }
} catch (err) {
    alert(err);
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById('img01').src = element.src;
    document.getElementById('modal01').style.display = 'block';
    const captionText = document.getElementById('caption');
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = () => {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        navbar.className =
            'w3-bar' + ' w3-card-2' + ' w3-animate-top' + ' dark-blue';
    } else {
        navbar.className = navbar.className.replace(
            ' w3-card-2 w3-animate-top dark-blue',
            ''
        );
    }
};

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    if (!navbar.className.includes('w3-show')) {
        navbar.className += ' w3-show';
    } else {
        navbar.className = navbar.className.replace(' w3-show', '');
    }
}
