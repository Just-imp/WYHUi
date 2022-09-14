import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
const safelist = [
    ...colors.map((c) => `bg-${c}-500`),
    ...colors.map((c) => `hover:bg-${c}-700`),
    ...colors.map((c) => `hover:bg-${c}-600`),
    ...colors.map((c) => `hover:bg-${c}-700`),
    ...[
        "search",
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",
      ].map((v) => `i-ic-baseline-${v}`)
]
export default () => {
    return Unocss({ presets: [presetAttributify(), presetIcons(), presetUno()], safelist })
}