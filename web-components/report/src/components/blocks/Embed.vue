<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { computed, ComputedRef, onMounted } from "vue";
import contentWindowJs from "iframe-resizer/js/iframeResizer.contentWindow.js?raw";
import { v4 as uuid4 } from "uuid";
import iframeResize from "iframe-resizer/js/iframeResizer";
import sanitizeHtml from "sanitize-html";
import { BlockFigureProps } from "../../data-model/blocks";
import BlockWrapper from "../layout/BlockWrapper.vue";

const sanitizeEmbedOptions: sanitizeHtml.IOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'figure', 'figcaption', 'video', 'audio', 'source',
        'svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon',
        'g', 'defs', 'use', 'text', 'tspan',
    ]),
    allowedAttributes: false,  // allow all attributes for embedded visual content
    allowedSchemes: ['http', 'https', 'mailto', 'data'],
};

const p = defineProps<{
    html: string;
    isIframe: boolean;
    figure: BlockFigureProps;
    singleBlockEmbed?: boolean;
}>();
const iframeId = `iframe_${uuid4()}`;

// Unescape script tags, then sanitize to prevent XSS.
// Scripts are intentionally stripped — they will still work inside the
// srcdoc iframe path but must not execute in the main document.
const decodedHtml: ComputedRef<string> = computed(() => {
    const raw = p.html
        .replace("&lt;script&gt;", "<script>")
        .replace("&lt;&sol;script&gt;", "<\/script>");
    return sanitizeHtml(raw, sanitizeEmbedOptions);
});

const iframeDoc: ComputedRef<string> = computed(() => {
    /**
     * Inject the JS needed to make the iframe resizer work.
     * The iframe uses srcdoc and is sandboxed by the browser's
     * same-origin policy, so we inject the raw (unsanitized) HTML
     * here to preserve embedded scripts (e.g. Plotly, Bokeh).
     */
    const rawHtml = p.html
        .replace("&lt;script&gt;", "<script>")
        .replace("&lt;&sol;script&gt;", "<\/script>");
    return `
        <!DOCTYPE html>
        <html>
        <body>
            <script>${contentWindowJs}<\/script>
            ${rawHtml}
        </body>
        </html>
    `;
});

onMounted(() => {
    iframeResize({ checkOrigin: false, warningTimeout: 10000 }, `#${iframeId}`);
});
</script>

<template>
    <block-wrapper :figure="p.figure" :single-block-embed="singleBlockEmbed">
        <div
            v-if="isIframe"
            v-html="decodedHtml"
            class="flex justify-center items-center"
            data-cy="block-embed"
        />
        <iframe
            v-else
            :id="iframeId"
            :srcdoc="iframeDoc"
            class="flex justify-center items-center"
        />
    </block-wrapper>
</template>
