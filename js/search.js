document.getElementById("search").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll("#post-list a");
  
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
  