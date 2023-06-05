
const transTree = (arr) => {
  // 最终返回的树形结构
  const treeList = []
  // 辅助对象
  const map = {}
  
  // 给原数组每一项添加一项children 并保存每一项的id 以便后续使用此id来找父级
  arr.forEach(item => {
    if (!item.children) item.children = []

    map[item.id] = item
  });

  arr.forEach(item => {
    // 获取父级
    const parent = map[item.pid]

    if (parent) { // 此项存在父级 则加入父级的children
      parent.children.push(item)
    } else { // 不存在的话 就直接加入最终返回数组的顶级项 
      treeList.push(item)
    }
  })


  return treeList
}



const data = [
  { id: '01', name: '张大大', pid: '', job: '项目经理' },
  { id: '02', name: '小亮', pid: '01', job: '产品leader' },
  { id: '03', name: '小美', pid: '01', job: 'UIleader' },
  { id: '04', name: '老马', pid: '01', job: '技术leader' },
  { id: '05', name: '老王', pid: '01', job: '测试leader' },
  { id: '06', name: '老李', pid: '01', job: '运维leader' },
  { id: '07', name: '小丽', pid: '02', job: '产品经理' },
  { id: '08', name: '大光', pid: '02', job: '产品经理' },
  { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
  { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
  { id: '11', name: '小华', pid: '04', job: '后端工程师' },
  { id: '12', name: '小李', pid: '04', job: '后端工程师' },
  { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
  { id: '14', name: '小强', pid: '05', job: '测试工程师' },
  { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
]


console.log(transTree(data))