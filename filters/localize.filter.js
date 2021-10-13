import Vue from 'vue'
import ru from '../static/locales/ru.json'
import en from '../static/locales/en.json'

const locales = {
  'ru-ru': ru,
  'en-us': en
}

Vue.filter('localize', (key) => {
  const config = {
    language: 'en',
    country: 'RU'
  }

  const client = window.navigator
    ? (window.navigator.language ||
      window.navigator.systemLanguage ||
      window.navigator.userLanguage)
    : (config.language + '-' + config.country)

  const language = (client.search('-') > 0)
    ? client.substring(0, client.search('-')).toLowerCase()
    : client.toLowerCase()

  const country = (client.search('-') > 0)
    ? client.substring(client.search('-') + 1, client.length).toLowerCase()
    : config.country

  const locale = `${language}-${country}`
  if (locales[locale]) {
    return locales[locale][key] || `[Localize error] key: ${key} not found`
  } else {
    console.warn('default language: en-US')
    return locales['en-us'][key] || `[Localize error] key: ${key} not found`
  }
})
