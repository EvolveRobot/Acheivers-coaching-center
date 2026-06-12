const courses = [
  {
    id: "jee-main",
    title: "JEE Main Achiever Batch",
    category: "Engineering",
    icon: "JM",
    color: "#2563eb",
    text: "Two-year and one-year classroom programs for Class 11, Class 12 and droppers.",
    points: ["Physics, Chemistry, Maths", "Weekly test analysis", "Doubt clinics"],
  },
  {
    id: "jee-advanced",
    title: "JEE Advanced Elite",
    category: "Engineering",
    icon: "JA",
    color: "#7c3aed",
    text: "Advanced problem-solving track for students targeting top IIT ranks.",
    points: ["Rank booster sheets", "Advanced workshops", "Mentor reviews"],
  },
  {
    id: "neet",
    title: "NEET UG Medical Batch",
    category: "Medical",
    icon: "NT",
    color: "#16a34a",
    text: "Focused biology, physics and chemistry preparation for NEET aspirants.",
    points: ["NCERT mastery", "Full-length mocks", "Error notebooks"],
  },
  {
    id: "repeaters",
    title: "NEET Repeater Program",
    category: "Medical",
    icon: "RP",
    color: "#059669",
    text: "Intensive repeat-year program with discipline, revision and test correction.",
    points: ["Daily practice plan", "Chapter retests", "Counselor tracking"],
  },
  {
    id: "foundation",
    title: "Foundation Classes 6-10",
    category: "School",
    icon: "F6",
    color: "#f59e0b",
    text: "Concept-first math and science learning for school, Olympiad and future entrance exams.",
    points: ["School alignment", "Olympiad exposure", "Study habits"],
  },
  {
    id: "boards",
    title: "Board Excellence",
    category: "School",
    icon: "BE",
    color: "#dc2626",
    text: "Board-focused coaching with answer-writing practice and pre-board testing.",
    points: ["Chapter notes", "Writing practice", "Mock papers"],
  },
  {
    id: "olympiad",
    title: "Olympiad Prep",
    category: "School",
    icon: "OP",
    color: "#9333ea",
    text: "Reasoning-rich practice for math and science Olympiad readiness in middle school.",
    points: ["Concept puzzles", "Timed drills", "Advanced worksheets"],
  },
  {
    id: "test-series",
    title: "All India Test Series",
    category: "Testing",
    icon: "TS",
    color: "#0ea5e9",
    text: "Exam-style test series with rank reports, solutions and personal improvement plans.",
    points: ["Online and offline", "Detailed analytics", "Video solutions"],
  },
  {
    id: "crash-courses",
    title: "Crash Course",
    category: "Revision",
    icon: "CC",
    color: "#ea580c",
    text: "Fast-track revision program for students entering the final exam window.",
    points: ["High-weight chapters", "Formula revision", "Mock drills"],
  },
];

const toppers = [
  {
    name: "Aarav Sharma",
    category: "jee",
    label: "JEE",
    result: "AIR 48",
    image: "studentimages/enthusiastic-elementary-school-girl-posing-260nw-180129191.webp",
    detail: "JEE Main 2025 city topper with consistent top-5 internal test rank.",
  },
  {
    name: "Meera Iyer",
    category: "neet",
    label: "NEET",
    result: "680/720",
    image: "studentimages/happy-indian-college-student-backpack-260nw-2697030461.webp",
    detail: "Improved 82 marks through repeat revision and error tracking.",
  },
  {
    name: "Kabir Khan",
    category: "foundation",
    label: "Class 10",
    result: "97.2%",
    image: "studentimages/happy-indian-student-schoolgirl-do-260nw-2248446779.webp",
    detail: "Board excellence program student and science Olympiad qualifier.",
  },
  {
    name: "Ananya Rao",
    category: "jee",
    label: "JEE",
    result: "99.6 percentile",
    image: "studentimages/istockphoto-2216805195-612x612.jpg",
    detail: "Scored above 99 percentile in three consecutive full mocks.",
  },
  {
    name: "Rohan Patel",
    category: "neet",
    label: "NEET",
    result: "665/720",
    image: "studentimages/1-indian-child-school-student-ED1H7B.jpg",
    detail: "Built strong NCERT recall through daily biology practice.",
  },
  {
    name: "Saanvi Gupta",
    category: "foundation",
    label: "Class 8",
    result: "Olympiad rank 12",
    image: "studentimages/360_F_1288819871_UN1FLBNE46igbHO8kDGGCcNey5vW2aOE.jpg",
    detail: "Foundation student with strong math reasoning performance.",
  },
  {
    name: "Dev Mishra",
    category: "jee",
    label: "JEE",
    result: "AIR 312",
    detail: "Advanced batch student known for disciplined problem review.",
  },
  {
    name: "Nisha Verma",
    category: "neet",
    label: "NEET",
    result: "652/720",
    detail: "Moved from 540 to 650+ through structured mock correction.",
  },
];

const scholarships = [
  {
    title: "Achievers Scholarship Admission Test",
    benefit: "Up to 40%",
    text: "For students entering JEE, NEET and foundation classroom programs.",
    deadline: "Next test: June 23, 2026",
  },
  {
    title: "Merit Scholarship",
    benefit: "Up to 30%",
    text: "Available for students with strong board, Olympiad or entrance test performance.",
    deadline: "Apply before batch allotment",
  },
  {
    title: "Early Bird Admission Benefit",
    benefit: "Up to 15%",
    text: "Fee support for students confirming seats before the first classroom cycle.",
    deadline: "Valid till June 30, 2026",
  },
];

const testimonials = [
  {
    quote:
      "The monthly progress calls helped us understand exactly where our daughter was improving and where she needed more practice.",
    person: "Parent of Meera Iyer, NEET batch",
    rating: "5.0 / 5",
  },
  {
    quote:
      "Tests were tough but useful. The detailed analysis after every mock changed how my son revised physics and maths.",
    person: "Parent of Aarav Sharma, JEE batch",
    rating: "4.9 / 5",
  },
  {
    quote:
      "The foundation program made school science much easier and gave our child confidence for Olympiad questions.",
    person: "Parent of Saanvi Gupta, Foundation batch",
    rating: "5.0 / 5",
  },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderCourses() {
  document.querySelectorAll('[data-render="courses"]').forEach((target) => {
    const limit = Number(target.dataset.limit) || courses.length;
    target.innerHTML = courses
      .slice(0, limit)
      .map(
        (course) => `
          <article class="course-card" id="${course.id}" style="--course-color: ${course.color}">
            <span class="course-icon">${course.icon}</span>
            <span class="category-pill">${course.category}</span>
            <h3>${course.title}</h3>
            <p>${course.text}</p>
            <ul>${course.points.map((point) => `<li>${point}</li>`).join("")}</ul>
            <a href="contact.html#demo">Explore program</a>
          </article>
        `
      )
      .join("");
  });
}

function renderStars() {
  document.querySelectorAll('[data-render="stars"]').forEach((target) => {
    const limit = Number(target.dataset.limit) || toppers.length;
    target.innerHTML = toppers
      .slice(0, limit)
      .map(
        (topper) => `
          <article class="star-card" data-category="${topper.category}">
            ${
              topper.image
                ? `<img class="star-photo" src="${topper.image}" alt="${topper.name}" />`
                : `<div class="star-avatar">${initials(topper.name)}</div>`
            }
            <div class="star-card-body">
              <span class="result-pill">${topper.label} | ${topper.result}</span>
              <h3>${topper.name}</h3>
              <p>${topper.detail}</p>
            </div>
          </article>
        `
      )
      .join("");
  });
}

function renderScholarships() {
  document.querySelectorAll('[data-render="scholarships"]').forEach((target) => {
    const limit = Number(target.dataset.limit) || scholarships.length;
    target.innerHTML = scholarships
      .slice(0, limit)
      .map(
        (item) => `
          <article class="scholarship-card">
            <h3>${item.title}</h3>
            <strong>${item.benefit}</strong>
            <p>${item.text}</p>
            <span class="deadline">${item.deadline}</span>
          </article>
        `
      )
      .join("");
  });
}

function renderTestimonials() {
  document.querySelectorAll('[data-render="testimonials"]').forEach((target) => {
    target.innerHTML = testimonials
      .map(
        (item, index) => `
          <article class="testimonial-card ${index === 0 ? "active" : ""}" data-testimonial-index="${index}">
            <span class="rating">${item.rating}</span>
            <blockquote>${item.quote}</blockquote>
            <cite>${item.person}</cite>
          </article>
        `
      )
      .join("");
  });

  document.querySelectorAll("[data-testimonial-dots]").forEach((target) => {
    target.innerHTML = testimonials
      .map(
        (_, index) =>
          `<button type="button" class="${index === 0 ? "active" : ""}" data-testimonial-dot="${index}" aria-label="Show testimonial ${index + 1}"></button>`
      )
      .join("");
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      document.body.classList.remove("menu-open");
    });
  });
}

function setupStarFilters() {
  document.querySelectorAll('[data-filter-group="stars"]').forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      const filter = button.dataset.filter;
      group.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      const section = group.closest(".section-inner") || document;
      section.querySelectorAll(".star-card").forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !matches);
      });
    });
  });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const runCounter = (counter) => {
    const target = Number(counter.dataset.count);
    if (!target || counter.dataset.done) return;
    counter.dataset.done = "true";

    if (prefersReducedMotion) {
      counter.textContent = String(target);
      return;
    }

    let start = 0;
    const duration = 1100;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const value = Math.floor(start + (target - start) * progress);
      counter.textContent = String(value);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(runCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) runCounter(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupTestimonials() {
  const cards = Array.from(document.querySelectorAll(".testimonial-card"));
  const dots = Array.from(document.querySelectorAll("[data-testimonial-dot]"));
  const prev = document.querySelector("[data-testimonial-prev]");
  const next = document.querySelector("[data-testimonial-next]");
  const shell = document.querySelector(".testimonial-shell");
  if (!cards.length) return;

  let index = 0;
  let timer;

  const show = (nextIndex) => {
    index = (nextIndex + cards.length) % cards.length;
    cards.forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };

  const start = () => {
    if (prefersReducedMotion || cards.length < 2) return;
    timer = window.setInterval(() => show(index + 1), 5000);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
  };

  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => show(Number(dot.dataset.testimonialDot))));
  shell?.addEventListener("mouseenter", stop);
  shell?.addEventListener("mouseleave", start);

  start();
}

function setupForms() {
  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const phone = form.elements.phone.value.replace(/\D/g, "");

      if (!form.reportValidity()) return;
      if (phone.length < 10) {
        status.textContent = "Enter a valid 10 digit phone number.";
        status.style.color = "#dc2626";
        return;
      }

      status.textContent = "Thanks. Our admissions team will call you shortly.";
      status.style.color = "#16a34a";
      form.reset();
    });
  });
}

function duplicateTickerContent() {
  document.querySelectorAll(".ticker-track").forEach((track) => {
    track.innerHTML = `${track.innerHTML}${track.innerHTML}`;
  });
}

function scrollToHashAfterRender() {
  if (!window.location.hash) return;
  const id = window.location.hash.slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
}

function setupFloatingWhatsApp() {
  const phone = "917358006064";
  const message = "Can I know more about the website creation?";
  const link = document.createElement("a");
  link.className = "floating-whatsapp";
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat on WhatsApp about website creation");
  link.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.04 4.5c-6.25 0-11.33 4.91-11.33 10.96 0 1.93.53 3.81 1.54 5.47L4.5 27.5l6.86-1.72a11.74 11.74 0 0 0 4.68.96c6.25 0 11.33-4.92 11.33-10.97S22.29 4.5 16.04 4.5Zm0 20.39c-1.5 0-2.96-.35-4.27-1.03l-.31-.16-4.07 1.02 1.04-3.86-.2-.32a9.12 9.12 0 0 1-1.41-4.84c0-5.04 4.14-9.14 9.23-9.14s9.23 4.1 9.23 9.14-4.14 9.19-9.23 9.19Zm5.06-6.84c-.27-.13-1.63-.78-1.88-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.04-.16.18-.32.2-.59.07-.27-.13-1.15-.41-2.18-1.31-.81-.7-1.36-1.57-1.52-1.83-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.43-.84-1.96-.22-.51-.45-.44-.61-.45h-.52c-.18 0-.47.07-.72.34-.25.27-.95.9-.95 2.19s.97 2.54 1.11 2.72c.13.18 1.91 2.83 4.64 3.97.65.27 1.16.43 1.55.55.65.2 1.24.17 1.71.1.52-.07 1.63-.65 1.86-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.31Z" />
    </svg>
  `;
  document.body.appendChild(link);
}

renderCourses();
renderStars();
renderScholarships();
renderTestimonials();
duplicateTickerContent();
setupMobileMenu();
setupStarFilters();
setupCounters();
setupTestimonials();
setupForms();
scrollToHashAfterRender();
setupFloatingWhatsApp();
