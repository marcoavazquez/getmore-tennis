(function() {
  let currentIndex = 0;

  const dots = Array.from(document.querySelectorAll('#controls-dots li'));
  const items = Array.from(document.querySelectorAll('#our-rackets--items li'));
  
  const prevBtn = document.getElementById('button-previous');
  const nextBtn = document.getElementById('button-next');

  prevBtn.addEventListener('click', function (e) {
    
    if (currentIndex <= 0) {
      return;
    }

    const btnEl = e.target;
    
    currentIndex--;

    resetItems(dots);
    resetItems(items);

    dots.at(currentIndex).classList.add('active');
    items.at(currentIndex).classList.add('active');

    if (currentIndex === 0) {
      btnEl.classList.add('disabled');
    } else {
      btnEl.classList.remove('disabled');
    }

    btnEl.disabled = currentIndex === 0;

    if (currentIndex < dots.length - 1) {
      nextBtn.classList.remove('disabled');
      nextBtn.disabled = false;
    }
  })

  nextBtn.addEventListener('click', function (e) {

    if (currentIndex >= dots.length - 1) {
      return;
    }

    const btnEl = e.target

    currentIndex++;

    resetItems(dots)
    resetItems(items)

    dots.at(currentIndex).classList.add('active');
    items.at(currentIndex).classList.add('active');

    if (currentIndex === dots.length - 1) {
      btnEl.classList.add('disabled')
    } else {
      btnEl.classList.remove('disabled')
    }

    btnEl.disabled = currentIndex === dots.length - 1;

    if (currentIndex > 0) {
      prevBtn.classList.remove('disabled');
      prevBtn.disabled = false
    }
  })

  dots.at(0).classList.add('active')
  items.at(0).classList.add('active')

})()

function resetItems (items) {
  items.forEach(function (item) {
    item.classList.remove('active')
  })
}