import { ref, watch } from "vue";

const currentLang = ref("zh");

export function useLanguage() {
  const switchLanguage = () => {
    currentLang.value = currentLang.value === "zh" ? "en" : "zh";
    localStorage.setItem("language", currentLang.value);
  };

  const initLanguage = () => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "zh" || savedLang === "en")) {
      currentLang.value = savedLang;
    }
    document.documentElement.lang = currentLang.value === "zh" ? "zh-CN" : "en";
  };

  watch(currentLang, (newLang) => {
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-CN" : "en";
  });

  return {
    currentLang,
    switchLanguage,
    initLanguage,
  };
}
