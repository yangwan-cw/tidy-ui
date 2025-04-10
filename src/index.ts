import {createApp, h, defineComponent} from 'vue'
import SButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import TidyUI from "./entry"
import "uno.css";
// 创建根组件（使用 render 函数）
const RootComponent = defineComponent({
    template: `
      <SButton color="blue"  size="large"  >普通按钮</SButton>
      <SButton color="green" size="large"  >绿色按钮</SButton>
      <SButton color="pink" size="large"  >粉色按钮</SButton>
    `
})
// 创建应用实例
const app = createApp(RootComponent)
// 安装 UI 库
app.use(TidyUI)
// 挂载到 DOM
app.mount('#app')