import { State } from "./utils.js";
// DOM nodes
const board = document.querySelector('.board');
const ball = document.querySelector('.ball');
const paddle1 = document.querySelector('.paddle_1');
const paddle2 = document.querySelector('.paddle_2');
const score1 = document.querySelector('.player_1_score');
const score2 = document.querySelector('.player_2_score');
const message = document.querySelector('.message');
// this is a DOM node method which gives us the position on the screen of the any element like x y co-ordinate and width and height
// Where ball is currently
let ballCoord = ball.getBoundingClientRect();
// where ball is initially
const initialBallCoord = ballCoord;
// Where the paddles are
let paddle1Coord = paddle1.getBoundingClientRect();
let paddle2Coord = paddle2.getBoundingClientRect();
let paddleHeight = paddle1Coord.height;
// ball's top-left in inline CSS
let ballTop = ball.style.top;
let ballLeft = ball.style.left;
class Game {
    constructor() {
        // The speed can't change
        // The fraction of the screen height that the paddle moves in one use action  
        this.speed = 0.085;
        this.state = State.STOPPED;
        this.scores = {
            player1: 0,
            player2: 0
        }; // type-assertion (type casting)
    }
    start() {
        this.state = State.STARTED;
        console.log(" Game Started!", this.state);
        this.bindListeners();
    }
    bindListeners() {
        document.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.state = State.STARTED;
                message.textContent = 'Game On!';
            }
        });
    }
}
export default Game;
