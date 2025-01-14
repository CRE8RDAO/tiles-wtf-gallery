import { APP_CONFIG } from '../constants/app';

const Tiles: ContractDeployment = {
	mainnet: APP_CONFIG.contract_mainnet,
	rinkeby: APP_CONFIG.contract_rinkeby,
	abi: [
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_symbol', type: 'string' },
				{ internalType: 'string', name: '_baseUri', type: 'string' },
				{ internalType: 'contract IPriceResolver', name: '_priceResolver', type: 'address' },
				{
					internalType: 'contract ITileContentProvider',
					name: '_tokenUriResolver',
					type: 'address'
				},
				{ internalType: 'contract IJBDirectory', name: '_jbxDirectory', type: 'address' },
				{ internalType: 'uint256', name: '_jbxProjectId', type: 'uint256' },
				{ internalType: 'string', name: '_metadataUri', type: 'string' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{ inputs: [], name: 'ALREADY_MINTED', type: 'error' },
		{ inputs: [], name: 'INCORRECT_PRICE', type: 'error' },
		{ inputs: [], name: 'INVALID_ADDRESS', type: 'error' },
		{ inputs: [], name: 'INVALID_AMOUNT', type: 'error' },
		{ inputs: [], name: 'INVALID_RATE', type: 'error' },
		{ inputs: [], name: 'INVALID_TOKEN', type: 'error' },
		{ inputs: [], name: 'PRIVILEDGED_OPERATION', type: 'error' },
		{ inputs: [], name: 'UNSUPPORTED_OPERATION', type: 'error' },
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
				{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
			],
			name: 'ApprovalForAll',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
			],
			name: 'OwnershipTransferred',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'addressForId',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'id', type: 'uint256' }
			],
			name: 'approve',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseUri',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'contractURI',
			outputs: [{ internalType: 'string', name: 'contractUri', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'getApproved',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getMintPrice',
			outputs: [{ internalType: 'uint256', name: 'price', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_tile', type: 'address' }],
			name: 'grab',
			outputs: [{ internalType: 'uint256', name: 'mintedTokenId', type: 'uint256' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'idForAddress',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'isApprovedForAll',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'index', type: 'uint256' },
				{ internalType: 'address', name: '_tile', type: 'address' },
				{ internalType: 'bytes', name: 'proof', type: 'bytes' }
			],
			name: 'merkleMint',
			outputs: [{ internalType: 'uint256', name: 'mintedTokenId', type: 'uint256' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mint',
			outputs: [{ internalType: 'uint256', name: 'mintedTokenId', type: 'uint256' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'ownerOf',
			outputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_minter', type: 'address' }],
			name: 'registerMinter',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_minter', type: 'address' }],
			name: 'removeMinter',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_tokenId', type: 'uint256' },
				{ internalType: 'uint256', name: '_salePrice', type: 'uint256' }
			],
			name: 'royaltyInfo',
			outputs: [
				{ internalType: 'address', name: 'receiver', type: 'address' },
				{ internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'royaltyRate',
			outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'royaltyReceiver',
			outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_from', type: 'address' },
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_from', type: 'address' },
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_tokenId', type: 'uint256' },
				{ internalType: 'bytes', name: '_data', type: 'bytes' }
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'seize',
			outputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'operator', type: 'address' },
				{ internalType: 'bool', name: 'approved', type: 'bool' }
			],
			name: 'setApprovalForAll',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: 'contractUri', type: 'string' }],
			name: 'setContractUri',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'contract IPriceResolver', name: '_priceResolver', type: 'address' }
			],
			name: 'setPriceResolver',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_royaltyReceiver', type: 'address' },
				{ internalType: 'uint16', name: '_royaltyRate', type: 'uint16' }
			],
			name: 'setRoyalties',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'contract ITileContentProvider',
					name: '_tokenUriResolver',
					type: 'address'
				}
			],
			name: 'setTokenUriResolver',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_account', type: 'address' },
				{ internalType: 'address', name: '_tile', type: 'address' }
			],
			name: 'superMint',
			outputs: [{ internalType: 'uint256', name: 'mintedTokenId', type: 'uint256' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
			name: 'supportsInterface',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
			name: 'tokenByIndex',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'uint256', name: 'index', type: 'uint256' }
			],
			name: 'tokenOfOwnerByIndex',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
			name: 'tokenURI',
			outputs: [{ internalType: 'string', name: 'uri', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address payable', name: 'account', type: 'address' },
				{ internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'transferBalance',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_from', type: 'address' },
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'contract IERC20', name: 'token', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'transferTokenBalance',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{ stateMutability: 'payable', type: 'receive' }
	]
};

export default Tiles;
