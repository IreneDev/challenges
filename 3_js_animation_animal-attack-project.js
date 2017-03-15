Find the project on https://www.khanacademy.org/computer-programming/spin-off-of-project-animal-attack/5053261876559872

var bodyX =200;
var bodyY = 200;
var bodyW = 118;
var bodyH = bodyW/1.5;
var eyeSize = bodyW/6;
var pupilSize = bodyW/10;
var noseSize = bodyW/16;
var earSize = bodyW/4;
var start = 1;
draw = function() {
    background(5, 5, 5);
    noStroke();
    fill(255, 26, 10);
    ellipse(bodyX, bodyY, bodyW, bodyW-12); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    bodyW += 2;
    fill(250, 245, 250);
    ellipse(bodyX+15, bodyY-71, eyeSize, eyeSize-30);//REye
    ellipse(bodyX-15, bodyY-71, eyeSize, eyeSize-30);//LEye
    fill(4, 227, 0);
    ellipse(bodyX+15, bodyY-71, pupilSize-15, pupilSize);//pupils
    ellipse(bodyX-15, bodyY-71, pupilSize-15, pupilSize);//pupils
    fill(237, 118, 140);
    ellipse(bodyX, bodyY-57, noseSize, noseSize);//mouth
    fill(89, 19, 3);
    ellipse(bodyX, bodyY-60, noseSize, noseSize);//nose
    fill(255, 26, 10);
    triangle(bodyX-42, bodyY-112, bodyX-43, bodyY-78, bodyX-28, bodyY-100);//back ears
    triangle(bodyX+42, bodyY-112, bodyX+43, bodyY-78, bodyX+28, bodyY-90);//back ears
    fill(237, 118, 140);
    triangle(bodyX-41, bodyY-114, bodyX-39, bodyY-85, bodyX-21, bodyY-96);//front ears
    triangle(bodyX+41, bodyY-114, bodyX+39, bodyY-83, bodyX+20, bodyY-94);//front ears
    stroke(89, 19, 3);
    strokeWeight(3);
    line(bodyX-6, bodyY-60, bodyX-50, bodyY-66);//mustaches
    line(bodyX-6, bodyY-58, bodyX-50, bodyY-52);//mustaches
    line(bodyX+6, bodyY-60, bodyX+50, bodyY-66);//mustaches
    line(bodyX+6, bodyY-58, bodyX+50, bodyY-52);//mustaches
    fill(5, 5, 5); // smile with black fill
    arc(202, 153, 30, 23, start, start+180);//smile
    };
