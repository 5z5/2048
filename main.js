window.onload = (event) => {
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
    let blockData = [];
    for (let i=0;i<4;i++) {
      blockData[i] = [];
    }
    // 假定'0'值代表方块为空, 初始时所有方块没有数字为空
    for (let i=0;i<4;i++) {
      for (let j=0;j<4;j++) {
        blockData[i][j] = 0;
      }
    }

    // 将随机数根据x、y坐标记录到创建出的4*4的二维数组
    blockData[x][y] = blockNum;

    // 将数字向左移动 
    function leftMove(i, j) {
      
    }

    function moveLeft() {
      for (let col=1;col<4;col++) {
        for (let row=0;row<4;row++) {
          if (blockData[row][col] !== 0) {
            tds[row*4+col].innerText = '';
            tds[row*4].innerText = blockData[row][col];
            blockData[row][col] = 0;
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
}