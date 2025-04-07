document.addEventListener("DOMContentLoaded", () => {

    const animateElements = document.querySelectorAll(
      ".section-title, .skill-card, .app-item, .social-item, .profile-image, .profile-info, .project-card",
    )

    animateElements.forEach((element) => {
      element.classList.add("animate-in")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    const skillLevels = document.querySelectorAll(".skill-level")
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scaleX(1)"
          }
        })
      },
      { threshold: 0.1 },
    )

    skillLevels.forEach((level) => {
      skillObserver.observe(level)
    })

    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        })
      })
    })

    const skillCards = document.querySelectorAll(".skill-card")
    skillCards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
      })
    })

    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".project-overlay").style.transform = "translateY(0)"
      })

      card.addEventListener("mouseleave", function () {
        this.querySelector(".project-overlay").style.transform = "translateY(100%)"
      })
    })

    window.addEventListener("scroll", () => {
      const profileImage = document.querySelector(".image-wrapper")
      const scrollPosition = window.scrollY

      if (profileImage) {
        profileImage.style.transform = `translateY(${scrollPosition * 0.05}px) rotateY(${scrollPosition * 0.02}deg)`
      }
    })
  })