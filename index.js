const schedule = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
// each number in "schedule" represents a week in the fantasy season

let newSchedule = [];

function randomizeSchedule(){
  let i = 0;
  while (schedule.length > 0) { 
    let chosenGame = Math.floor(Math.random()*schedule.length);
    newSchedule.push(schedule[chosenGame]);
    schedule.splice(chosenGame,1);
    i++;
  } return newSchedule;
}


newSchedule = randomizeSchedule();

function handleRescheduler(){
    $('.js-button').click(function(event){
        event.preventDefault();
        $('.js-h2').text(randomizeSchedule());
    });
}

$(handleRescheduler());