function CalculateCompatibility() {

    const DESIRED_RESPONSE=[
        4, 
        2, 
        1, 
        5, 
        2, 
    ]

    const PERFECT = "I found agreat title named: Our Life Together! Will you watch it with me?"
    const UPPER_THIRD = "Got Recommendations? We Should Watch Them Together!"
    const MIDDLE_THIRD = "bruh"
    const BOTTOM_THIRD = "enjoy your demon slayer and my hero academia"

    const MAX_SCORE = 25;

    let question1Response = document.getElementById("q1").selectedOptions[0].value;
    let question2Response = document.getElementById("q2").selectedOptions[0].value;
    let question3Response = document.getElementById("q3").selectedOptions[0].value;
    let question4Response = document.getElementById("q4").selectedOptions[0].value;
    let question5Response = document.getElementById("q5").selectedOptions[0].value;

    let question1Compatibility = 5 - Math.abs(question1Response - DESIRED_RESPONSE[0]);
    let question2Compatibility = 5 - Math.abs(question2Response - DESIRED_RESPONSE[1]);
    let question3Compatibility = 5 - Math.abs(question3Response - DESIRED_RESPONSE[2]);
    let question4Compatibility = 5 - Math.abs(question4Response - DESIRED_RESPONSE[3]);
    let question5Compatibility = 5 - Math.abs(question5Response - DESIRED_RESPONSE[4]);

    console.log("Question 1 Answer: " + document.getElementById("q1").selectedOptions[0].text);
    console.log("           Score: " + question1Compatibility + "/5");
    console.log("Question 2 Answer: " + document.getElementById("q2").selectedOptions[0].text);
    console.log("           Score: " + question2Compatibility + "/5");
    console.log("Question 3 Answer: " + document.getElementById("q3").selectedOptions[0].text);
    console.log("           Score: " + question3Compatibility + "/5");
    console.log("Question 4 Answer: " + document.getElementById("q4").selectedOptions[0].text);
    console.log("           Score: " + question4Compatibility + "/5");
    console.log("Question 5 Answer: " + document.getElementById("q5").selectedOptions[0].text);
    console.log("           Score: " + question5Compatibility + "/5");

    let totalCompatibility = question1Compatibility + question2Compatibility + question3Compatibility + question4Compatibility + question5Compatibility;

    totalCompatibility *= 100 / MAX_SCORE;
    totalCompatibility = Math.round(totalCompatibility);
    console.log("totalCompatibility=" + totalCompatibility)

    document.getElementById("compatibility").innerHTML="Your compatibility is: " + totalCompatibility + "/100!";
    if (totalCompatibility >= 100) {
        document.getElementById("final").innerHTML = PERFECT;
    }
    else if (totalCompatibility >=80) {
        document.getElementById("final").innerHTML = UPPER_THIRD;
    }
    else if (totalCompatibility >=50) {
        document.getElementById("final").innerHTML = MIDDLE_THIRD;
    }
    else {
        document.getElementById("final").innerHTML = BOTTOM_THIRD;
    }

}