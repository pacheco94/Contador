// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract contador {

  uint private initTime;
  uint private durationGame = 0;

  constructor() {
    initTime = block.timestamp;
  }

  //function to set time
  function setDurationGamen(uint time) external {
    durationGame = time;
  }

  //function to see the current time
  function getDuration() external view returns(uint) {
    return durationGame;
  }

  //funtion to reset game time
  function resetTime() external {
    initTime = block.timestamp;
  }

  //function to display the remaining time
  function remaningTime() public view returns(uint) {
    require(initTime <= block.timestamp, "No valid");
    uint diff = block.timestamp - initTime;
    uint remainng = diff >= durationGame ? 0 : durationGame - diff;
    return remainng;
  }

}
