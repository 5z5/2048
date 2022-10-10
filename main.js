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
    function getOneToThree() {
      return parseInt(Math.random()*4);
    }

    // 获取x,y坐标 
    function getXY() {
      let x = getOneToThree();
      let y = getOneToThree();
      while (blockData[x][y] !== 0) {
        x = getOneToThree();
        y = getOneToThree();
      }
      
      return [x, y]
    }

    // 在一个随机一个空格子中出现2或4
    function appearNumberInGrid() {
      // 获取随机数
      let blockNum = getRandomNum();
      // 得到坐标
      let [x, y] = getXY();
      // 将坐标定位到数组具体的位置
      let area = x*4+y; 
      // 把随机数显示到页面对应16个格子的具体位置
      tds[area].innerText = blockNum;
      // 将随机数根据x、y坐标记录到创建出的4*4的二维数组
      blockData[x][y] = blockNum;
    }

    function initData() {
      for (let i=0;i<4;i++) {
        blockData[i] = [];
      }
      // 假定'0'值代表方块为空, 初始时所有方块没有数字为空
      for (let i=0;i<4;i++) {
        for (let j=0;j<4;j++) {
          blockData[i][j] = 0;
        }
      }
    }

    // 创建出4*4的二维数组对应页面中的24个格子,全局变量
    let blockData = [];
    // 获取24个方块的位置
    let tds = document.getElementsByTagName('td');

    initData()
    appearNumberInGrid();


    // 将数字向左移动 
    function leftMove(row, col) {
      for (let i=col-1;i>-1;i--) {
        if (blockData[row][i] === 0) {
          blockData[row][i] = blockData[row][i+1];
          blockData[row][i+1] = 0;
          tds[row*4+i+1].innerText = '';
          tds[row*4+i].innerText = blockData[row][i];
        } else {
          if (blockData[row][i] === blockData[row][i+1]) {
            blockData[row][i] *= 2;
            blockData[row][i+1] = 0;
            tds[row*4+i+1].innerText = '';
            tds[row*4+i].innerText = blockData[row][i];
          }
        }
      }
    }

    // 按下左按键，数字往左移动，并且格子中随机出现以一个数字
    function moveLeft() {
      for (let col=1;col<4;col++) {
        for (let row=0;row<4;row++) {
          if (blockData[row][col] !== 0) {
            // 一次移动一个数字
            leftMove(row, col);
          }
        }
      }
      appearNumberInGrid();
    }

    // 将数字往右移动
    function rightMove(row, col) {
      for (let i=col+1;i<4;i++) {
        if (blockData[row][i] === 0) {
          blockData[row][i] = blockData[row][i-1];
          blockData[row][i-1] = 0;
          tds[row*4+i-1].innerText = '';
          tds[row*4+i].innerText = blockData[row][i];
        } else {
          if (blockData[row][i] === blockData[row][i+1]) {
            blockData[row][i] *= 2;
            blockData[row][i-1] = 0;
            tds[row*4+i-1].innerText = '';
            tds[row*4+i].innerText = blockData[row][i];
          }
        }
      }
    }

    function moveRight() {
      for (let col=3;col>-1;col--) {
        for (let row=0;row<4;row++) {
          if (blockData[row][col] !== 0) {
            // 一次移动一个数字
            rightMove(row, col);
          }
        }
      }
      appearNumberInGrid();
    }


    function upMove (row, col) {
      for (let i=row-1;i>-1;i--) {
        if (blockData[i][col] === 0) {
          blockData[i][col] = blockData[i+1][col];
          blockData[i+1][col] = 0;
          tds[(i+1)*4 + col].innerText = '';
          tds[i*4 + col].innerText = blockData[i][col];
        } else {
          if (blockData[i][col] === blockData[i+1][col]) {
            blockData[i][col] *= 2;
            blockData[i+1][col] = 0;
            tds[(i+1)*4 + col].innerText = '';
            tds[i*4 + col].innerText = blockData[i][col];
          }
        }
      }
    }

    function moveUp() {
      for (let row=1;row<4;row++) {
        for (let col=0;col<4;col++) {
          if (blockData[row][col] !== 0) {
            // 一次移动一个数字
            upMove(row, col);
          }
        }
      }
      appearNumberInGrid();
    }

    function downMove(row, col) {
      for (let i=row+1;i<4;i++) {
        if (blockData[i][col] === 0) {
          blockData[i][col] = blockData[i-1][col];
          blockData[i-1][col] = 0;
          tds[(i-1)*4+col].innerText = '';
          tds[i*4+col].innerText = blockData[i][col];
        } else {
          if (blockData[i][col] === blockData[i-1][col]) {
            blockData[i][col] *= 2;
            blockData[i-1][col] = 0;
            tds[(i-1)*4+col].innerText = '';
            tds[i*4+col].innerText = blockData[i][col];
          }
        }
      }
    }

    function moveDown() {
      for (let row=3;row>-1;row--) {
        for (let col=0;col<4;col++) {
          if (blockData[row][col] !== 0) {
            // 一次移动一个数字
            downMove(row, col);
          }
        }
      }
      appearNumberInGrid();
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