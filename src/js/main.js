 document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thanks for subscribing, ${email}!`);
    e.target.reset();
  });