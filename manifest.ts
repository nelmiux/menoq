import type { ManifestOptions } from 'vite-plugin-pwa';

const white = '#ffffff';

const manifest: (nodeEnv: Record<string, string | undefined>) => Partial<ManifestOptions> = (nodeEnv) => ({
  name: `${nodeEnv.VITE_APP_NAME} Web Application`,
  short_name: `${nodeEnv.VITE_APP_NAME} Web App`,
  theme_color: white,
  background_color: white,
  display: 'standalone',
  scope: '.',
  start_url: `/${nodeEnv.VITE_BASE_URL}/`,
  lang: 'en',
  icons: [
    {
      src: './assets/logo/logo-q.svg',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      src: './assets/logo/logo-q.svg',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      src: './assets/logo/logo-q.svg',
      sizes: '48x48',
      type: 'image/png',
    },
    {
      src: './assets/logo/logo-q.svg',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
});

export default manifest;
