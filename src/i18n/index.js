import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import uz from './uz.json';
import ru from './ru.json';
import en from './en.json';
const defaultlocale = ref('');
const localeLST = localStorage.getItem('locale');
if (localeLST) {
  defaultlocale.value = localeLST.toString();
} else {
  localStorage.setItem('locale', 'uz');
  defaultlocale.value = 'uz';
}
// Create I18n instance
const i18n = createI18n({
  legacy: false,
  locale: defaultlocale.value,
  fallbackLocale: 'uz',
  messages: {
    uz: uz,
    ru: ru,
    en: en
  }
});

export default i18n;
