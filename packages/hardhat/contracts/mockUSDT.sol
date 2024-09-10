// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockUSDT is ERC20, Ownable {
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
    constructor() ERC20("mockUSDT", "MUSDT")  {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }


    function mint() public {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}