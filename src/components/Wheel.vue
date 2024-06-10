<script setup lang="ts">
import type { PrizeConfig, CanvasConfig } from './types/types'
import { useCanvas } from './hooks/useCanvas'
import { useRotate } from './hooks/useRotate'

// Define the component props with TypeScript interfaces
interface PropsType {
  type?: string;
  useWeight?: boolean;
  disabled?: boolean;
  verify?: boolean;
  canvas?: CanvasConfig;
  duration?: number;
  timingFun?: string;
  angleBase?: number;
  prizeId?: number;
  prizes: PrizeConfig[];
}

// Set default prop values using `withDefaults`
const props = withDefaults(
    defineProps<PropsType>(),
    {
      type: 'canvas', // canvas or image
      useWeight: false, // whether to calculate probability by weight
      disabled: false, // whether the component is disabled
      verify: false, // whether verification is enabled
      canvas: () => ({}),
      duration: 6000, // duration of one spin in milliseconds
      timingFun: 'cubic-bezier(0.36, 0.95, 0.64, 1)', // transition timing function for the spin
      angleBase: 10, // base angle for rotation, representing the number of spins (360 * 10)
      prizeId: 0, // specific prize ID to target, 0 means no specific prize
      prizes: () => [] // list of prizes
    }
)

// Emit custom events for start and end of rotation
const emit = defineEmits(['rotateStart', 'rotateEnd'])

// Destructure the return values from the custom hooks
const { wheelEl, canvasConfig } = useCanvas(props)
const { handleClick, rotateStyle, onRotateEnd } = useRotate(props, emit)

// Expose a method to start the rotation from the parent component
defineExpose({
  startRotate: (): void => {
    handleClick()
  }
})

</script>

<template>
  <div class="fw-container">
    <!-- wheel -->
    <div
        class="fw-wheel"
        :style="rotateStyle"
        @transitionend="onRotateEnd"
        @webkitTransitionend="onRotateEnd"
    >
      <canvas
          v-if="type === 'canvas'"
          ref="wheelEl"
          :width="canvasConfig.radius * 2"
          :height="canvasConfig.radius * 2"
      />
      <slot name="wheel" v-else />
    </div>
    <!-- button -->
    <div class="fw-btn">
      <div
          v-if="type === 'canvas'"
          class="fw-btn__btn"
          :style="{ width: canvasConfig.btnWidth + 'px', height: canvasConfig.btnWidth + 'px'}"
          @click="handleClick">
        {{ canvasConfig.btnText }}
      </div>
      <div v-else class="fw-btn__image" @click="handleClick">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/wheel.scss';
</style>
