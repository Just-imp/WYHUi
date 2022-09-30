import { defineComponent, PropType, toRefs } from "vue";
import "uno.css"
//import ic from "@iconify-json/ic"
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type IconType = 'search' | 'edit' | 'check' | 'star-off' | 'message' | 'delete' | 'add' | 'share'|'add-circle'
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'blue'
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String as PropType<IconType>
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    }
}
export default defineComponent({
    name: 'Wbutton',
    props,
    setup(props, { slots }) {
        /* import('@iconify-json/ic').then((i) => {
            console.log(i);
        }) */

        //console.log('slots', typeof slots.default === 'function' ? slots.default() : slots);
        return () => (
            <button
                disabled={props.disabled}
                class={`
                py-2
                font-sem 
                rounded-${props.round ? 'full' : 'lg'}
                shadow-md 
                text-${props.plain ? props.color : 'white'} 
                bg-${props.color}-${props.plain ? '100' : '500'} 
                ${props.disabled ? '' : 'hover:bg-' + props.color + '-600'} 
                ${props.disabled ? '' : 'hover:text-white'}
                border 
                border-${props.color}-${props.plain ? "500" : "500"}
                ${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                ${props.icon && slots.default ? 'pl-1 pr-4' : 'px-4'}
                ${props.disabled ? 'opacity-50' : ''}
                mr-4
               `}
            >
                {props.icon && !props.loading && <i class={`i-ic-baseline-${props.icon} p-3 ${slots.default ? 'mr-1' : ''}`}></i>}
                {/* {props.icon && slots.default && typeof slots.default === 'function' && <span class={`border-r my-0 py-0 inline-block h-` }></span>} */}
                {!props.loading && slots.default && typeof slots.default === 'function' ? slots.default() : ''}
                {props.loading && <i></i>}
            </button>
        )
    }
})