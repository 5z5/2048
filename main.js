// 获取24个方块的位置
let tds = document.getElementsByTagName('td');
// 获取随机数
let blockNum = getRandomNum();
// 得到坐标
let x = getOneTofour();
let y = getOneTofour();
// 将坐标定位到数组具体的位置
let area = x*4+y; 
// 把随机数显示到页面对应16个格子的具体位置
tds[area].innerText = blockNum;
// 创建出4*4的二维数组对应页面中的24个格子
let blockData = new Array();
for (let i=0;i<4;i++) {
  blockData[i] = new Array();
}
// 假定'0'值代表方块为空, 初始时所有方块没有数字为空
for (let i=0;i<4;i++) {
  for (let j=0;j<4;j++) {
    blockData[i][j] = 0;
  }
}
// 将随机数根据x、y坐标记录到创建出的4*4的二维数组
blockData[x][y] = blockNum;

/**
 * 50%概率获取2、4
*/
function getRandomNum() {
  let blockNum;
  let num = Math.random();
  if (num < 0.5) {
    blockNum = 2;
  }else {
    blockNum = 4;
  }

  return blockNum;
}

/**
 * 获取1-4随机数
*/
function getOneTofour() {
  return parseInt(Math.random()*4);
}

function moveLeft() {
  // 第一行
  let i = 0;
  let recFlag;  // 记录合并的状态，一次操作只合并相邻相同的数字
  for (let j=1;j<4;j++) {
    if (blockData[i][j-1] && blockData[i][j]) {
      if (blockData[i][j-1] === blockData[i][j]) {
        blockData[i][j-1] += blockData[i][j];
        blockData[i][j] = 0;
      }
    }
  }
}

function moveRight() {
}

function moveUp() {

}

function moveDown() {
}

function blockNumAppear() {
  let blockNum = getRandomNum();
}

/**
 * 按键按下'上下左右'键可以执行相应的操作
*/
document.onkeydown = function(e) {
  switch(e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
    default:
      break;
  }
}

/**
 * main: 小游戏的入口函数
*/
let main = function() {

}