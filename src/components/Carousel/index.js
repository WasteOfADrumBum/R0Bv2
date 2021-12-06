import React from 'react'
import './_carousel.scss'

const Carousel = () => {
  return (
    <div className="component carousel">
      <a href="https://www.linkedin.com/in/joshuamsmall/" className="linkedIn">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://github.com/WasteOfADrumBum" className="gitHub">
        <i className="fab fa-github-alt" />
      </a>
      <a href="https://www.facebook.com/WasteOfADrumBum/" className="facebook">
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://www.instagram.com/one_small_family/"
        className="instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.snapchat.com/add/wasteofadrumbum"
        className="snapChat"
      >
        <i className="fab fa-snapchat-ghost" />
      </a>
      <a
        href="https://steamcommunity.com/id/wasteofadrumbum/"
        className="steam"
      >
        <i className="fab fa-steam-symbol" />
      </a>
      <a href="https://open.spotify.com/user/1224180199" className="spotify">
        <i className="fab fa-spotify" />
      </a>
      <a href="https://soundcloud.com/wasteofadrumbum" className="soundCloud">
        <i className="fab fa-soundcloud" />
      </a>
      <a
        href="https://stackoverflow.com/users/13681415/wasteofadrumbum"
        className="stackOverflow"
      >
        <i className="fab fa-stack-overflow" />
      </a>
      <a
        href="https://account.xbox.com/Profile?Gamertag=Kidd%20Kaos%2069"
        className="xBox"
      >
        <i className="fab fa-xbox" />
      </a>
      <a href="https://www.joshuamsmall.com/" className="personalSite">
        <i className="fas fa-laptop-code" />
      </a>
    </div>
  )
}

export default Carousel
