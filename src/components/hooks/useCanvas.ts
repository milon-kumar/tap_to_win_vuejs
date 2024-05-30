import { ref, computed, onMounted } from 'vue'
import { getStrArray } from '../utils/utils'
import type { CanvasConfig, PrizeConfig, PropsType } from '../types/types'

const canvasDefaultConfig: CanvasConfig = {
  radius: 250, // Radius of the circle
  textRadius: 200, // Distance from the center of the circle to the prize text
  textLength: 50, // Number of characters per line for prize text, up to 2 lines
  textDirection: 'vertical', // Direction of the prize text
  lineHeight: 20, // Line height of the text
  borderWidth: 1, // Border width of the circle
  borderColor: 'white', // Color of the border
  btnText: 'GO', // Text on the start button
  btnWidth: 0, // Width of the button
  fontSize: 22 // Font size of the prize text
}

export function useCanvas (props: PropsType) {
  const wheelEl = ref()

  const canvasConfig = computed(() => {
    return Object.assign(canvasDefaultConfig, props.canvas) as PrizeConfig
  })

  // Draw the canvas
  function drawCanvas (): void {
    const canvasEl = wheelEl.value as HTMLCanvasElement
    if (canvasEl.getContext) {
      const { radius, textRadius, borderWidth, borderColor, fontSize } = canvasConfig.value
      // Calculate the angle for each prize based on the number of prizes
      const arc = Math.PI / (props.prizes.length / 2)
      const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D
      // Clear a rectangle in the given rectangle
      ctx.clearRect(0, 0, radius * 2, radius * 2)
      // strokeStyle property sets or returns the color, gradient, or pattern used for strokes
      ctx.strokeStyle = borderColor
      ctx.lineWidth = borderWidth * 2
      // font property sets or returns the current font properties for text content on the canvas
      ctx.font = `${fontSize}px Arial`
      props.prizes.forEach((row, i) => {
        const angle = i * arc - Math.PI / 2
        ctx.fillStyle = row.bgColor
        ctx.beginPath()
        // arc(x, y, r, start angle, end angle, drawing direction) method creates an arc/curve (used to create circles or parts of circles)
        ctx.arc(radius, radius, radius - borderWidth, angle, angle + arc, false)
        ctx.stroke()
        ctx.arc(radius, radius, 0, angle + arc, angle, true)
        ctx.fill()
        // Save the canvas (to preserve the previous canvas state)
        ctx.save()
        // ----Start drawing prize----
        ctx.fillStyle = row.color
        // translate method remaps the (0, 0) position on the canvas
        ctx.translate(radius + Math.cos(angle + arc / 2) * textRadius, radius + Math.sin(angle + arc / 2) * textRadius)
        // rotate method rotates the current drawing
        drawPrizeText(ctx, angle, arc, row.name)
        // Restore the canvas to the state before the last save()
        ctx.restore()
        // ----End drawing prize----
      })
    }
  }
  // Draw the prize text
  function drawPrizeText (ctx: CanvasRenderingContext2D, angle: number, arc: number, name: string) {
    const { lineHeight, textLength, textDirection } = canvasConfig.value
    // The following code renders different effects such as font, color, and image effects based on the prize type and length of the prize name (change according to actual situation).
    const content = getStrArray(name, textLength)
    if (content === null) return
    textDirection === 'vertical' ? ctx.rotate(angle + arc / 2 + Math.PI) : ctx.rotate(angle + arc / 2 + Math.PI / 2)
    content.forEach((text, idx) => {
      let textX = -ctx.measureText(text).width / 2
      let textY = (idx + 1) * lineHeight
      if (textDirection === 'vertical') {
        textX = 0
        textY = (idx + 1) * lineHeight - content.length * lineHeight / 2
      }
      ctx.fillText(text, textX, textY)
    })
  }

  onMounted(() => {
    if (props.type === 'canvas') drawCanvas()
  })

  return {
    wheelEl,
    canvasConfig,
    drawCanvas
  }
}
