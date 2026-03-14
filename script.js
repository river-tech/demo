/* ==========================================================================
   CATEGORY & PRODUCT LOGIC
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 'p1',
    name: 'Áo phản quang công trình',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: 'HOT',
    tagClass: 'tag-hot',
    features: ['Vải kaki 65/35', 'Phản quang 3M', 'Chứng nhận TCVN'],
    price: 150000,
    sales: 1200,
    date: '2024-03-10'
  },
  {
    id: 'p2',
    name: 'Quần bảo hộ nhiều túi',
    category: 'bao-ho',
    image: 'images/product-pants.png',
    tag: 'MỚI',
    tagClass: 'tag-new',
    features: ['Vải kaki chống cháy', 'Đường may 2 kim, 6 túi', 'Độ bền màu cao'],
    price: 185000,
    sales: 850,
    date: '2024-03-12'
  },
  {
    id: 'p3',
    name: 'Áo khoác bảo hộ mùa đông',
    category: 'bao-ho',
    image: 'images/product-winter.png',
    tag: '',
    tagClass: '',
    features: ['Vải dù chống nước', 'Lót nỉ, phản quang'],
    price: 320000,
    sales: 450,
    date: '2024-01-15'
  },
  {
    id: 'p4',
    name: 'Bộ đồ chống tĩnh điện phòng sạch',
    category: 'nha-may',
    image: 'images/product-uniform.png',
    tag: 'ESD',
    tagClass: 'tag-esd',
    features: ['Vải ESD sợi carbon', 'Tiêu chuẩn IEC 61340', 'Lọc khuẩn 99%'],
    price: 210000,
    sales: 980,
    date: '2024-02-20'
  },
  {
    id: 'p5',
    name: 'Găng tay chống tĩnh điện',
    category: 'nha-may',
    image: 'images/product-main.png', // Placeholder
    tag: 'ESD',
    tagClass: 'tag-esd',
    features: ['Phủ PU đầu ngón', 'Sợi Carbon 10^6-10^9'],
    price: 15000,
    sales: 15000,
    date: '2024-03-05'
  },
  {
    id: 'p6',
    name: 'Áo Polo công nhân',
    category: 'ao-thun',
    image: 'images/polo.png',
    tag: '',
    tagClass: '',
    features: ['Vải cá sấu PE thoáng mát', 'Thêu logo sắc nét'],
    price: 95000,
    sales: 5000,
    date: '2023-12-10'
  },
  {
    id: 'p7',
    name: 'Áo thun cổ tròn cao cấp',
    category: 'ao-thun',
    image: 'images/polo.png',
    tag: 'NEW',
    tagClass: 'tag-new',
    features: ['Cotton 100% co giãn', 'Công nghệ in lụa Nhật'],
    price: 85000,
    sales: 2200,
    date: '2024-03-14'
  },
  {
    id: 'p8',
    name: 'Bộ đồ chống cháy FR',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: 'FR',
    tagClass: 'tag-fr',
    features: ['Vải Proban® Anh Quốc', 'Chịu nhiệt 350°C', 'Tiêu chuẩn EN 11612'],
    price: 1250000,
    sales: 150,
    date: '2024-02-28'
  },
  {
    id: 'p9',
    name: 'Vải Kaki 65/35 sỉ',
    category: 'vai-si',
    image: 'images/hero-2.png',
    tag: 'SALE',
    tagClass: 'tag-fr',
    features: ['Nhiều màu sẵn kho', 'Độ bền màu cấp 4'],
    price: 45000,
    sales: 10000,
    date: '2024-01-01'
  },
  {
    id: 'p10',
    name: 'Khẩu trang y tế 4 lớp',
    category: 'y-te',
    image: 'images/product-uniform.png',
    tag: 'HOT',
    tagClass: 'tag-hot',
    features: ['Lọc khuẩn 99%', 'Chuẩn Bộ Y Tế'],
    price: 35000,
    sales: 20000,
    date: '2024-03-11'
  },
  {
    id: 'p11',
    name: 'Áo phản quang cao cấp túi hộp',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: 'NEW',
    tagClass: 'tag-new',
    features: ['Vải kaki liên doanh', 'Băng phản quang 5cm'],
    price: 165000,
    sales: 300,
    date: '2024-03-14'
  },
  {
    id: 'p12',
    name: 'Giày bảo hộ Delta Plus',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: 'BEST',
    tagClass: 'tag-hot',
    features: ['Mũi thép chịu lực', 'Đế chống đâm xuyên'],
    price: 450000,
    sales: 1500,
    date: '2024-02-10'
  },
  {
    id: 'p13',
    name: 'Nón bảo hộ COV Hàn Quốc',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: '',
    tagClass: '',
    features: ['Nhựa ABS chịu lực', 'Lót xốp chống nóng'],
    price: 85000,
    sales: 1200,
    date: '2024-03-01'
  },
  {
    id: 'p14',
    name: 'Áo thun Polo công giáo',
    category: 'ao-thun',
    image: 'images/polo.png',
    tag: 'NEW',
    tagClass: 'tag-new',
    features: ['Vải thun lạnh 4 chiều', 'In decal sắc nét'],
    price: 75000,
    sales: 500,
    date: '2024-03-13'
  },
  {
    id: 'p15',
    name: 'Đồng phục Scrub bác sĩ',
    category: 'y-te',
    image: 'images/product-uniform.png',
    tag: 'SALE',
    tagClass: 'tag-fr',
    features: ['Vải nhập khẩu Nhật', 'Thiết kế chuẩn form'],
    price: 280000,
    sales: 600,
    date: '2024-02-25'
  },
  {
    id: 'p16',
    name: 'Vải Kate silk sỉ',
    category: 'vai-si',
    image: 'images/hero-2.png',
    tag: '',
    tagClass: '',
    features: ['Khổ 1m5', 'Mềm mịn, ít nhăn'],
    price: 32000,
    sales: 8000,
    date: '2024-01-20'
  },
  {
    id: 'p17',
    name: 'Giày chống tĩnh điện Linkworld',
    category: 'nha-may',
    image: 'images/product-main.png',
    tag: 'ESD',
    tagClass: 'tag-esd',
    features: ['Điện trở 10^6-10^9', 'Mặt lưới thoáng khí'],
    price: 120000,
    sales: 2500,
    date: '2024-03-08'
  },
  {
    id: 'p18',
    name: 'Quần áo phòng sạch rời',
    category: 'nha-may',
    image: 'images/product-uniform.png',
    tag: 'NEW',
    tagClass: 'tag-new',
    features: ['Vải ESD xanh/trắng', 'Phòng sạch Class 100'],
    price: 145000,
    sales: 1100,
    date: '2024-03-12'
  },
  {
    id: 'p19',
    name: 'Áo Blouse trắng tay dài',
    category: 'y-te',
    image: 'images/product-uniform.png',
    tag: '',
    tagClass: '',
    features: ['Vải Kate Oxford', 'Thêu logo theo yêu cầu'],
    price: 195000,
    sales: 1800,
    date: '2024-02-15'
  },
  {
    id: 'p20',
    name: 'Dây đai an toàn 2 móc',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: 'HOT',
    tagClass: 'tag-hot',
    features: ['Chịu lực 22kN', 'Giảm chấn hiệu quả'],
    price: 350000,
    sales: 400,
    date: '2024-03-05'
  },
  {
    id: 'p21',
    name: 'Áo thun sự kiện giá rẻ',
    category: 'ao-thun',
    image: 'images/polo.png',
    tag: '',
    tagClass: '',
    features: ['Vải thun mè', 'Số lượng từ 100 áo'],
    price: 45000,
    sales: 12000,
    date: '2024-01-10'
  },
  {
    id: 'p22',
    name: 'Ủng cao su chống hóa chất',
    category: 'bao-ho',
    image: 'images/product-pants.png',
    tag: '',
    tagClass: '',
    features: ['Nhựa PVC/Nitrile', 'Chống trơn trượt SRA'],
    price: 180000,
    sales: 900,
    date: '2024-02-05'
  },
  {
    id: 'p23',
    name: 'Kính bảo hộ King\'s KY1151',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: 'HOT',
    tagClass: 'tag-hot',
    features: ['Chống tia UV 99.9%', 'Chống trầy xước'],
    price: 45000,
    sales: 5000,
    date: '2024-03-02'
  },
  {
    id: 'p24',
    name: 'Mặt nạ phòng độc 3M 6200',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: '',
    tagClass: '',
    features: ['Chất liệu Silicone', 'Đạt chuẩn NIOSH'],
    price: 320000,
    sales: 750,
    date: '2024-02-20'
  },
  {
    id: 'p25',
    name: 'Áo phản quang dây cao su',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: 'BEST',
    tagClass: 'tag-hot',
    features: ['Dây co giãn tốt', 'Phản quang cực sáng'],
    price: 35000,
    sales: 15000,
    date: '2024-03-10'
  },
  {
    id: 'p26',
    name: 'Găng tay sợi sơn lòng bàn tay',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: '',
    tagClass: '',
    features: ['Chống mài mòn', 'Thoáng khí cực tốt'],
    price: 8000,
    sales: 100000,
    date: '2024-01-05'
  },
  {
    id: 'p27',
    name: 'Cuộn dây cứu sinh tự rút',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: 'FR',
    tagClass: 'tag-fr',
    features: ['Dây cáp thép 5m', 'Hệ thống phanh kép'],
    price: 2500000,
    sales: 50,
    date: '2024-02-15'
  },
  {
    id: 'p28',
    name: 'Nút tai chống ồn 3M 1100',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: '',
    tagClass: '',
    features: ['Bọt biển mềm mại', 'Độ giảm ồn 29dB'],
    price: 5000,
    sales: 50000,
    date: '2024-03-01'
  },
  {
    id: 'p29',
    name: 'Băng rào cảnh báo 100m',
    category: 'bao-ho',
    image: 'images/hero-2.png',
    tag: 'NEW',
    tagClass: 'tag-new',
    features: ['Nhựa PP không bay màu', 'Trắng đỏ/Vàng đen'],
    price: 65000,
    sales: 2000,
    date: '2024-03-12'
  },
  {
    id: 'p30',
    name: 'Thắt lưng bảo hộ Kaki',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: '',
    tagClass: '',
    features: ['Khóa đồng chắc chắn', 'Vải kaki bọc dù'],
    price: 25000,
    sales: 3000,
    date: '2024-02-28'
  },
  {
    id: 'p31',
    name: 'Áo gile kỹ sư phối lưới',
    category: 'bao-ho',
    image: 'images/product-main.png',
    tag: 'HOT',
    tagClass: 'tag-hot',
    features: ['Vải Pangrim Hàn Quốc', 'Thoáng mát mùa hè'],
    price: 135000,
    sales: 2200,
    date: '2024-03-14'
  },
  {
    id: 'p32',
    name: 'Găng tay da hàn dài tay',
    category: 'bao-ho',
    image: 'images/hero-1.png',
    tag: '',
    tagClass: '',
    features: ['Da bò chịu nhiệt', 'Chống tia lửa hàn'],
    price: 95000,
    sales: 1100,
    date: '2024-02-10'
  }
];

function initCategoryPage() {
  const productGrid = document.getElementById('productGrid');
  const paginationContainer = document.getElementById('paginationContainer');
  const categoryLinks = document.querySelectorAll('#categoryList .sidebar-link');
  const sortSelect = document.getElementById('productSort');
  const categoryTitle = document.getElementById('categoryTitle');

  if (!productGrid) return;

  let currentCategory = 'bao-ho';
  let currentSort = 'default';
  let currentPage = 1;
  const itemsPerPage = 6;

  function renderPagination(totalItems) {
    if (!paginationContainer) return;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    if (currentPage < totalPages) {
      html += `
        <button class="page-btn page-next" data-page="${currentPage + 1}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      `;
    }

    paginationContainer.innerHTML = html;

    // Add events
    paginationContainer.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(btn.dataset.page);
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  function renderProducts() {
    // Filter
    let filtered = PRODUCTS_DATA.filter(p => p.category === currentCategory);

    // Sort
    if (currentSort === 'newest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (currentSort === 'bestseller') {
      filtered.sort((a, b) => b.sales - a.sales);
    }

    const totalItems = filtered.length;

    // Paginate
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = filtered.slice(start, end);

    // Generate HTML
    if (paginated.length === 0) {
      productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--clr-text-muted);">Không tìm thấy sản phẩm nào trong danh mục này.</p>';
      paginationContainer.innerHTML = '';
      return;
    }

    productGrid.innerHTML = paginated.map(p => `
      <article class="product-card-new">
          <a href="product.html" class="product-card-new__img">
              ${p.tag ? `<span class="product-card-new__tag ${p.tagClass}">${p.tag}</span>` : ''}
              <img src="${p.image}" alt="${p.name}">
          </a>
          <div class="product-card-new__info">
              <h3><a href="product.html">${p.name}</a></h3>
              <ul>
                  ${p.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
              <a href="index.html#quote-section" class="btn-sm-quote">Nhận báo giá sỉ</a>
          </div>
      </article>
    `).join('');

    renderPagination(totalItems);
  }

  // Event Listeners
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Update UI
      categoryLinks.forEach(l => {
        l.classList.remove('active');
        l.style.background = '';
        l.style.borderLeft = '';
        l.style.fontWeight = '400';
      });
      link.classList.add('active');
      link.style.background = 'rgba(11, 58, 102, 0.1)';
      link.style.borderLeft = '4px solid var(--clr-accent)';
      link.style.fontWeight = '600';

      // Update Data
      currentCategory = link.dataset.category;
      currentPage = 1; // Reset to page 1 on category change
      if (categoryTitle) categoryTitle.textContent = link.textContent;

      renderProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      currentPage = 1; // Reset to page 1 on sort change
      renderProducts();
    });
  }

  // Initial Render
  renderProducts();
}

/* ==========================================================================
   PRODUCT DETAIL PAGE LOGIC
   ========================================================================== */

function switchTab(button, tabId) {
  // Update buttons
  document.querySelectorAll('.tab-sticky-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  const targetPanel = document.getElementById(tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Scroll to tab nav if needed
  const nav = document.querySelector('.tabs-nav-sticky');
  if (nav) {
    const navTop = nav.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = 80;
    window.scrollTo({
      top: navTop - headerHeight,
      behavior: 'smooth'
    });
  }
}

function switchGallery(thumb) {
  // Update thumbnails
  document.querySelectorAll('.product-gallery__thumb').forEach(t => {
    t.classList.remove('active');
    t.style.borderColor = 'var(--clr-border)';
  });
  thumb.classList.add('active');
  thumb.style.borderColor = 'var(--clr-accent)';

  // Update main image
  const mainImg = document.getElementById('mainProductImage');
  const newSrc = thumb.querySelector('img').src;

  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = '1';
    }, 200);
  }
}

/* ==========================================================================
   MAIN INITIALIZATION
   ========================================================================== */

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

  // Create overlay if not exists
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  if (hamburger && nav) {
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      overlay.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      toggleMenu();
    });
    overlay.addEventListener('click', () => {
      console.log('Overlay clicked');
      toggleMenu();
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        overlay.classList.remove('active');
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
    const target = parseFloat(el.getAttribute('data-counter')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const decimals = (el.getAttribute('data-counter').split('.')[1] || '').length;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = progress === 1 ? target : eased * target;

      el.textContent = prefix + (decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString('vi-VN')) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-counter]').forEach(c => counterObserver.observe(c));

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
            '<p>Cảm ơn Quý khách đã quan tâm đến Dương Thành Tín.<br>Đội ngũ tư vấn sẽ liên hệ với Quý khách trong vòng <strong style="color:var(--clr-primary)">24 giờ làm việc</strong>.</p>' +
            '<p style="font-size:var(--fs-sm)">Nếu cần hỗ trợ gấp, vui lòng liên hệ trực tiếp qua các kênh bên dưới.</p>' +
            '<div class="success-contact">' +
            '<p><strong>Hotline:</strong> 0905 123 456 &nbsp;|&nbsp; <strong>Zalo:</strong> 0905 123 456</p>' +
            '<p><strong>Email:</strong> info@duongthanhtin.vn</p>' +
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
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // If it's a section being entered, we might want to keep it visible
        // but for reveal elements, we usually unobserve after first trigger
        if (entry.target.classList.contains('reveal')) {
          revealObserver.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section, .page-hero, .reveal, .fade-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

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

  // Initialize Category Page if present
  initCategoryPage();

  // Initialize Handbook Page if present
  initHandbookPage();

  /* ---------- Testimonial Slider (Flip Card) ---------- */
  const testimonials = [
    {
      name: 'Trần Quốc Dũng',
      role: 'Giám đốc chi nhánh ACB',
      quote: '“Chúng tôi đã hợp tác với Dương Thành Tín cho 3 dự án lớn trong năm qua. Chất lượng vải kaki và đường may rất chắc chắn, đúng tiêu chuẩn bảo hộ khắt khe. Đặc biệt, đội ngũ hỗ trợ tiến độ rất sát sao, giúp chúng tôi hoàn thành trang bị cho 500 nhân viên đúng thời hạn.”',
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
      quote: '“Dịch vụ tận tâm, quy trình SOP 4 bước giúp chúng tôi tuyệt đối an tâm về chất lượng. Foster rất hài lòng với các mẫu thiết kế áo thun đồng phục mới của Dương Thành Tín, vừa thời trang vừa đảm bảo tính nhận diện thương hiệu.”',
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
        mainImgEl.alt = data.name + ' - Dương Thành Tín';
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



// ---------- Handbook Page Logic ----------
function initHandbookPage() {
  const form = document.getElementById('handbookForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Simple UI feedback
    btn.disabled = true;
    btn.innerHTML = 'ĐANG XỬ LÝ...';

    setTimeout(() => {
      btn.innerHTML = 'ĐÃ GỬI TÀI LIỆU!';
      btn.style.background = 'var(--clr-success)';
      alert('Cảm ơn bạn! Tài liệu chuyên sâu đã được gửi vào email của bạn.');
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 3000);
    }, 1500);
  });
}

// Call init functions on DOM load (check if already called or add to existing DOMContentLoaded)
