///////////////////////////////////////////////////////////////////////////////////

var colors, boxes, colorHeading, pickedColor, h1, resetBtn, message, boxCount, easyBtn, hardBtn;

///////////////////////////////////////////////////////////////////////////////////

var generateRandomColor = function(){
    
    var r,g,b;
    
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    return 'RGB(' + r + ', '+ g + ', ' + b + ')';
};

var generateRandomColors = function(len){
    
    var arr = [];
    
    for(var i=0;i <len; i++){
        arr.push(generateRandomColor());
    };
    
    return arr;
    
};

var setColors = function(){
    
    if(boxCount === 6){
        for(var i=0;i<colors.length; i++){
            boxes[i].style.display = 'block';
            boxes[i].style.background = colors[i];
        };
    }
    else{
        for(var i =0;i< boxCount; i++){
            boxes[i].style.background = colors[i];
        }
        for(var i=3; i<6; i++){
            boxes[i].style.display = "none";
        }
    }
};

var PickRandomColor = function(){
    
    var x = Math.floor(Math.random() * colors.length);
    return x;
    
};

var resetButton = function(){

    // Make a new color array
    colors = generateRandomColors(boxCount);
    //pick a random color
    pickedColor = PickRandomColor(boxCount);
    //Change the heading
    colorHeading.textContent = colors[pickedColor];
    //Change the colors on the boxes
    setColors();
    //reset heading color
    h1.style.background = "#5F9ea0";
    //set message to Nothing
    message.textContent = "";
    //change play again to new  colors
    if(resetBtn.textContent === 'Play Again?')
        resetBtn.textContent = 'New colors';
};

var setUpeventListeners = function(){
    
    resetBtn = document.getElementById('reset');
    resetBtn.addEventListener("click", resetButton);
    
    for(var i=0;i<boxCount;i++){
            boxes[i].addEventListener('click', boxClick);
    }
    
};

var boxClick = function(){
    
    if(this.style.background.toUpperCase() === colors[pickedColor]){
        for(var i=0;i<colors.length;i++){
            boxes[i].style.background = colors[pickedColor];
        }
        h1.style.background = colors[pickedColor];
        resetBtn.textContent = 'Play Again?';
        message.textContent = 'Correct';
    }
    else{
        this.style.background = '#292929';
        message.textContent = 'Wrong Answer';
    }
};


var init = function(){
    
    colors = generateRandomColors(boxCount);
    setColors();
    pickedColor = PickRandomColor();
    colorHeading.textContent = colors[pickedColor];
    message.textContent = "";
    setUpeventListeners();
};

var setUpButtonEvents = function(){
    
    easyBtn.addEventListener('click', function(){
        
        easyBtn.classList.remove('selected');
        easyBtn.classList.add('selected');
        hardBtn.classList.remove('selected');
        
        boxCount = 3;
        h1.style.background = '#5F9EA0';
        
        init();
    
    });

    hardBtn.addEventListener('click', function(){
    
        hardBtn.classList.remove('selected');
        hardBtn.classList.add('selected');
        easyBtn.classList.remove('selected');
        
        boxCount = 6;
        h1.style.background = '#5F9EA0';
        
        init();
        
    });  
    
};

///////////////////////////////////////////////////////////////////////////////////

boxes = document.querySelectorAll(".square");

colorHeading = document.getElementById('rgb');

h1 = document.getElementById('heading');

message = document.getElementById('message');

easyBtn = document.getElementById('easyBtn');

hardBtn = document.getElementById('hardBtn');

///////////////////////////////////////////////////////////////////////////////////

boxCount = 6;

init();

setUpButtonEvents();

//setUpeventListeners();
































