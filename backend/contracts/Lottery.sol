// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Lottery
{
    //State  /Storage Variables
    address public owner;           // owner of the contract
    address payable[] public players;  // players participating in the lottery
    address[] public winner;  // winner of the lottery

    uint public lotteryId;  // unique Interger


    // COnstructor- RUns when the contract is deployed

    constructor()
    {
        owner = msg.sender;
        lotteryId = 0;
    }

    //Functions - Enter

    function enter() public payable
    {
        require(msg.value >= 0.1 ether);  // minimum 1 eth to participate
        players.push(payable(msg.sender));  // players added to the pool of payable address  
    }

    // Function - Get Players

    function getPlayers() public view returns (address payable[] memory)
    {
        return players;
    }

    // Function - Get Balance

    function getBalance() public view returns (uint)
    {
        // Solidity works in WEI
        return address(this).balance;
    }


    //Function - Get Lottery ID
    function getLotteryId() public view returns (uint)
    {
        return lotteryId;
    } 

    //Get random number - To pick a winner
    function getRandomNumber() public view returns (uint)
    {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    //Pick a Winner!
    function pickWinner() public
    {
        require(msg.sender==owner);
        uint randomIndex = getRandomNumber() % players.length; // indexing starts from 0 -> n-1
        players[randomIndex].transfer(address(this).balance);
        winner.push(players[randomIndex]);
        lotteryId++ ;

        // Clear the players after lottery winner has been decided
        players = new address payable[](0);
    }

    // Function ->Get Winner

    function getWinners() public view returns (address[] memory)
    {
        return winner;
    }
}