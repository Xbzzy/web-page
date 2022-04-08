$(document).ready(function(){
    var score = 0;
    let img1 = new Image();
    img1.src = './img/durian.png';
    let img2 = new Image();
    img2.src = './img/zzy.jpg';
    let canvas = document.getElementById("snake"); 
    let context = canvas.getContext("2d"); 
    let box = 32;
    let snake = []; 
    snake[0] ={
        x: 8 * box,
        y: 8 * box
    }
    let direction = "right";
    let food ={
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }

    function createTitle(){
        context.font = "30px Arial";
        context.strokeText("小张吃榴莲",185,50);
    }

    function createBG(){
        context.fillStyle = "lightgreen";
        context.fillRect(0, 0, 16*box, 16*box); 
    }

    function createSnake (){
        for(i = 0; i < snake.length; i++){
            context.drawImage(img2,snake[i].x, snake[i].y,box,box);
            //context.fillStyle = "white";
            //context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }

    function drawFood (){
        //context.fillStyle = "yellow";
        context.drawImage(img1,food.x,food.y,box,box);
        //context.fillRect(food.x,food.y,box,box);
    }

    function printScore(){
        context.font = "30px Arial";
        context.strokeText("已经吃到啦"+score+"个榴莲啦！",120,200);
    }

    document.addEventListener('keydown', update);

    function update(event){
        if(event.keyCode == 37 && direction != 'right') direction = 'left';
        if(event.keyCode == 38 && direction != 'down') direction = 'up';
        if(event.keyCode == 39 && direction != 'left') direction = 'right';
        if(event.keyCode == 40 && direction != 'up') direction = 'down';
    }

    function startGame(){    

        if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
        if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
        if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
        if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
        
        for(i = 1; i < snake.length; i++){
            if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                clearInterval(jogo);
                alert('哦豁,咬到自己尾巴咯!但是你一共吃了'+score+'颗榴莲!棒棒你真棒,棒棒你最棒!');
            }
        }
        createBG();
        createTitle();
        createSnake();
        drawFood();
        printScore();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if(direction == "right") snakeX += box;
        if(direction == "left") snakeX -= box;
        if (direction == "up") snakeY -= box;
        if(direction == "down") snakeY += box;

        if(snakeX != food.x || snakeY != food.y){
            snake.pop(); 
        }else{
            score ++;
            food.x = Math.floor(Math.random() * 15 +1) * box;
            food.y = Math.floor(Math.random() * 15 +1) * box;
        }
        
        let newHead ={
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);
    }

    

    $('#upMove').click(function(){
        moveSnake("up");
    });
    $('#downMove').click(function(){
        moveSnake("down");
    });
    $('#leftMove').click(function(){
        moveSnake("left");
    });
    $('#rightMove').click(function(){
        moveSnake("right");
    });
    $('#startEat').click(function(){
        let tmp = setInterval(startGame, $('#speed').val());
    });
    function moveSnake(direct){
        if(direct == 'left' && direction != 'right') direction = 'left';
        if(direct == 'up' && direction != 'down') direction = 'up';
        if(direct == 'right' && direction != 'left') direction = 'right';
        if(direct == 'down' && direction != 'up') direction = 'down';     
        startGame();  
    }

});