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
const icons=[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
]
const safelist = [
    ...icons.map((v) => `i-ic-baseline-${v}`),
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-400`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-100`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-400`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map((v) => `border-${v}-400`),
    ...colors.map((v) => `border-${v}-500`),
    ...colors.map((v) => `text-${v}-500`),
    ...colors.map((v) => `hover:text-${v}-500`),
    'text-white',
    ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),

];

export default () =>
    Unocss({
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()],
    });