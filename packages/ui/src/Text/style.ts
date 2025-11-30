import { css } from "@emotion/react";

export const typeStyles: Record<string, ReturnType<typeof css>> = {
  display_1: css`
    font-size: var(--text-display1);
  `,
  display_2: css`
    font-size: var(--text-display2);
  `,
  display_3: css`
    font-size: var(--text-display3);
  `,
  display_4: css`
    font-size: var(--text-display4);
  `,

  title_1: css`
    font-size: var(--text-title1);
  `,
  title_2: css`
    font-size: var(--text-title2);
  `,
  title_3: css`
    font-size: var(--text-title3);
  `,
  title_4: css`
    font-size: var(--text-title4);
  `,

  body_1: css`
    font-size: var(--text-body1);
  `,
  body_2: css`
    font-size: var(--text-body2);
  `,
  body_3: css`
    font-size: var(--text-body3);
  `,
  body_4: css`
    font-size: var(--text-body4);
  `,

  caption_1: css`
    font-size: var(--text-caption1);
  `,
  caption_2: css`
    font-size: var(--text-caption2);
  `,
  caption_3: css`
    font-size: var(--text-caption3);
  `,
  caption_4: css`
    font-size: var(--text-caption4);
  `,
};

export const weightStyles: Record<string, ReturnType<typeof css>> = {
  normal: css`
    font-weight: var(--font-weight-normal);
  `,
  medium: css`
    font-weight: var(--font-weight-medium);
  `,
  semibold: css`
    font-weight: var(--font-weight-semibold);
  `,
  bold: css`
    font-weight: var(--font-weight-bold);
  `,
};
