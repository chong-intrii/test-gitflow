const name = 'chong';

const age = 20


// 这是新增的js文件内容
const handle = () => {
    console.log('这是新增的js文件内容');
}

// 修复bug模拟并导出
const fixBug = () => {
    console.log('修复bug模拟');
}


// 修复release分支的bug
const fixRelease1Bug = () => {
    console.log('修复release1分支的bug');
    // 从release分支创建修复分支后，在修复分支上未完全正确修改bug
    console.log('从release分支创建修复分支后，在修复分支上未完全正确修改bug');
    // 模拟以及解决完所有bug
}

export default {
    name,
    age,
    handle,
    fixBug,
    fixRelease1Bug
}