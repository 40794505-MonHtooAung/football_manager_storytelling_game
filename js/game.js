// SCORE SYSTEM
function addScore(value) {
    let score = parseInt(localStorage.getItem("score")) || 0;
    score += value;
    localStorage.setItem("score", score);
}

// RESET GAME
function resetScore() {
    localStorage.setItem("score", 0);
    localStorage.setItem("pc_step", 1);
    localStorage.setItem("tt_step", 1);
    localStorage.setItem("ts_step", 1);
    localStorage.setItem("md_step", 1);
    localStorage.setItem("me_step", 1);
}

// GET SCORE
function getScore() {
    return parseInt(localStorage.getItem("score")) || 0;
}

// PRESS CONFERENCE STEP
function getPCStep() {
    return parseInt(localStorage.getItem("pc_step")) || 1;
}

function nextPCStep() {
    let step = getPCStep();
    localStorage.setItem("pc_step", step + 1);
}

// TRAINING TALK STEP
function getTTStep() {
    return parseInt(localStorage.getItem("tt_step")) || 1;
}

function nextTTStep() {
    let step = getTTStep();
    localStorage.setItem("tt_step", step + 1);
}

// TRAINING SESSION STEP
function getTSStep() {
    return parseInt(localStorage.getItem("ts_step")) || 1;
}

function nextTSStep() {
    let step = getTSStep();
    localStorage.setItem("ts_step", step + 1);
}

// MATCH DAY STEP
function getMDStep() {
    return parseInt(localStorage.getItem("md_step")) || 1;
}

function nextMDStep() {
    let step = getMDStep();
    localStorage.setItem("md_step", step + 1);
}

// MATCH EVENT STEP
function getMEStep() {
    return parseInt(localStorage.getItem("me_step")) || 1;
}

function nextMEStep() {
    let step = getMEStep();
    localStorage.setItem("me_step", step + 1);
}

