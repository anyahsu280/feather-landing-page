const emailInput = document.getElementById("email-input");

emailInput.addEventListener('blur', function ( event ) {  
    console.log('BLUR')
    const original = emailInput.value;
    const sanitizedValue = original.replace(/\s/g, '');
    emailInput.value = sanitizedValue;
    });