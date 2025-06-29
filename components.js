// Header and footer

function setContent(prefix = './') {
  const header = document.createElement('nav');
  header.classList.add('navbar');
  header.innerHTML = `
    <div class="navbar-content">
      <a href="/">
        <img src="${prefix}img/saksham logo.png" alt="Sakksham Finserv LLP" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <div class="dropdown">
            <a href="${prefix}about">
              About <i class="fa fa-angle-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="${prefix}about">About Sakksham Finserv LLP</a>
              <a href="${prefix}about/achievements">Achievements</a>
              <a href="${prefix}about/associates">Trade Associates</a>
              <a href="${prefix}about/team">Meet Our Team</a>
              <a href="${prefix}about/csr">CSR</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <a href="${prefix}services">
              Services <i class="fa fa-angle-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="${prefix}services/debt">Debt Recovery</a>
              <a href="${prefix}services/credit">Credit Collection</a>
              <a href="${prefix}services/legal">Legal Services</a>
              <a href="${prefix}services/business">Business Correspondance</a>
            </div>
          </div>
        </li>
        <li>
          <a href="${prefix}blogs">Blogs</a>
        </li>
        <li>
          <a href="${prefix}careers">Careers</a>
        </li>
        <li>
          <a href="${prefix}contact">Contact</a>
        </li>
      </ul>
      <div class="navbar-open">
        <i class="fa fa-bars"></i>
      </div>
    </div>

    <div class="navbar-responsive-content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="${prefix}about">
            About <i class="fa fa-angle-down"></i>
          </a>
          <div class="navbar-sub-list">
            <a href="${prefix}about">About Sakksham Finserv LLP</a>
            <a href="${prefix}about/achievements">Achievements</a>
            <a href="${prefix}about/associates">Trade Associates</a>
            <a href="${prefix}about/team">Meet Our Team</a>
              <a href="${prefix}about/csr">CSR</a>
          </div>
        </li>
        <li>
          <a href="${prefix}services">
            Services <i class="fa fa-angle-down"></i>
          </a>
          <div class="navbar-sub-list">
            <a href="${prefix}services/debt">Debt Recovery</a>
            <a href="${prefix}services/credit">Credit Collection</a>
            <a href="${prefix}services/legal">Legal Services</a>
            <a href="${prefix}services/business">Business Correspondance</a>
          </div>
        </li>
        <li>
          <a href="${prefix}blogs">Blogs</a>
        </li>
        <li>
          <a href="${prefix}careers">Careers</a>
        </li>
        <li>
          <a href="${prefix}contact">Contact</a>
        </li>
      </ul>
    </div>`;

  const footer = document.createElement('div');
  footer.innerHTML = `
    <div class="footer">
      <div class="footer-grid">
        <div class="footer-column">
          <a href="">
            <img src="${prefix}img/saksham logo.png" alt="Sakksham Finserv" />
          </a>
          <p class="footer-description">
            We're here to support you with all your collection, recovery, and
            legal service needs. Whether you'd like an initial consultation, a
            tailored solution, or simply want to learn more about how we can
            help, please feel free to get in touch with us- we'd be pleased to
            hear from you.
          </p>
        </div>
        <div class="footer-column">
          <h3>About</h3>
          <a href="${prefix}about">About Sakksham Finserv LLP</a>
          <a href="${prefix}about/achievements">Achievements</a>
          <a href="${prefix}about/associates">Trade Associates</a>
          <a href="${prefix}about/team">Meet Our Team</a>
          <a href="${prefix}about/csr">CSR</a>
        </div>
        <div class="footer-column">
          <h3>Services</h3>
          <a href="${prefix}services/debt">Debt Recovery</a>
          <a href="${prefix}services/credit">Credit Collection</a>
          <a href="${prefix}services/legal">Legal Services</a>
          <a href="${prefix}services/business">Business Correspondance</a>
        </div>
        <div class="footer-column">
          <h3>Contact</h3>
          <p>
            <span>Registered office:</span>
            Sakksham Finserv LLP, Dattani Plaza, Mehra Compound Rd, Safed
            Pul, Saki Naka, Mumbai 400072
          </p>
          <p>
            <i class="fa fa-envelope"></i>
            <a href="mailto:xyz@sakkshamfinserv.com">
              xyz@sakkshamfinserv.com
            </a>
          </p>
          <p>
            <i class="fa fa-phone"></i>
            <a href="tel:+919999999999">99999 99999</a>
          </p>
          <div class="social-media">
            <a href="https://wa.me/+919999999999" target="_blank"><i class="fa fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://x.com/" target="_blank"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>
        Copyrights © 2025-2026 <span>Saksham Security Services</span>. All
        Rights Reserved.
      </p>
    </div>`;

  const socialMedia = document.createElement('div');
  socialMedia.innerHTML = `
    <div class="social-media-side-tab">
      <div class="social-media-icon" id="whatsapp">
        <a href="https://wa.me/+919999999999" target="_blank"><i class="fa fa-whatsapp"></i></a>
      </div>
      <div class="social-media-icon" id="linkedin">
        <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
      </div>
      <div class="social-media-icon" id="youtube">
        <a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play"></i></a>
      </div>
      <div class="social-media-icon" id="instagram">
        <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
      </div>
      <div class="social-media-icon" id="twitter">
        <a href="https://x.com/" target="_blank"><i class="fa fa-twitter"></i></a>
      </div>
    </div>`;

  document.body.insertBefore(header, document.body.firstChild);
  document.body.appendChild(footer);
  document.body.appendChild(socialMedia);
}
