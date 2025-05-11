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

export default {
    name,
    age,
    handle,
    fixBug
}