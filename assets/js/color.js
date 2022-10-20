let color = 'green';
const colorName = document.getElementById('color');
colorName.innerText = color;
document.addEventListener('keydown', function(e){
    if(e.key === 'a'){
        color = 'green';
    }else if(e.key === 's'){
        color = 'orange';
    } else if(e.key === 'd'){
        color = 'blueviolet';
    }else{
        color = 'coral';
    }
    colorName.innerText = color;
});

const colorEvent = function(idBox){
    document.getElementById(idBox).addEventListener('click', function(){
        this.style.backgroundColor = color;
    });
};

colorEvent('box1');
colorEvent('box2');
colorEvent('box3');
colorEvent('box4');