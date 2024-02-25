import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import autoprefixer from 'autoprefixer';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'pages/about/index.html'),
        competences: path.resolve(__dirname, 'pages/competences/index.html'),
        competencesdetail: path.resolve(__dirname, 'pages/competences/bitrix/index.html'),
        works: path.resolve(__dirname, 'pages/works/index.html'),
        worksdetail: path.resolve(__dirname, 'pages/works/worksdetail/index.html'),
        blog: path.resolve(__dirname, 'pages/blog/index.html'),
        blogdetail: path.resolve(__dirname, 'pages/blog/blogdetail/index.html'),
        contacts: path.resolve(__dirname, 'pages/contacts/index.html'),
        err404: path.resolve(__dirname, 'pages/err404/index.html'),
      },
    },
  },
  plugins: [
    vue(),
    checker({
      typescript: true,   // e.g. use TypeScript check
      vueTsc: true,       // e.g. use Vue check
    }),
    pluginPurgeCss(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngquant()
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
})
