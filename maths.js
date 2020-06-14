var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.floor(Math.random() * 6);

    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;
}

function checkAnswer() {
    
    const prediction = predictImage();
    
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer){
        score++;
        console.log(`Correct. Score ${score}`);
        if (score <= 6){
            
            backgroundImages.push(`url('images/background${score}.svg')`);
        }
        else{
            alert('Congratulations! Your garden is full. Click OK to start again.');
            score = 0;
            backgroundImages = [];
        }

        document.body.style.backgroundImage = backgroundImages;
    }
    else{
        if (score != 0){
            score--;
        }
        console.log(`Wrong. Score ${score}`);
        alert('Your answer is wrong!');
        setTimeout(function(){ 
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
        
    }
    
    
}