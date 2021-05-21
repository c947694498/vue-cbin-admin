import usePluginImport from "vite-plugin-importer";

// 导入ant design vue样式
export function importAntDesignVue() {
  return usePluginImport({
    libraryName: "ant-design-vue",
    libraryDirectory: "es",
    style: "css",
  });
}
