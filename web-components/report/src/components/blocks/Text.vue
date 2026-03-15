<script setup lang="ts">
import { computed } from "vue";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import sanitizeHtml from "sanitize-html";
import BlockWrapper from "../layout/BlockWrapper.vue";
import { BlockFigureProps } from "../../data-model/blocks";

const sanitizeOptions: sanitizeHtml.IOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'details', 'summary', 'figure', 'figcaption',
        'pre', 'code', 'span', 'del', 'ins', 'sup', 'sub',
    ]),
    allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        'code': ['class'],  // for syntax highlighting classes
        'span': ['class', 'style'],  // for highlight.js
        'pre': ['class'],
        'img': ['src', 'alt', 'title', 'width', 'height'],
        'a': ['href', 'title', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'data'],
};

const markedInstance = new Marked(
    markedHighlight({
        highlight(code: string, lang: string) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        },
    }),
);

const p = defineProps<{
    content: string;
    isLightProse: boolean;
    figure: BlockFigureProps;
    singleBlockEmbed?: boolean;
}>();
const md = computed(() =>
    sanitizeHtml(markedInstance.parse(p.content) as string, sanitizeOptions),
);
</script>

<template>
    <block-wrapper :figure="p.figure" :single-block-embed="singleBlockEmbed">
        <div
            :class="['w-full overflow-y-hidden', { dark: p.isLightProse }]"
            data-cy="block-markdown"
        >
            <div
                class="w-full prose font-dip-prose dark:prose-invert text-container"
                v-html="md"
            />
        </div>
    </block-wrapper>
</template>

<style scoped>
.text-container :deep(pre) {
    background: #f6f6f6 !important;
}

.dark :deep(code) {
    /* hack - TW prose disabling doesn't seem to work in invert mode, so this ensures
     non-highlighted code isn't affected by the prose-invert class */
    color: black;
}
</style>
