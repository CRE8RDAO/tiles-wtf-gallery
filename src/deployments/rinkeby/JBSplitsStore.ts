export default {
  "address": "0x767e488155030589c1833592E60876bbE64c1C74",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IJBOperatorStore",
          "name": "_operatorStore",
          "type": "address"
        },
        {
          "internalType": "contract IJBProjects",
          "name": "_projects",
          "type": "address"
        },
        {
          "internalType": "contract IJBDirectory",
          "name": "_directory",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "INVALID_LOCKED_UNTIL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_PROJECT_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_SPLIT_PERCENT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_TOTAL_PERCENT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PREVIOUS_LOCKED_SPLITS_NOT_INCLUDED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "domain",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "group",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "preferClaimed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "preferAddToBalance",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "percent",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "beneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "lockedUntil",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBSplitAllocator",
              "name": "allocator",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct JBSplit",
          "name": "split",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetSplit",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "directory",
      "outputs": [
        {
          "internalType": "contract IJBDirectory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "operatorStore",
      "outputs": [
        {
          "internalType": "contract IJBOperatorStore",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projects",
      "outputs": [
        {
          "internalType": "contract IJBProjects",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_domain",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "group",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "preferClaimed",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "preferAddToBalance",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "percent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "projectId",
                  "type": "uint256"
                },
                {
                  "internalType": "address payable",
                  "name": "beneficiary",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lockedUntil",
                  "type": "uint256"
                },
                {
                  "internalType": "contract IJBSplitAllocator",
                  "name": "allocator",
                  "type": "address"
                }
              ],
              "internalType": "struct JBSplit[]",
              "name": "splits",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct JBGroupedSplits[]",
          "name": "_groupedSplits",
          "type": "tuple[]"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_domain",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_group",
          "type": "uint256"
        }
      ],
      "name": "splitsOf",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "preferClaimed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "preferAddToBalance",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "percent",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "beneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "lockedUntil",
              "type": "uint256"
            },
            {
              "internalType": "contract IJBSplitAllocator",
              "name": "allocator",
              "type": "address"
            }
          ],
          "internalType": "struct JBSplit[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "transactionHash": "0xafa3d72cbc31871b49d6d386e517fce7590064104fcd78f72a85aa76264141d0",
  "receipt": {
    "to": null,
    "from": "0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF",
    "contractAddress": "0x767e488155030589c1833592E60876bbE64c1C74",
    "transactionIndex": 0,
    "gasUsed": "1157194",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x7baf2ecdcde839d3230543b4e5851561b74f243daa6fabb36896554cf361e0f6",
    "transactionHash": "0xafa3d72cbc31871b49d6d386e517fce7590064104fcd78f72a85aa76264141d0",
    "logs": [],
    "blockNumber": 10762793,
    "cumulativeGasUsed": "1157194",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xEDB2db4b82A4D4956C3B4aA474F7ddf3Ac73c5AB",
    "0x2d8e361f8F1B5daF33fDb2C99971b33503E60EEE",
    "0x1A9b04A9617ba5C9b7EBfF9668C30F41db6fC21a"
  ],
  "numDeployments": 3,
  "solcInputHash": "a1f674e02c4866a16e5bde886a31b82e",
  "metadata": "{\"compiler\":{\"version\":\"0.8.6+commit.11564f7e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"_operatorStore\",\"type\":\"address\"},{\"internalType\":\"contract IJBProjects\",\"name\":\"_projects\",\"type\":\"address\"},{\"internalType\":\"contract IJBDirectory\",\"name\":\"_directory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"INVALID_LOCKED_UNTIL\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_PROJECT_ID\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_SPLIT_PERCENT\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_TOTAL_PERCENT\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PREVIOUS_LOCKED_SPLITS_NOT_INCLUDED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UNAUTHORIZED\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"domain\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"indexed\":false,\"internalType\":\"struct JBSplit\",\"name\":\"split\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetSplit\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"directory\",\"outputs\":[{\"internalType\":\"contract IJBDirectory\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"operatorStore\",\"outputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projects\",\"outputs\":[{\"internalType\":\"contract IJBProjects\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_domain\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"group\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"internalType\":\"struct JBSplit[]\",\"name\":\"splits\",\"type\":\"tuple[]\"}],\"internalType\":\"struct JBGroupedSplits[]\",\"name\":\"_groupedSplits\",\"type\":\"tuple[]\"}],\"name\":\"set\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_domain\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_group\",\"type\":\"uint256\"}],\"name\":\"splitsOf\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"preferClaimed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"preferAddToBalance\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"percent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"beneficiary\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"lockedUntil\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBSplitAllocator\",\"name\":\"allocator\",\"type\":\"address\"}],\"internalType\":\"struct JBSplit[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Adheres to - IJBSplitsStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_directory\":\"A contract storing directories of terminals and controllers for each project.\",\"_operatorStore\":\"A contract storing operator assignments.\",\"_projects\":\"A contract which mints ERC-721's that represent project ownership and transfers.\"}},\"set(uint256,uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[])\":{\"details\":\"Only the owner or operator of a project, or the current controller contract of the project, can set its splits.The new splits must include any currently set splits that are locked.\",\"params\":{\"_domain\":\"An identifier within which the splits should be considered active.\",\"_groupedSplits\":\"An array of splits to set for any number of groups. \",\"_projectId\":\"The ID of the project for which splits are being added.\"}},\"splitsOf(uint256,uint256,uint256)\":{\"params\":{\"_domain\":\"An identifier within which the returned splits should be considered active.\",\"_group\":\"The identifying group of the splits.\",\"_projectId\":\"The ID of the project to get splits for.\"},\"returns\":{\"_0\":\"An array of all splits for the project.\"}}},\"stateVariables\":{\"_packedSplitParts2Of\":{\"details\":\"This packed data is often 0. _projectId The ID of the project to get packed splits data for. _domain An identifier within which the returned splits should be considered active. _group The identifying group of the splits. _index The indexed order that the split was set at.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"directory()\":{\"notice\":\" The directory of terminals and controllers for projects.\"},\"operatorStore()\":{\"notice\":\" A contract storing operator assignments.\"},\"projects()\":{\"notice\":\" Mints ERC-721's that represent project ownership and transfers.\"},\"set(uint256,uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[])\":{\"notice\":\" Sets a project's splits.\"},\"splitsOf(uint256,uint256,uint256)\":{\"notice\":\" Get all splits for the specified project ID, within the specified domain, for the specified group.\"}},\"notice\":\"Stores splits for each project.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/JBSplitsStore.sol\":\"JBSplitsStore\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":10000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/JBSplitsStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './abstract/JBOperatable.sol';\\nimport './interfaces/IJBDirectory.sol';\\nimport './interfaces/IJBSplitsStore.sol';\\nimport './libraries/JBConstants.sol';\\nimport './libraries/JBOperations.sol';\\n\\n/**\\n  @notice\\n  Stores splits for each project.\\n\\n  @dev\\n  Adheres to -\\n  IJBSplitsStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n\\n  @dev\\n  Inherits from -\\n  JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.\\n*/\\ncontract JBSplitsStore is IJBSplitsStore, JBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error INVALID_LOCKED_UNTIL();\\n  error INVALID_PROJECT_ID();\\n  error INVALID_SPLIT_PERCENT();\\n  error INVALID_TOTAL_PERCENT();\\n  error PREVIOUS_LOCKED_SPLITS_NOT_INCLUDED();\\n\\n  //*********************************************************************//\\n  // --------------------- private stored properties ------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    The number of splits currently set for each project ID's configurations.\\n\\n    _projectId The ID of the project to get the split count for.\\n    _domain An identifier within which the returned splits should be considered active.\\n    _group The identifying group of the splits.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256))) private _splitCountOf;\\n\\n  /** \\n    @notice\\n    Packed data of splits for each project ID's configurations.\\n\\n    _projectId The ID of the project to get packed splits data for.\\n    _domain An identifier within which the returned splits should be considered active.\\n    _group The identifying group of the splits.\\n    _index The indexed order that the split was set at.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256))))\\n    private _packedSplitParts1Of;\\n\\n  /** \\n    @notice\\n    More packed data of splits for each project ID's configurations.\\n\\n    @dev\\n    This packed data is often 0.\\n\\n    _projectId The ID of the project to get packed splits data for.\\n    _domain An identifier within which the returned splits should be considered active.\\n    _group The identifying group of the splits.\\n    _index The indexed order that the split was set at.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256))))\\n    private _packedSplitParts2Of;\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    Mints ERC-721's that represent project ownership and transfers.\\n  */\\n  IJBProjects public immutable override projects;\\n\\n  /** \\n    @notice \\n    The directory of terminals and controllers for projects.\\n  */\\n  IJBDirectory public immutable override directory;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n  @notice \\n  Get all splits for the specified project ID, within the specified domain, for the specified group.\\n\\n  @param _projectId The ID of the project to get splits for.\\n  @param _domain An identifier within which the returned splits should be considered active.\\n  @param _group The identifying group of the splits.\\n\\n  @return An array of all splits for the project.\\n*/\\n  function splitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) external view override returns (JBSplit[] memory) {\\n    return _getStructsFor(_projectId, _domain, _group);\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721's that represent project ownership and transfers.\\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n  */\\n  constructor(\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBDirectory _directory\\n  ) JBOperatable(_operatorStore) {\\n    projects = _projects;\\n    directory = _directory;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------- external transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    Sets a project's splits.\\n\\n    @dev\\n    Only the owner or operator of a project, or the current controller contract of the project, can set its splits.\\n\\n    @dev\\n    The new splits must include any currently set splits that are locked.\\n\\n    @param _projectId The ID of the project for which splits are being added.\\n    @param _domain An identifier within which the splits should be considered active.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n  */\\n  function set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    JBGroupedSplits[] calldata _groupedSplits\\n  )\\n    external\\n    override\\n    requirePermissionAllowingOverride(\\n      projects.ownerOf(_projectId),\\n      _projectId,\\n      JBOperations.SET_SPLITS,\\n      address(directory.controllerOf(_projectId)) == msg.sender\\n    )\\n  {\\n    // Push array length in stack\\n    uint256 _groupedSplitsLength = _groupedSplits.length;\\n\\n    // Set each grouped splits.\\n    for (uint256 _i = 0; _i < _groupedSplitsLength; ) {\\n      // Get a reference to the grouped split being iterated on.\\n      JBGroupedSplits memory _groupedSplit = _groupedSplits[_i];\\n\\n      // Set the splits for the group.\\n      _set(_projectId, _domain, _groupedSplit.group, _groupedSplit.splits);\\n\\n      unchecked {\\n        ++_i;\\n      }\\n    }\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- private helper functions -------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    Sets a project's splits.\\n\\n    @dev\\n    The new splits must include any currently set splits that are locked.\\n\\n    @param _projectId The ID of the project for which splits are being added.\\n    @param _domain An identifier within which the splits should be considered active.\\n    @param _group An identifier between of splits being set. All splits within this _group must add up to within 100%.\\n    @param _splits The splits to set.\\n  */\\n  function _set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    JBSplit[] memory _splits\\n  ) internal {\\n    // Get a reference to the project's current splits.\\n    JBSplit[] memory _currentSplits = _getStructsFor(_projectId, _domain, _group);\\n\\n    // Check to see if all locked splits are included.\\n    for (uint256 _i = 0; _i < _currentSplits.length; _i++) {\\n      // If not locked, continue.\\n      if (block.timestamp >= _currentSplits[_i].lockedUntil) continue;\\n\\n      // Keep a reference to whether or not the locked split being iterated on is included.\\n      bool _includesLocked = false;\\n\\n      for (uint256 _j = 0; _j < _splits.length; _j++) {\\n        // Check for sameness.\\n        if (\\n          _splits[_j].percent == _currentSplits[_i].percent &&\\n          _splits[_j].beneficiary == _currentSplits[_i].beneficiary &&\\n          _splits[_j].allocator == _currentSplits[_i].allocator &&\\n          _splits[_j].projectId == _currentSplits[_i].projectId &&\\n          // Allow lock extention.\\n          _splits[_j].lockedUntil >= _currentSplits[_i].lockedUntil\\n        ) _includesLocked = true;\\n      }\\n\\n      if (!_includesLocked) revert PREVIOUS_LOCKED_SPLITS_NOT_INCLUDED();\\n    }\\n\\n    // Add up all the percents to make sure they cumulative are under 100%.\\n    uint256 _percentTotal = 0;\\n\\n    for (uint256 _i = 0; _i < _splits.length; _i++) {\\n      // The percent should be greater than 0.\\n      if (_splits[_i].percent == 0) revert INVALID_SPLIT_PERCENT();\\n\\n      // ProjectId should be within a uint56\\n      if (_splits[_i].projectId > type(uint56).max) revert INVALID_PROJECT_ID();\\n\\n      // Add to the total percents.\\n      _percentTotal = _percentTotal + _splits[_i].percent;\\n\\n      // Validate the total does not exceed the expected value.\\n      if (_percentTotal > JBConstants.SPLITS_TOTAL_PERCENT) revert INVALID_TOTAL_PERCENT();\\n\\n      uint256 _packedSplitParts1;\\n\\n      // prefer claimed in bit 0.\\n      if (_splits[_i].preferClaimed) _packedSplitParts1 = 1;\\n      // prefer add to balance in bit 1.\\n      if (_splits[_i].preferAddToBalance) _packedSplitParts1 |= 1 << 1;\\n      // percent in bits 2-33.\\n      _packedSplitParts1 |= _splits[_i].percent << 2;\\n      // projectId in bits 32-89.\\n      _packedSplitParts1 |= _splits[_i].projectId << 34;\\n      // beneficiary in bits 90-249.\\n      _packedSplitParts1 |= uint256(uint160(address(_splits[_i].beneficiary))) << 90;\\n\\n      // Store the first spit part.\\n      _packedSplitParts1Of[_projectId][_domain][_group][_i] = _packedSplitParts1;\\n\\n      // If there's data to store in the second packed split part, pack and store.\\n      if (_splits[_i].lockedUntil > 0 || _splits[_i].allocator != IJBSplitAllocator(address(0))) {\\n        // Locked until should be within a uint48\\n        if (_splits[_i].lockedUntil > type(uint48).max) revert INVALID_LOCKED_UNTIL();\\n\\n        // lockedUntil in bits 0-47.\\n        uint256 _packedSplitParts2 = uint48(_splits[_i].lockedUntil);\\n        // allocator in bits 48-207.\\n        _packedSplitParts2 |= uint256(uint160(address(_splits[_i].allocator))) << 48;\\n\\n        // Store the second split part.\\n        _packedSplitParts2Of[_projectId][_domain][_group][_i] = _packedSplitParts2;\\n\\n        // Otherwise if there's a value stored in the indexed position, delete it.\\n      } else if (_packedSplitParts2Of[_projectId][_domain][_group][_i] > 0)\\n        delete _packedSplitParts2Of[_projectId][_domain][_group][_i];\\n\\n      emit SetSplit(_projectId, _domain, _group, _splits[_i], msg.sender);\\n    }\\n\\n    // Set the new length of the splits.\\n    _splitCountOf[_projectId][_domain][_group] = _splits.length;\\n  }\\n\\n  /**\\n    @notice \\n    Unpack splits' packed stored values into easy-to-work-with spit structs.\\n\\n    @param _projectId The ID of the project to which the split belongs.\\n    @param _domain The identifier within which the returned splits should be considered active.\\n    @param _group The identifying group of the splits.\\n\\n    @return splits The split structs.\\n  */\\n  function _getStructsFor(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) private view returns (JBSplit[] memory) {\\n    // Get a reference to the number of splits that need to be added to the returned array.\\n    uint256 _splitCount = _splitCountOf[_projectId][_domain][_group];\\n\\n    // Initialize an array to be returned that has the set length.\\n    JBSplit[] memory _splits = new JBSplit[](_splitCount);\\n\\n    // Loop through each split and unpack the values into structs.\\n    for (uint256 _i = 0; _i < _splitCount; _i++) {\\n      // Get a reference to the fist packed data.\\n      uint256 _packedSplitPart1 = _packedSplitParts1Of[_projectId][_domain][_group][_i];\\n\\n      // Populate the split struct.\\n      JBSplit memory _split;\\n\\n      // prefer claimed in bit 0.\\n      _split.preferClaimed = _packedSplitPart1 & 1 == 1;\\n      // prefer add to balance in bit 1.\\n      _split.preferAddToBalance = (_packedSplitPart1 >> 1) & 1 == 1;\\n      // percent in bits 2-33.\\n      _split.percent = uint256(uint32(_packedSplitPart1 >> 2));\\n      // projectId in bits 32-89.\\n      _split.projectId = uint256(uint56(_packedSplitPart1 >> 34));\\n      // beneficiary in bits 90-249.\\n      _split.beneficiary = payable(address(uint160(_packedSplitPart1 >> 90)));\\n\\n      // Get a reference to the second packed data.\\n      uint256 _packedSplitPart2 = _packedSplitParts2Of[_projectId][_domain][_group][_i];\\n\\n      // If there's anything in it, unpack.\\n      if (_packedSplitPart2 > 0) {\\n        // lockedUntil in bits 0-47.\\n        _split.lockedUntil = uint256(uint48(_packedSplitPart2));\\n        // allocator in bits 48-207.\\n        _split.allocator = IJBSplitAllocator(address(uint160(_packedSplitPart2 >> 48)));\\n      }\\n\\n      // Add the split to the value being returned.\\n      _splits[_i] = _split;\\n    }\\n\\n    return _splits;\\n  }\\n}\\n\",\"keccak256\":\"0x1a0847ab0978478d54d1b6d407f1ef51317c897e4b7c89322b89479b57d58d01\",\"license\":\"MIT\"},\"contracts/abstract/JBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBOperatable.sol';\\n\\n/** \\n  @notice\\n  Modifiers to allow access to functions based on the message sender's operator status.\\n\\n  @dev\\n  Adheres to -\\n  IJBOperatable: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n*/\\nabstract contract JBOperatable is IJBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the speficied account or an operator of the account to proceed. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n  */\\n  modifier requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) {\\n    _requirePermission(_account, _domain, _permissionIndex);\\n    _;\\n  }\\n\\n  /** \\n    @notice\\n    Only allows the speficied account, an operator of the account to proceed, or a truthy override flag. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n    @param _override A condition to force allowance for.\\n  */\\n  modifier requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) {\\n    _requirePermissionAllowingOverride(_account, _domain, _permissionIndex, _override);\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A contract storing operator assignments.\\n  */\\n  IJBOperatorStore public immutable override operatorStore;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n  */\\n  constructor(IJBOperatorStore _operatorStore) {\\n    operatorStore = _operatorStore;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- internal views ------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account or has the specified permission.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\\n  */\\n  function _requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) internal view {\\n    if (\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account, has the specified permission, or the override condition is true.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _domain The permission index that an operator must have within the specified domain to be allowed.\\n    @param _override The override condition to allow.\\n  */\\n  function _requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) internal view {\\n    if (\\n      !_override &&\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n}\\n\",\"keccak256\":\"0x9a5781d40c6b8013249653253369cda2047aa35329a1fcd4dc6353cd2dde30a6\",\"license\":\"MIT\"},\"contracts/enums/JBBallotState.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n\",\"keccak256\":\"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461\",\"license\":\"MIT\"},\"contracts/interfaces/IJBDirectory.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPaymentTerminal.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n\",\"keccak256\":\"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleBallot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../enums/JBBallotState.sol';\\nimport './IJBFundingCycleStore.sol';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n\",\"keccak256\":\"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../enums/JBBallotState.sol';\\nimport './../structs/JBFundingCycle.sol';\\nimport './../structs/JBFundingCycleData.sol';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n\",\"keccak256\":\"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBOperatorStore.sol';\\n\\ninterface IJBOperatable {\\n  function operatorStore() external view returns (IJBOperatorStore);\\n}\\n\",\"keccak256\":\"0x150097e253a667d2336367445bea019bb3669ef7c82d358befe1f4cdd480e9aa\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatorStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../structs/JBOperatorData.sol';\\n\\ninterface IJBOperatorStore {\\n  event SetOperator(\\n    address indexed operator,\\n    address indexed account,\\n    uint256 indexed domain,\\n    uint256[] permissionIndexes,\\n    uint256 packed\\n  );\\n\\n  function permissionsOf(\\n    address _operator,\\n    address _account,\\n    uint256 _domain\\n  ) external view returns (uint256);\\n\\n  function hasPermission(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) external view returns (bool);\\n\\n  function hasPermissions(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256[] calldata _permissionIndexes\\n  ) external view returns (bool);\\n\\n  function setOperator(JBOperatorData calldata _operatorData) external;\\n\\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\\n}\\n\",\"keccak256\":\"0x50a26fddc575a50176df7deb9225ec1816b0158c9e9b8555e7921a3261254ed8\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPaymentTerminal.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token, uint256 _projectId) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n\",\"keccak256\":\"0xf50279115f05568c12c254eb2c078b81a0c761f8cc985220e30ec15679118caa\",\"license\":\"MIT\"},\"contracts/interfaces/IJBProjects.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/token/ERC721/IERC721.sol';\\nimport './../structs/JBProjectMetadata.sol';\\nimport './IJBTokenUriResolver.sol';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n\",\"keccak256\":\"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBSplitAllocator.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport '../structs/JBSplitAllocationData.sol';\\n\\ninterface IJBSplitAllocator is IERC165 {\\n  function allocate(JBSplitAllocationData calldata _data) external payable;\\n}\\n\",\"keccak256\":\"0x717575a0a4a20f8598f44d22a3fd3e282f34f4b33543a0d4b36ba3b59ed8cd04\",\"license\":\"MIT\"},\"contracts/interfaces/IJBSplitsStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../structs/JBGroupedSplits.sol';\\nimport './../structs/JBSplit.sol';\\nimport './IJBDirectory.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBSplitsStore {\\n  event SetSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    address caller\\n  );\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function splitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) external view returns (JBSplit[] memory);\\n\\n  function set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    JBGroupedSplits[] memory _groupedSplits\\n  ) external;\\n}\\n\",\"keccak256\":\"0xcf54f37b37683f42e137d614abf2cec79b62e15fb7ce3e2409ddeb2bd91c1749\",\"license\":\"MIT\"},\"contracts/interfaces/IJBTokenUriResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n\",\"keccak256\":\"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475\",\"license\":\"MIT\"},\"contracts/libraries/JBConstants.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n\",\"keccak256\":\"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f\",\"license\":\"MIT\"},\"contracts/libraries/JBOperations.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBOperations {\\n  uint256 public constant RECONFIGURE = 1;\\n  uint256 public constant REDEEM = 2;\\n  uint256 public constant MIGRATE_CONTROLLER = 3;\\n  uint256 public constant MIGRATE_TERMINAL = 4;\\n  uint256 public constant PROCESS_FEES = 5;\\n  uint256 public constant SET_METADATA = 6;\\n  uint256 public constant ISSUE = 7;\\n  uint256 public constant CHANGE_TOKEN = 8;\\n  uint256 public constant MINT = 9;\\n  uint256 public constant BURN = 10;\\n  uint256 public constant CLAIM = 11;\\n  uint256 public constant TRANSFER = 12;\\n  uint256 public constant REQUIRE_CLAIM = 13;\\n  uint256 public constant SET_CONTROLLER = 14;\\n  uint256 public constant SET_TERMINALS = 15;\\n  uint256 public constant SET_PRIMARY_TERMINAL = 16;\\n  uint256 public constant USE_ALLOWANCE = 17;\\n  uint256 public constant SET_SPLITS = 18;\\n}\\n\",\"keccak256\":\"0x828971de3d07c31e294c188335e250ee0b28919dd86f0dd570f89b97cca13932\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycle.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member number The funding cycle number for the cycle's project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project's first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n\",\"keccak256\":\"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n\",\"keccak256\":\"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc\",\"license\":\"MIT\"},\"contracts/structs/JBGroupedSplits.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBSplit.sol';\\n\\n/** \\n  @member group The group indentifier.\\n  @member splits The splits to associate with the group.\\n*/\\nstruct JBGroupedSplits {\\n  uint256 group;\\n  JBSplit[] splits;\\n}\\n\",\"keccak256\":\"0x99e837531ffe541b8dd2eaf97c0c36a32e53ce24aaabac97c5b70dd93e7e86f5\",\"license\":\"MIT\"},\"contracts/structs/JBOperatorData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member operator The address of the operator.\\n  @member domain The domain within which the operator is being given permissions. A domain of 0 is a wildcard domain, which gives an operator access to all domains.\\n  @member permissionIndexes The indexes of the permissions the operator is being given.\\n*/\\nstruct JBOperatorData {\\n  address operator;\\n  uint256 domain;\\n  uint256[] permissionIndexes;\\n}\\n\",\"keccak256\":\"0xc108ff9bbeef8783e332522b8bd1c17bba071c34051de72dc5bfe38dfd39a3a3\",\"license\":\"MIT\"},\"contracts/structs/JBProjectMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n\",\"keccak256\":\"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4\",\"license\":\"MIT\"},\"contracts/structs/JBSplit.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBSplitAllocator.sol';\\n\\n/** \\n  @member preferClaimed A flag that only has effect if a projectId is also specified, and the project has a token contract attached. If so, this flag indicates if the tokens that result from making a payment to the project should be delivered claimed into the beneficiary's wallet, or unclaimed to save gas.\\n  @member preferAddToBalance A flag indicating if a distribution to a project should prefer triggering it's addToBalance function instead of its pay function.\\n  @member percent The percent of the whole group that this split occupies. This number is out of `JBConstants.SPLITS_TOTAL_PERCENT`.\\n  @member projectId The ID of a project. If an allocator is not set but a projectId is set, funds will be sent to the protocol treasury belonging to the project who's ID is specified. Resulting tokens will be routed to the beneficiary with the claimed token preference respected.\\n  @member beneficiary An address. The role the of the beneficary depends on whether or not projectId is specified, and whether or not an allocator is specified. If allocator is set, the beneficiary will be forwarded to the allocator for it to use. If allocator is not set but projectId is set, the beneficiary is the address to which the project's tokens will be sent that result from a payment to it. If neither allocator or projectId are set, the beneficiary is where the funds from the split will be sent.\\n  @member lockedUntil Specifies if the split should be unchangeable until the specified time, with the exception of extending the locked period.\\n  @member allocator If an allocator is specified, funds will be sent to the allocator contract along with all properties of this split.\\n*/\\nstruct JBSplit {\\n  bool preferClaimed;\\n  bool preferAddToBalance;\\n  uint256 percent;\\n  uint256 projectId;\\n  address payable beneficiary;\\n  uint256 lockedUntil;\\n  IJBSplitAllocator allocator;\\n}\\n\",\"keccak256\":\"0x03b5c632ad8c3b273d550bb334735d686fafa673b68ddb27fb77400d0de1eca1\",\"license\":\"MIT\"},\"contracts/structs/JBSplitAllocationData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBSplit.sol';\\n\\n/** \\n  @member token The token being sent to the split allocator.\\n  @member amount The amount being sent to the split allocator, as a fixed point number.\\n  @member decimals The number of decimals in the amount.\\n  @member projectId The project to which the split belongs.\\n  @member group The group to which the split belongs.\\n  @member split The split that caused the allocation.\\n*/\\nstruct JBSplitAllocationData {\\n  address token;\\n  uint256 amount;\\n  uint256 decimals;\\n  uint256 projectId;\\n  uint256 group;\\n  JBSplit split;\\n}\\n\",\"keccak256\":\"0x11f19479dc1d20cc07f52edc994d24b2ac08f8074d03a72ccee68af40f884b02\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60e06040523480156200001157600080fd5b506040516200151a3803806200151a83398101604081905262000034916200005c565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000c9565b6000806000606084860312156200007257600080fd5b83516200007f81620000b0565b60208501519093506200009281620000b0565b6040850151909250620000a581620000b0565b809150509250925092565b6001600160a01b0381168114620000c657600080fd5b50565b60805160601c60a05160601c60c05160601c6113fe6200011c6000396000818161010d0152610262015260008181609a015261018801526000818160e6015281816105e201526106be01526113fe6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ad007d6311610050578063ad007d63146100e1578063c41c2f2414610108578063f2da44b61461012f57600080fd5b806369e11cc51461006c5780638b79543c14610095575b600080fd5b61007f61007a366004610f3b565b610144565b60405161008c9190610f67565b60405180910390f35b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008c565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b61014261013d366004610eb8565b610159565b005b6060610151848484610365565b949350505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018590527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b1580156101df57600080fd5b505afa1580156101f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102179190610e77565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590601290339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156102a457600080fd5b505afa1580156102b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dc9190610e77565b73ffffffffffffffffffffffffffffffffffffffff16146102ff8484848461055e565b8460005b8181101561035957600088888381811061031f5761031f611337565b905060200281019061033191906110a5565b61033a90611196565b90506103508b8b83600001518460200151610777565b50600101610303565b50505050505050505050565b60008381526020818152604080832085845282528083208484529091528120546060918167ffffffffffffffff8111156103a1576103a1611366565b60405190808252806020026020018201604052801561042657816020015b6040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816103bf5790505b50905060005b828110156105545760008781526001602081815260408084208a855282528084208985528252808420858552825280842054815160e08101835260a0810186905260c081018690528185168514815281851c851690941484840152600281811c63ffffffff1685840152602282901c66ffffffffffffff166060860152605a82901c73ffffffffffffffffffffffffffffffffffffffff1660808601528c865283528185208b865283528185208a865283528185208686529092529092205480156105205765ffffffffffff811660a083015273ffffffffffffffffffffffffffffffffffffffff603082901c1660c08301525b8185858151811061053357610533611337565b6020026020010181905250505050808061054c906112cf565b91505061042c565b5095945050505050565b8015801561058257503373ffffffffffffffffffffffffffffffffffffffff851614155b801561065e57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561062457600080fd5b505afa158015610638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065c9190610e9b565b155b801561073a57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561070057600080fd5b505afa158015610714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107389190610e9b565b155b15610771576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6000610784858585610365565b905060005b81518110156109da578181815181106107a4576107a4611337565b602002602001015160a0015142106107bb576109c8565b6000805b845181101561098e578383815181106107da576107da611337565b6020026020010151604001518582815181106107f8576107f8611337565b602002602001015160400151148015610876575083838151811061081e5761081e611337565b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff1685828151811061085257610852611337565b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff16145b80156108e7575083838151811061088f5761088f611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff168582815181106108c3576108c3611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff16145b801561092c575083838151811061090057610900611337565b60200260200101516060015185828151811061091e5761091e611337565b602002602001015160600151145b8015610972575083838151811061094557610945611337565b602002602001015160a0015185828151811061096357610963611337565b602002602001015160a0015110155b1561097c57600191505b80610986816112cf565b9150506107bf565b50806109c6576040517f1974459500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b806109d2816112cf565b915050610789565b506000805b8351811015610e4e578381815181106109fa576109fa611337565b60200260200101516040015160001415610a40576040517fe119ba4500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b66ffffffffffffff8016848281518110610a5c57610a5c611337565b6020026020010151606001511115610aa0576040517f3b44d99200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b838181518110610ab257610ab2611337565b60200260200101516040015182610ac9919061117e565b9150633b9aca00821115610b09576040517feca7361000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000848281518110610b1d57610b1d611337565b60200260200101516000015115610b32575060015b848281518110610b4457610b44611337565b60200260200101516020015115610b59576002175b6002858381518110610b6d57610b6d611337565b602002602001015160400151901b811790506022858381518110610b9357610b93611337565b602002602001015160600151901b81179050605a858381518110610bb957610bb9611337565b6020908102919091018101516080015160008b81526001835260408082208c835284528082208b8352845280822087835290935291822073ffffffffffffffffffffffffffffffffffffffff90911690921b92909217908190558551909190869084908110610c2a57610c2a611337565b602002602001015160a001511180610c8c5750600073ffffffffffffffffffffffffffffffffffffffff16858381518110610c6757610c67611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610d8c5765ffffffffffff8016858381518110610cac57610cac611337565b602002602001015160a001511115610cf0576040517fd509b54d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858381518110610d0457610d04611337565b602002602001015160a0015165ffffffffffff1690506030868481518110610d2e57610d2e611337565b60209081029190910181015160c0015160008c81526002835260408082208d835284528082208c835284528082208883529093529190912073ffffffffffffffffffffffffffffffffffffffff90911690911b919091179055610de6565b60008881526002602090815260408083208a84528252808320898452825280832085845290915290205415610de65760008881526002602090815260408083208a8452825280832089845282528083208584529091528120555b8587897f1d65eeba667d8160993d485b4782f11eef3bc64186c6521f2a0801f816e752e7888681518110610e1c57610e1c611337565b602002602001015133604051610e33929190611014565b60405180910390a45080610e46816112cf565b9150506109df565b505090516000948552602085815260408087209587529481528486209386529290925250912055565b600060208284031215610e8957600080fd5b8151610e9481611395565b9392505050565b600060208284031215610ead57600080fd5b8151610e94816113ba565b60008060008060608587031215610ece57600080fd5b8435935060208501359250604085013567ffffffffffffffff80821115610ef457600080fd5b818701915087601f830112610f0857600080fd5b813581811115610f1757600080fd5b8860208260051b8501011115610f2c57600080fd5b95989497505060200194505050565b600080600060608486031215610f5057600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b8181101561100857610ff58385518051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b9284019260e09290920191600101610f83565b50909695505050505050565b610100810161108282858051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b73ffffffffffffffffffffffffffffffffffffffff831660e08301529392505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc18336030181126110d957600080fd5b9190910192915050565b6040805190810167ffffffffffffffff8111828210171561110657611106611366565b60405290565b60405160e0810167ffffffffffffffff8111828210171561110657611106611366565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561117657611176611366565b604052919050565b6000821982111561119157611191611308565b500190565b600060408083360312156111a957600080fd5b6111b16110e3565b8335815260208085013567ffffffffffffffff808211156111d157600080fd5b9086019036601f8301126111e457600080fd5b8135818111156111f6576111f6611366565b611204848260051b0161112f565b818152848101925083850160e03681850287018801111561122457600080fd5b60009550855b848110156112ba57818336031215611240578687fd5b61124861110c565b8335611253816113ba565b815283890135611262816113ba565b818a0152838b01358b8201526060808501359082015260808085013561128781611395565b9082015260a0848101359082015260c0808501356112a481611395565b908201528652948701949181019160010161122a565b50505093850193909352509195945050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561130157611301611308565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146113b757600080fd5b50565b80151581146113b757600080fdfea2646970667358221220a76aaa0b4dcfcfab18ac104ddb11272ef89f2e43882924ef6ebe78b5f006791764736f6c63430008060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100675760003560e01c8063ad007d6311610050578063ad007d63146100e1578063c41c2f2414610108578063f2da44b61461012f57600080fd5b806369e11cc51461006c5780638b79543c14610095575b600080fd5b61007f61007a366004610f3b565b610144565b60405161008c9190610f67565b60405180910390f35b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008c565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b61014261013d366004610eb8565b610159565b005b6060610151848484610365565b949350505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018590527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b1580156101df57600080fd5b505afa1580156101f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102179190610e77565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590601290339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156102a457600080fd5b505afa1580156102b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dc9190610e77565b73ffffffffffffffffffffffffffffffffffffffff16146102ff8484848461055e565b8460005b8181101561035957600088888381811061031f5761031f611337565b905060200281019061033191906110a5565b61033a90611196565b90506103508b8b83600001518460200151610777565b50600101610303565b50505050505050505050565b60008381526020818152604080832085845282528083208484529091528120546060918167ffffffffffffffff8111156103a1576103a1611366565b60405190808252806020026020018201604052801561042657816020015b6040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816103bf5790505b50905060005b828110156105545760008781526001602081815260408084208a855282528084208985528252808420858552825280842054815160e08101835260a0810186905260c081018690528185168514815281851c851690941484840152600281811c63ffffffff1685840152602282901c66ffffffffffffff166060860152605a82901c73ffffffffffffffffffffffffffffffffffffffff1660808601528c865283528185208b865283528185208a865283528185208686529092529092205480156105205765ffffffffffff811660a083015273ffffffffffffffffffffffffffffffffffffffff603082901c1660c08301525b8185858151811061053357610533611337565b6020026020010181905250505050808061054c906112cf565b91505061042c565b5095945050505050565b8015801561058257503373ffffffffffffffffffffffffffffffffffffffff851614155b801561065e57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561062457600080fd5b505afa158015610638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065c9190610e9b565b155b801561073a57506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561070057600080fd5b505afa158015610714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107389190610e9b565b155b15610771576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6000610784858585610365565b905060005b81518110156109da578181815181106107a4576107a4611337565b602002602001015160a0015142106107bb576109c8565b6000805b845181101561098e578383815181106107da576107da611337565b6020026020010151604001518582815181106107f8576107f8611337565b602002602001015160400151148015610876575083838151811061081e5761081e611337565b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff1685828151811061085257610852611337565b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff16145b80156108e7575083838151811061088f5761088f611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff168582815181106108c3576108c3611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff16145b801561092c575083838151811061090057610900611337565b60200260200101516060015185828151811061091e5761091e611337565b602002602001015160600151145b8015610972575083838151811061094557610945611337565b602002602001015160a0015185828151811061096357610963611337565b602002602001015160a0015110155b1561097c57600191505b80610986816112cf565b9150506107bf565b50806109c6576040517f1974459500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b806109d2816112cf565b915050610789565b506000805b8351811015610e4e578381815181106109fa576109fa611337565b60200260200101516040015160001415610a40576040517fe119ba4500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b66ffffffffffffff8016848281518110610a5c57610a5c611337565b6020026020010151606001511115610aa0576040517f3b44d99200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b838181518110610ab257610ab2611337565b60200260200101516040015182610ac9919061117e565b9150633b9aca00821115610b09576040517feca7361000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000848281518110610b1d57610b1d611337565b60200260200101516000015115610b32575060015b848281518110610b4457610b44611337565b60200260200101516020015115610b59576002175b6002858381518110610b6d57610b6d611337565b602002602001015160400151901b811790506022858381518110610b9357610b93611337565b602002602001015160600151901b81179050605a858381518110610bb957610bb9611337565b6020908102919091018101516080015160008b81526001835260408082208c835284528082208b8352845280822087835290935291822073ffffffffffffffffffffffffffffffffffffffff90911690921b92909217908190558551909190869084908110610c2a57610c2a611337565b602002602001015160a001511180610c8c5750600073ffffffffffffffffffffffffffffffffffffffff16858381518110610c6757610c67611337565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610d8c5765ffffffffffff8016858381518110610cac57610cac611337565b602002602001015160a001511115610cf0576040517fd509b54d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858381518110610d0457610d04611337565b602002602001015160a0015165ffffffffffff1690506030868481518110610d2e57610d2e611337565b60209081029190910181015160c0015160008c81526002835260408082208d835284528082208c835284528082208883529093529190912073ffffffffffffffffffffffffffffffffffffffff90911690911b919091179055610de6565b60008881526002602090815260408083208a84528252808320898452825280832085845290915290205415610de65760008881526002602090815260408083208a8452825280832089845282528083208584529091528120555b8587897f1d65eeba667d8160993d485b4782f11eef3bc64186c6521f2a0801f816e752e7888681518110610e1c57610e1c611337565b602002602001015133604051610e33929190611014565b60405180910390a45080610e46816112cf565b9150506109df565b505090516000948552602085815260408087209587529481528486209386529290925250912055565b600060208284031215610e8957600080fd5b8151610e9481611395565b9392505050565b600060208284031215610ead57600080fd5b8151610e94816113ba565b60008060008060608587031215610ece57600080fd5b8435935060208501359250604085013567ffffffffffffffff80821115610ef457600080fd5b818701915087601f830112610f0857600080fd5b813581811115610f1757600080fd5b8860208260051b8501011115610f2c57600080fd5b95989497505060200194505050565b600080600060608486031215610f5057600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b8181101561100857610ff58385518051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b9284019260e09290920191600101610f83565b50909695505050505050565b610100810161108282858051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b73ffffffffffffffffffffffffffffffffffffffff831660e08301529392505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc18336030181126110d957600080fd5b9190910192915050565b6040805190810167ffffffffffffffff8111828210171561110657611106611366565b60405290565b60405160e0810167ffffffffffffffff8111828210171561110657611106611366565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561117657611176611366565b604052919050565b6000821982111561119157611191611308565b500190565b600060408083360312156111a957600080fd5b6111b16110e3565b8335815260208085013567ffffffffffffffff808211156111d157600080fd5b9086019036601f8301126111e457600080fd5b8135818111156111f6576111f6611366565b611204848260051b0161112f565b818152848101925083850160e03681850287018801111561122457600080fd5b60009550855b848110156112ba57818336031215611240578687fd5b61124861110c565b8335611253816113ba565b815283890135611262816113ba565b818a0152838b01358b8201526060808501359082015260808085013561128781611395565b9082015260a0848101359082015260c0808501356112a481611395565b908201528652948701949181019160010161122a565b50505093850193909352509195945050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561130157611301611308565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146113b757600080fd5b50565b80151581146113b757600080fdfea2646970667358221220a76aaa0b4dcfcfab18ac104ddb11272ef89f2e43882924ef6ebe78b5f006791764736f6c63430008060033",
  "devdoc": {
    "details": "Adheres to - IJBSplitsStore: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.",
    "kind": "dev",
    "methods": {
      "constructor": {
        "params": {
          "_directory": "A contract storing directories of terminals and controllers for each project.",
          "_operatorStore": "A contract storing operator assignments.",
          "_projects": "A contract which mints ERC-721's that represent project ownership and transfers."
        }
      },
      "set(uint256,uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[])": {
        "details": "Only the owner or operator of a project, or the current controller contract of the project, can set its splits.The new splits must include any currently set splits that are locked.",
        "params": {
          "_domain": "An identifier within which the splits should be considered active.",
          "_groupedSplits": "An array of splits to set for any number of groups. ",
          "_projectId": "The ID of the project for which splits are being added."
        }
      },
      "splitsOf(uint256,uint256,uint256)": {
        "params": {
          "_domain": "An identifier within which the returned splits should be considered active.",
          "_group": "The identifying group of the splits.",
          "_projectId": "The ID of the project to get splits for."
        },
        "returns": {
          "_0": "An array of all splits for the project."
        }
      }
    },
    "stateVariables": {
      "_packedSplitParts2Of": {
        "details": "This packed data is often 0. _projectId The ID of the project to get packed splits data for. _domain An identifier within which the returned splits should be considered active. _group The identifying group of the splits. _index The indexed order that the split was set at."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "directory()": {
        "notice": " The directory of terminals and controllers for projects."
      },
      "operatorStore()": {
        "notice": " A contract storing operator assignments."
      },
      "projects()": {
        "notice": " Mints ERC-721's that represent project ownership and transfers."
      },
      "set(uint256,uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[])": {
        "notice": " Sets a project's splits."
      },
      "splitsOf(uint256,uint256,uint256)": {
        "notice": " Get all splits for the specified project ID, within the specified domain, for the specified group."
      }
    },
    "notice": "Stores splits for each project.",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 12497,
        "contract": "contracts/JBSplitsStore.sol:JBSplitsStore",
        "label": "_splitCountOf",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256)))"
      },
      {
        "astId": 12508,
        "contract": "contracts/JBSplitsStore.sol:JBSplitsStore",
        "label": "_packedSplitParts1Of",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))))"
      },
      {
        "astId": 12519,
        "contract": "contracts/JBSplitsStore.sol:JBSplitsStore",
        "label": "_packedSplitParts2Of",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))))"
      }
    ],
    "types": {
      "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256))))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256)))"
      },
      "t_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_uint256,t_uint256)))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256)))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))"
      },
      "t_mapping(t_uint256,t_mapping(t_uint256,t_uint256))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_uint256)"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}