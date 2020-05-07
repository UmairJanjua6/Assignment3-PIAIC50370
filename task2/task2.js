var studentNames = ["Micheal", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;
for(var index = 0; index < studentNames.length; index++) {
    document.write("Score of " + studentNames[index] + " is " + studentScores[index] + ". Percentage: " + (parseInt((studentScores[index]*100) / totalMarks)) + "%<br>");
}