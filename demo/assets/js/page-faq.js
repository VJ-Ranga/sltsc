(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = [...document.querySelectorAll('[data-faq-tab]')];
    const items = [...document.querySelectorAll('.faq-item')];
    const search = document.querySelector('#faq-search');
    const list = document.querySelector('.faq-items');
    let category = 'All';
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.setAttribute('aria-live', 'polite');
    empty.innerHTML = '<strong>No matching questions</strong> <button type="button" class="btn btn--link" data-clear-faq>Clear search</button>';

    tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', tab.dataset.faqTab === category);
    });

    function render() {
      const query = search.value.trim().toLowerCase();
      let shown = 0;
      items.forEach(item => {
        const matches = (category === 'All' || item.dataset.category === category) && item.textContent.toLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) shown++;
      });
      if (!shown) {
        if (!empty.isConnected) list.append(empty);
      } else {
        empty.remove();
      }
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(item => {
        item.classList.toggle('is-active', item === tab);
        item.setAttribute('aria-selected', item === tab);
      });
      category = tab.dataset.faqTab;
      render();
    }));
    search.addEventListener('input', render);
    document.addEventListener('click', event => {
      if (!event.target.matches('[data-clear-faq]')) return;
      search.value = '';
      category = 'All';
      tabs.forEach(tab => {
        tab.classList.toggle('is-active', tab.dataset.faqTab === category);
        tab.setAttribute('aria-selected', tab.dataset.faqTab === category);
      });
      render();
      search.focus();
    });
    render();
  });
}());
