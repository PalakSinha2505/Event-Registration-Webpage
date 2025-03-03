document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let eventType = document.getElementById("eventType").value;
    
    if (!name || !email || !phone || !eventType) {
        alert("Please fill out all fields.");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }
    
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    
    document.getElementById("successModal").classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("successModal").classList.remove("show");
});