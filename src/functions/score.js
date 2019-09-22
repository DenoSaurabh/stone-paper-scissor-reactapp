export default function score(player1, player2, player1Score, player2Score) {


    if (player1 === 'stone' && player2 === 'stone') {
        
    } 

    else if (player1 === 'paper' && player2 === 'paper') {
        
    } 

    else if (player1 === 'scissor' && player2 === 'scissor') {
        
    } 

    
    else if ( player1 === 'scissor' && player2 === 'stone') {
        player1Score--
        player2Score++
    } 

    
    else if (player1 === 'stone' && player2 === 'scissor') {
        player1Score++
        player2Score--
    } 
    

    else if (player1 === 'stone' && player2 === 'paper') {
        player1Score--
        player2Score++
    } 

    else if (player1 === 'paper' && player2 === 'stone') {
        player1Score++
        player2Score--
    } 
    
    else if (player1 === 'scissor' && player2 === 'stone') {
        player1Score-- 
        player2Score++
    } 
    
    else if (player1 === 'scissor' && player2 === 'paper') {
        player2Score--
        player1Score++
    } 

    else if (player1 === 'paper' && player2 === 'scissor') {
        player2Score++
        player1Score--
    } 
    

    return {
        scoreplayer1: player1Score,
        scoreplayer2: player2Score
    }
}