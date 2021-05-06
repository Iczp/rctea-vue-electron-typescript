module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: process.env.VUE_APP_NAME,
            author: process.env.VUE_APP_AUTHOR,
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    pluginOptions: {
        configureWebpack: {
            BASEURL: process.env.BASEURL,
            // Webpack configuration applied to web builds and the electron renderer process
        },
        electronBuilder: {
            builderOptions: {
                appId: process.env.VUE_APP_ID,
                productName: process.env.VUE_APP_NAME,
                icon: './static/app.ico',
                files: ['**/*', 'static/*'],
                asar: true,
                copyright: process.env.VUE_APP_COPYRIGHT,
                mac: {
                    icon: './static/app.ico',
                    target: ['zip', 'dmg'],
                },
                win: {
                    icon: './static/app.ico',
                    target: ['zip', 'nsis'],
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './static/app.ico',
                    uninstallerIcon: './static/app.ico',
                    installerHeaderIcon: './static/app.ico',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    license: './LICENSE.txt',
                },
            },
            nodeIntegration: true,
            // chainWebpackMainProcess: (config) => {
            //     // Chain webpack config for electron main process only
            // },
            // chainWebpackRendererProcess: (config) => {
            //     // Chain webpack config for electron renderer process only (won't be applied to web builds)
            // },
            // // Use this to change the entrypoint of your app's main process
            // mainProcessFile: 'src/myBackgroundFile.js',
            // // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
            // rendererProcessFile: 'src/myMainRenderFile.js',
            // // Provide an array of files that, when changed, will recompile the main process and restart Electron
            // // Your main process file will be added by default
            // mainProcessWatch: ['src/myFile1', 'src/myFile2'],
            // // Provide a list of arguments that Electron will be launched with during "electron:serve",
            // // which can be accessed from the main process (src/background.js).
            // // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
            // // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
            // mainProcessArgs: ['--arg-name', 'arg-value'],

            // 更改输出目录
            // 建议将新目录添加到您的.gitignore文件中。
            outputDir: 'dist_electron',
            // 启用源地图
            configureWebpack: {
                devtool: 'source-map',
            },
            // 启用发布到GitHub
            // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/recipes.html#auto-update
            // publish: ['github']
        },
    },
    css: {
        loaderOptions: {
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `prependData` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                // additionalData: `@import "~@/scss/variables.scss";`,
            },
        },
    },
    lintOnSave: false,
}
