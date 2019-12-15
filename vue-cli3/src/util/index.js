export function requireAll(r) {
    r.keys().forEach(r);
}

export function exportAll(r, option={}) {
    const modules = {};

    r.keys().forEach(filename =>{
        const moduleName = filename.replace(/^[^/]+\/([\w-]+)\.js$/, '$1');
        modules[moduleName] = Object.assign({}, option, r(filename).default);
    })

    return modules;
}