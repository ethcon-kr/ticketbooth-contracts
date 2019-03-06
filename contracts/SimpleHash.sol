pragma solidity ^0.5.0;

contract SimpleHash {

	bytes32[] hashList; 

	function registerEmail(string memory email) public {
		bytes32  hash = keccak256(bytes(email));
		hashList.push(hash);
	}

	function getList() public view returns (bytes32[] memory) {
		return hashList;
	}
}

