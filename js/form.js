function ValidateForm() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var title = document.myform.title.value;
    var message = document.myform.message.value;

    // Validate name
    if (name == "") {
        alert("Please enter your name");
        return false;
    }


    // Validate title
    if (title == "") {
        alert("Please enter your title");
        return false;

    }

    // Validate email address
    if (email == "") {
        alert("Please enter your email address");
        return false;
    }

// Validate email address
if (message == "") {
        alert("Please enter your message");
        return false;
    }
}