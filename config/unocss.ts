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
let direction = ['t', 'b', 'r', 'l', 'x', 'y']
let distance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let dirMixDis = []
for (const dir of direction) {
    for (const dis of distance) {
        dirMixDis.push(dir + '-' + dis)
    }
}
//let axis = []
const safelist = [
    ...colors.map((c) => `bg-${c}-500`),
    ...colors.map((c) => `bg-${c}-100`),
    ...colors.map((c) => `border-${c}-500`),
    ...colors.map((c) => `text-${c}`),
    ...colors.map((c) => `text-${c}-700`),
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
        "add-circle"
    ].map((v) => `i-ic-baseline-${v}`),
    ...['none', 'sm', 'lg', 'full', 'md', 'xl', '2xl', '3xl', ''].map((s) => `rounded-${s}`),
    ...dirMixDis.map(v => `m${v}`),
    ...dirMixDis.map(v => `-m${v}`),
    ...dirMixDis.map(v => `-p${v}`),
    ...dirMixDis.map(v => `p${v}`),
]
export default () => {
    return Unocss({
        presets: [presetAttributify(), presetIcons(), presetUno()], safelist
    })
}