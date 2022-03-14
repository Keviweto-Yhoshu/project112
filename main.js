https://teachablemachine.withgoogle.com/models/xrI0qTt1d/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
     camera= documet.getElementById("camera");

     Webcam.attach( '#camera' ) ;

function take_snapshot(){
    Webcam.snap(function(data_uri){
         documentgetELementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

 console.log('ml5 version:', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xrI0qTt1d/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}

function speak(){
 var synth = window.speechSynthesis;
 speak_data_1 = "The first Prediction is " + prediction_1; 
 speak_data_2 = "and the second Prediction is " + prediction_2; 
 var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
 synth.speak(utterThis);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("result_hand_sign").innerHTML = results[0].label;
        document.getElementById("result_hand_sign2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label =="five"){
            document.getELementById("update_hand_sign").innerHTML = "&#128400;";
        }
        if(results[0].label =="thumbs down"){
            document.getELementById("update_hand_sign").innerHTML = "&#128077;";
        }
        if(results[0].label =="thumbs up"){
            document.getELementById("update_hand_sign").innerHTML = "&#128076;";
        }
        if(results[0].label =="nice"){
            document.getELementById("update_hand_sign").innerHTML = "&#128076;";
        }


        if(results[0].label =="five"){
            document.getELementById("update_hand_sign2").innerHTML = "&#128400;";
        }
        if(results[0].label =="thumbs down"){
            document.getELementById("update_hand_sign2").innerHTML = "&#128077;";
        }
        if(results[0].label =="thumbs up"){
            document.getELementById("update_hand_sign2").innerHTML = "&#128076;";
        }
        if(results[0].label =="nice"){
            document.getELementById("update_hand_sign2").innerHTML = "&#128076;";
        }
        
    }
}