
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "@monorepo/core": async () => {
          throw new Error(`Shared module '${"@monorepo/core"}' must be provided by host`);
        }
      ,
        "@monorepo/ui": async () => {
          throw new Error(`Shared module '${"@monorepo/ui"}' must be provided by host`);
        }
      ,
        "react": async () => {
          throw new Error(`Shared module '${"react"}' must be provided by host`);
        }
      ,
        "react-dom": async () => {
          throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
        }
      
    }
      const usedShared = {
      
          "@monorepo/core": {
            name: "@monorepo/core",
            version: "0.0.1",
            scope: ["default"],
            loaded: false,
            from: "mfe_banner",
            async get () {
              if (true) {
                throw new Error(`Shared module '${"@monorepo/core"}' must be provided by host`);
              }
              usedShared["@monorepo/core"].loaded = true
              const {"@monorepo/core": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.0.1",
              import: false,
            }
          }
        ,
          "@monorepo/ui": {
            name: "@monorepo/ui",
            version: "1.0.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_banner",
            async get () {
              if (true) {
                throw new Error(`Shared module '${"@monorepo/ui"}' must be provided by host`);
              }
              usedShared["@monorepo/ui"].loaded = true
              const {"@monorepo/ui": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.0.0",
              import: false,
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_banner",
            async get () {
              if (true) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              import: false,
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_banner",
            async get () {
              if (true) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              import: false,
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      