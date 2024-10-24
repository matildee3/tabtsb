document.querySelectorAll('.menu button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});




document.addEventListener("DOMContentLoaded", () => {

    const colors = ["#c7fdca", "#ecebbb", "#ecd6e7", "#c8e4f8", "#e5eb10", "#0ab1ff", '#ec9e10', '#14a07b', '#1afcca', '#ec5e56', '#ede467', '#2c81c8', '#7ae447', '#feb1ff', '#7671c7', '#ffa07b', '#c88fa4', '#95c98f', '#ec7890', '#00e4f8', '#9be8ed', '#0dac61', '#ec6caa', '#16afdb', '#f55f20', '#f7eef2', '#edffff', '#ffff00', '#e63114', '#7655ff', '#fe2b78', '#b4e7f4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    document.querySelectorAll('.menu button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    fetch('poems_data.json')
        .then(response => response.json())
        .then(data => {
            const poems = data.map(item => item.POEMA);
            const randomPoem = poems[Math.floor(Math.random() * poems.length)];
            document.querySelector('.poem').innerText = randomPoem;
        })
        .catch(error => console.error('Error fetching the JSON:', error));



    const form = document.getElementById('subscribe-form');
    const message = document.getElementById('message');
    const unsubscribeLink = document.getElementById('unsubscribe-link');
    const unsubscribePopup = document.getElementById('unsubscribe-popup');
    const unsubscribeForm = document.getElementById('unsubscribe-form');
    const unsubscribeMessage = document.getElementById('unsubscribe-message');
    const cancelUnsubscribe = document.getElementById('cancel-unsubscribe');



if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get('email');

        // Use the full URL of your backend on Heroku
        fetch('https://tab-back-8ececcb7cf1e.herokuapp.com/subscribe', {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                message.style.display = 'block';
                message.textContent = data.message;
                message.style.color = data.success ? 'green' : 'red';
            })
            .catch(error => {
                message.style.display = 'block';
                message.textContent = 'An error occurred. Please try again.';
                message.style.color = 'red';
                console.error('Error:', error);
            });
    });
}

   
    if (unsubscribeLink) {
        unsubscribeLink.addEventListener('click', (e) => {
            e.preventDefault();
            unsubscribePopup.style.display = 'block';
        });
    }

   
    if (cancelUnsubscribe) {
        cancelUnsubscribe.addEventListener('click', () => {
            unsubscribePopup.style.display = 'none';
            unsubscribeMessage.style.display = 'none';
        });
    }

   
    // if (unsubscribeForm) {
    //     unsubscribeForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         const formData = new FormData(unsubscribeForm);
    //         const email = formData.get('unsubscribe-email');

    //         fetch('/unsubscribe', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email }),
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 unsubscribeMessage.style.display = 'block';
    //                 unsubscribeMessage.textContent = data.message;
    //                 unsubscribeMessage.style.color = data.success ? 'green' : 'red';
    //                 if (data.success) {
    //                     setTimeout(() => {
    //                         unsubscribePopup.style.display = 'none';
    //                     }, 2000); 
    //                 }
    //             })
    //             .catch(error => {
    //                 unsubscribeMessage.style.display = 'block';
    //                 unsubscribeMessage.textContent = 'An error occurred. Please try again.';
    //                 unsubscribeMessage.style.color = 'red';
    //                 console.error('Error:', error);
    //             });
    //     });
    // }


});


document.querySelector('.icon-right').addEventListener('click', () => {
    location.reload(); 
});

