import { getCurrentInstance } from "vue";

export function useScrollHandler() {
  const instance = getCurrentInstance();

  const handleScrollRequest = (targetId) => {
    if (instance) {
      instance.emit("request-scroll", targetId);
    } else {
      console.warn('use scroll handler error')
    }
  }

  return {
    handleScrollRequest,
  }
}
