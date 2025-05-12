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
}

export default {
    name,
    age,
    handle,
    fixBug
}