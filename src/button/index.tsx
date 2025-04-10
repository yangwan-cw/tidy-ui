import {defineComponent, h, PropType} from "vue";
import "uno.css";
export type ISize = "small" | "medium" | "large";
export type IColor = 'black' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'white'
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'blue'
    },
    // 新增
    size: {
        type: String as PropType<ISize>,
        default: "small",
    },
    icon: {
        type: String,
        default: 'mdi'
    },
    plain: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
}
const size = {
    small: {
        x: "2",
        y: "1",
        text: "xs"
    }, medium: {
        x: "3",
        y: "1.5",
        text: "sm"
    }, large: {
        x: "4",
        y: "2",
        text: "base"
    }
}

export default defineComponent({


    name: "SButton",
    props,
    // template:'<button>MyButton</button>'
    setup(props, {slots}) {
        console.log(`html`, document.querySelector(`#app`)?.innerHTML);
        return () => <button
            class={`
              align-bottom
              py-${size[props.size].y}
              px-${size[props.size].x}
              text-white 
               ${props.round ? "rounded-full" : "rounded-lg"}
              bg-${props.color}-${props.plain ? "100" : "500"}
              hover:bg-${props.color}-700 
              text-${props.plain ? props.color + "-500" : "white"}
              text-${size[props.size].text}
              border-solid 
              cursor-pointer 
              hover:text-white
              transition duration-300 ease-in-out transform hover:scale-105
              mx-1
      `}
        >
            {props.icon !== "" ? <img class={`i-ic-baseline-${props.icon} p-1`}/> : ""}
            {slots.default ? slots.default() : '12123'}
        </button>
    },


});