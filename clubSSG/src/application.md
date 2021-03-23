<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="club.css">
    <title>Application</title>
</head>

<form>
    <header>
        <h1>Application</h1>
    </header>
    
<label>Name</label>
<input id="application_name" type="name" minlength="1" maxlength="100" required></input>

<label>Email</label>
<input id="application_email" type="email" minlength="5" maxlength="100" required></input>

<label>Password</label>
<input id="application_password" type="password" minlength="8" maxlength="100" required></input>

<select id="newsletter">
    <option>Annoy me with newsletters</option>
    <option>Please don't</option>
</select>

<button id="signup_button">Sign Up</button>
</form>

<section id="ThanksDialog" class="hide">
    <header>
        <h2>Thanks for Signing Up</h2>
    </header>
    <p id="signup_summary"></p>
</section>

<script>
    let name = document.getElementById("application_name");
    let email_address = document.getElementById("application_email");
    let newsletter = document.getElementById("newsletter");
    document.getElementById("signup_button").addEventListener("click", myEvent);

    function myEvent()
    {
        event.preventDefault();

        let dialog = document.getElementById("ThanksDialog");
        dialog.classList.remove("hide");
        dialog.classList.add("show");

        let summary = document.getElementById("signup_summary");
        summary.innerHTML = "Name: " + name.value + " Email address: " + email_address.value + " Newsletters: " + 
                            newsletter.value;
        dialog.classList.add("signup_summary_style");

        let button = document.createElement("button");
        button.innerHTML = "Close";
        message.appendChild(button);
    }
</script>