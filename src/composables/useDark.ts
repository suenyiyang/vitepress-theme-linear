import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  valueLight: 'light',
  selector: 'body',
})
export const toggleDark = useToggle(isDark)
