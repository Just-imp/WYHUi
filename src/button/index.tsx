import { defineComponent, PropType, toRefs } from "vue";
import "uno.css"
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'blue'
    }
}
export default defineComponent({
    name: 'Wbutton',
    props,
    setup(props, { slots }) {
        return () => (
            <button
                class={`
                py-2 
                px-4 
                font-sem 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props.color}-500 
                hover:bg-${props.color}-600 
                border-none 
                cursor-pointer
               `}
            >
                {slots.default ? slots.default() : ''}
            </button>
        )
    }
})