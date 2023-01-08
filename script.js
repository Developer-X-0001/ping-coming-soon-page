function submit() {
    let form = document.getElementById('email');
    email_validation = 0;
    for (i in form.value) {
        if (form.value[i] == '@') {
            email_validation += 1;
            form.insertAdjacentHTML('afterend', '<label for="email" class="emailerror">Please provide a valid email address</label>')
        }
    }
    if (form.value.slice(-4).slice(0, 1) == '.') {
        email_validation += 1;
        form.insertAdjacentHTML('afterend', '<label for="email" class="emailerror">Please provide a valid email address</label>')
    }
    if (email_validation == 0) {
        form.insertAdjacentHTML('afterend', '<label for="email" class="emailerror">Please provide a valid email address</label>')
    }
}