# Vue 3 + Typescript + Vite

该模板将帮助您开始在Vite中使用Vue 3和Typescript进行开发。

## 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). 在 `.vscode/settings.json` 开启 `vetur.experimental.templateInterpolationService` !

### 如果使用 `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227)是当前处于RFC阶段的功能。要获得对语法的正确IDE支持，请使用[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)而不是Vetur（并禁用Vetur）。

## TS中对.vue导入的类型支持

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

由于TypeScript无法处理.vue导入的类型信息，因此默认情况下将它们填充为通用Vue组件类型。在大多数情况下，如果您真的不在乎模板之外的组件prop类型，那么这很好。但是，如果您希望在`.vue`导入中获取实际的道具类型（例如，在使用手动`h（...）`调用时获得道具验证），则可以使用以下命令：

### 如果使用 Volar

在vscode中运行 `Volar: Switch TS Plugin on/off` 命令

### 如果使用 Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

1.在`tsconfig.json`中安装 `@vuedx/typescript-plugin-vue` 并将其添加到[plugins部分](https://www.typescriptlang.org/tsconfig#plugins)。
2.删除`src / shims- vue.d.ts`，因为不再需要向Typescript提供模块信息。
3.在VSCode中打开`src / main.ts`。
4.打开VSCode命令面板
5.搜索并运行`Select TypeScript version` -> `Use workspace version`
