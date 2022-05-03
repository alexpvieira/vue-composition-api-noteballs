import { watch } from 'vue'

export function useWatchCharacters(valueTowatch, maxChars = 100) {
  watch(valueTowatch, (newValue, oldValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed`)
    }
  })
}