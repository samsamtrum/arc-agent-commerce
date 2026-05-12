// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title AgentSpendGuard
/// @notice Minimal challenge demo contract for bounded agent authorization.
/// @dev Production deployments should add EIP-712 signatures, revocation, Circle wallet policy hooks, and audited token transfer logic.
contract AgentSpendGuard {
    struct Allowance {
        uint256 maxAmount;
        uint256 spent;
        uint64 expiresAt;
        bool active;
    }

    mapping(address user => mapping(address agent => Allowance)) public allowances;

    event AgentAuthorized(address indexed user, address indexed agent, uint256 maxAmount, uint64 expiresAt);
    event AgentSpendRecorded(address indexed user, address indexed agent, address indexed merchant, uint256 amount, bytes32 requestId);
    event AgentRevoked(address indexed user, address indexed agent);

    function authorizeAgent(address agent, uint256 maxAmount, uint64 expiresAt) external {
        require(agent != address(0), "bad agent");
        require(expiresAt > block.timestamp, "expired");
        allowances[msg.sender][agent] = Allowance(maxAmount, 0, expiresAt, true);
        emit AgentAuthorized(msg.sender, agent, maxAmount, expiresAt);
    }

    function recordSpend(address user, address merchant, uint256 amount, bytes32 requestId) external {
        Allowance storage allowance = allowances[user][msg.sender];
        require(allowance.active, "not active");
        require(block.timestamp <= allowance.expiresAt, "expired");
        require(allowance.spent + amount <= allowance.maxAmount, "limit exceeded");
        allowance.spent += amount;
        emit AgentSpendRecorded(user, msg.sender, merchant, amount, requestId);
    }

    function revokeAgent(address agent) external {
        allowances[msg.sender][agent].active = false;
        emit AgentRevoked(msg.sender, agent);
    }
}
