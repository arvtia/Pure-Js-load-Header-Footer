
function loadNavbar(navId, items) {
    const navElement = document.getElementById(navId);
    if (navElement) {
      navElement.innerHTML = `
        <nav>
          <ul>
            ${items.map(item => `<li><a href="${item.href}">${item.text}</a></li>`).join('')}
          </ul>
        </nav>
      `;
    } else {
      console.log(`Navbar with ID "${navId}" not found.`);
    }
  }
  
  const navItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
    { text: 'dynamic', href: '#navbar' }
  ];
  
  loadNavbar('navbar', navItems);
  

// footer content
function loadFooter(footerId, items) {
    const footerElement = document.getElementById(footerId);
    if (footerElement) {
      footerElement.innerHTML = `
        <footer>
          <ul>
            ${items.map(item => `<li><a href="${item.href}">${item.text}</a></li>`).join('')}
          </ul>
          <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
      `;
    } else {
      console.log(`Footer with ID "${footerId}" not found.`);
    }
  }
  
  const footerItems = [
    { text: 'Privacy Policy', href: '#privacy' },
    { text: 'Terms of Service', href: '#terms' },
    { text: 'Contact Us', href: '#contact' }
  ];
  
  loadFooter('footer', footerItems);
  