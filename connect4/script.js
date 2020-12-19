document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector('#result');
  const player = document.querySelector('#current-player');
  let current = 1;
  var temp=0;
  for(var i=0; i<squares.length; i++)
  (function(index){
    squares[i].onclick = function(){
      if(index<35 && squares[index+7].classList.contains("stack")){
        if(current===1){
          squares[index].classList.add("stack");
          squares[index].classList.add("player-one");
          current=2;
          player.innerHTML = current;
        }else if(current===2){
          if(! squares[index].classList.contains("player-one")){
            squares[index].classList.add("stack");
            squares[index].classList.add("player-two");
            current=1;
            player.innerHTML = current;
          }
        }
      }else if(index>=35 && index<=41){
        if(current===1){
          squares[index].classList.add("stack");
          squares[index].classList.add("player-one");
          current=2;
          player.innerHTML = current;
        }else if(current===2){
          if(! squares[index].classList.contains("player-one")){
            squares[index].classList.add("stack");
            squares[index].classList.add("player-two");
            current=1;
            player.innerHTML = current;
          }
        }
      }else{
        alert("둘 수 없는 곳입니다.");
      }
    };
  })(i)

  function check(){

    const winning = [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
        [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
        [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
        [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
        [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
        [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
        [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 17, 25, 33], [8, 16, 24, 32], [11, 17, 23, 29],
        [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
        [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]];
    for(var i=0; i<winning.length; i++){
      const sq0 = squares[winning[i][0]];
      const sq1 = squares[winning[i][1]];
      const sq2 = squares[winning[i][2]];
      const sq3 = squares[winning[i][3]];

      if(sq0.classList.contains("player-one")&&sq1.classList.contains("player-one")
      &&sq2.classList.contains("player-one")&&sq3.classList.contains("player-one")){
        //player one이 이긴다.
        result.innerHTML = '플레이어 1이 이겼습니다!';
        temp=1;
      }else if(sq0.classList.contains("player-two")&&sq1.classList.contains("player-two")
      &&sq2.classList.contains("player-two")&&sq3.classList.contains("player-two")){
        //player two가 이긴다.
        result.innerHTML = '플레이어 2가 이겼습니다!';
        temp=1;
      }
    }
    if(temp===1){
      let timer = setTimeout(reset, 3000);
      temp=0;
    }
  }

  function reset(){
    result.innerHTML = "";
    for(var i=0; i<squares.length; i++){
      if(squares[i].classList.contains("stack")){
        squares[i].classList.remove("stack");
      }
      if(squares[i].classList.contains("player-one")){
        squares[i].classList.remove("player-one");
      }else if(squares[i].classList.contains("player-two")){
        squares[i].classList.remove("player-two");
      }
    }
  }

  squares.forEach(square => square.addEventListener('click', check));
  if(temp===1){
    //squares.forEach(square => square.addEventListener('click', reset));
  }

})
