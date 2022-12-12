import type { AnimationOptions,ChartType, ParsingOptions } from 'chart.js';

import type {
  ArbitraryLineOptions,
  HtmlLegendOptions,
  ThresholdLineOptions,
} from './plugins';

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    htmlLegend: HtmlLegendOptions;
    arbitraryLine: ArbitraryLineOptions;
    thresholdLine: ThresholdLineOptions;
    tooltip: TooltipOptions;
  }

  interface CoreChartOptions<TType extends ChartType>
    extends ParsingOptions,
      AnimationOptions<TType> {
    borderWidth: number;
  }

  interface TooltipOptions {
    formatLabel?: (label?: string | number) => string;
    formatTitle: (title?: string | number) => string;
    formatValue: (value: number) => string;
    subTitle?: string;
    type?: 'single' | 'multiple';
  }
}
