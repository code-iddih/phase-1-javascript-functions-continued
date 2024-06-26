// code your solution here

// defines saturdayFun function declaration as specified

function saturdayFun(activity = "roller-skate") {

    return (`This Saturday, I want to ${activity}!`);

} 

saturdayFun();
saturdayFun("bathe my dog");

// defines mondayWork function expression as specified

function mondayWork(activity = "go to the office") {

    return (`This Monday, I will ${activity}.`);

}

mondayWork();
mondayWork("work from home");

//  defines wrapAdjective function according to the specification

function wrapAdjective(adj = "*") {

    return function (par = "special") {

        return `You are ${adj}${par}${adj}!`;

    };
}

wrapAdjective("%") ("a dedicated programmer");