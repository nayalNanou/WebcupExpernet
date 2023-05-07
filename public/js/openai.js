import Animation from './Animation.js';
import BlockAnimation from './BlockAnimation.js';

const dreamForm = document.getElementById('dream-form');
const dream = document.getElementById('dream');
const predictionResult = document.getElementById('prediction-result');
// Speed in millisecond, ex : 1000 milliseconds
const messageDisplaySpeed = 30;
const buttonGeneratePrediction = document.getElementById('button-generate-prediction');

const animationDream = document.getElementById('animation-dream');

const animation = new Animation();

// dream.addEventListener('keypress', function(e) {
dreamForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

buttonGeneratePrediction.addEventListener('click', function(e) {
    predictionResult.innerHTML = "";

//    if (e.keyCode == 13) {
        this.blur();
        const formData = new FormData();
        formData.append('dream', dream.value);

        fetch('http://localhost:8000/openai/generate/prediction', {
            'method': 'POST', 
            'body': formData
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(response => {
            if (!response) {
                predictionResult.innerHTML = ":( Sorry it looks like our AI took some vacation";

                return;
            }

            if (typeof response == "string") {
                predictionResult.innerHTML = response;
            } else {
                animationDream.style.opacity = 0;

                let predictionMessage = response.choices[0].message.content;

                animation.displayTextGradually(predictionResult, predictionMessage, messageDisplaySpeed);
            }
        });
//    }
});

for (let i = 0; i < 16; i++) {
    const elementDiv = document.createElement('div');
    elementDiv.className = "element-div-anim";

    animationDream.appendChild(elementDiv);

    const blockAnimation = new BlockAnimation(elementDiv, animationDream);

    blockAnimation.anim();
}
