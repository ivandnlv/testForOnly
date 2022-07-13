window.addEventListener('DOMContentLoaded', () => {
  const allTitles = document.querySelectorAll('.spoiler__item-title');
  const spoilerBtns = document.querySelectorAll('.spoiler__item-btn');

  allTitles.forEach((title, index) => {
    title.textContent = `${index + 1}. ${title.textContent}`;
  });

  spoilerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement.parentElement.parentElement;
      const description = item.querySelector('.spoiler__item-description');
      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
        item.classList.add('selected');
        description.classList.add('show');
      } else {
        btn.classList.add('hide');
        item.classList.add('hide');
        description.classList.add('hide');
        setTimeout(() => {
          btn.classList.remove('active', 'hide');
          item.classList.remove('selected', 'hide');
          description.classList.remove('show', 'hide');
        }, 490);
      }
    });
  });
});
