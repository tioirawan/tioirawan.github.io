import { q as createAstro, m as createComponent, n as renderTemplate, p as maybeRenderHead, u as spreadAttributes, s as addAttribute, o as renderComponent, v as unescapeHTML, F as Fragment } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import { c as cn, $ as $$Button, a as $$BaseLayout } from './BaseLayout_wOAhKR6_.mjs';
import './_astro_content_Cbqj-FSa.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons = {"local":{"prefix":"local","lastModified":1719141512,"icons":{"arc":{"body":"<path fill=\"#FFF\" d=\"M123.632.012c13.836.398 26.332 8.52 32.32 21.089l23.761 49.984.382-.966a58.846 58.846 0 0 0 2.315-7.64l.332-1.548c4.004-20.02 23.463-32.977 43.52-29.016a36.982 36.982 0 0 1 29.018 43.526c-5.337 26.652-19.095 51.387-38.829 70.983l-.625.607 8.33 17.514c9.668 20.33-.349 44.903-21.4 51.799l-.95.297-.725.219a36.691 36.691 0 0 1-9.897 1.373 37.012 37.012 0 0 1-33.42-21.102l-6.43-13.518-1.622.402c-8.692 2.054-17.508 3.192-26.328 3.367l-2.405.024c-8.488 0-17.116-.987-25.736-2.9l-1.7-.396-6.177 12.987a36.972 36.972 0 0 1-20.713 18.852l-1.1.382a36.963 36.963 0 0 1-28.96-2.484c-17.56-9.334-24.256-31.186-15.688-49.235l7.67-16.129-.67-.65C17.39 137.46 9.054 125.67 3.524 112.996l-.737-1.733-.106-.281C-4.93 92.058 4.21 70.517 23.122 62.86c14.834-6.005 31.278-1.693 41.39 9.578l.19.218 24.446-51.422A36.858 36.858 0 0 1 121.535.01L122.57 0z\"/><path fill=\"#1A007F\" d=\"m87.118 170.045 21.896-46.068c-16.724-3.552-33.551-13.897-43.068-26.482L43.05 145.63c12.723 10.793 27.999 19.276 44.068 24.414\"/><path fill=\"#4E000A\" d=\"M178.495 96.115c-11 13.483-26.275 23.483-42.62 27.379l21.827 45.93c15.931-5.38 30.827-14.069 43.69-25.206z\"/><path fill=\"#1A007F\" d=\"M43.05 145.631 31.602 169.7c-5.828 12.241-1.449 27.31 10.551 33.689 12.724 6.758 28.379 1.483 34.517-11.38l10.448-21.964A130.635 130.635 0 0 1 43.05 145.63\"/><path fill=\"#FF9396\" d=\"M223.942 43.565a25.137 25.137 0 0 0-29.585 19.723c-2.414 12.07-8.069 23.31-15.862 32.862l22.862 48.137c21.103-18.31 36.688-43.24 42.275-71.137 2.724-13.655-6.104-26.896-19.69-29.585\"/><path fill=\"#002DC8\" d=\"M135.875 123.494c-4.896 1.172-9.896 1.793-14.896 1.793-3.896 0-7.93-.448-11.965-1.31-16.724-3.552-33.551-13.897-43.068-26.482-2.38-3.138-4.31-6.414-5.655-9.759-5.207-12.862-19.862-19.068-32.724-13.896C14.705 79.047 8.5 93.702 13.671 106.563c5.896 14.62 16.31 28.034 29.379 39.068a130.48 130.48 0 0 0 44.033 24.414c11.069 3.551 22.551 5.517 33.862 5.517 12.551 0 24.93-2.173 36.723-6.138z\"/><path fill=\"#FF536A\" d=\"m213.425 169.596-12.068-25.378-22.862-48.103-.034.035s0-.035.034-.035l-33.24-69.93a25.144 25.144 0 0 0-22.69-14.344c-9.69 0-18.517 5.586-22.689 14.345L65.98 97.495c9.517 12.585 26.344 22.93 43.068 26.482l10.965-23.034c1.035-2.173 4.138-2.173 5.173 0l10.724 22.551h.069-.07l21.828 45.93 10.724 22.551a25.103 25.103 0 0 0 22.723 14.345c2.242 0 4.483-.31 6.69-.931 15.138-4.173 22.31-21.586 15.551-35.793\"/>","height":219},"chatgpt":{"body":"<path fill=\"currentColor\" d=\"M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213m21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218-28.188-16.218z\"/>","height":260},"figma":{"body":"<path fill=\"#0ACF83\" d=\"M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64\"/><path fill=\"#A259FF\" d=\"M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64\"/><path fill=\"#F24E1E\" d=\"M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64\"/><path fill=\"#FF7262\" d=\"M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z\"/><path fill=\"#1ABCFE\" d=\"M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64\"/>","height":384},"notion":{"body":"<path fill=\"currentColor\" d=\"M3.258 3.117c.42.341.577.315 1.366.262l7.433-.446c.158 0 .027-.157-.026-.183l-1.235-.893c-.236-.184-.551-.394-1.155-.341l-7.198.525c-.262.026-.315.157-.21.262zm.446 1.732v7.821c0 .42.21.578.683.552l8.17-.473c.472-.026.525-.315.525-.656V4.324c0-.34-.131-.525-.42-.499l-8.538.499c-.315.026-.42.184-.42.525m8.065.42c.052.236 0 .472-.237.499l-.394.078v5.775c-.341.183-.657.288-.92.288-.42 0-.525-.131-.84-.525L6.803 7.342v3.911l.815.184s0 .472-.657.472l-1.812.105c-.053-.105 0-.367.184-.42l.472-.13V6.292L5.15 6.24c-.053-.236.078-.577.446-.604l1.944-.13L10.22 9.6V5.978l-.683-.079c-.053-.289.157-.499.42-.525zm-9.93-3.937L9.326.781c.919-.08 1.156-.026 1.733.394l2.39 1.68c.395.288.526.367.526.682v9.212c0 .578-.21.92-.946.971l-8.694.525c-.552.027-.815-.052-1.104-.42l-1.76-2.283c-.315-.42-.446-.735-.446-1.103V2.25c0-.472.21-.866.814-.918\"/>","width":15,"height":15},"obsidian":{"body":"<defs><radialGradient id=\"a\" cx=\"72.819%\" cy=\"96.934%\" r=\"163.793%\" fx=\"72.819%\" fy=\"96.934%\" gradientTransform=\"rotate(-104 11141.322 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".4\"/><stop offset=\"100%\" stop-opacity=\".1\"/></radialGradient><radialGradient id=\"b\" cx=\"52.917%\" cy=\"90.632%\" r=\"190.361%\" fx=\"52.917%\" fy=\"90.632%\" gradientTransform=\"rotate(-82 10746.75 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".6\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".1\"/></radialGradient><radialGradient id=\"c\" cx=\"31.174%\" cy=\"97.138%\" r=\"178.714%\" fx=\"31.174%\" fy=\"97.138%\" gradientTransform=\"rotate(-77 10724.606 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".8\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".4\"/></radialGradient><radialGradient id=\"d\" cx=\"71.813%\" cy=\"99.994%\" r=\"92.086%\" fx=\"71.813%\" fy=\"99.994%\" gradientTransform=\"translate(0 22251839.658)skewY(-90)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".3\"/><stop offset=\"100%\" stop-opacity=\".3\"/></radialGradient><radialGradient id=\"e\" cx=\"117.013%\" cy=\"34.769%\" r=\"328.729%\" fx=\"117.013%\" fy=\"34.769%\" gradientTransform=\"rotate(102 -1004.443 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\"0\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".2\"/></radialGradient><radialGradient id=\"f\" cx=\"-9.431%\" cy=\"8.712%\" r=\"153.492%\" fx=\"-9.431%\" fy=\"8.712%\" gradientTransform=\"rotate(45 1674.397 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".4\"/></radialGradient><radialGradient id=\"g\" cx=\"103.902%\" cy=\"-22.172%\" r=\"394.771%\" fx=\"103.902%\" fy=\"-22.172%\" gradientTransform=\"rotate(80 3757.522 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".1\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".3\"/></radialGradient><radialGradient id=\"h\" cx=\"99.348%\" cy=\"89.193%\" r=\"203.824%\" fx=\"99.348%\" fy=\"89.193%\" gradientTransform=\"translate(0 -38783246.548)skewY(-90)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"50%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".3\"/></radialGradient></defs><path fill=\"currentColor\" fill-opacity=\".3\" d=\"M209.056 308.305c-2.043 14.93-16.738 26.638-31.432 22.552-20.823-5.658-44.946-14.616-66.634-16.266l-33.317-2.515a22.002 22.002 0 0 1-14.144-6.522L6.167 246.778a21.766 21.766 0 0 1-4.244-24.124s35.36-77.478 36.775-81.485c1.257-4.008 6.13-39.211 8.958-58.07a22.002 22.002 0 0 1 7.072-12.965L122.462 9.47a22.002 22.002 0 0 1 31.903 2.672l57.048 71.978a23.18 23.18 0 0 1 4.872 14.38c0 13.594 1.179 41.646 8.8 59.72a236.756 236.756 0 0 0 27.974 45.732 11.001 11.001 0 0 1 .786 12.258c-4.95 8.408-14.851 24.595-28.76 45.26a111.738 111.738 0 0 0-16.108 46.834z\"/><path fill=\"#6C31E3\" d=\"M209.606 305.79c-2.043 15.009-16.737 26.717-31.432 22.71-20.744-5.737-44.79-14.695-66.555-16.345L78.38 309.64a21.923 21.923 0 0 1-14.144-6.6L6.874 244.106a21.923 21.923 0 0 1-4.243-24.36s35.438-77.792 36.774-81.878c1.336-4.007 6.13-39.289 8.958-58.305a22.002 22.002 0 0 1 7.072-13.044L123.17 5.621a22.002 22.002 0 0 1 31.902 2.75l56.97 72.292a23.338 23.338 0 0 1 4.871 14.38c0 13.673 1.18 41.804 8.723 59.955a238.092 238.092 0 0 0 27.974 45.969 11.001 11.001 0 0 1 .864 12.336c-5.03 8.487-14.851 24.674-28.838 45.497a112.603 112.603 0 0 0-16.03 46.99\"/><path fill=\"url(#a)\" d=\"M70.365 307.44c26.638-53.983 25.93-92.722 14.537-120.225-10.372-25.459-29.781-41.489-45.025-51.468a19.233 19.233 0 0 1-1.415 4.243L2.631 219.747a21.923 21.923 0 0 0 4.321 24.36l57.284 58.933a23.762 23.762 0 0 0 6.129 4.4\"/><path fill=\"url(#b)\" d=\"M142.814 197.902a86.025 86.025 0 0 1 21.06 4.793c21.844 8.172 41.724 26.56 58.147 61.999 1.179-2.043 2.357-4.008 3.615-5.894a960.226 960.226 0 0 0 28.838-45.497 11.001 11.001 0 0 0-.786-12.336 238.092 238.092 0 0 1-28.052-45.969c-7.544-18.073-8.644-46.282-8.723-59.955 0-5.186-1.65-10.294-4.871-14.38l-56.97-72.292-.943-1.178c4.165 13.75 3.93 24.752 1.336 34.731-2.357 9.272-6.757 17.68-11.394 26.56-1.571 2.986-3.143 6.05-4.636 9.193a110.01 110.01 0 0 0-12.415 45.576c-.786 19.016 3.064 42.825 15.716 74.65z\"/><path fill=\"url(#c)\" d=\"M142.736 197.902c-12.652-31.824-16.502-55.633-15.716-74.65.786-18.858 6.286-33.002 12.415-45.575l4.715-9.193c4.558-8.88 8.88-17.288 11.315-26.56a61.684 61.684 0 0 0-1.336-34.731c-8.136-8.94-21.96-9.642-30.96-1.572L55.436 66.519a22.002 22.002 0 0 0-7.072 13.044l-8.25 54.69c0 .55-.158 1.022-.236 1.572 15.244 9.901 34.574 25.931 45.025 51.312 2.043 5.029 3.772 10.294 5.029 16.03a157.157 157.157 0 0 1 52.805-5.343z\"/><path fill=\"url(#d)\" d=\"M178.253 328.5c14.616 4.007 29.31-7.701 31.353-22.789a120.225 120.225 0 0 1 12.494-41.017c-16.502-35.44-36.382-53.827-58.148-61.999-23.18-8.643-48.404-5.736-74.021.472 5.736 26.01 2.357 60.034-19.487 104.273 2.436 1.257 5.186 1.965 7.936 2.2l34.496 2.593c18.701 1.336 46.597 11.001 65.377 16.266\"/><path fill=\"url(#e)\" d=\"M127.177 122.074c-.864 18.859 1.493 40.39 14.144 72.135l-3.929-.393c-11.394-33.081-13.908-50.054-13.044-69.149.786-19.094 6.994-33.789 13.123-46.361 1.571-3.143 5.186-9.037 6.758-12.023 4.557-8.879 7.622-13.515 10.215-21.609 3.772-11.315 2.986-16.658 2.514-22.001 2.908 19.251-8.172 35.988-16.501 53.04a113.939 113.939 0 0 0-13.358 46.361z\"/><path fill=\"url(#f)\" d=\"M88.674 188.551c1.571 3.458 2.907 6.287 3.85 10.608l-3.379.786c-1.336-5.029-2.357-8.643-4.322-12.965-11.472-26.953-29.86-40.861-44.79-51.076 18.074 9.744 36.697 25.066 48.64 52.647\"/><path fill=\"url(#g)\" d=\"M92.681 202.617c6.286 29.467-.786 66.948-21.609 103.409 17.445-36.146 25.931-70.8 18.859-102.938l2.75-.55z\"/><path fill=\"url(#h)\" d=\"M164.659 199.867c34.181 12.808 47.383 40.86 57.205 64.355-12.18-24.516-29.074-51.626-58.462-61.684-22.317-7.7-41.175-6.758-73.471.55l-.707-3.143c34.26-7.858 52.176-8.8 75.435 0z\"/>","height":332},"vscode":{"body":"<defs><linearGradient id=\"c\" x1=\"50%\" x2=\"50%\" y1=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFF\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\"0\"/></linearGradient><path id=\"a\" d=\"M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571m10.464-183.649-76.262 57.889 76.262 57.888z\"/></defs><mask id=\"b\" fill=\"#fff\"><use href=\"#a\"/></mask><path fill=\"#0065A9\" d=\"M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36\" mask=\"url(#b)\"/><path fill=\"#007ACC\" d=\"m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36\" mask=\"url(#b)\"/><path fill=\"#1F9CF0\" d=\"M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z\" mask=\"url(#b)\"/><path fill=\"url(#c)\" fill-opacity=\".25\" d=\"M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571m10.464-183.65-76.262 57.89 76.262 57.888z\" mask=\"url(#b)\"/>","height":254}},"width":256}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro("https://tioirawan.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/mac/Projects/web/tioirawan.github.io/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro = createAstro("https://tioirawan.github.io");
const $$ToolSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToolSection;
  const { class: className, title, tools, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    className,
    "flex flex-col rounded-xl border border-border py-5 px-3 gap-y-4 sm:gap-y-6"
  ), "class")}${spreadAttributes(props)}> <h2 class="px-2 text-lg font-medium">${title}</h2> <div class="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${tools.map((tool) => renderTemplate`<a class="group relative hover:bg-transparent "${addAttribute(tool.href, "href")}${addAttribute(tool.name, "id")} target="_blank"> <div class="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all"> <div class="absolute -inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50"></div> ${renderComponent($$result, "Icon", $$Icon, { "name": tool.iconPath, "class": "z-20 h-10 w-10 rounded-lg bg-muted p-2" })} <div class="z-20 flex flex-col"> <h3 class="font-medium">${tool.name}</h3> <p class="text-muted-foreground">${tool.description}</p> </div> </div> </a>`)} </div> </div>`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/ToolSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const DESIGN = [
    {
      name: "Figma",
      description: "Design Tool",
      href: "https://www.figma.com/",
      iconPath: "figma",
      iconBgColour: "#000001"
    }
  ];
  const PRODUCTIVITY = [
    {
      name: "Arc",
      description: "Browser",
      href: "https://arc.net/",
      iconPath: "arc",
      iconBgColour: "#414350"
    },
    {
      name: "Notion",
      description: "Note Taking",
      href: "https://www.notion.so/product",
      iconPath: "notion",
      iconBgColour: "#EFEFEE"
    },
    {
      name: "Obsidian",
      description: "Long-form Writing",
      href: "https://obsidian.md/",
      iconPath: "obsidian",
      iconBgColour: "#7A3EE8"
    }
  ];
  const DEVELOPMENT = [
    {
      name: "VS Code",
      description: "IDE",
      href: "https://code.visualstudio.com/",
      iconPath: "vscode",
      iconBgColour: "#2C2C32"
    },
    {
      name: "ChatGPT",
      description: "AI",
      href: "https://chat.openai.com/",
      iconPath: "chatgpt",
      iconBgColour: "#06A67F"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <div class="mt-5 flex w-full flex-col gap-y-10"> <div> <h1 class="mb-1 text-2xl font-bold">Tools</h1> <p>Tools and software I use daily</p> </div> ${renderComponent($$result2, "ToolSection", $$ToolSection, { "title": "Design", "tools": DESIGN })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "title": "Productivity", "tools": PRODUCTIVITY })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "title": "Development", "tools": DEVELOPMENT })} </div> </div> ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/pages/tools/index.astro", void 0);

const $$file = "/Users/mac/Projects/web/tioirawan.github.io/src/pages/tools/index.astro";
const $$url = "/tools";

export { $$Index as default, $$file as file, $$url as url };
