export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Noto+Sans+KR': [400, 500, 600, 700]
    }
  },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: '사주로또 - 사주팔자와 로또번호 추천',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '사주팔자를 보고 로또번호를 추천받는 사이트' }
      ]
    }
  }
})
