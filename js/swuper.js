//定义变量
let left = document.querySelector('.button-left')    // 获取左箭头按钮元素
  let right = document.querySelector('.button-right')     // 获取右箭头按钮元素
  let min = document.querySelectorAll('.min')      // 获取所有最小值元素
  let images = document.querySelector('.images')   // 获取图片元素

  let index = 0    // 设置初始索引值
  let time    // 定义变量time
// 定义函数position，用于设置图片的位置
  function position() {
    images.style.left = (index * -100) + "%"    // 将图片向左移动index个位置
  }
// 定义函数add，用于将索引值加1
  function add() {
    if (index >= min.length - 1) {
      index = 0   // 如果索引值超过最小值元素的数量，则将索引值重置为0
    } else {
      index++   // 否则将索引值加1
    }
  }
// 定义函数desc，用于将索引值减1
  function desc() {
    if (index < 1) {  
      index = min.length - 1    // 如果索引值小于1，则将索引值设置为最小值元素的数量减1
    } else {
      index--   // 否则将索引值减1
    }
  }
// 定义函数timer，用于启动定时器，每隔3000毫秒更新一次图片位置
  function timer() {
    time = setInterval(() => {
      index++   // 每次更新时调用add函数，将索引值加1
      desc()   // 每次更新时调用desc函数，将索引值减1
      add()   // 每次更新时调用add函数，将索引值加1
      position()   // 每次更新时调用position函数，更新图片位置
    }, 3000)
  }
// 监听左箭头按钮的点击事件，调用desc函数将索引值减1，更新图片位置，清除定时器，启动定时器
  left.addEventListener('click', () => {
    desc()  // 调用desc函数
    position()  // 更新图片位置
    clearInterval(time)  // 清除定时器
    timer()  // 启动定时器
  })
 // 监听右箭头按钮的点击事件，调用add函数将索引值加1，更新图片位置，清除定时器，启动定时器
  right.addEventListener('click', () => {
    add()   // 调用add函数
    position()   // 更新图片位置
    clearInterval(time)  // 清除定时器
    timer()  // 启动定时器
  })
// 遍历所有最小值元素，为每个最小值元素添加点击事件监听器，将索引值设置为当前最小值元素的索引，更新图片位置，清除定时器，启动定时器
  for (let i = 0; i < min.length; i++) {
    min[i].addEventListener('click', () => {
      index = i   // 将索引值设置为当前最小值元素的索引
      position()  // 更新图片位置
      clearInterval(time)  // 清除定时器
      timer()  // 启动定时器
    })
  }
// 启动定时器，开始轮播
  timer()