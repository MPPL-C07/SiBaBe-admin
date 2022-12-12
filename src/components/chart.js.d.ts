declare module 'chart.js' {
  interface TooltipOptions {
    formatLabel?: (label?: string | number) => string;
    formatTitle: (title?: string | number) => string;
    formatValue: (value: number) => string;
    subTitle?: string;
    type?: 'single' | 'multiple';
  }
}
