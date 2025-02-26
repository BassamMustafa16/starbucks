import { ref, onMounted, onUnmounted } from "vue";

export function useResponsive(breakpoint = 1024) {
  const isMobile = ref(window.innerWidth < breakpoint);

  const updateScreenWidth = () => {
    isMobile.value = window.innerWidth < breakpoint;
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  onMounted(() => {
    window.addEventListener("resize", debounce(updateScreenWidth, 200));
  });

  onUnmounted(() => {
    window.removeEventListener("resize", debounce(updateScreenWidth, 200));
  });

  return { isMobile };
}