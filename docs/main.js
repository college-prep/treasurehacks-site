const acc = document.getElementsByClassName('accordion')
let i
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}

const toggle = document.getElementById('hamburger')

toggle.addEventListener('click', function () {
  const nav = document.getElementById('navigation')
  if (nav.classList.contains('open')) {
    nav.parentNode.classList.remove('open')
    toggle.className = 'fa fa-bars hamburger fa-lg'
    document.getElementById('navigation').classList.remove('open')
  } else {
    nav.parentNode.classList.add('open')
    document.getElementById('navigation').classList.add('open')
    toggle.className = 'fa fa-close hamburger fa-lg'
  }
})

window.addEventListener('mouseover', function (e) {
  categoryDetails(e.target)
})
window.addEventListener('click', function (e) {
  categoryDetails(e.target)
})
function categoryDetails (target) {
  switch (target.id) {
    case 'best-overall': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      target.style.paddingBottom = '10px'
      document.getElementById('category-title').innerHTML = 'Best Overall'
      document.getElementById('category-description').innerHTML = 'The "Best Overall" award will be given to a hacker or team who best demonstrates their project&rsquo;s creativity, practicality, engineering excellence, and presentation.'
      // document.getElementById('category-prizes').innerHTML = 'Prizes for this category include 1 $30 Amazon Gift Card For Each Group Member, 1 Cloud Stinger Headsets For Each Group Member, and 1 Alloy FPS RGB Refurb Keyboard For Each Group Member.'

      break
    }
    case 'best-solo': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      document.getElementById('category-title').innerHTML = 'Best Solo Hack'
      target.style.paddingBottom = '10px'
      document.getElementById('category-description').innerHTML = 'The "Best Solo Hack" award will be given to a single hacker with the best solo project in the entire Hackathon.'
      // document.getElementById('category-prizes').innerHTML = 'Prizes for this category include 1 $30 Amazon Gift Card, 1 Cloud Stinger Headset, 1 Alloy FPS RGB Refurb Keyboard, and 1 Goliath Automation and Robotics Monster Kit.'
      break
    }
    case 'best-duo': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      document.getElementById('category-title').innerHTML = 'Best Duo Hack'
      target.style.paddingBottom = '10px'
      document.getElementById('category-description').innerHTML = 'Collaboration skills are super important in the programming world! The "Best Duo Hack" award will be given to a team of two hackers with the best project.'
      // document.getElementById('category-prizes').innerHTML = 'Prizes for this category include 1 $30 Amazon Gift Card Each, 1 Cloud Stinger Headset Each, and 1 Alloy FPS RGB Refurb Keyboard Each.'
      break
    }
    case 'most-aesthetically-pleasing': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      document.getElementById('category-title').innerHTML = 'Most Aesthetically Pleasing'
      target.style.paddingBottom = '10px'
      document.getElementById('category-description').innerHTML = 'Are you a creative and artistic person? The "Most Aesthetically Pleasing" award will be given to the project with the most polish, best presentation, and most intuitive user experience.'
      // document.getElementById('category-prizes').innerHTML = 'The prize for this category is 1 $30 Amazon Gift Card.'
      break
    }
    case 'most-people-helped': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      document.getElementById('category-title').innerHTML = 'Most People Helped'
      target.style.paddingBottom = '10px'
      document.getElementById('category-description').innerHTML = 'At Treasure Hacks, we value teamwork and working together. The "Most People Helped" award will be given to the hacker who has helped the most other groups complete their projects.'
      // document.getElementById('category-prizes').innerHTML = 'Prizes for this category include 1 $30 Amazon Gift Card Each, 1 Cloud Stinger Headset Each, and 1 Alloy FPS RGB Refurb Keyboard Each.'
      break
    }
    case 'all-participants': {
      resetAll()
      target.style.borderBottom = '3px solid black'
      target.style.paddingBottom = '10px'
      document.getElementById('category-title').innerHTML = 'All Participants'
      document.getElementById('category-description').innerHTML = 'We also offer prizes for all of our participants!'
      // document.getElementById('category-prizes').innerHTML = 'Each participant will receive a Treasure Hacks sticker, a Hack club Sticker, an Echo3D business plan, a Replit subscription, $120 Sashido credits, an InterviewCake subscription, a Qoom subscription, and a Treasure Hacks T-shrit.'
      break
    }
  }
}
function resetAll () {
  const list = ['best-overall', 'best-solo', 'best-duo', 'most-aesthetically-pleasing', 'most-people-helped', 'all-participants']
  for (let i = 0; i < list.length; i++) {
    document.getElementById(list[i]).style.borderColor = 'rgba(0,0,0,0)'
    document.getElementById(list[i]).style.paddingBottom = '10px'
  }
}
