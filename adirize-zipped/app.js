const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const circles = document.querySelectorAll('.circle')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')

    // circles.forEach(circle => {
    //     circle.classList.remove('active')
    // })
    // circle.classList.add('active')
    // target.classList.add('active')
  })
})


const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navbar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggled");
});

const API_URL = "https://api.adirize.com/api/v1"

$.ajax({
  url: `${API_URL}/projects/current`,
  success: function(data){
    let values = JSON.parse(data)

    $('.js-telegram').attr('href', values.social_media.telegram)
    $('.js-twitter').attr('href', values.social_media.twitter)
  }
});


$.ajax({
  url: `${API_URL}/stages`,
  success: function (data) {
    let stages = JSON.parse(data);
    let start_date = new Date(stages.data[0].start_date).getTime();
    let text = "";
    let today = new Date();

    $('.js-p1-bonus').text(stages.data[0].bonuses.base_percentage+'%')
    $('.js-p2-bonus').text(stages.data[1].bonuses.base_percentage+'%')
    $('.js-p3-bonus').text(stages.data[2].bonuses.base_percentage+'%')

    if (today < new Date(stages.data[0].start_date)) {
      start_date = new Date(stages.data[0].start_date);
      text = "PRESALE WILL START IN";
    }
    if (
      today > new Date(stages.data[0].start_date) &&
      today < new Date(stages.data[0].end_date)
    ) {
      start_date = new Date(stages.data[0].end_date);
      text = "PRESALE STAGE 1 WILL END IN";
    }

    if (
      today > new Date(stages.data[1].start_date) &&
      today < new Date(stages.data[1].end_date)
    ) {
      start_date = new Date(stages.data[1].end_date);
      text = "PRESALE STAGE 2 WILL END IN";
    }

    if (
      today > new Date(stages.data[2].start_date) &&
      today < new Date(stages.data[2].end_date)
    ) {
      start_date = new Date(stages.data[2].end_date);
      text = "PRESALE STAGE 3 WILL END IN";
    }

    $('.js-countdown-text').text(text)

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const countDown = new Date(start_date).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        document.querySelector(".day").innerText = Math.floor(
          distance / day
        );
        (document.querySelector(".hour").innerText = Math.floor(
          (distance % day) / hour
        )),
          (document.querySelector(".minute").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.querySelector(".second").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, 0);
  },
});
