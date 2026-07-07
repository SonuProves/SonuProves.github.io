// Scroll-triggered reveal for elements with class "reveal"
(function(){
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(i => io.observe(i));
  } else {
    items.forEach(i => i.classList.add('is-visible'));
  }
})();

// Sticky header shadow on scroll
(function(){
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Mobile nav toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });
})();

// Blog tag filter (only runs if .tag-filter exists, i.e. on blog index page)
(function(){
  const filterBar = document.querySelector('.tag-filter');
  if (!filterBar) return;
  const buttons = filterBar.querySelectorAll('.tag-btn');
  const posts = document.querySelectorAll('.post-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;

      posts.forEach(post => {
        const tags = (post.dataset.tags || '').split(',');
        post.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
      });
    });
  });
})();
