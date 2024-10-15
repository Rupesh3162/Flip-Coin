function add(){
            
}
function btn1(){
    const r=Math.random();
    let resultss={
        Heads:0,
        Tails:0
        };
 let c='';
    if(0<=r && r<0.5){
        c='Heads'
    }
    else if(0.5<=r && r<=1){
        c='Tails'
    }
    let result=''
    if(c==='Heads'){
        result='You Won The Toss' 
        resultss.Heads++;
    }
    else if(c==='Tails'){
        result='You Lost The Toss'
        resultss.Tails++;
    }
    document.querySelector('.score-display1')
        .innerHTML=`You choos Heads, ${result}`;
    document.querySelector('.score-display2')
        .innerHTML=`Won Toss ${resultss.Heads} , Losses Toss ${resultss.Tails}`
}
    
function btn2(){
    const r=Math.random();
    let score={
        Heads:0,
        Tails:0
        };
    let c='';
    if(0<=r && r<0.5){
        c='Heads'
    }
    else if(0.5<=r && r<=1){
        c='Tails'
    }
    let result=''
    if(c==='Heads'){
        result='You Lost The Toss'
        score.Heads++;
    }
    else if(c==='Tails'){
        result='You Won The Toss'
        score.Tails++;
    }
    document.querySelector('.score-display2')
        .innerHTML=`You choos Heads, ${result}`;
    document.querySelector('.score-display2')
        .innerHTML=`Won Toss ${score.Tails} , Losses Toss ${score.Heads}`
}