/**
 * @description 引入全部文件，js或css
 * @param {*} r --导出函数
 * @param {*} option --选项
 * @example
 *  requireAll(require.context('./style', false, /\.css$/))
 */
export function requireAll (r) {
  r.keys().forEach(r)
}

/**
 * @description 导出全部文件，js或vue
 * @param {*} r --导出函数
 * @param {*} option --选项
 * @example
 *  exportAll(require.context('./modules', false, /\.js$/), { namespaced: true })
 */
export function exportAll (r, option = {}) {
  const modules = {}

  r.keys().forEach(filename => {
    const moduleName = filename.replace(/^[^/]+\/([\w-]+)\.js$/, '$1')
    modules[moduleName] = { ...option, ...r(filename).default }
  })

  return modules
}
