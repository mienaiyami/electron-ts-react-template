module.exports = {
    packagerConfig: {
        name: "Electron starter",
        executableName: "electron-starter",
        icon: "assets/icon",
        extraResource: [
            "assets"
        ]
    },
    plugins: [{
        name: "@electron-forge/plugin-webpack",
        config: {
            mainConfig: "./webpack/main.webpack.js",
            // to use image link outside of assets
            // not safe for online app
            // "devContentSecurityPolicy": "connect-src 'self' * 'unsafe-eval'",
            renderer: {
                config: "./webpack/renderer.webpack.js",
                entryPoints: [{
                    html: "./public/index.html",
                    js: "./src/renderer/index.tsx",
                    name: "main_window",
                    preload: {
                        js: "./src/electron/preload.ts"
                    }
                }],
            }
        }
    }],
    makers: [{
            name: "@electron-forge/maker-squirrel",
            config: {}
        },
        {
            name: "@electron-forge/maker-zip",
            // platforms: [
            //     "darwin"
            // ]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ]
};