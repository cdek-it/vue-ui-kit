import { useToast, POSITION } from 'vue-toastification';

export default function useCustomToast() {
  const toast = useToast();

  return (text: string) => {
    const isMobile = window.matchMedia('(max-width: 768px)');
    const position = isMobile.matches
      ? POSITION.BOTTOM_CENTER
      : POSITION.TOP_RIGHT;

    toast(text, { position });
  };
}
