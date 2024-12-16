const categories = ["Komik", "Karamsar", "Şaşkın", "Romantik"];
let story = [];

// Kategori seçimi
document.getElementById("spin-button").addEventListener("click", () => {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  document.getElementById("category-display").textContent = `Seçilen Kategori: ${randomCategory}`;
});

// Cümle ekleme
document.getElementById("submit-button").addEventListener("click", () => {
  const sentence = document.getElementById("sentence-input").value;
  if (sentence) {
    story.push(sentence);
    document.getElementById("story-display").textContent = story.join(" ");
    document.getElementById("sentence-input").value = ""; // Giriş kutusunu temizle
  }
});
