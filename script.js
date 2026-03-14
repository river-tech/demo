/* ======================================
   SCRIPT.JS — B2B Industrial Uniforms
   ====================================== */

document.addEventListener('DOMContentLoaded', async function () {
  'use strict';

  // Load Header and Footer components
  try {
    const [headerRes, footerRes] = await Promise.all([
      fetch('components/header.html'),
      fetch('components/footer.html')
    ]);

    if (headerRes.ok) {
      const headerHtml = await headerRes.text();
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) headerContainer.outerHTML = headerHtml;
    }

    if (footerRes.ok) {
      const footerHtml = await footerRes.text();
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) footerContainer.outerHTML = footerHtml;
    }
  } catch (err) {
    console.error('Error loading components:', err);
  }

  /* ---------- Mobile Nav Toggle ---------- */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar__nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Search Toggle ---------- */
  const searchToggle = document.getElementById('searchToggle');
  const navSearch = document.getElementById('navSearch');
  if (searchToggle && navSearch) {
    searchToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navSearch.classList.toggle('active');
    });

    // Close search when clicking outside
    document.addEventListener('click', function (e) {
      if (!navSearch.contains(e.target) && e.target !== searchToggle) {
        navSearch.classList.remove('active');
      }
    });

    // Prevent search click from bubbling up
    navSearch.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  /* ---------- Sticky Header Shadow ---------- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });
  }

  /* ---------- Active Nav State ---------- */
  (function setActiveNav() {
    var navLinks = document.querySelectorAll('.navbar__nav a');
    if (!navLinks.length) return;

    var path = window.location.pathname || '';
    // Bỏ slash cuối nếu có
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    var currentFile = path.split('/').pop() || 'index.html';

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href') || '';

      // Chỉ so sánh phần file name (index.html, authority.html,...)
      var linkFile = href.split('/').pop();

      if (linkFile === currentFile ||
        (currentFile === 'index.html' && linkFile === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();

  /* ---------- Smooth Scroll for Anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Hero Slider ---------- */
  var slider = document.querySelector('.hero-slider');
  if (slider) {
    var track = slider.querySelector('.hero-slider__track');
    var slides = slider.querySelectorAll('.hero-slider__slide');
    var dots = slider.querySelectorAll('.hero-slider__dot');
    var prevBtn = slider.querySelector('.hero-slider__arrow--prev');
    var nextBtn = slider.querySelector('.hero-slider__arrow--next');
    var currentSlide = 0;
    var totalSlides = slides.length;
    var autoPlayInterval = null;
    var autoPlayDelay = 5000;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    if (prevBtn) prevBtn.addEventListener('click', function () { prevSlide(); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { nextSlide(); resetAutoPlay(); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goToSlide(i); resetAutoPlay(); });
    });

    // Auto-play
    function startAutoPlay() { autoPlayInterval = setInterval(nextSlide, autoPlayDelay); }
    function stopAutoPlay() { clearInterval(autoPlayInterval); }
    function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

    startAutoPlay();
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    // Touch / swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    slider.addEventListener('touchstart', function (e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide(); else prevSlide();
        resetAutoPlay();
      }
    });

    // Mouse drag support
    var isDragging = false;
    var dragStartX = 0;
    var dragDelta = 0;
    var sliderWidth = 0;

    track.addEventListener('mousedown', function (e) {
      isDragging = true;
      dragStartX = e.clientX;
      sliderWidth = slider.offsetWidth;
      track.classList.add('dragging');
      e.preventDefault();
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      dragDelta = e.clientX - dragStartX;
      var baseOffset = -(currentSlide * sliderWidth);
      track.style.transform = 'translateX(' + (baseOffset + dragDelta) + 'px)';
    });

    document.addEventListener('mouseup', function () {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('dragging');
      if (Math.abs(dragDelta) > 60) {
        if (dragDelta < 0) nextSlide(); else prevSlide();
      } else {
        goToSlide(currentSlide);
      }
      dragDelta = 0;
      resetAutoPlay();
    });

    // Keyboard
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prevSlide(); resetAutoPlay(); }
      if (e.key === 'ArrowRight') { nextSlide(); resetAutoPlay(); }
    });
  }

  /* ---------- Animated Counters ---------- */
  var counters = document.querySelectorAll('[data-counter]');
  var counterAnimated = new Set();

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-counter'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      var current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('vi-VN') + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('vi-VN') + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counterAnimated.has(entry.target)) {
          counterAnimated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  /* ---------- Video Modal ---------- */
  var videoThumb = document.querySelector('.video-thumb');
  var videoModal = document.getElementById('videoModal');

  if (videoThumb && videoModal) {
    var closeBtn = videoModal.querySelector('.modal__close');

    videoThumb.addEventListener('click', function () {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeVideoModal() {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) closeVideoModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideoModal();
    });
  }

  /* ---------- Product Gallery Thumbnail Switch ---------- */
  var thumbs = document.querySelectorAll('.product-gallery__thumb');
  var mainImg = document.querySelector('.product-gallery__main');

  if (thumbs.length > 0 && mainImg) {
    var colors = ['#E8EDF3', '#D6E4F0', '#F0E6D3', '#E3F0E8', '#F3E8EE'];
    thumbs.forEach(function (thumb, idx) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        mainImg.style.background = colors[idx % colors.length];
      });
    });
  }

  /* ---------- Tabs ---------- */
  var tabBtns = document.querySelectorAll('.tabs__btn');
  var tabPanels = document.querySelectorAll('.tabs__panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------- FAQ Accordion ---------- */
  var accordionHeaders = document.querySelectorAll('.accordion__header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var item = this.parentElement;
      var isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion__item').forEach(function (ai) {
        ai.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });

    // Keyboard accessibility
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  /* ---------- Form Validation ---------- */
  var forms = document.querySelectorAll('form[data-validate]');

  function validateField(field) {
    var value = field.value.trim();
    var group = field.closest('.form-group');
    if (!group) return true;
    var errorMsg = group.querySelector('.error-msg');
    var isValid = true;

    // Required check
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      if (errorMsg) errorMsg.textContent = 'Vui lòng điền thông tin này';
    }

    // Email pattern
    if (isValid && field.type === 'email' && value) {
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(value)) {
        isValid = false;
        if (errorMsg) errorMsg.textContent = 'Email không hợp lệ';
      }
    }

    // Phone pattern
    if (isValid && field.type === 'tel' && value) {
      var phoneRe = /^[0-9\s\-\+]{8,15}$/;
      if (!phoneRe.test(value)) {
        isValid = false;
        if (errorMsg) errorMsg.textContent = 'Số điện thoại không hợp lệ';
      }
    }

    if (isValid) {
      group.classList.remove('has-error');
    } else {
      group.classList.add('has-error');
    }

    return isValid;
  }

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('input, select, textarea');
      var allValid = true;

      fields.forEach(function (field) {
        if (!validateField(field)) {
          allValid = false;
        }
      });

      if (allValid) {
        // Find or create success message
        var wrapper = form.closest('.form-section') || form.parentElement;
        var successEl = wrapper.parentElement.querySelector('.success-msg');

        if (!successEl) {
          // Create inline success message
          successEl = document.createElement('div');
          successEl.className = 'success-msg';
          successEl.innerHTML =
            '<div class="success-msg__icon">' +
            '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
            '</div>' +
            '<h3>Yêu cầu đã được ghi nhận!</h3>' +
            '<p>Cảm ơn Quý khách đã quan tâm đến BảoHộ Pro.<br>Đội ngũ tư vấn sẽ liên hệ với Quý khách trong vòng <strong style="color:var(--clr-primary)">24 giờ làm việc</strong>.</p>' +
            '<p style="font-size:var(--fs-sm)">Nếu cần hỗ trợ gấp, vui lòng liên hệ trực tiếp qua các kênh bên dưới.</p>' +
            '<div class="success-contact">' +
            '<p><strong>Hotline:</strong> 0905 123 456 &nbsp;|&nbsp; <strong>Zalo:</strong> 0905 123 456</p>' +
            '<p><strong>Email:</strong> info@baohopro.vn</p>' +
            '</div>';
          wrapper.parentElement.insertBefore(successEl, wrapper.nextSibling);
        }

        // Hide form, show success
        wrapper.style.display = 'none';
        successEl.classList.add('show');

        // Scroll to success message
        setTimeout(function () {
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    });

    // Live validation on blur
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(this);
      });
    });
  });

  /* ---------- Conditional Field Logic (Quote Form) ---------- */
  var needSelect = document.getElementById('quoteNeed');
  var qtyLabel = document.getElementById('qtyLabel');

  if (needSelect && qtyLabel) {
    needSelect.addEventListener('change', function () {
      if (this.value === 'Mua vải') {
        qtyLabel.textContent = 'Số mét vải';
      } else {
        qtyLabel.textContent = 'Số lượng (bộ)';
      }
    });
  }
  /* ---------- Category Filter Tags ---------- */
  var filterTags = document.querySelectorAll('.filter-tag');
  var filterCards = document.querySelectorAll('.card[data-tags]');
  var filterEmpty = document.getElementById('filterEmpty');

  if (filterTags.length > 0 && filterCards.length > 0) {
    filterTags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        // Update active tag
        filterTags.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        // Filter cards
        var visibleCount = 0;
        filterCards.forEach(function (card) {
          var tags = card.getAttribute('data-tags') || '';
          if (filter === 'all' || tags.indexOf(filter) !== -1) {
            card.classList.remove('filter-hidden');
            visibleCount++;
          } else {
            card.classList.add('filter-hidden');
          }
        });

        // Show/hide empty message
        if (filterEmpty) {
          filterEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    });
  }

  /* ---------- Fade-in on scroll ---------- */
  var fadeEls = document.querySelectorAll('.fade-on-scroll');
  if (fadeEls.length > 0) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  }

  /* ---------- Section Entrance Animation ---------- */
  var sections = document.querySelectorAll('.section, .page-hero');
  if (sections.length > 0) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Page Transition on Link Clicks ---------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href) return;
    // Only handle internal html page links
    if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') ||
      href.startsWith('http') || href.startsWith('data:') || link.hasAttribute('download')) return;
    if (href.indexOf('.html') === -1) return;
    e.preventDefault();
    document.body.classList.add('page-leaving');
    setTimeout(function () {
      window.location.href = href;
    }, 220);
  });

  /* ---------- Size Chart Modal ---------- */
  var btnSizeChart = document.getElementById('btnSizeChart');
  var sizeModal = document.getElementById('sizeModal');

  if (btnSizeChart && sizeModal) {
    var sizeModalClose = document.getElementById('sizeModalClose');
    var sizeModalOverlay = document.getElementById('sizeModalOverlay');
    var sizeTabsBtns = sizeModal.querySelectorAll('.size-tabs__btn');
    var sizePanels = sizeModal.querySelectorAll('.size-panel');

    function openSizeModal() {
      sizeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSizeModal() {
      sizeModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    btnSizeChart.addEventListener('click', openSizeModal);
    if (sizeModalClose) sizeModalClose.addEventListener('click', closeSizeModal);
    if (sizeModalOverlay) sizeModalOverlay.addEventListener('click', closeSizeModal);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sizeModal.classList.contains('active')) {
        closeSizeModal();
      }
    });

    sizeTabsBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = 'size-' + this.getAttribute('data-size-tab');

        sizeTabsBtns.forEach(function (b) { b.classList.remove('active'); });
        sizePanels.forEach(function (p) { p.classList.remove('active'); });

        this.classList.add('active');
        var targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  /* ---------- Capability PDF Modal (one-time per session) ---------- */
  (function setupCapabilityPdfModal() {
    const modal = document.getElementById('capabilityPdfModal');
    if (!modal) return;

    const overlay = modal.querySelector('.pdf-modal__overlay');
    const closeBtn = modal.querySelector('.pdf-modal__close');

    function openModal() {
      if (modal.classList.contains('is-open')) return;
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    if (overlay) {
      overlay.addEventListener('click', closeModal);
    }

    // Chỉ popup ở trang chủ, mỗi lần load trang
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const isHome = path === '' || path === 'index.html';

    if (isHome) {
      // nhỏ delay để không đụng page transition
      setTimeout(openModal, 1200);
    }
  })();

  /* ---------- Testimonial Slider (Flip Card) ---------- */
  const testimonials = [
    {
      name: 'Trần Quốc Dũng',
      role: 'Giám đốc chi nhánh ACB',
      quote: '“Chúng tôi đã hợp tác với BảoHộ Pro cho 3 dự án lớn trong năm qua. Chất lượng vải kaki và đường may rất chắc chắn, đúng tiêu chuẩn bảo hộ khắt khe. Đặc biệt, đội ngũ hỗ trợ tiến độ rất sát sao, giúp chúng tôi hoàn thành trang bị cho 500 nhân viên đúng thời hạn.”',
      avatar: 'https://i.pravatar.cc/150?u=dung',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Lê Minh Tâm',
      role: 'Quản lý thu mua Tập đoàn Hòa Phát',
      quote: '“Hợp tác hơn 5 năm, chất lượng đồng phục bảo hộ luôn đạt tiêu chuẩn TCVN. Đường may 2 kim bền bỉ, logo thêu sắc nét. Giao hàng đúng tiến độ dù số lượng lớn lên đến 3.000 bộ, giúp nhà máy vận hành an toàn.”',
      avatar: 'https://i.pravatar.cc/150?u=tam',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Nguyễn Thị Lan',
      role: 'Trưởng phòng hành chính Foster',
      quote: '“Dịch vụ tận tâm, quy trình SOP 4 bước giúp chúng tôi tuyệt đối an tâm về chất lượng. Foster rất hài lòng với các mẫu thiết kế áo thun đồng phục mới của BảoHộ Pro, vừa thời trang vừa đảm bảo tính nhận diện thương hiệu.”',
      avatar: 'https://i.pravatar.cc/150?u=lan',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  let currentTestimonial = 0;
  const testimonialContainer = document.querySelector('.testimonials');

  if (testimonialContainer && testimonials.length > 0) {
    const nameEl = testimonialContainer.querySelector('.testimonial-card__name');
    const roleEl = testimonialContainer.querySelector('.testimonial-card__role');
    const quoteEl = testimonialContainer.querySelector('.testimonial-card__quote');
    const avatarEl = testimonialContainer.querySelector('.testimonial-card__avatar');
    const mainImgEl = testimonialContainer.querySelector('.testimonials__image-card img');
    const prevBtn = testimonialContainer.querySelector('.testimonials__btn--prev');
    const nextBtn = testimonialContainer.querySelector('.testimonials__btn--next');
    const cardInner = testimonialContainer.querySelector('.testimonial-card__inner');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isAnimating = false;
    let autoTimer = null;
    const AUTO_DELAY = 7000;
    const FLIP_DURATION = 650;

    function applyTestimonial(index) {
      const data = testimonials[index];
      if (!data) return;

      if (nameEl) nameEl.textContent = data.name;
      if (roleEl) roleEl.textContent = data.role;
      if (quoteEl) quoteEl.textContent = data.quote;
      if (avatarEl) {
        avatarEl.src = data.avatar;
        avatarEl.alt = data.name;
      }
      if (mainImgEl) {
        mainImgEl.src = data.image;
        mainImgEl.alt = data.name + ' - BảoHộ Pro';
      }
    }

    // Initial render
    applyTestimonial(currentTestimonial);

    function setButtonsDisabled(disabled) {
      [prevBtn, nextBtn].forEach(btn => {
        if (!btn) return;
        btn.disabled = disabled;
        btn.classList.toggle('is-disabled', disabled);
      });
    }

    function scheduleAuto() {
      if (autoTimer) cancelAnimationFrame(autoTimer);
      let startTime = null;
      function loop(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        if (elapsed >= AUTO_DELAY) {
          handleChange('next');
        } else {
          autoTimer = requestAnimationFrame(loop);
        }
      }
      autoTimer = requestAnimationFrame(loop);
    }

    function cancelAuto() {
      if (autoTimer) {
        cancelAnimationFrame(autoTimer);
        autoTimer = null;
      }
    }

    function handleChange(direction) {
      if (isAnimating) return;
      let nextIndex = currentTestimonial + (direction === 'next' ? 1 : -1);
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;

      const duration = FLIP_DURATION;
      isAnimating = true;
      setButtonsDisabled(true);
      cancelAuto();

      if (prefersReducedMotion || !cardInner) {
        // Simple fade for reduced motion
        testimonialContainer.style.transition = 'opacity 0.35s ease';
        testimonialContainer.style.opacity = '0.15';
        setTimeout(() => {
          currentTestimonial = nextIndex;
          applyTestimonial(currentTestimonial);
          testimonialContainer.style.opacity = '1';
          setTimeout(() => {
            isAnimating = false;
            setButtonsDisabled(false);
            scheduleAuto();
          }, 260);
        }, 140);
        return;
      }

      // Image cross-fade + subtle zoom
      if (mainImgEl) {
        mainImgEl.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        mainImgEl.style.opacity = '0.4';
        mainImgEl.style.transform = 'scale(1.02)';
      }

      const firstHalf = duration / 2;
      const angleOut = direction === 'next' ? 90 : -90;
      const angleInStart = -angleOut;

      cardInner.style.transition = `transform ${firstHalf}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      cardInner.style.transform = `rotateY(${angleOut}deg)`;

      setTimeout(() => {
        // Swap content at 90deg
        currentTestimonial = nextIndex;
        applyTestimonial(currentTestimonial);

        // Jump to backside without transition
        cardInner.style.transition = 'none';
        cardInner.style.transform = `rotateY(${angleInStart}deg)`;

        // Allow the browser to apply styles before animating back
        requestAnimationFrame(() => {
          cardInner.style.transition = `transform ${firstHalf}ms cubic-bezier(0.22, 1, 0.36, 1)`;
          cardInner.style.transform = 'rotateY(0deg)';

          // Bring image back to full opacity while card is flipping in
          if (mainImgEl) {
            mainImgEl.style.opacity = '1';
            mainImgEl.style.transform = 'scale(1)';
          }
        });
      }, firstHalf);

      setTimeout(() => {
        isAnimating = false;
        setButtonsDisabled(false);
        scheduleAuto();
      }, duration + 40);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => handleChange('prev'));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => handleChange('next'));
    }

    // Autoplay with hover pause
    scheduleAuto();
    testimonialContainer.addEventListener('mouseenter', cancelAuto);
    testimonialContainer.addEventListener('mouseleave', scheduleAuto);
  }

  /* ---------- Scroll Top Button ---------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});


