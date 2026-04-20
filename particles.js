// Dot-matrix particle system
class DotMatrix {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dots = [];
    this.mouse = { x: -1000, y: -1000 };
    this.accentColor = '#4488ff';
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    this.init();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.dots = [];
    const spacing = 48;
    const cols = Math.ceil(window.innerWidth / spacing) + 1;
    const rows = Math.ceil(window.innerHeight / spacing) + 1;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.dots.push({
          baseX: i * spacing,
          baseY: j * spacing,
          x: i * spacing,
          y: j * spacing,
          baseSize: 1,
          size: 1,
          opacity: 0.12
        });
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const scrollY = window.scrollY;

    for (const dot of this.dots) {
      const screenY = dot.baseY - (scrollY * 0.05);
      const dx = this.mouse.x - dot.baseX;
      const dy = this.mouse.y - screenY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const force = (1 - dist / maxDist);
        dot.size = dot.baseSize + force * 4;
        dot.opacity = 0.12 + force * 0.7;
        dot.highlight = force;
      } else {
        dot.size += (dot.baseSize - dot.size) * 0.08;
        dot.opacity += (0.12 - dot.opacity) * 0.08;
        dot.highlight = Math.max(0, (dot.highlight || 0) - 0.02);
      }

      const h = dot.highlight || 0;
      const r = Math.round(68 + h * (parseInt(this.accentColor.slice(1,3),16) - 68));
      const g = Math.round(68 + h * (parseInt(this.accentColor.slice(3,5),16) - 68));
      const b = Math.round(68 + h * (parseInt(this.accentColor.slice(5,7),16) - 68));

      this.ctx.beginPath();
      this.ctx.arc(dot.baseX, screenY, dot.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r},${g},${b},${dot.opacity})`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Scroll-triggered animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('dot-canvas');
  if (c) window.__dotMatrix = new DotMatrix(c);
  initScrollAnimations();
});
