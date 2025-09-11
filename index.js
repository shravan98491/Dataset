let data=fetch("https://raw.githubusercontent.com/shravan98491/Dataset/refs/heads/main/data.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

console.log(data);