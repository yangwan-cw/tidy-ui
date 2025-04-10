import Theme from 'vitepress/dist/client/theme-default'
import TidyUI from '../../../src/entry'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(TidyUI)
    },
}