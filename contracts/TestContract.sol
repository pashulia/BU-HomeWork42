// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TestContract {
    event NewYear(uint256 newYear);
    uint256 public year = 2023;

    function setYear(uint256 _year) external {
        require (_year != 0, "error: incorrect format");
        year = _year;
        emit NewYear(_year);
    }
}