function checkMood() {

    let mood =
    document.getElementById("mood").value;

    let result =
    document.getElementById("result");

    if (mood === "happy") {

        result.innerHTML =
        "Great! Continue practising healthy habits and staying positive.";

    }

    else if (mood === "stressed") {

        result.innerHTML =
        "Try taking a short break, breathing deeply and speaking to someone you trust.";

    }

    else if (mood === "anxious") {

        result.innerHTML =
        "Remember that support is available at NWU counselling services.";

    }

    else {

        result.innerHTML =
        "Take time to rest and reach out for emotional support if needed.";

    }
}
function validateForm() {

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please complete all fields before submitting.");

        return false;

    }

    alert("Thank you. Your form has been submitted successfully.");

    return true;
}
<script src=""></script>
