const utils = {
  getUserAgent () {
    return navigator.userAgent
  },
  Android () {
    return /Android/i.test(this.getUserAgent()) && !this.Windows()
  },
  BlackBerry () {
    return /BlackBerry|BB10|PlayBook/i.test(this.getUserAgent())
  },
  iPhone () {
    return /iPhone/i.test(this.getUserAgent()) && !this.iPad() && !this.Windows()
  },
  iPod () {
    return /iPod/i.test(this.getUserAgent())
  },
  iPad () {
    return /iPad/i.test(this.getUserAgent())
  },
  iOS () {
    return (this.iPad() || this.iPod() || this.iPhone())
  },
  Opera () {
    return /Opera Mini/i.test(this.getUserAgent())
  },
  Windows () {
    return /Windows Phone|IEMobile|WPDesktop/i.test(this.getUserAgent())
  },
  any () {
    return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows())
  }
}

const device = utils.any() ? utils.any() : utils

export default device
