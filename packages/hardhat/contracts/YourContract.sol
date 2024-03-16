// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/// @custom:security-contact security@scoutix.com
contract Scoutix is Initializable, AccessControlUpgradeable {

    mapping(address => string[]) public playerInfoSHAs; // Map to store SHAs for each address

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address defaultAdmin) initializer public {
        __AccessControl_init();

        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }

    // Function for a user to add a string (representing hashed JSON player info) to their array
    function addPlayerInfo(string memory playerInfoSHA) public {
        playerInfoSHAs[msg.sender].push(playerInfoSHA);
    }

    // Function to get the array of player info SHAs for a specific address
    function getPlayerInfoSHAs(address userAddress) public view returns (string[] memory) {
        return playerInfoSHAs[userAddress];
    }
}
