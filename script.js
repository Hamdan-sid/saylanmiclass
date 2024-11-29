function checkout(){
    let totalNoPhy = Number(document.getElementById("totalphy").value);
    let obtainNoPhy = Number(document.getElementById("obtainphy").value);
    document.getElementById("totalofphysic").innerText = totalNoPhy;
    document.getElementById("obtainofphysic").innerText = obtainNoPhy;
    let percentageOfPhysic= (obtainNoPhy/totalNoPhysic)*100;
    document.getElementById("PercentageOfPhysic").innerText=percentageOfPhysic;
//     if (percentageOfPhysic >= 80){
//         document.getElementById("gradeofphysic").innertext= "A+";
//     }
// else if(percentageOfPhysic >= 70){
// document.getElementById("gradeofphysic").innertext= "A";
// }
// else if(percentageOfPhysic >= 60){
//     document.getElementById("gradeofphysic").innertext= "B";
//     }
//     else if(percentageOfPhysic >= 50){
//         document.getElementById("gradeofphysic").innertext= "C";
//         }
//         else {
//             document.getElementById("gradeofphysic").innertext= "Failed";
//             }
}