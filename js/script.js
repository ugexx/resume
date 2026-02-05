// macOS Tahoe Resume - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Update clock in menu bar (Tahoe format)
  function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const day = days[now.getDay()];
    const month = now.toLocaleString('default', { month: 'short' });
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    document.getElementById('clock').textContent =
      `${day} ${month} ${date}  ${displayHours}:${minutes} ${ampm}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // Window management
  const resumeWindow = document.getElementById('resumeWindow');
  const titleBar = resumeWindow.querySelector('.title-bar');

  // Make window draggable with smooth animation
  let isDragging = false;
  let dragOffsetX, dragOffsetY;

  titleBar.addEventListener('mousedown', function(e) {
    if (e.target.closest('.window-controls')) return;

    isDragging = true;

    // Get current position accounting for transform
    const rect = resumeWindow.getBoundingClientRect();
    resumeWindow.style.left = rect.left + 'px';
    resumeWindow.style.top = rect.top + 'px';
    resumeWindow.style.transform = 'none';

    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;

    resumeWindow.style.transition = 'none';
    document.body.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;

    let newX = e.clientX - dragOffsetX;
    let newY = e.clientY - dragOffsetY;

    // Keep window within viewport
    const maxX = window.innerWidth - resumeWindow.offsetWidth;
    const maxY = window.innerHeight - resumeWindow.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(28, Math.min(newY, maxY));

    resumeWindow.style.left = newX + 'px';
    resumeWindow.style.top = newY + 'px';
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
    }
  });

  // Close button
  const closeBtn = resumeWindow.querySelector('.control-btn.close');
  closeBtn.addEventListener('click', function() {
    resumeWindow.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 1, 1)';
    resumeWindow.style.transform = 'scale(0.95)';
    resumeWindow.style.opacity = '0';

    setTimeout(function() {
      resumeWindow.style.transition = 'all 0.4s cubic-bezier(0, 0, 0.2, 1)';
      resumeWindow.style.transform = 'translateX(-50%)';
      resumeWindow.style.left = '50%';
      resumeWindow.style.top = '50px';
      resumeWindow.style.opacity = '1';
    }, 1200);
  });

  // Minimize button
  const minimizeBtn = resumeWindow.querySelector('.control-btn.minimize');
  minimizeBtn.addEventListener('click', function() {
    resumeWindow.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 1, 1)';
    resumeWindow.style.transform = 'scale(0.05) translateY(100vh)';
    resumeWindow.style.opacity = '0';

    setTimeout(function() {
      resumeWindow.style.transition = 'all 0.4s cubic-bezier(0, 0, 0.2, 1)';
      resumeWindow.style.transform = 'translateX(-50%)';
      resumeWindow.style.left = '50%';
      resumeWindow.style.top = '50px';
      resumeWindow.style.opacity = '1';
    }, 1500);
  });

  // Zoom button - toggle fullscreen
  const zoomBtn = resumeWindow.querySelector('.control-btn.zoom');
  let isMaximized = false;

  zoomBtn.addEventListener('click', function() {
    resumeWindow.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';

    if (!isMaximized) {
      resumeWindow.style.width = '100%';
      resumeWindow.style.height = 'calc(100vh - 28px)';
      resumeWindow.style.top = '28px';
      resumeWindow.style.left = '0';
      resumeWindow.style.transform = 'none';
      resumeWindow.style.maxWidth = 'none';
      resumeWindow.style.maxHeight = 'none';
      resumeWindow.style.borderRadius = '0';
    } else {
      resumeWindow.style.width = '';
      resumeWindow.style.height = '';
      resumeWindow.style.top = '50px';
      resumeWindow.style.left = '50%';
      resumeWindow.style.transform = 'translateX(-50%)';
      resumeWindow.style.maxWidth = '';
      resumeWindow.style.maxHeight = '';
      resumeWindow.style.borderRadius = '';
    }

    isMaximized = !isMaximized;

    setTimeout(() => {
      resumeWindow.style.transition = '';
    }, 350);
  });

  // Dock magnification effect
  const dockItems = document.querySelectorAll('.dock-item');
  const dock = document.querySelector('.dock-container');

  dock.addEventListener('mousemove', function(e) {
    dockItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(e.clientX - itemCenterX);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const scale = 1 + (0.3 * (1 - distance / maxDistance));
        const translateY = -12 * (1 - distance / maxDistance);
        item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      } else {
        item.style.transform = '';
      }
    });
  });

  dock.addEventListener('mouseleave', function() {
    dockItems.forEach(item => {
      item.style.transform = '';
    });
  });

  // Resize handle functionality
  const resizeHandle = resumeWindow.querySelector('.resize-handle');
  let isResizing = false;

  resizeHandle.addEventListener('mousedown', function(e) {
    isResizing = true;
    e.preventDefault();
    e.stopPropagation();

    // Get initial position
    const rect = resumeWindow.getBoundingClientRect();
    resumeWindow.style.left = rect.left + 'px';
    resumeWindow.style.top = rect.top + 'px';
    resumeWindow.style.transform = 'none';
  });

  document.addEventListener('mousemove', function(e) {
    if (!isResizing) return;

    const rect = resumeWindow.getBoundingClientRect();
    const newWidth = e.clientX - rect.left;
    const newHeight = e.clientY - rect.top;

    if (newWidth >= 400) {
      resumeWindow.style.width = newWidth + 'px';
    }
    if (newHeight >= 400) {
      resumeWindow.style.height = newHeight + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    isResizing = false;
  });

  // Smooth reveal animation on load
  resumeWindow.style.opacity = '0';
  resumeWindow.style.transform = 'translateX(-50%) scale(0.95)';

  setTimeout(() => {
    resumeWindow.style.transition = 'all 0.5s cubic-bezier(0, 0, 0.2, 1)';
    resumeWindow.style.opacity = '1';
    resumeWindow.style.transform = 'translateX(-50%) scale(1)';

    setTimeout(() => {
      resumeWindow.style.transition = '';
    }, 500);
  }, 100);
});
