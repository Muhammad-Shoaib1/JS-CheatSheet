document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cheatItems = document.querySelectorAll('.cheat');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cheatItems.forEach(cheat => {
      const title = cheat.querySelector('h2').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        cheat.style.display = 'block';
      } else {
        cheat.style.display = 'none';
      }
    });
  });
});
document.querySelectorAll('.cheat').forEach(function (cheat) {
  cheat.addEventListener('click', function () {
    const codeText = this.querySelector('pre').innerText;

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = codeText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    showNotification('Code copied to clipboard!');
  });
});

function showNotification(message) {
  let notification = document.querySelector('.notification');

  if (!notification) {
    notification = document.createElement('div');
    notification.classList.add('notification');
    document.body.appendChild(notification);
  }

  notification.textContent = message;

  notification.classList.add('show');

  setTimeout(function () {
    notification.classList.add('hide');
    setTimeout(function () {
      notification.classList.remove('show', 'hide');
    }, 300);
  }, 3000);
}
