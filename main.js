
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LpNB1iCOc/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}