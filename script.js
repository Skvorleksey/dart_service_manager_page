//variables for video secrioon
const videoButton = document.querySelector('.video_button');
const videoFrame = document.querySelector('.video_frame-hidden');
const videoFog = document.querySelector('.video__fog');
const videiVideo = document.querySelector('.video_video');

//variables for block 'customers say'
const arrowUp = document.querySelector('.arrow_up');
const arrowDown = document.querySelector('.arrow_down');
let moveCount = 0;
let allCommentsBox = document.querySelector('.all_comments_box');
const allComments = document.querySelectorAll('.single_comment_box');
const singleComment = document.querySelector('.single_comment_box');

//function that hides video poster and shows YT palyer
const turnOnVideo = () => {
    videoFrame.classList.toggle('video_frame-active');
    videoFrame.classList.toggle('video_frame-hidden');
    videoFog.classList.toggle('video_fog-hidden');
    videiVideo.classList.toggle('video_video-hidden');    
}

//function that moves customers' comments gallery
const moveCommentsCards = () => {
    allCommentsBox.style.transform = `translateY(${singleComment.clientHeight * moveCount * -1}px)`;
}

videoButton.addEventListener('click', turnOnVideo);

arrowUp.addEventListener('click', ()=>{
    if (moveCount > 0){
        moveCount --;
    }
    console.log(moveCount);
    moveCommentsCards();
});
arrowDown.addEventListener('click', ()=>{
    if (moveCount < allComments.length - 1){
        moveCount ++;
    }
    console.log(moveCount);
    moveCommentsCards();
});

window.addEventListener('resize', moveCommentsCards);