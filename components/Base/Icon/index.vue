<template>
  <span :style="computedStyle" class="block" />
</template>

<script setup lang="ts">
import { computed } from "vue";

defineComponent({
  name: "BaseIcon",
});

const props = defineProps({
  /**
   * Name of the icon file
   * relative to ./src/assets/icons folder
   */
  icon: {
    type: String,
    default: "",
  },
  /**
   * Size of icon in pixel
   */
  size: {
    type: Number,
    default: 16,
  },
  /**
   * Fill color of the icon
   */
  fillColor: {
    type: String,
    default: "#000",
  },
  /**
   * Use mode = "mask" for monochrome icons
   * and use mode = "image" for colored icons
   */
  mode: {
    type: String,
    default: "mask",
    validator(value: string) {
      // The value must match one of these strings
      return ["mask", "image"].includes(value);
    },
  },
});

const computedStyle = computed(() => {
  if (props.mode === "mask") {
    return {
      "background-color": props.fillColor,
      "mask-image": `url(${props.icon})`,
      "mask-size": "100% 100%",
      height: `${props.size}px`,
      width: `${props.size}px`,
    };
  } else {
    return {
      background: `url(${props.icon}) no-repeat`,
      "background-size": "100% 100%",
      "background-color": "transparent",
      height: `${props.size}px`,
      width: `${props.size}px`,
    };
  }
});
</script>
