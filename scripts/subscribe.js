function subscribe() {
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;

    if (!email.includes('@')) {
        emailInput.classList.remove("shake")
        emailInput.classList.add("shake")
        emailInput.style['text-decoration'] = 'underline';
        emailInput.style['text-decoration-color'] = 'red';
    } else {
        fetch("https://us-east4-complete-galaxy-404116.cloudfunctions.net/mailing-list-subscribe", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: email})
        });
    }
}

function clearDecoration() {
    const emailInput = document.getElementById("email-input");
    emailInput.style['text-decoration'] = 'unset';
    emailInput.style['text-decoration-color'] = 'white';
    emailInput.classList.remove("shake")
}



