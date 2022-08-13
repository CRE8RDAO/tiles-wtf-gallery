export default {
	address: '0x4e3ef8AFCC2B52E4e704f4c8d9B7E7948F651351',
	abi: [
		{
			inputs: [
				{
					internalType: 'contract IJBOperatorStore',
					name: '_operatorStore',
					type: 'address'
				},
				{
					internalType: 'contract IJBProjects',
					name: '_projects',
					type: 'address'
				},
				{
					internalType: 'contract IJBDirectory',
					name: '_directory',
					type: 'address'
				},
				{
					internalType: 'contract IJBFundingCycleStore',
					name: '_fundingCycleStore',
					type: 'address'
				},
				{
					internalType: 'contract IJBTokenStore',
					name: '_tokenStore',
					type: 'address'
				},
				{
					internalType: 'contract IJBSplitsStore',
					name: '_splitsStore',
					type: 'address'
				}
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'CANT_MIGRATE_TO_CURRENT_CONTROLLER',
			type: 'error'
		},
		{
			inputs: [],
			name: 'CHANGE_TOKEN_NOT_ALLOWED',
			type: 'error'
		},
		{
			inputs: [],
			name: 'FUNDING_CYCLE_ALREADY_LAUNCHED',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_BALLOT_REDEMPTION_RATE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_DISTRIBUTION_LIMIT',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_DISTRIBUTION_LIMIT_CURRENCY',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_OVERFLOW_ALLOWANCE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_OVERFLOW_ALLOWANCE_CURRENCY',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_REDEMPTION_RATE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'INVALID_RESERVED_RATE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'MIGRATION_NOT_ALLOWED',
			type: 'error'
		},
		{
			inputs: [],
			name: 'MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE',
			type: 'error'
		},
		{
			inputs: [],
			name: 'NOT_CURRENT_CONTROLLER',
			type: 'error'
		},
		{
			inputs: [],
			name: 'NO_BURNABLE_TOKENS',
			type: 'error'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'prod1',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: 'denominator',
					type: 'uint256'
				}
			],
			name: 'PRBMath__MulDivOverflow',
			type: 'error'
		},
		{
			inputs: [],
			name: 'UNAUTHORIZED',
			type: 'error'
		},
		{
			inputs: [],
			name: 'ZERO_TOKENS_TO_MINT',
			type: 'error'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'holder',
					type: 'address'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'BurnTokens',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'beneficiaryTokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DistributeReservedTokens',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'domain',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'group',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'bool',
							name: 'preferClaimed',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'preferAddToBalance',
							type: 'bool'
						},
						{
							internalType: 'uint256',
							name: 'percent',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'projectId',
							type: 'uint256'
						},
						{
							internalType: 'address payable',
							name: 'beneficiary',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'lockedUntil',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBSplitAllocator',
							name: 'allocator',
							type: 'address'
						}
					],
					indexed: false,
					internalType: 'struct JBSplit',
					name: 'split',
					type: 'tuple'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'DistributeToReservedTokenSplit',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'configuration',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'LaunchFundingCycles',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'configuration',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'LaunchProject',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'contract IJBMigratable',
					name: 'to',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'Migrate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'beneficiary',
					type: 'address'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'beneficiaryTokenCount',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'reservedRate',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'MintTokens',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'from',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'PrepMigration',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'configuration',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'memo',
					type: 'string'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'ReconfigureFundingCycles',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleConfiguration',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'fundingCycleNumber',
					type: 'uint256'
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'contract IJBPaymentTerminal',
							name: 'terminal',
							type: 'address'
						},
						{
							internalType: 'address',
							name: 'token',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimit',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimitCurrency',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowance',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowanceCurrency',
							type: 'uint256'
						}
					],
					indexed: false,
					internalType: 'struct JBFundAccessConstraints',
					name: 'constraints',
					type: 'tuple'
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'caller',
					type: 'address'
				}
			],
			name: 'SetFundAccessConstraints',
			type: 'event'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_holder',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_tokenCount',
					type: 'uint256'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				},
				{
					internalType: 'bool',
					name: '_preferClaimedTokens',
					type: 'bool'
				}
			],
			name: 'burnTokensOf',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBToken',
					name: '_token',
					type: 'address'
				},
				{
					internalType: 'address',
					name: '_newOwner',
					type: 'address'
				}
			],
			name: 'changeTokenOf',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'currentFundingCycleOf',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'number',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'configuration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'basedOn',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'start',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'metadata',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundingCycle',
					name: 'fundingCycle',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: 'metadata',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'directory',
			outputs: [
				{
					internalType: 'contract IJBDirectory',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'distributeReservedTokensOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_configuration',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBPaymentTerminal',
					name: '_terminal',
					type: 'address'
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address'
				}
			],
			name: 'distributionLimitOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'fundingCycleStore',
			outputs: [
				{
					internalType: 'contract IJBFundingCycleStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_configuration',
					type: 'uint256'
				}
			],
			name: 'getFundingCycleOf',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'number',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'configuration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'basedOn',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'start',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'metadata',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundingCycle',
					name: 'fundingCycle',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: 'metadata',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'string',
					name: '_name',
					type: 'string'
				},
				{
					internalType: 'string',
					name: '_symbol',
					type: 'string'
				}
			],
			name: 'issueTokenFor',
			outputs: [
				{
					internalType: 'contract IJBToken',
					name: 'token',
					type: 'address'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'latestConfiguredFundingCycleOf',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'number',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'configuration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'basedOn',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'start',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'metadata',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundingCycle',
					name: 'fundingCycle',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: 'metadata',
					type: 'tuple'
				},
				{
					internalType: 'enum JBBallotState',
					name: 'ballotState',
					type: 'uint8'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleData',
					name: '_data',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: '_metadata',
					type: 'tuple'
				},
				{
					internalType: 'uint256',
					name: '_mustStartAtOrAfter',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'group',
							type: 'uint256'
						},
						{
							components: [
								{
									internalType: 'bool',
									name: 'preferClaimed',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'preferAddToBalance',
									type: 'bool'
								},
								{
									internalType: 'uint256',
									name: 'percent',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'projectId',
									type: 'uint256'
								},
								{
									internalType: 'address payable',
									name: 'beneficiary',
									type: 'address'
								},
								{
									internalType: 'uint256',
									name: 'lockedUntil',
									type: 'uint256'
								},
								{
									internalType: 'contract IJBSplitAllocator',
									name: 'allocator',
									type: 'address'
								}
							],
							internalType: 'struct JBSplit[]',
							name: 'splits',
							type: 'tuple[]'
						}
					],
					internalType: 'struct JBGroupedSplits[]',
					name: '_groupedSplits',
					type: 'tuple[]'
				},
				{
					components: [
						{
							internalType: 'contract IJBPaymentTerminal',
							name: 'terminal',
							type: 'address'
						},
						{
							internalType: 'address',
							name: 'token',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimit',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimitCurrency',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowance',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowanceCurrency',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundAccessConstraints[]',
					name: '_fundAccessConstraints',
					type: 'tuple[]'
				},
				{
					internalType: 'contract IJBPaymentTerminal[]',
					name: '_terminals',
					type: 'address[]'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'launchFundingCyclesFor',
			outputs: [
				{
					internalType: 'uint256',
					name: 'configuration',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address'
				},
				{
					components: [
						{
							internalType: 'string',
							name: 'content',
							type: 'string'
						},
						{
							internalType: 'uint256',
							name: 'domain',
							type: 'uint256'
						}
					],
					internalType: 'struct JBProjectMetadata',
					name: '_projectMetadata',
					type: 'tuple'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleData',
					name: '_data',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: '_metadata',
					type: 'tuple'
				},
				{
					internalType: 'uint256',
					name: '_mustStartAtOrAfter',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'group',
							type: 'uint256'
						},
						{
							components: [
								{
									internalType: 'bool',
									name: 'preferClaimed',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'preferAddToBalance',
									type: 'bool'
								},
								{
									internalType: 'uint256',
									name: 'percent',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'projectId',
									type: 'uint256'
								},
								{
									internalType: 'address payable',
									name: 'beneficiary',
									type: 'address'
								},
								{
									internalType: 'uint256',
									name: 'lockedUntil',
									type: 'uint256'
								},
								{
									internalType: 'contract IJBSplitAllocator',
									name: 'allocator',
									type: 'address'
								}
							],
							internalType: 'struct JBSplit[]',
							name: 'splits',
							type: 'tuple[]'
						}
					],
					internalType: 'struct JBGroupedSplits[]',
					name: '_groupedSplits',
					type: 'tuple[]'
				},
				{
					components: [
						{
							internalType: 'contract IJBPaymentTerminal',
							name: 'terminal',
							type: 'address'
						},
						{
							internalType: 'address',
							name: 'token',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimit',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimitCurrency',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowance',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowanceCurrency',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundAccessConstraints[]',
					name: '_fundAccessConstraints',
					type: 'tuple[]'
				},
				{
					internalType: 'contract IJBPaymentTerminal[]',
					name: '_terminals',
					type: 'address[]'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'launchProjectFor',
			outputs: [
				{
					internalType: 'uint256',
					name: 'projectId',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBMigratable',
					name: '_to',
					type: 'address'
				}
			],
			name: 'migrate',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_tokenCount',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '_beneficiary',
					type: 'address'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				},
				{
					internalType: 'bool',
					name: '_preferClaimedTokens',
					type: 'bool'
				},
				{
					internalType: 'bool',
					name: '_useReservedRate',
					type: 'bool'
				}
			],
			name: 'mintTokensOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'beneficiaryTokenCount',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'operatorStore',
			outputs: [
				{
					internalType: 'contract IJBOperatorStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_configuration',
					type: 'uint256'
				},
				{
					internalType: 'contract IJBPaymentTerminal',
					name: '_terminal',
					type: 'address'
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address'
				}
			],
			name: 'overflowAllowanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'address',
					name: '_from',
					type: 'address'
				}
			],
			name: 'prepForMigrationOf',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'projects',
			outputs: [
				{
					internalType: 'contract IJBProjects',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				}
			],
			name: 'queuedFundingCycleOf',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'number',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'configuration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'basedOn',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'start',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'metadata',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundingCycle',
					name: 'fundingCycle',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: 'metadata',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'duration',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'weight',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'discountRate',
							type: 'uint256'
						},
						{
							internalType: 'contract IJBFundingCycleBallot',
							name: 'ballot',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleData',
					name: '_data',
					type: 'tuple'
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'bool',
									name: 'allowSetTerminals',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'allowSetController',
									type: 'bool'
								}
							],
							internalType: 'struct JBGlobalFundingCycleMetadata',
							name: 'global',
							type: 'tuple'
						},
						{
							internalType: 'uint256',
							name: 'reservedRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'redemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'ballotRedemptionRate',
							type: 'uint256'
						},
						{
							internalType: 'bool',
							name: 'pausePay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseDistributions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseRedeem',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'pauseBurn',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowMinting',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowChangeToken',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowTerminalMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'allowControllerMigration',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'holdFees',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useTotalOverflowForRedemptions',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForPay',
							type: 'bool'
						},
						{
							internalType: 'bool',
							name: 'useDataSourceForRedeem',
							type: 'bool'
						},
						{
							internalType: 'address',
							name: 'dataSource',
							type: 'address'
						}
					],
					internalType: 'struct JBFundingCycleMetadata',
					name: '_metadata',
					type: 'tuple'
				},
				{
					internalType: 'uint256',
					name: '_mustStartAtOrAfter',
					type: 'uint256'
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'group',
							type: 'uint256'
						},
						{
							components: [
								{
									internalType: 'bool',
									name: 'preferClaimed',
									type: 'bool'
								},
								{
									internalType: 'bool',
									name: 'preferAddToBalance',
									type: 'bool'
								},
								{
									internalType: 'uint256',
									name: 'percent',
									type: 'uint256'
								},
								{
									internalType: 'uint256',
									name: 'projectId',
									type: 'uint256'
								},
								{
									internalType: 'address payable',
									name: 'beneficiary',
									type: 'address'
								},
								{
									internalType: 'uint256',
									name: 'lockedUntil',
									type: 'uint256'
								},
								{
									internalType: 'contract IJBSplitAllocator',
									name: 'allocator',
									type: 'address'
								}
							],
							internalType: 'struct JBSplit[]',
							name: 'splits',
							type: 'tuple[]'
						}
					],
					internalType: 'struct JBGroupedSplits[]',
					name: '_groupedSplits',
					type: 'tuple[]'
				},
				{
					components: [
						{
							internalType: 'contract IJBPaymentTerminal',
							name: 'terminal',
							type: 'address'
						},
						{
							internalType: 'address',
							name: 'token',
							type: 'address'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimit',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'distributionLimitCurrency',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowance',
							type: 'uint256'
						},
						{
							internalType: 'uint256',
							name: 'overflowAllowanceCurrency',
							type: 'uint256'
						}
					],
					internalType: 'struct JBFundAccessConstraints[]',
					name: '_fundAccessConstraints',
					type: 'tuple[]'
				},
				{
					internalType: 'string',
					name: '_memo',
					type: 'string'
				}
			],
			name: 'reconfigureFundingCyclesOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'configuration',
					type: 'uint256'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_reservedRate',
					type: 'uint256'
				}
			],
			name: 'reservedTokenBalanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'splitsStore',
			outputs: [
				{
					internalType: 'contract IJBSplitsStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: '_interfaceId',
					type: 'bytes4'
				}
			],
			name: 'supportsInterface',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'tokenStore',
			outputs: [
				{
					internalType: 'contract IJBTokenStore',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_projectId',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '_reservedRate',
					type: 'uint256'
				}
			],
			name: 'totalOutstandingTokensOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		}
	],
	transactionHash: '0x89c7d49bbcfc6b1074e28915298c7a86f301e6b500295b460984ba30f101be4d',
	receipt: {
		to: null,
		from: '0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF',
		contractAddress: '0x4e3ef8AFCC2B52E4e704f4c8d9B7E7948F651351',
		transactionIndex: 77,
		gasUsed: '5094545',
		logsBloom:
			'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		blockHash: '0x05e896f02b4bc2cbd1503c93c09b90216dceb3465bde53e1ef58c19ad8beb487',
		transactionHash: '0x89c7d49bbcfc6b1074e28915298c7a86f301e6b500295b460984ba30f101be4d',
		logs: [],
		blockNumber: 14868852,
		cumulativeGasUsed: '11914710',
		status: 1,
		byzantium: true
	},
	args: [
		'0x6F3C5afCa0c9eDf3926eF2dDF17c8ae6391afEfb',
		'0xD8B4359143eda5B2d763E127Ed27c77addBc47d3',
		'0xCc8f7a89d89c2AB3559f484E0C656423E979ac9C',
		'0x6B8e01DAA8A61b544F96d2738893E05D04BF1D12',
		'0xCBB8e16d998161AdB20465830107ca298995f371',
		'0xFBE1075826B7FFd898cf8D944885ba6a8D714A7F'
	],
	numDeployments: 3,
	solcInputHash: 'a1f674e02c4866a16e5bde886a31b82e',
	metadata:
		'{"compiler":{"version":"0.8.6+commit.11564f7e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract IJBOperatorStore","name":"_operatorStore","type":"address"},{"internalType":"contract IJBProjects","name":"_projects","type":"address"},{"internalType":"contract IJBDirectory","name":"_directory","type":"address"},{"internalType":"contract IJBFundingCycleStore","name":"_fundingCycleStore","type":"address"},{"internalType":"contract IJBTokenStore","name":"_tokenStore","type":"address"},{"internalType":"contract IJBSplitsStore","name":"_splitsStore","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE","type":"error"},{"inputs":[],"name":"CANT_MIGRATE_TO_CURRENT_CONTROLLER","type":"error"},{"inputs":[],"name":"CHANGE_TOKEN_NOT_ALLOWED","type":"error"},{"inputs":[],"name":"FUNDING_CYCLE_ALREADY_LAUNCHED","type":"error"},{"inputs":[],"name":"INVALID_BALLOT_REDEMPTION_RATE","type":"error"},{"inputs":[],"name":"INVALID_DISTRIBUTION_LIMIT","type":"error"},{"inputs":[],"name":"INVALID_DISTRIBUTION_LIMIT_CURRENCY","type":"error"},{"inputs":[],"name":"INVALID_OVERFLOW_ALLOWANCE","type":"error"},{"inputs":[],"name":"INVALID_OVERFLOW_ALLOWANCE_CURRENCY","type":"error"},{"inputs":[],"name":"INVALID_REDEMPTION_RATE","type":"error"},{"inputs":[],"name":"INVALID_RESERVED_RATE","type":"error"},{"inputs":[],"name":"MIGRATION_NOT_ALLOWED","type":"error"},{"inputs":[],"name":"MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE","type":"error"},{"inputs":[],"name":"NOT_CURRENT_CONTROLLER","type":"error"},{"inputs":[],"name":"NO_BURNABLE_TOKENS","type":"error"},{"inputs":[{"internalType":"uint256","name":"prod1","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"PRBMath__MulDivOverflow","type":"error"},{"inputs":[],"name":"UNAUTHORIZED","type":"error"},{"inputs":[],"name":"ZERO_TOKENS_TO_MINT","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"BurnTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beneficiaryTokenCount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DistributeReservedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"domain","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"group","type":"uint256"},{"components":[{"internalType":"bool","name":"preferClaimed","type":"bool"},{"internalType":"bool","name":"preferAddToBalance","type":"bool"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"contract IJBSplitAllocator","name":"allocator","type":"address"}],"indexed":false,"internalType":"struct JBSplit","name":"split","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"DistributeToReservedTokenSplit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"configuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"LaunchFundingCycles","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"configuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"LaunchProject","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"contract IJBMigratable","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"Migrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beneficiaryTokenCount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"uint256","name":"reservedRate","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"MintTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"PrepMigration","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"configuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"projectId","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"ReconfigureFundingCycles","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fundingCycleConfiguration","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"fundingCycleNumber","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"projectId","type":"uint256"},{"components":[{"internalType":"contract IJBPaymentTerminal","name":"terminal","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"distributionLimit","type":"uint256"},{"internalType":"uint256","name":"distributionLimitCurrency","type":"uint256"},{"internalType":"uint256","name":"overflowAllowance","type":"uint256"},{"internalType":"uint256","name":"overflowAllowanceCurrency","type":"uint256"}],"indexed":false,"internalType":"struct JBFundAccessConstraints","name":"constraints","type":"tuple"},{"indexed":false,"internalType":"address","name":"caller","type":"address"}],"name":"SetFundAccessConstraints","type":"event"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_tokenCount","type":"uint256"},{"internalType":"string","name":"_memo","type":"string"},{"internalType":"bool","name":"_preferClaimedTokens","type":"bool"}],"name":"burnTokensOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"contract IJBToken","name":"_token","type":"address"},{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeTokenOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"currentFundingCycleOf","outputs":[{"components":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"configuration","type":"uint256"},{"internalType":"uint256","name":"basedOn","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"},{"internalType":"uint256","name":"metadata","type":"uint256"}],"internalType":"struct JBFundingCycle","name":"fundingCycle","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"metadata","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directory","outputs":[{"internalType":"contract IJBDirectory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_memo","type":"string"}],"name":"distributeReservedTokensOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_configuration","type":"uint256"},{"internalType":"contract IJBPaymentTerminal","name":"_terminal","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"distributionLimitOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundingCycleStore","outputs":[{"internalType":"contract IJBFundingCycleStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_configuration","type":"uint256"}],"name":"getFundingCycleOf","outputs":[{"components":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"configuration","type":"uint256"},{"internalType":"uint256","name":"basedOn","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"},{"internalType":"uint256","name":"metadata","type":"uint256"}],"internalType":"struct JBFundingCycle","name":"fundingCycle","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"metadata","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"issueTokenFor","outputs":[{"internalType":"contract IJBToken","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"latestConfiguredFundingCycleOf","outputs":[{"components":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"configuration","type":"uint256"},{"internalType":"uint256","name":"basedOn","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"},{"internalType":"uint256","name":"metadata","type":"uint256"}],"internalType":"struct JBFundingCycle","name":"fundingCycle","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"metadata","type":"tuple"},{"internalType":"enum JBBallotState","name":"ballotState","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"components":[{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"}],"internalType":"struct JBFundingCycleData","name":"_data","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"_metadata","type":"tuple"},{"internalType":"uint256","name":"_mustStartAtOrAfter","type":"uint256"},{"components":[{"internalType":"uint256","name":"group","type":"uint256"},{"components":[{"internalType":"bool","name":"preferClaimed","type":"bool"},{"internalType":"bool","name":"preferAddToBalance","type":"bool"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"contract IJBSplitAllocator","name":"allocator","type":"address"}],"internalType":"struct JBSplit[]","name":"splits","type":"tuple[]"}],"internalType":"struct JBGroupedSplits[]","name":"_groupedSplits","type":"tuple[]"},{"components":[{"internalType":"contract IJBPaymentTerminal","name":"terminal","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"distributionLimit","type":"uint256"},{"internalType":"uint256","name":"distributionLimitCurrency","type":"uint256"},{"internalType":"uint256","name":"overflowAllowance","type":"uint256"},{"internalType":"uint256","name":"overflowAllowanceCurrency","type":"uint256"}],"internalType":"struct JBFundAccessConstraints[]","name":"_fundAccessConstraints","type":"tuple[]"},{"internalType":"contract IJBPaymentTerminal[]","name":"_terminals","type":"address[]"},{"internalType":"string","name":"_memo","type":"string"}],"name":"launchFundingCyclesFor","outputs":[{"internalType":"uint256","name":"configuration","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"components":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"domain","type":"uint256"}],"internalType":"struct JBProjectMetadata","name":"_projectMetadata","type":"tuple"},{"components":[{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"}],"internalType":"struct JBFundingCycleData","name":"_data","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"_metadata","type":"tuple"},{"internalType":"uint256","name":"_mustStartAtOrAfter","type":"uint256"},{"components":[{"internalType":"uint256","name":"group","type":"uint256"},{"components":[{"internalType":"bool","name":"preferClaimed","type":"bool"},{"internalType":"bool","name":"preferAddToBalance","type":"bool"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"contract IJBSplitAllocator","name":"allocator","type":"address"}],"internalType":"struct JBSplit[]","name":"splits","type":"tuple[]"}],"internalType":"struct JBGroupedSplits[]","name":"_groupedSplits","type":"tuple[]"},{"components":[{"internalType":"contract IJBPaymentTerminal","name":"terminal","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"distributionLimit","type":"uint256"},{"internalType":"uint256","name":"distributionLimitCurrency","type":"uint256"},{"internalType":"uint256","name":"overflowAllowance","type":"uint256"},{"internalType":"uint256","name":"overflowAllowanceCurrency","type":"uint256"}],"internalType":"struct JBFundAccessConstraints[]","name":"_fundAccessConstraints","type":"tuple[]"},{"internalType":"contract IJBPaymentTerminal[]","name":"_terminals","type":"address[]"},{"internalType":"string","name":"_memo","type":"string"}],"name":"launchProjectFor","outputs":[{"internalType":"uint256","name":"projectId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"contract IJBMigratable","name":"_to","type":"address"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_tokenCount","type":"uint256"},{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"string","name":"_memo","type":"string"},{"internalType":"bool","name":"_preferClaimedTokens","type":"bool"},{"internalType":"bool","name":"_useReservedRate","type":"bool"}],"name":"mintTokensOf","outputs":[{"internalType":"uint256","name":"beneficiaryTokenCount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operatorStore","outputs":[{"internalType":"contract IJBOperatorStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_configuration","type":"uint256"},{"internalType":"contract IJBPaymentTerminal","name":"_terminal","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"overflowAllowanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_from","type":"address"}],"name":"prepForMigrationOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"projects","outputs":[{"internalType":"contract IJBProjects","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"queuedFundingCycleOf","outputs":[{"components":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"configuration","type":"uint256"},{"internalType":"uint256","name":"basedOn","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"},{"internalType":"uint256","name":"metadata","type":"uint256"}],"internalType":"struct JBFundingCycle","name":"fundingCycle","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"metadata","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"components":[{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"discountRate","type":"uint256"},{"internalType":"contract IJBFundingCycleBallot","name":"ballot","type":"address"}],"internalType":"struct JBFundingCycleData","name":"_data","type":"tuple"},{"components":[{"components":[{"internalType":"bool","name":"allowSetTerminals","type":"bool"},{"internalType":"bool","name":"allowSetController","type":"bool"}],"internalType":"struct JBGlobalFundingCycleMetadata","name":"global","type":"tuple"},{"internalType":"uint256","name":"reservedRate","type":"uint256"},{"internalType":"uint256","name":"redemptionRate","type":"uint256"},{"internalType":"uint256","name":"ballotRedemptionRate","type":"uint256"},{"internalType":"bool","name":"pausePay","type":"bool"},{"internalType":"bool","name":"pauseDistributions","type":"bool"},{"internalType":"bool","name":"pauseRedeem","type":"bool"},{"internalType":"bool","name":"pauseBurn","type":"bool"},{"internalType":"bool","name":"allowMinting","type":"bool"},{"internalType":"bool","name":"allowChangeToken","type":"bool"},{"internalType":"bool","name":"allowTerminalMigration","type":"bool"},{"internalType":"bool","name":"allowControllerMigration","type":"bool"},{"internalType":"bool","name":"holdFees","type":"bool"},{"internalType":"bool","name":"useTotalOverflowForRedemptions","type":"bool"},{"internalType":"bool","name":"useDataSourceForPay","type":"bool"},{"internalType":"bool","name":"useDataSourceForRedeem","type":"bool"},{"internalType":"address","name":"dataSource","type":"address"}],"internalType":"struct JBFundingCycleMetadata","name":"_metadata","type":"tuple"},{"internalType":"uint256","name":"_mustStartAtOrAfter","type":"uint256"},{"components":[{"internalType":"uint256","name":"group","type":"uint256"},{"components":[{"internalType":"bool","name":"preferClaimed","type":"bool"},{"internalType":"bool","name":"preferAddToBalance","type":"bool"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"contract IJBSplitAllocator","name":"allocator","type":"address"}],"internalType":"struct JBSplit[]","name":"splits","type":"tuple[]"}],"internalType":"struct JBGroupedSplits[]","name":"_groupedSplits","type":"tuple[]"},{"components":[{"internalType":"contract IJBPaymentTerminal","name":"terminal","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"distributionLimit","type":"uint256"},{"internalType":"uint256","name":"distributionLimitCurrency","type":"uint256"},{"internalType":"uint256","name":"overflowAllowance","type":"uint256"},{"internalType":"uint256","name":"overflowAllowanceCurrency","type":"uint256"}],"internalType":"struct JBFundAccessConstraints[]","name":"_fundAccessConstraints","type":"tuple[]"},{"internalType":"string","name":"_memo","type":"string"}],"name":"reconfigureFundingCyclesOf","outputs":[{"internalType":"uint256","name":"configuration","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_reservedRate","type":"uint256"}],"name":"reservedTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"splitsStore","outputs":[{"internalType":"contract IJBSplitsStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenStore","outputs":[{"internalType":"contract IJBTokenStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_reservedRate","type":"uint256"}],"name":"totalOutstandingTokensOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"details":"Adheres to - IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol\'s rules. IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.Inherits from - JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project. ERC165: Introspection on interface adherance. ","kind":"dev","methods":{"burnTokensOf(address,uint256,uint256,string,bool)":{"details":"Only a token\'s holder, a designated operator, or a project\'s terminal can burn it.","params":{"_holder":"The account that is having its tokens burned.","_memo":"A memo to pass along to the emitted event.","_preferClaimedTokens":"A flag indicating whether a project\'s attached token contract should be burned first if they have been issued.","_projectId":"The ID of the project to which the tokens being burned belong.","_tokenCount":"The number of tokens to burn."}},"changeTokenOf(uint256,address,address)":{"details":"Only a project\'s owner or operator can change its token.","params":{"_newOwner":"An address to transfer the current token\'s ownership to. This is optional, but it cannot be done later.","_projectId":"The ID of the project to which the changed token belongs.","_token":"The new token."}},"constructor":{"params":{"_directory":"A contract storing directories of terminals and controllers for each project.","_fundingCycleStore":"A contract storing all funding cycle configurations.","_operatorStore":"A contract storing operator assignments.","_projects":"A contract which mints ERC-721\'s that represent project ownership and transfers.","_splitsStore":"A contract that stores splits for each project.","_tokenStore":"A contract that manages token minting and burning."}},"currentFundingCycleOf(uint256)":{"params":{"_projectId":"The ID of the project to which the funding cycle belongs."},"returns":{"fundingCycle":"The current funding cycle.","metadata":"The current funding cycle\'s metadata."}},"distributeReservedTokensOf(uint256,string)":{"params":{"_memo":"A memo to pass along to the emitted event.","_projectId":"The ID of the project to which the reserved tokens belong."},"returns":{"_0":"The amount of minted reserved tokens."}},"distributionLimitOf(uint256,uint256,address,address)":{"details":"The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ","params":{"_configuration":"The configuration during which the distribution limit applies.","_projectId":"The ID of the project to get the distribution limit of.","_terminal":"The terminal from which distributions are being limited.","_token":"The token for which the distribution limit applies."},"returns":{"_0":"The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.","_1":"The currency of the distribution limit."}},"getFundingCycleOf(uint256,uint256)":{"params":{"_projectId":"The ID of the project to which the funding cycle belongs."},"returns":{"fundingCycle":"The funding cycle.","metadata":"The funding cycle\'s metadata."}},"issueTokenFor(uint256,string,string)":{"details":"Deploys a project\'s ERC20 JBToken contract.Only a project\'s owner or operator can issue its token.","params":{"_name":"The ERC20\'s name.","_projectId":"The ID of the project being issued tokens.","_symbol":"The ERC20\'s symbol."}},"latestConfiguredFundingCycleOf(uint256)":{"params":{"_projectId":"The ID of the project to which the funding cycle belongs."},"returns":{"ballotState":"The state of the configuration.","fundingCycle":"The latest configured funding cycle.","metadata":"The latest configured funding cycle\'s metadata."}},"launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)":{"details":"Each operation within this transaction can be done in sequence separately.Only a project owner or operator can launch its funding cycles.","params":{"_data":"Data that defines the project\'s first funding cycle. These properties will remain fixed for the duration of the funding cycle.","_fundAccessConstraints":"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.","_groupedSplits":"An array of splits to set for any number of groups. ","_memo":"A memo to pass along to the emitted event.","_metadata":"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.","_mustStartAtOrAfter":"The time before which the configured funding cycle cannot start.","_projectId":"The ID of the project to launch funding cycles for.","_terminals":"Payment terminals to add for the project."},"returns":{"configuration":"The configuration of the funding cycle that was successfully created."}},"launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)":{"details":"Each operation within this transaction can be done in sequence separately.Anyone can deploy a project on an owner\'s behalf.","params":{"_data":"Data that defines the project\'s first funding cycle. These properties will remain fixed for the duration of the funding cycle.","_fundAccessConstraints":"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.","_groupedSplits":"An array of splits to set for any number of groups. ","_memo":"A memo to pass along to the emitted event.","_metadata":"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.","_mustStartAtOrAfter":"The time before which the configured funding cycle cannot start.","_owner":"The address to set as the owner of the project. The project ERC-721 will be owned by this address.","_projectMetadata":"Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.","_terminals":"Payment terminals to add for the project."},"returns":{"projectId":"The ID of the project."}},"migrate(uint256,address)":{"details":"Only a project\'s owner or a designated operator can migrate it.","params":{"_projectId":"The ID of the project that will be migrated from this controller.","_to":"The controller to which the project is migrating."}},"mintTokensOf(uint256,uint256,address,string,bool,bool)":{"details":"Only a project\'s owner, a designated operator, one of its terminals, or the current data source can mint its tokens.","params":{"_beneficiary":"The account that the tokens are being minted for.","_memo":"A memo to pass along to the emitted event.","_preferClaimedTokens":"A flag indicating whether a project\'s attached token contract should be minted if they have been issued.","_projectId":"The ID of the project to which the tokens being minted belong.","_tokenCount":"The amount of tokens to mint in total, counting however many should be reserved.","_useReservedRate":"Whether to use the current funding cycle\'s reserved rate in the mint calculation."},"returns":{"beneficiaryTokenCount":"The amount of tokens minted for the beneficiary."}},"overflowAllowanceOf(uint256,uint256,address,address)":{"details":"The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ","params":{"_configuration":"The configuration of the during which the allowance applies.","_projectId":"The ID of the project to get the overflow allowance of.","_terminal":"The terminal managing the overflow.","_token":"The token for which the overflow allowance applies."},"returns":{"_0":"The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.","_1":"The currency of the overflow allowance."}},"prepForMigrationOf(uint256,address)":{"details":"This controller should not yet be the project\'s controller.","params":{"_from":"The controller being migrated from.","_projectId":"The ID of the project that will be migrated to this controller."}},"queuedFundingCycleOf(uint256)":{"params":{"_projectId":"The ID of the project to which the funding cycle belongs."},"returns":{"fundingCycle":"The queued funding cycle.","metadata":"The queued funding cycle\'s metadata."}},"reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)":{"details":"Only a project\'s owner or a designated operator can configure its funding cycles.","params":{"_data":"Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.","_fundAccessConstraints":"An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.","_groupedSplits":"An array of splits to set for any number of groups. ","_memo":"A memo to pass along to the emitted event.","_metadata":"Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.","_mustStartAtOrAfter":"The time before which the configured funding cycle cannot start.","_projectId":"The ID of the project whose funding cycles are being reconfigured."},"returns":{"configuration":"The configuration of the funding cycle that was successfully reconfigured."}},"reservedTokenBalanceOf(uint256,uint256)":{"params":{"_projectId":"The ID of the project to get a reserved token balance of.","_reservedRate":"The reserved rate to use when making the calculation."},"returns":{"_0":"The current amount of reserved tokens."}},"supportsInterface(bytes4)":{"details":" See {IERC165-supportsInterface}.","params":{"_interfaceId":"The ID of the interface to check for adherance to."}},"totalOutstandingTokensOf(uint256,uint256)":{"params":{"_projectId":"The ID of the project to get total outstanding tokens of.","_reservedRate":"The reserved rate to use when making the calculation."},"returns":{"_0":"The current total amount of outstanding tokens for the project."}}},"stateVariables":{"_packedDistributionLimitDataOf":{"details":"bits 0-231: The amount of token that a project can distribute per funding cycle.bits 232-255: The currency of amount that a project can distribute. _projectId The ID of the project to get the packed distribution limit data of. _configuration The configuration during which the packed distribution limit data applies. _terminal The terminal from which distributions are being limited. _token The token for which distributions are being limited."},"_packedOverflowAllowanceDataOf":{"details":"bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.bits 232-255: The currency of the amount of overflow that a project is allowed to tap. _projectId The ID of the project to get the packed overflow allowance data of. _configuration The configuration during which the packed overflow allowance data applies. _terminal The terminal managing the overflow. _token The token for which overflow is being allowed."}},"version":1},"userdoc":{"errors":{"PRBMath__MulDivOverflow(uint256,uint256)":[{"notice":"Emitted when the result overflows uint256."}]},"kind":"user","methods":{"burnTokensOf(address,uint256,uint256,string,bool)":{"notice":"Burns a token holder\'s supply."},"changeTokenOf(uint256,address,address)":{"notice":"Swap the current project\'s token that is minted and burned for another, and transfer ownership of the current token to another address if needed."},"currentFundingCycleOf(uint256)":{"notice":"A project\'s current funding cycle along with its metadata."},"directory()":{"notice":"The directory of terminals and controllers for projects."},"distributeReservedTokensOf(uint256,string)":{"notice":"Distributes all outstanding reserved tokens for a project."},"distributionLimitOf(uint256,uint256,address,address)":{"notice":"The amount of token that a project can distribute per funding cycle, and the currency it\'s in terms of."},"fundingCycleStore()":{"notice":"The contract storing all funding cycle configurations."},"getFundingCycleOf(uint256,uint256)":{"notice":"A project\'s funding cycle for the specified configuration along with its metadata."},"issueTokenFor(uint256,string,string)":{"notice":"Issues an owner\'s ERC20 JBTokens that\'ll be used when claiming tokens."},"latestConfiguredFundingCycleOf(uint256)":{"notice":"A project\'s latest configured funding cycle along with its metadata and the ballot state of the configuration."},"launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)":{"notice":"Creates a funding cycle for an already existing project ERC-721."},"launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)":{"notice":"Creates a project. This will mint an ERC-721 into the specified owner\'s account, configure a first funding cycle, and set up any splits."},"migrate(uint256,address)":{"notice":"Allows a project to migrate from this controller to another."},"mintTokensOf(uint256,uint256,address,string,bool,bool)":{"notice":"Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project\'s current funding cycle configuration."},"operatorStore()":{"notice":" A contract storing operator assignments."},"overflowAllowanceOf(uint256,uint256,address,address)":{"notice":"The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it\'s in terms of."},"prepForMigrationOf(uint256,address)":{"notice":"Allows other controllers to signal to this one that a migration is expected for the specified project."},"projects()":{"notice":"Mints ERC-721\'s that represent project ownership."},"queuedFundingCycleOf(uint256)":{"notice":"A project\'s queued funding cycle along with its metadata."},"reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)":{"notice":"Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle\'s ballot."},"reservedTokenBalanceOf(uint256,uint256)":{"notice":"Gets the amount of reserved tokens that a project has available to distribute."},"splitsStore()":{"notice":"The contract that stores splits for each project."},"supportsInterface(bytes4)":{"notice":"Indicates if this contract adheres to the specified interface."},"tokenStore()":{"notice":"The contract that manages token minting and burning."},"totalOutstandingTokensOf(uint256,uint256)":{"notice":"Gets the current total amount of outstanding tokens for a project, given a reserved rate."}},"notice":"Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.","version":1}},"settings":{"compilationTarget":{"contracts/JBController.sol":"JBController"},"evmVersion":"berlin","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":10000},"remappings":[]},"sources":{"@openzeppelin/contracts/token/ERC721/IERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n","keccak256":"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990","license":"MIT"},"@openzeppelin/contracts/utils/introspection/ERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n","keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT"},"@paulrberg/contracts/math/PRBMath.sol":{"content":"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\nimport \\"prb-math/contracts/PRBMath.sol\\";\\n","keccak256":"0x42821345981bc0434a90ba2268a2f5278dfe9e38166981d72fc7f3b776a29495","license":"Unlicense"},"contracts/JBController.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/ERC165.sol\';\\nimport \'@paulrberg/contracts/math/PRBMath.sol\';\\nimport \'./abstract/JBOperatable.sol\';\\nimport \'./interfaces/IJBController.sol\';\\nimport \'./interfaces/IJBMigratable.sol\';\\nimport \'./interfaces/IJBOperatorStore.sol\';\\nimport \'./interfaces/IJBPaymentTerminal.sol\';\\nimport \'./interfaces/IJBProjects.sol\';\\nimport \'./libraries/JBConstants.sol\';\\nimport \'./libraries/JBFundingCycleMetadataResolver.sol\';\\nimport \'./libraries/JBOperations.sol\';\\nimport \'./libraries/JBSplitsGroups.sol\';\\n\\n/**\\n  @notice\\n  Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.\\n\\n  @dev\\n  Adheres to -\\n  IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol\'s rules.\\n  IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.\\n\\n  @dev\\n  Inherits from -\\n  JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project.\\n  ERC165: Introspection on interface adherance. \\n*/\\ncontract JBController is IJBController, IJBMigratable, JBOperatable, ERC165 {\\n  // A library that parses the packed funding cycle metadata into a more friendly format.\\n  using JBFundingCycleMetadataResolver for JBFundingCycle;\\n\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE();\\n  error CANT_MIGRATE_TO_CURRENT_CONTROLLER();\\n  error CHANGE_TOKEN_NOT_ALLOWED();\\n  error FUNDING_CYCLE_ALREADY_LAUNCHED();\\n  error INVALID_BALLOT_REDEMPTION_RATE();\\n  error INVALID_DISTRIBUTION_LIMIT();\\n  error INVALID_DISTRIBUTION_LIMIT_CURRENCY();\\n  error INVALID_OVERFLOW_ALLOWANCE();\\n  error INVALID_OVERFLOW_ALLOWANCE_CURRENCY();\\n  error INVALID_REDEMPTION_RATE();\\n  error INVALID_RESERVED_RATE();\\n  error MIGRATION_NOT_ALLOWED();\\n  error MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE();\\n  error NO_BURNABLE_TOKENS();\\n  error NOT_CURRENT_CONTROLLER();\\n  error ZERO_TOKENS_TO_MINT();\\n\\n  //*********************************************************************//\\n  // --------------------- internal stored properties ------------------ //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The difference between the processed token tracker of a project and the project\'s token\'s total supply is the amount of tokens that still need to have reserves minted against them.\\n\\n    _projectId The ID of the project to get the tracker of.\\n  */\\n  mapping(uint256 => int256) internal _processedTokenTrackerOf;\\n\\n  /**\\n    @notice\\n    Data regarding the distribution limit of a project during a configuration.\\n\\n    @dev\\n    bits 0-231: The amount of token that a project can distribute per funding cycle.\\n\\n    @dev\\n    bits 232-255: The currency of amount that a project can distribute.\\n\\n    _projectId The ID of the project to get the packed distribution limit data of.\\n    _configuration The configuration during which the packed distribution limit data applies.\\n    _terminal The terminal from which distributions are being limited.\\n    _token The token for which distributions are being limited.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(IJBPaymentTerminal => mapping(address => uint256))))\\n    internal _packedDistributionLimitDataOf;\\n\\n  /**\\n    @notice\\n    Data regarding the overflow allowance of a project during a configuration.\\n\\n    @dev\\n    bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.\\n\\n    @dev\\n    bits 232-255: The currency of the amount of overflow that a project is allowed to tap.\\n\\n    _projectId The ID of the project to get the packed overflow allowance data of.\\n    _configuration The configuration during which the packed overflow allowance data applies.\\n    _terminal The terminal managing the overflow.\\n    _token The token for which overflow is being allowed.\\n  */\\n  mapping(uint256 => mapping(uint256 => mapping(IJBPaymentTerminal => mapping(address => uint256))))\\n    internal _packedOverflowAllowanceDataOf;\\n\\n  //*********************************************************************//\\n  // --------------- public immutable stored properties ---------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Mints ERC-721\'s that represent project ownership.\\n  */\\n  IJBProjects public immutable override projects;\\n\\n  /**\\n    @notice\\n    The contract storing all funding cycle configurations.\\n  */\\n  IJBFundingCycleStore public immutable override fundingCycleStore;\\n\\n  /**\\n    @notice\\n    The contract that manages token minting and burning.\\n  */\\n  IJBTokenStore public immutable override tokenStore;\\n\\n  /**\\n    @notice\\n    The contract that stores splits for each project.\\n  */\\n  IJBSplitsStore public immutable override splitsStore;\\n\\n  /**\\n    @notice\\n    The directory of terminals and controllers for projects.\\n  */\\n  IJBDirectory public immutable override directory;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    The amount of token that a project can distribute per funding cycle, and the currency it\'s in terms of.\\n\\n    @dev\\n    The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \\n\\n    @param _projectId The ID of the project to get the distribution limit of.\\n    @param _configuration The configuration during which the distribution limit applies.\\n    @param _terminal The terminal from which distributions are being limited.\\n    @param _token The token for which the distribution limit applies.\\n\\n    @return The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.\\n    @return The currency of the distribution limit.\\n  */\\n  function distributionLimitOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view override returns (uint256, uint256) {\\n    // Get a reference to the packed data.\\n    uint256 _data = _packedDistributionLimitDataOf[_projectId][_configuration][_terminal][_token];\\n\\n    // The limit is in bits 0-231. The currency is in bits 232-255.\\n    return (uint256(uint232(_data)), _data >> 232);\\n  }\\n\\n  /**\\n    @notice\\n    The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it\'s in terms of.\\n\\n    @dev\\n    The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \\n\\n    @param _projectId The ID of the project to get the overflow allowance of.\\n    @param _configuration The configuration of the during which the allowance applies.\\n    @param _terminal The terminal managing the overflow.\\n    @param _token The token for which the overflow allowance applies.\\n\\n    @return The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.\\n    @return The currency of the overflow allowance.\\n  */\\n  function overflowAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view override returns (uint256, uint256) {\\n    // Get a reference to the packed data.\\n    uint256 _data = _packedOverflowAllowanceDataOf[_projectId][_configuration][_terminal][_token];\\n\\n    // The allowance is in bits 0-231. The currency is in bits 232-255.\\n    return (uint256(uint232(_data)), _data >> 232);\\n  }\\n\\n  /**\\n    @notice\\n    Gets the amount of reserved tokens that a project has available to distribute.\\n\\n    @param _projectId The ID of the project to get a reserved token balance of.\\n    @param _reservedRate The reserved rate to use when making the calculation.\\n\\n    @return The current amount of reserved tokens.\\n  */\\n  function reservedTokenBalanceOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    override\\n    returns (uint256)\\n  {\\n    return\\n      _reservedTokenAmountFrom(\\n        _processedTokenTrackerOf[_projectId],\\n        _reservedRate,\\n        tokenStore.totalSupplyOf(_projectId)\\n      );\\n  }\\n\\n  /**\\n    @notice\\n    Gets the current total amount of outstanding tokens for a project, given a reserved rate.\\n\\n    @param _projectId The ID of the project to get total outstanding tokens of.\\n    @param _reservedRate The reserved rate to use when making the calculation.\\n\\n    @return The current total amount of outstanding tokens for the project.\\n  */\\n  function totalOutstandingTokensOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    override\\n    returns (uint256)\\n  {\\n    // Get the total number of tokens in circulation.\\n    uint256 _totalSupply = tokenStore.totalSupplyOf(_projectId);\\n\\n    // Get the number of reserved tokens the project has.\\n    uint256 _reservedTokenAmount = _reservedTokenAmountFrom(\\n      _processedTokenTrackerOf[_projectId],\\n      _reservedRate,\\n      _totalSupply\\n    );\\n\\n    // Add the reserved tokens to the total supply.\\n    return _totalSupply + _reservedTokenAmount;\\n  }\\n\\n  /** \\n    @notice\\n    A project\'s funding cycle for the specified configuration along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The funding cycle.\\n    @return metadata The funding cycle\'s metadata.\\n  */\\n  function getFundingCycleOf(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.get(_projectId, _configuration);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project\'s latest configured funding cycle along with its metadata and the ballot state of the configuration.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The latest configured funding cycle.\\n    @return metadata The latest configured funding cycle\'s metadata.\\n    @return ballotState The state of the configuration.\\n  */\\n  function latestConfiguredFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (\\n      JBFundingCycle memory fundingCycle,\\n      JBFundingCycleMetadata memory metadata,\\n      JBBallotState ballotState\\n    )\\n  {\\n    (fundingCycle, ballotState) = fundingCycleStore.latestConfiguredOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project\'s current funding cycle along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The current funding cycle.\\n    @return metadata The current funding cycle\'s metadata.\\n  */\\n  function currentFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.currentOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  /** \\n    @notice\\n    A project\'s queued funding cycle along with its metadata.\\n\\n    @param _projectId The ID of the project to which the funding cycle belongs.\\n  \\n    @return fundingCycle The queued funding cycle.\\n    @return metadata The queued funding cycle\'s metadata.\\n  */\\n  function queuedFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata)\\n  {\\n    fundingCycle = fundingCycleStore.queuedOf(_projectId);\\n    metadata = fundingCycle.expandMetadata();\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- public views --------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Indicates if this contract adheres to the specified interface.\\n\\n    @dev \\n    See {IERC165-supportsInterface}.\\n\\n    @param _interfaceId The ID of the interface to check for adherance to.\\n  */\\n  function supportsInterface(bytes4 _interfaceId)\\n    public\\n    view\\n    virtual\\n    override(ERC165, IERC165)\\n    returns (bool)\\n  {\\n    return\\n      _interfaceId == type(IJBController).interfaceId ||\\n      _interfaceId == type(IJBMigratable).interfaceId ||\\n      _interfaceId == type(IJBOperatable).interfaceId ||\\n      super.supportsInterface(_interfaceId);\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------------- constructor -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721\'s that represent project ownership and transfers.\\n    @param _directory A contract storing directories of terminals and controllers for each project.\\n    @param _fundingCycleStore A contract storing all funding cycle configurations.\\n    @param _tokenStore A contract that manages token minting and burning.\\n    @param _splitsStore A contract that stores splits for each project.\\n  */\\n  constructor(\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBDirectory _directory,\\n    IJBFundingCycleStore _fundingCycleStore,\\n    IJBTokenStore _tokenStore,\\n    IJBSplitsStore _splitsStore\\n  ) JBOperatable(_operatorStore) {\\n    projects = _projects;\\n    directory = _directory;\\n    fundingCycleStore = _fundingCycleStore;\\n    tokenStore = _tokenStore;\\n    splitsStore = _splitsStore;\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- external transactions ----------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Creates a project. This will mint an ERC-721 into the specified owner\'s account, configure a first funding cycle, and set up any splits.\\n\\n    @dev\\n    Each operation within this transaction can be done in sequence separately.\\n\\n    @dev\\n    Anyone can deploy a project on an owner\'s behalf.\\n\\n    @param _owner The address to set as the owner of the project. The project ERC-721 will be owned by this address.\\n    @param _projectMetadata Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.\\n    @param _data Data that defines the project\'s first funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.\\n    @param _terminals Payment terminals to add for the project.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return projectId The ID of the project.\\n  */\\n  function launchProjectFor(\\n    address _owner,\\n    JBProjectMetadata calldata _projectMetadata,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] calldata _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string memory _memo\\n  ) external virtual override returns (uint256 projectId) {\\n    // Mint the project into the wallet of the message sender.\\n    projectId = projects.createFor(_owner, _projectMetadata);\\n\\n    // Set this contract as the project\'s controller in the directory.\\n    directory.setControllerOf(projectId, address(this));\\n\\n    // Configure the first funding cycle.\\n    uint256 _configuration = _configure(\\n      projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    // Add the provided terminals to the list of terminals.\\n    if (_terminals.length > 0) directory.setTerminalsOf(projectId, _terminals);\\n\\n    emit LaunchProject(_configuration, projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Creates a funding cycle for an already existing project ERC-721.\\n\\n    @dev\\n    Each operation within this transaction can be done in sequence separately.\\n\\n    @dev\\n    Only a project owner or operator can launch its funding cycles.\\n\\n    @param _projectId The ID of the project to launch funding cycles for.\\n    @param _data Data that defines the project\'s first funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.\\n    @param _terminals Payment terminals to add for the project.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return configuration The configuration of the funding cycle that was successfully created.\\n  */\\n  function launchFundingCyclesFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string memory _memo\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\\n    returns (uint256 configuration)\\n  {\\n    // If there is a previous configuration, reconfigureFundingCyclesOf should be called instead\\n    if (fundingCycleStore.latestConfigurationOf(_projectId) > 0)\\n      revert FUNDING_CYCLE_ALREADY_LAUNCHED();\\n\\n    // Set this contract as the project\'s controller in the directory.\\n    directory.setControllerOf(_projectId, address(this));\\n\\n    // Configure the first funding cycle.\\n    configuration = _configure(\\n      _projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    // Add the provided terminals to the list of terminals.\\n    if (_terminals.length > 0) directory.setTerminalsOf(_projectId, _terminals);\\n\\n    emit LaunchFundingCycles(configuration, _projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle\'s ballot.\\n\\n    @dev\\n    Only a project\'s owner or a designated operator can configure its funding cycles.\\n\\n    @param _projectId The ID of the project whose funding cycles are being reconfigured.\\n    @param _data Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return configuration The configuration of the funding cycle that was successfully reconfigured.\\n  */\\n  function reconfigureFundingCyclesOf(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] calldata _groupedSplits,\\n    JBFundAccessConstraints[] calldata _fundAccessConstraints,\\n    string calldata _memo\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\\n    returns (uint256 configuration)\\n  {\\n    // Configure the next funding cycle.\\n    configuration = _configure(\\n      _projectId,\\n      _data,\\n      _metadata,\\n      _mustStartAtOrAfter,\\n      _groupedSplits,\\n      _fundAccessConstraints\\n    );\\n\\n    emit ReconfigureFundingCycles(configuration, _projectId, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Issues an owner\'s ERC20 JBTokens that\'ll be used when claiming tokens.\\n\\n    @dev\\n    Deploys a project\'s ERC20 JBToken contract.\\n\\n    @dev\\n    Only a project\'s owner or operator can issue its token.\\n\\n    @param _projectId The ID of the project being issued tokens.\\n    @param _name The ERC20\'s name.\\n    @param _symbol The ERC20\'s symbol.\\n  */\\n  function issueTokenFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.ISSUE)\\n    returns (IJBToken token)\\n  {\\n    // Issue the token in the store.\\n    return tokenStore.issueFor(_projectId, _name, _symbol);\\n  }\\n\\n  /**\\n    @notice\\n    Swap the current project\'s token that is minted and burned for another, and transfer ownership of the current token to another address if needed.\\n\\n    @dev\\n    Only a project\'s owner or operator can change its token.\\n\\n    @param _projectId The ID of the project to which the changed token belongs.\\n    @param _token The new token.\\n    @param _newOwner An address to transfer the current token\'s ownership to. This is optional, but it cannot be done later.\\n  */\\n  function changeTokenOf(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.CHANGE_TOKEN)\\n  {\\n    // Get a reference to the project\'s current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // The current funding cycle must not be paused.\\n    if (!_fundingCycle.changeTokenAllowed()) revert CHANGE_TOKEN_NOT_ALLOWED();\\n\\n    // Change the token in the store.\\n    tokenStore.changeFor(_projectId, _token, _newOwner);\\n  }\\n\\n  /**\\n    @notice\\n    Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project\'s current funding cycle configuration.\\n\\n    @dev\\n    Only a project\'s owner, a designated operator, one of its terminals, or the current data source can mint its tokens.\\n\\n    @param _projectId The ID of the project to which the tokens being minted belong.\\n    @param _tokenCount The amount of tokens to mint in total, counting however many should be reserved.\\n    @param _beneficiary The account that the tokens are being minted for.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _preferClaimedTokens A flag indicating whether a project\'s attached token contract should be minted if they have been issued.\\n    @param _useReservedRate Whether to use the current funding cycle\'s reserved rate in the mint calculation.\\n\\n    @return beneficiaryTokenCount The amount of tokens minted for the beneficiary.\\n  */\\n  function mintTokensOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address _beneficiary,\\n    string calldata _memo,\\n    bool _preferClaimedTokens,\\n    bool _useReservedRate\\n  ) external virtual override returns (uint256 beneficiaryTokenCount) {\\n    // There should be tokens to mint.\\n    if (_tokenCount == 0) revert ZERO_TOKENS_TO_MINT();\\n\\n    // Define variables that will be needed outside scoped section below.\\n    // Keep a reference to the reserved rate to use\\n    uint256 _reservedRate;\\n\\n    // Scoped section prevents stack too deep. `_fundingCycle` only used within scope.\\n    {\\n      // Get a reference to the project\'s current funding cycle.\\n      JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n      // Minting limited to: project owner, authorized callers, project terminal and current funding cycle data source\\n      _requirePermissionAllowingOverride(\\n        projects.ownerOf(_projectId),\\n        _projectId,\\n        JBOperations.MINT,\\n        directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender)) ||\\n          msg.sender == address(_fundingCycle.dataSource())\\n      );\\n\\n      // If the message sender is not a terminal or a datasource, the current funding cycle must allow minting.\\n      if (\\n        !_fundingCycle.mintingAllowed() &&\\n        !directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender)) &&\\n        msg.sender != address(_fundingCycle.dataSource())\\n      ) revert MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE();\\n\\n      // Determine the reserved rate to use.\\n      _reservedRate = _useReservedRate ? _fundingCycle.reservedRate() : 0;\\n    }\\n\\n    if (_reservedRate == JBConstants.MAX_RESERVED_RATE)\\n      // Subtract the total weighted amount from the tracker so the full reserved token amount can be printed later.\\n      _processedTokenTrackerOf[_projectId] =\\n        _processedTokenTrackerOf[_projectId] -\\n        int256(_tokenCount);\\n    else {\\n      // The unreserved token count that will be minted for the beneficiary.\\n      beneficiaryTokenCount = PRBMath.mulDiv(\\n        _tokenCount,\\n        JBConstants.MAX_RESERVED_RATE - _reservedRate,\\n        JBConstants.MAX_RESERVED_RATE\\n      );\\n\\n      if (_reservedRate == 0)\\n        // If there\'s no reserved rate, increment the tracker with the newly minted tokens.\\n        _processedTokenTrackerOf[_projectId] =\\n          _processedTokenTrackerOf[_projectId] +\\n          int256(beneficiaryTokenCount);\\n\\n      // Mint the tokens.\\n      tokenStore.mintFor(_beneficiary, _projectId, beneficiaryTokenCount, _preferClaimedTokens);\\n    }\\n\\n    emit MintTokens(\\n      _beneficiary,\\n      _projectId,\\n      _tokenCount,\\n      beneficiaryTokenCount,\\n      _memo,\\n      _reservedRate,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Burns a token holder\'s supply.\\n\\n    @dev\\n    Only a token\'s holder, a designated operator, or a project\'s terminal can burn it.\\n\\n    @param _holder The account that is having its tokens burned.\\n    @param _projectId The ID of the project to which the tokens being burned belong.\\n    @param _tokenCount The number of tokens to burn.\\n    @param _memo A memo to pass along to the emitted event.\\n    @param _preferClaimedTokens A flag indicating whether a project\'s attached token contract should be burned first if they have been issued.\\n  */\\n  function burnTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bool _preferClaimedTokens\\n  )\\n    external\\n    virtual\\n    override\\n    requirePermissionAllowingOverride(\\n      _holder,\\n      _projectId,\\n      JBOperations.BURN,\\n      directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n    )\\n  {\\n    // There should be tokens to burn\\n    if (_tokenCount == 0) revert NO_BURNABLE_TOKENS();\\n\\n    // Get a reference to the project\'s current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // If the message sender is not a terminal, the current funding cycle must not be paused.\\n    if (\\n      _fundingCycle.burnPaused() &&\\n      !directory.isTerminalOf(_projectId, IJBPaymentTerminal(msg.sender))\\n    ) revert BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE();\\n\\n    // Update the token tracker so that reserved tokens will still be correctly mintable.\\n    _processedTokenTrackerOf[_projectId] =\\n      _processedTokenTrackerOf[_projectId] -\\n      int256(_tokenCount);\\n\\n    // Burn the tokens.\\n    tokenStore.burnFrom(_holder, _projectId, _tokenCount, _preferClaimedTokens);\\n\\n    emit BurnTokens(_holder, _projectId, _tokenCount, _memo, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Distributes all outstanding reserved tokens for a project.\\n\\n    @param _projectId The ID of the project to which the reserved tokens belong.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return The amount of minted reserved tokens.\\n  */\\n  function distributeReservedTokensOf(uint256 _projectId, string calldata _memo)\\n    external\\n    virtual\\n    override\\n    returns (uint256)\\n  {\\n    return _distributeReservedTokensOf(_projectId, _memo);\\n  }\\n\\n  /**\\n    @notice\\n    Allows other controllers to signal to this one that a migration is expected for the specified project.\\n\\n    @dev\\n    This controller should not yet be the project\'s controller.\\n\\n    @param _projectId The ID of the project that will be migrated to this controller.\\n    @param _from The controller being migrated from.\\n  */\\n  function prepForMigrationOf(uint256 _projectId, address _from) external virtual override {\\n    // This controller must not be the project\'s current controller.\\n    if (directory.controllerOf(_projectId) == address(this))\\n      revert CANT_MIGRATE_TO_CURRENT_CONTROLLER();\\n\\n    // Set the tracker as the total supply.\\n    _processedTokenTrackerOf[_projectId] = int256(tokenStore.totalSupplyOf(_projectId));\\n\\n    emit PrepMigration(_projectId, _from, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Allows a project to migrate from this controller to another.\\n\\n    @dev\\n    Only a project\'s owner or a designated operator can migrate it.\\n\\n    @param _projectId The ID of the project that will be migrated from this controller.\\n    @param _to The controller to which the project is migrating.\\n  */\\n  function migrate(uint256 _projectId, IJBMigratable _to)\\n    external\\n    virtual\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.MIGRATE_CONTROLLER)\\n  {\\n    // This controller must be the project\'s current controller.\\n    if (directory.controllerOf(_projectId) != address(this)) revert NOT_CURRENT_CONTROLLER();\\n\\n    // Get a reference to the project\'s current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Migration must be allowed.\\n    if (!_fundingCycle.controllerMigrationAllowed()) revert MIGRATION_NOT_ALLOWED();\\n\\n    // All reserved tokens must be minted before migrating.\\n    if (uint256(_processedTokenTrackerOf[_projectId]) != tokenStore.totalSupplyOf(_projectId))\\n      _distributeReservedTokensOf(_projectId, \'\');\\n\\n    // Make sure the new controller is prepped for the migration.\\n    _to.prepForMigrationOf(_projectId, address(this));\\n\\n    // Set the new controller.\\n    directory.setControllerOf(_projectId, address(_to));\\n\\n    emit Migrate(_projectId, _to, msg.sender);\\n  }\\n\\n  //*********************************************************************//\\n  // ------------------------ internal functions ----------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Distributes all outstanding reserved tokens for a project.\\n\\n    @param _projectId The ID of the project to which the reserved tokens belong.\\n    @param _memo A memo to pass along to the emitted event.\\n\\n    @return tokenCount The amount of minted reserved tokens.\\n  */\\n  function _distributeReservedTokensOf(uint256 _projectId, string memory _memo)\\n    internal\\n    returns (uint256 tokenCount)\\n  {\\n    // Get the current funding cycle to read the reserved rate from.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Get a reference to new total supply of tokens before minting reserved tokens.\\n    uint256 _totalTokens = tokenStore.totalSupplyOf(_projectId);\\n\\n    // Get a reference to the number of tokens that need to be minted.\\n    tokenCount = _reservedTokenAmountFrom(\\n      _processedTokenTrackerOf[_projectId],\\n      _fundingCycle.reservedRate(),\\n      _totalTokens\\n    );\\n\\n    // Set the tracker to be the new total supply.\\n    _processedTokenTrackerOf[_projectId] = int256(_totalTokens + tokenCount);\\n\\n    // Get a reference to the project owner.\\n    address _owner = projects.ownerOf(_projectId);\\n\\n    // Distribute tokens to splits and get a reference to the leftover amount to mint after all splits have gotten their share.\\n    uint256 _leftoverTokenCount = tokenCount == 0\\n      ? 0\\n      : _distributeToReservedTokenSplitsOf(\\n        _projectId,\\n        _fundingCycle.configuration,\\n        JBSplitsGroups.RESERVED_TOKENS,\\n        tokenCount\\n      );\\n\\n    // Mint any leftover tokens to the project owner.\\n    if (_leftoverTokenCount > 0) tokenStore.mintFor(_owner, _projectId, _leftoverTokenCount, false);\\n\\n    emit DistributeReservedTokens(\\n      _fundingCycle.configuration,\\n      _fundingCycle.number,\\n      _projectId,\\n      _owner,\\n      tokenCount,\\n      _leftoverTokenCount,\\n      _memo,\\n      msg.sender\\n    );\\n  }\\n\\n  /**\\n    @notice\\n    Distribute tokens to the splits according to the specified funding cycle configuration.\\n\\n    @param _projectId The ID of the project for which reserved token splits are being distributed.\\n    @param _domain The domain of the splits to distribute the reserved tokens between.\\n    @param _group The group of the splits to distribute the reserved tokens between.\\n    @param _amount The total amount of tokens to mint.\\n\\n    @return leftoverAmount If the splits percents dont add up to 100%, the leftover amount is returned.\\n  */\\n  function _distributeToReservedTokenSplitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group,\\n    uint256 _amount\\n  ) internal returns (uint256 leftoverAmount) {\\n    // Set the leftover amount to the initial amount.\\n    leftoverAmount = _amount;\\n\\n    // Get a reference to the project\'s reserved token splits.\\n    JBSplit[] memory _splits = splitsStore.splitsOf(_projectId, _domain, _group);\\n\\n    //Transfer between all splits.\\n    for (uint256 _i = 0; _i < _splits.length; _i++) {\\n      // Get a reference to the split being iterated on.\\n      JBSplit memory _split = _splits[_i];\\n\\n      // The amount to send towards the split.\\n      uint256 _tokenCount = PRBMath.mulDiv(\\n        _amount,\\n        _split.percent,\\n        JBConstants.SPLITS_TOTAL_PERCENT\\n      );\\n\\n      // Mints tokens for the split if needed.\\n      if (_tokenCount > 0) {\\n        tokenStore.mintFor(\\n          // If an allocator is set in the splits, set it as the beneficiary.\\n          // Otherwise if a projectId is set in the split, set the project\'s owner as the beneficiary.\\n          // If the split has a beneficiary send to the split\'s beneficiary. Otherwise send to the msg.sender.\\n          _split.allocator != IJBSplitAllocator(address(0))\\n            ? address(_split.allocator)\\n            : _split.projectId != 0\\n            ? projects.ownerOf(_split.projectId)\\n            : _split.beneficiary != address(0)\\n            ? _split.beneficiary\\n            : msg.sender,\\n          _projectId,\\n          _tokenCount,\\n          _split.preferClaimed\\n        );\\n\\n        // If there\'s an allocator set, trigger its `allocate` function.\\n        if (_split.allocator != IJBSplitAllocator(address(0)))\\n          _split.allocator.allocate(\\n            JBSplitAllocationData(\\n              address(tokenStore.tokenOf(_projectId)),\\n              _tokenCount,\\n              18,\\n              _projectId,\\n              _group,\\n              _split\\n            )\\n          );\\n\\n        // Subtract from the amount to be sent to the beneficiary.\\n        leftoverAmount = leftoverAmount - _tokenCount;\\n      }\\n\\n      emit DistributeToReservedTokenSplit(\\n        _projectId,\\n        _domain,\\n        _group,\\n        _split,\\n        _tokenCount,\\n        msg.sender\\n      );\\n    }\\n  }\\n\\n  /**\\n    @notice\\n    Configures a funding cycle and stores information pertinent to the configuration.\\n\\n    @param _projectId The ID of the project whose funding cycles are being reconfigured.\\n    @param _data Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\\n    @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\\n    @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\\n    @param _groupedSplits An array of splits to set for any number of groups. \\n    @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal.\\n\\n    @return configuration The configuration of the funding cycle that was successfully reconfigured.\\n  */\\n  function _configure(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints\\n  ) internal returns (uint256) {\\n    // Make sure the provided reserved rate is valid.\\n    if (_metadata.reservedRate > JBConstants.MAX_RESERVED_RATE) revert INVALID_RESERVED_RATE();\\n\\n    // Make sure the provided redemption rate is valid.\\n    if (_metadata.redemptionRate > JBConstants.MAX_REDEMPTION_RATE)\\n      revert INVALID_REDEMPTION_RATE();\\n\\n    // Make sure the provided ballot redemption rate is valid.\\n    if (_metadata.ballotRedemptionRate > JBConstants.MAX_REDEMPTION_RATE)\\n      revert INVALID_BALLOT_REDEMPTION_RATE();\\n\\n    // Configure the funding cycle\'s properties.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.configureFor(\\n      _projectId,\\n      _data,\\n      JBFundingCycleMetadataResolver.packFundingCycleMetadata(_metadata),\\n      _mustStartAtOrAfter\\n    );\\n\\n    // Set splits for the group.\\n    splitsStore.set(_projectId, _fundingCycle.configuration, _groupedSplits);\\n\\n    // Set distribution limits if there are any.\\n    for (uint256 _i; _i < _fundAccessConstraints.length; _i++) {\\n      JBFundAccessConstraints memory _constraints = _fundAccessConstraints[_i];\\n\\n      // If distribution limit value is larger than 232 bits, revert.\\n      if (_constraints.distributionLimit > type(uint232).max) revert INVALID_DISTRIBUTION_LIMIT();\\n\\n      // If distribution limit currency value is larger than 24 bits, revert.\\n      if (_constraints.distributionLimitCurrency > type(uint24).max)\\n        revert INVALID_DISTRIBUTION_LIMIT_CURRENCY();\\n\\n      // If overflow allowance value is larger than 232 bits, revert.\\n      if (_constraints.overflowAllowance > type(uint232).max) revert INVALID_OVERFLOW_ALLOWANCE();\\n\\n      // If overflow allowance currency value is larger than 24 bits, revert.\\n      if (_constraints.overflowAllowanceCurrency > type(uint24).max)\\n        revert INVALID_OVERFLOW_ALLOWANCE_CURRENCY();\\n\\n      // Set the distribution limit if there is one.\\n      if (_constraints.distributionLimit > 0)\\n        _packedDistributionLimitDataOf[_projectId][_fundingCycle.configuration][\\n          _constraints.terminal\\n        ][_constraints.token] =\\n          _constraints.distributionLimit |\\n          (_constraints.distributionLimitCurrency << 232);\\n\\n      // Set the overflow allowance if there is one.\\n      if (_constraints.overflowAllowance > 0)\\n        _packedOverflowAllowanceDataOf[_projectId][_fundingCycle.configuration][\\n          _constraints.terminal\\n        ][_constraints.token] =\\n          _constraints.overflowAllowance |\\n          (_constraints.overflowAllowanceCurrency << 232);\\n\\n      emit SetFundAccessConstraints(\\n        _fundingCycle.configuration,\\n        _fundingCycle.number,\\n        _projectId,\\n        _constraints,\\n        msg.sender\\n      );\\n    }\\n\\n    return _fundingCycle.configuration;\\n  }\\n\\n  /**\\n    @notice\\n    Gets the amount of reserved tokens currently tracked for a project given a reserved rate.\\n\\n    @param _processedTokenTracker The tracker to make the calculation with.\\n    @param _reservedRate The reserved rate to use to make the calculation.\\n    @param _totalEligibleTokens The total amount to make the calculation with.\\n\\n    @return amount reserved token amount.\\n  */\\n  function _reservedTokenAmountFrom(\\n    int256 _processedTokenTracker,\\n    uint256 _reservedRate,\\n    uint256 _totalEligibleTokens\\n  ) internal pure returns (uint256) {\\n    // Get a reference to the amount of tokens that are unprocessed.\\n    uint256 _unprocessedTokenBalanceOf = _processedTokenTracker >= 0\\n      ? _totalEligibleTokens - uint256(_processedTokenTracker)\\n      : _totalEligibleTokens + uint256(-_processedTokenTracker);\\n\\n    // If there are no unprocessed tokens, return.\\n    if (_unprocessedTokenBalanceOf == 0) return 0;\\n\\n    // If all tokens are reserved, return the full unprocessed amount.\\n    if (_reservedRate == JBConstants.MAX_RESERVED_RATE) return _unprocessedTokenBalanceOf;\\n\\n    return\\n      PRBMath.mulDiv(\\n        _unprocessedTokenBalanceOf,\\n        JBConstants.MAX_RESERVED_RATE,\\n        JBConstants.MAX_RESERVED_RATE - _reservedRate\\n      ) - _unprocessedTokenBalanceOf;\\n  }\\n}\\n","keccak256":"0x8ccd68f5eca8d8411d227fc076935269bcd66f2f10ff7c77a8ae85ef268f07be","license":"MIT"},"contracts/abstract/JBOperatable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBOperatable.sol\';\\n\\n/** \\n  @notice\\n  Modifiers to allow access to functions based on the message sender\'s operator status.\\n\\n  @dev\\n  Adheres to -\\n  IJBOperatable: General interface for the methods in this contract that interact with the blockchain\'s state according to the protocol\'s rules.\\n*/\\nabstract contract JBOperatable is IJBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the speficied account or an operator of the account to proceed. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n  */\\n  modifier requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) {\\n    _requirePermission(_account, _domain, _permissionIndex);\\n    _;\\n  }\\n\\n  /** \\n    @notice\\n    Only allows the speficied account, an operator of the account to proceed, or a truthy override flag. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n    @param _override A condition to force allowance for.\\n  */\\n  modifier requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) {\\n    _requirePermissionAllowingOverride(_account, _domain, _permissionIndex, _override);\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A contract storing operator assignments.\\n  */\\n  IJBOperatorStore public immutable override operatorStore;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n  */\\n  constructor(IJBOperatorStore _operatorStore) {\\n    operatorStore = _operatorStore;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- internal views ------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account or has the specified permission.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\\n  */\\n  function _requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) internal view {\\n    if (\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account, has the specified permission, or the override condition is true.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _domain The permission index that an operator must have within the specified domain to be allowed.\\n    @param _override The override condition to allow.\\n  */\\n  function _requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) internal view {\\n    if (\\n      !_override &&\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n}\\n","keccak256":"0x9a5781d40c6b8013249653253369cda2047aa35329a1fcd4dc6353cd2dde30a6","license":"MIT"},"contracts/enums/JBBallotState.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n","keccak256":"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461","license":"MIT"},"contracts/interfaces/IJBController.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBFundAccessConstraints.sol\';\\nimport \'./../structs/JBFundingCycleData.sol\';\\nimport \'./../structs/JBFundingCycleMetadata.sol\';\\nimport \'./../structs/JBGroupedSplits.sol\';\\nimport \'./../structs/JBProjectMetadata.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBMigratable.sol\';\\nimport \'./IJBPaymentTerminal.sol\';\\nimport \'./IJBSplitsStore.sol\';\\nimport \'./IJBToken.sol\';\\nimport \'./IJBTokenStore.sol\';\\n\\ninterface IJBController is IERC165 {\\n  event LaunchProject(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event LaunchFundingCycles(uint256 configuration, uint256 projectId, string memo, address caller);\\n\\n  event ReconfigureFundingCycles(\\n    uint256 configuration,\\n    uint256 projectId,\\n    string memo,\\n    address caller\\n  );\\n\\n  event SetFundAccessConstraints(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    JBFundAccessConstraints constraints,\\n    address caller\\n  );\\n\\n  event DistributeReservedTokens(\\n    uint256 indexed fundingCycleConfiguration,\\n    uint256 indexed fundingCycleNumber,\\n    uint256 indexed projectId,\\n    address beneficiary,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event DistributeToReservedTokenSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    uint256 tokenCount,\\n    address caller\\n  );\\n\\n  event MintTokens(\\n    address indexed beneficiary,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    uint256 beneficiaryTokenCount,\\n    string memo,\\n    uint256 reservedRate,\\n    address caller\\n  );\\n\\n  event BurnTokens(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 tokenCount,\\n    string memo,\\n    address caller\\n  );\\n\\n  event Migrate(uint256 indexed projectId, IJBMigratable to, address caller);\\n\\n  event PrepMigration(uint256 indexed projectId, address from, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function tokenStore() external view returns (IJBTokenStore);\\n\\n  function splitsStore() external view returns (IJBSplitsStore);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function reservedTokenBalanceOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function distributionLimitOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 distributionLimit, uint256 distributionLimitCurrency);\\n\\n  function overflowAllowanceOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    IJBPaymentTerminal _terminal,\\n    address _token\\n  ) external view returns (uint256 overflowAllowance, uint256 overflowAllowanceCurrency);\\n\\n  function totalOutstandingTokensOf(uint256 _projectId, uint256 _reservedRate)\\n    external\\n    view\\n    returns (uint256);\\n\\n  function getFundingCycleOf(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function latestConfiguredFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (\\n      JBFundingCycle memory,\\n      JBFundingCycleMetadata memory metadata,\\n      JBBallotState\\n    );\\n\\n  function currentFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function queuedFundingCycleOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBFundingCycleMetadata memory metadata);\\n\\n  function launchProjectFor(\\n    address _owner,\\n    JBProjectMetadata calldata _projectMetadata,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 projectId);\\n\\n  function launchFundingCyclesFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    IJBPaymentTerminal[] memory _terminals,\\n    string calldata _memo\\n  ) external returns (uint256 configuration);\\n\\n  function reconfigureFundingCyclesOf(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    JBFundingCycleMetadata calldata _metadata,\\n    uint256 _mustStartAtOrAfter,\\n    JBGroupedSplits[] memory _groupedSplits,\\n    JBFundAccessConstraints[] memory _fundAccessConstraints,\\n    string calldata _memo\\n  ) external returns (uint256);\\n\\n  function issueTokenFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeTokenOf(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external;\\n\\n  function mintTokensOf(\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    address _beneficiary,\\n    string calldata _memo,\\n    bool _preferClaimedTokens,\\n    bool _useReservedRate\\n  ) external returns (uint256 beneficiaryTokenCount);\\n\\n  function burnTokensOf(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _tokenCount,\\n    string calldata _memo,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function distributeReservedTokensOf(uint256 _projectId, string memory _memo)\\n    external\\n    returns (uint256);\\n\\n  function migrate(uint256 _projectId, IJBMigratable _to) external;\\n}\\n","keccak256":"0xa313569eaff79f9443e12878b2efbb4160d50682c0f9e7304c42ecd600c42d96","license":"MIT"},"contracts/interfaces/IJBDirectory.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBPaymentTerminal.sol\';\\nimport \'./IJBProjects.sol\';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n","keccak256":"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167","license":"MIT"},"contracts/interfaces/IJBFundingCycleBallot.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../enums/JBBallotState.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n","keccak256":"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5","license":"MIT"},"contracts/interfaces/IJBFundingCycleDataSource.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBPayParamsData.sol\';\\nimport \'./../structs/JBRedeemParamsData.sol\';\\nimport \'./IJBFundingCycleStore.sol\';\\nimport \'./IJBPayDelegate.sol\';\\nimport \'./IJBRedemptionDelegate.sol\';\\n\\ninterface IJBFundingCycleDataSource is IERC165 {\\n  function payParams(JBPayParamsData calldata _data)\\n    external\\n    returns (\\n      uint256 weight,\\n      string memory memo,\\n      IJBPayDelegate delegate\\n    );\\n\\n  function redeemParams(JBRedeemParamsData calldata _data)\\n    external\\n    returns (\\n      uint256 reclaimAmount,\\n      string memory memo,\\n      IJBRedemptionDelegate delegate\\n    );\\n}\\n","keccak256":"0x8fe4fdc2cd71cd0b7202bddb7078f16c8eea746c8481ee9b3b06a0e01e8e7d6b","license":"MIT"},"contracts/interfaces/IJBFundingCycleStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../enums/JBBallotState.sol\';\\nimport \'./../structs/JBFundingCycle.sol\';\\nimport \'./../structs/JBFundingCycleData.sol\';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n","keccak256":"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20","license":"MIT"},"contracts/interfaces/IJBMigratable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBMigratable {\\n  function prepForMigrationOf(uint256 _projectId, address _from) external;\\n}\\n","keccak256":"0xd24d7f91e5276f36811695e1e45283947cbd6e5cff912384e5f3e55ef4acadf3","license":"MIT"},"contracts/interfaces/IJBOperatable.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBOperatorStore.sol\';\\n\\ninterface IJBOperatable {\\n  function operatorStore() external view returns (IJBOperatorStore);\\n}\\n","keccak256":"0x150097e253a667d2336367445bea019bb3669ef7c82d358befe1f4cdd480e9aa","license":"MIT"},"contracts/interfaces/IJBOperatorStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../structs/JBOperatorData.sol\';\\n\\ninterface IJBOperatorStore {\\n  event SetOperator(\\n    address indexed operator,\\n    address indexed account,\\n    uint256 indexed domain,\\n    uint256[] permissionIndexes,\\n    uint256 packed\\n  );\\n\\n  function permissionsOf(\\n    address _operator,\\n    address _account,\\n    uint256 _domain\\n  ) external view returns (uint256);\\n\\n  function hasPermission(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) external view returns (bool);\\n\\n  function hasPermissions(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256[] calldata _permissionIndexes\\n  ) external view returns (bool);\\n\\n  function setOperator(JBOperatorData calldata _operatorData) external;\\n\\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\\n}\\n","keccak256":"0x50a26fddc575a50176df7deb9225ec1816b0158c9e9b8555e7921a3261254ed8","license":"MIT"},"contracts/interfaces/IJBPayDelegate.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBDidPayData.sol\';\\n\\ninterface IJBPayDelegate is IERC165 {\\n  function didPay(JBDidPayData calldata _data) external;\\n}\\n","keccak256":"0xf7a9ef2df665e1c85a461fadb3cd54f6270c181eac96064005bde19e54d0ffa9","license":"MIT"},"contracts/interfaces/IJBPaymentTerminal.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token, uint256 _projectId) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n","keccak256":"0xf50279115f05568c12c254eb2c078b81a0c761f8cc985220e30ec15679118caa","license":"MIT"},"contracts/interfaces/IJBProjects.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/token/ERC721/IERC721.sol\';\\nimport \'./../structs/JBProjectMetadata.sol\';\\nimport \'./IJBTokenUriResolver.sol\';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n","keccak256":"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d","license":"MIT"},"contracts/interfaces/IJBRedemptionDelegate.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'./../structs/JBDidRedeemData.sol\';\\n\\ninterface IJBRedemptionDelegate is IERC165 {\\n  function didRedeem(JBDidRedeemData calldata _data) external;\\n}\\n","keccak256":"0xfc91761a568e60e1a1429ac11b0d1b57c627ef59f4011b17df4f9f540b7dd60d","license":"MIT"},"contracts/interfaces/IJBSplitAllocator.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'@openzeppelin/contracts/utils/introspection/IERC165.sol\';\\nimport \'../structs/JBSplitAllocationData.sol\';\\n\\ninterface IJBSplitAllocator is IERC165 {\\n  function allocate(JBSplitAllocationData calldata _data) external payable;\\n}\\n","keccak256":"0x717575a0a4a20f8598f44d22a3fd3e282f34f4b33543a0d4b36ba3b59ed8cd04","license":"MIT"},"contracts/interfaces/IJBSplitsStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../structs/JBGroupedSplits.sol\';\\nimport \'./../structs/JBSplit.sol\';\\nimport \'./IJBDirectory.sol\';\\nimport \'./IJBProjects.sol\';\\n\\ninterface IJBSplitsStore {\\n  event SetSplit(\\n    uint256 indexed projectId,\\n    uint256 indexed domain,\\n    uint256 indexed group,\\n    JBSplit split,\\n    address caller\\n  );\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function directory() external view returns (IJBDirectory);\\n\\n  function splitsOf(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    uint256 _group\\n  ) external view returns (JBSplit[] memory);\\n\\n  function set(\\n    uint256 _projectId,\\n    uint256 _domain,\\n    JBGroupedSplits[] memory _groupedSplits\\n  ) external;\\n}\\n","keccak256":"0xcf54f37b37683f42e137d614abf2cec79b62e15fb7ce3e2409ddeb2bd91c1749","license":"MIT"},"contracts/interfaces/IJBToken.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBToken {\\n  function decimals() external view returns (uint8);\\n\\n  function totalSupply(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _account, uint256 _projectId) external view returns (uint256);\\n\\n  function mint(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function burn(\\n    uint256 _projectId,\\n    address _account,\\n    uint256 _amount\\n  ) external;\\n\\n  function approve(\\n    uint256,\\n    address _spender,\\n    uint256 _amount\\n  ) external;\\n\\n  function transfer(\\n    uint256 _projectId,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    uint256 _projectId,\\n    address _from,\\n    address _to,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferOwnership(uint256 _projectId, address _newOwner) external;\\n}\\n","keccak256":"0xf5ec0861b067a5e58f2bcca44892ea8d4a42ab8a7c95bd4d3bbddad33c8727f5","license":"MIT"},"contracts/interfaces/IJBTokenStore.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./IJBProjects.sol\';\\nimport \'./IJBToken.sol\';\\n\\ninterface IJBTokenStore {\\n  event Issue(\\n    uint256 indexed projectId,\\n    IJBToken indexed token,\\n    string name,\\n    string symbol,\\n    address caller\\n  );\\n\\n  event Mint(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    bool tokensWereClaimed,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Burn(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 amount,\\n    uint256 initialUnclaimedBalance,\\n    uint256 initialClaimedBalance,\\n    bool preferClaimedTokens,\\n    address caller\\n  );\\n\\n  event Claim(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    uint256 initialUnclaimedBalance,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  event ShouldRequireClaim(uint256 indexed projectId, bool indexed flag, address caller);\\n\\n  event Change(\\n    uint256 indexed projectId,\\n    IJBToken indexed newToken,\\n    IJBToken indexed oldToken,\\n    address owner,\\n    address caller\\n  );\\n\\n  event Transfer(\\n    address indexed holder,\\n    uint256 indexed projectId,\\n    address indexed recipient,\\n    uint256 amount,\\n    address caller\\n  );\\n\\n  function tokenOf(uint256 _projectId) external view returns (IJBToken);\\n\\n  function projectOf(IJBToken _token) external view returns (uint256);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function unclaimedBalanceOf(address _holder, uint256 _projectId) external view returns (uint256);\\n\\n  function unclaimedTotalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function totalSupplyOf(uint256 _projectId) external view returns (uint256);\\n\\n  function balanceOf(address _holder, uint256 _projectId) external view returns (uint256 _result);\\n\\n  function requireClaimFor(uint256 _projectId) external view returns (bool);\\n\\n  function issueFor(\\n    uint256 _projectId,\\n    string calldata _name,\\n    string calldata _symbol\\n  ) external returns (IJBToken token);\\n\\n  function changeFor(\\n    uint256 _projectId,\\n    IJBToken _token,\\n    address _newOwner\\n  ) external returns (IJBToken oldToken);\\n\\n  function burnFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function mintFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount,\\n    bool _preferClaimedTokens\\n  ) external;\\n\\n  function shouldRequireClaimingFor(uint256 _projectId, bool _flag) external;\\n\\n  function claimFor(\\n    address _holder,\\n    uint256 _projectId,\\n    uint256 _amount\\n  ) external;\\n\\n  function transferFrom(\\n    address _holder,\\n    uint256 _projectId,\\n    address _recipient,\\n    uint256 _amount\\n  ) external;\\n}\\n","keccak256":"0x2b7a6cdb457e710161079a46683e9804d66d4cc7d18be8f64de25ba7bfadf9ef","license":"MIT"},"contracts/interfaces/IJBTokenUriResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n","keccak256":"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475","license":"MIT"},"contracts/libraries/JBConstants.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n","keccak256":"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f","license":"MIT"},"contracts/libraries/JBFundingCycleMetadataResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\nimport \'./../structs/JBFundingCycleMetadata.sol\';\\nimport \'./../structs/JBGlobalFundingCycleMetadata.sol\';\\nimport \'./JBConstants.sol\';\\nimport \'./JBGlobalFundingCycleMetadataResolver.sol\';\\n\\nlibrary JBFundingCycleMetadataResolver {\\n  function global(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (JBGlobalFundingCycleMetadata memory metadata)\\n  {\\n    return JBGlobalFundingCycleMetadataResolver.expandMetadata(uint8(_fundingCycle.metadata >> 8));\\n  }\\n\\n  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    return uint256(uint16(_fundingCycle.metadata >> 24));\\n  }\\n\\n  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    // Redemption rate is a number 0-10000. It\'s inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));\\n  }\\n\\n  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (uint256)\\n  {\\n    // Redemption rate is a number 0-10000. It\'s inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 56));\\n  }\\n\\n  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 72) & 1) == 1;\\n  }\\n\\n  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 73) & 1) == 1;\\n  }\\n\\n  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 74) & 1) == 1;\\n  }\\n\\n  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 75) & 1) == 1;\\n  }\\n\\n  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 76) & 1) == 1;\\n  }\\n\\n  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 77) & 1) == 1;\\n  }\\n\\n  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 78) & 1) == 1;\\n  }\\n\\n  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 79) & 1) == 1;\\n  }\\n\\n  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 80) & 1) == 1;\\n  }\\n\\n  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 81) & 1) == 1;\\n  }\\n\\n  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return (_fundingCycle.metadata >> 82) & 1 == 1;\\n  }\\n\\n  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return (_fundingCycle.metadata >> 83) & 1 == 1;\\n  }\\n\\n  function dataSource(JBFundingCycle memory _fundingCycle) internal pure returns (address) {\\n    return address(uint160(_fundingCycle.metadata >> 84));\\n  }\\n\\n  /**\\n    @notice\\n    Pack the funding cycle metadata.\\n\\n    @param _metadata The metadata to validate and pack.\\n\\n    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.\\n  */\\n  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)\\n    internal\\n    pure\\n    returns (uint256 packed)\\n  {\\n    // version 1 in the bits 0-7 (8 bits).\\n    packed = 1;\\n    // global metadta in bits 8-23 (16 bits).\\n    packed |=\\n      JBGlobalFundingCycleMetadataResolver.packFundingCycleGlobalMetadata(_metadata.global) <<\\n      8;\\n    // reserved rate in bits 24-39 (16 bits).\\n    packed |= _metadata.reservedRate << 24;\\n    // redemption rate in bits 40-55 (16 bits).\\n    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 40;\\n    // ballot redemption rate rate in bits 56-71 (16 bits).\\n    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 56;\\n    // pause pay in bit 72.\\n    if (_metadata.pausePay) packed |= 1 << 72;\\n    // pause tap in bit 73.\\n    if (_metadata.pauseDistributions) packed |= 1 << 73;\\n    // pause redeem in bit 74.\\n    if (_metadata.pauseRedeem) packed |= 1 << 74;\\n    // pause burn in bit 75.\\n    if (_metadata.pauseBurn) packed |= 1 << 75;\\n    // allow minting in bit 76.\\n    if (_metadata.allowMinting) packed |= 1 << 76;\\n    // allow change token in bit 77.\\n    if (_metadata.allowChangeToken) packed |= 1 << 77;\\n    // allow terminal migration in bit 78.\\n    if (_metadata.allowTerminalMigration) packed |= 1 << 78;\\n    // allow controller migration in bit 79.\\n    if (_metadata.allowControllerMigration) packed |= 1 << 79;\\n    // hold fees in bit 80.\\n    if (_metadata.holdFees) packed |= 1 << 80;\\n    // useTotalOverflowForRedemptions in bit 81.\\n    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 81;\\n    // use pay data source in bit 82.\\n    if (_metadata.useDataSourceForPay) packed |= 1 << 82;\\n    // use redeem data source in bit 83.\\n    if (_metadata.useDataSourceForRedeem) packed |= 1 << 83;\\n    // data source address in bits 84-243.\\n    packed |= uint256(uint160(address(_metadata.dataSource))) << 84;\\n  }\\n\\n  /**\\n    @notice\\n    Expand the funding cycle metadata.\\n\\n    @param _fundingCycle The funding cycle having its metadata expanded.\\n\\n    @return metadata The metadata object.\\n  */\\n  function expandMetadata(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (JBFundingCycleMetadata memory metadata)\\n  {\\n    return\\n      JBFundingCycleMetadata(\\n        global(_fundingCycle),\\n        reservedRate(_fundingCycle),\\n        redemptionRate(_fundingCycle),\\n        ballotRedemptionRate(_fundingCycle),\\n        payPaused(_fundingCycle),\\n        distributionsPaused(_fundingCycle),\\n        redeemPaused(_fundingCycle),\\n        burnPaused(_fundingCycle),\\n        mintingAllowed(_fundingCycle),\\n        changeTokenAllowed(_fundingCycle),\\n        terminalMigrationAllowed(_fundingCycle),\\n        controllerMigrationAllowed(_fundingCycle),\\n        shouldHoldFees(_fundingCycle),\\n        useTotalOverflowForRedemptions(_fundingCycle),\\n        useDataSourceForPay(_fundingCycle),\\n        useDataSourceForRedeem(_fundingCycle),\\n        dataSource(_fundingCycle)\\n      );\\n  }\\n}\\n","keccak256":"0x20bb41c81635b2664337d558430e4182e678715b5929cddd28b3f32455e79feb","license":"MIT"},"contracts/libraries/JBGlobalFundingCycleMetadataResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\nimport \'./../structs/JBFundingCycleMetadata.sol\';\\nimport \'./JBConstants.sol\';\\n\\nlibrary JBGlobalFundingCycleMetadataResolver {\\n  function setTerminalsAllowed(uint8 _data) internal pure returns (bool) {\\n    return (_data & 1) == 1;\\n  }\\n\\n  function setControllerAllowed(uint8 _data) internal pure returns (bool) {\\n    return ((_data >> 1) & 1) == 1;\\n  }\\n\\n  /**\\n    @notice\\n    Pack the global funding cycle metadata.\\n\\n    @param _metadata The metadata to validate and pack.\\n\\n    @return packed The packed uint256 of all global metadata params. The first 8 bits specify the version.\\n  */\\n  function packFundingCycleGlobalMetadata(JBGlobalFundingCycleMetadata memory _metadata)\\n    internal\\n    pure\\n    returns (uint256 packed)\\n  {\\n    // allow set terminals in bit 0.\\n    if (_metadata.allowSetTerminals) packed |= 1;\\n    // allow set controller in bit 1.\\n    if (_metadata.allowSetController) packed |= 1 << 1;\\n  }\\n\\n  /**\\n    @notice\\n    Expand the global funding cycle metadata.\\n\\n    @param _packedMetadata The packed metadata to expand.\\n\\n    @return metadata The global metadata object.\\n  */\\n  function expandMetadata(uint8 _packedMetadata)\\n    internal\\n    pure\\n    returns (JBGlobalFundingCycleMetadata memory metadata)\\n  {\\n    return\\n      JBGlobalFundingCycleMetadata(\\n        setTerminalsAllowed(_packedMetadata),\\n        setControllerAllowed(_packedMetadata)\\n      );\\n  }\\n}\\n","keccak256":"0x95f1c7c968a209c9f7b76d2e508332001ebbfb308b565cd222cae4d7396cbe0b","license":"MIT"},"contracts/libraries/JBOperations.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBOperations {\\n  uint256 public constant RECONFIGURE = 1;\\n  uint256 public constant REDEEM = 2;\\n  uint256 public constant MIGRATE_CONTROLLER = 3;\\n  uint256 public constant MIGRATE_TERMINAL = 4;\\n  uint256 public constant PROCESS_FEES = 5;\\n  uint256 public constant SET_METADATA = 6;\\n  uint256 public constant ISSUE = 7;\\n  uint256 public constant CHANGE_TOKEN = 8;\\n  uint256 public constant MINT = 9;\\n  uint256 public constant BURN = 10;\\n  uint256 public constant CLAIM = 11;\\n  uint256 public constant TRANSFER = 12;\\n  uint256 public constant REQUIRE_CLAIM = 13;\\n  uint256 public constant SET_CONTROLLER = 14;\\n  uint256 public constant SET_TERMINALS = 15;\\n  uint256 public constant SET_PRIMARY_TERMINAL = 16;\\n  uint256 public constant USE_ALLOWANCE = 17;\\n  uint256 public constant SET_SPLITS = 18;\\n}\\n","keccak256":"0x828971de3d07c31e294c188335e250ee0b28919dd86f0dd570f89b97cca13932","license":"MIT"},"contracts/libraries/JBSplitsGroups.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBSplitsGroups {\\n  uint256 public constant ETH_PAYOUT = 1;\\n  uint256 public constant RESERVED_TOKENS = 2;\\n}\\n","keccak256":"0x855a78b0411f3b0a0e2d96009e0f910a971d0175d18cbcac9eab1541c8968288","license":"MIT"},"contracts/structs/JBDidPayData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member payer The address from which the payment originated.\\n  @member projectId The ID of the project for which the payment was made.\\n  @member currentFundingCycleConfiguration The configuration of the funding cycle during which the payment is being made.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectTokenCount The number of project tokens minted for the beneficiary.\\n  @member beneficiary The address to which the tokens were minted.\\n  @member preferClaimedTokens A flag indicating whether the request prefered to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract.\\n  @member memo The memo that is being emitted alongside the payment.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidPayData {\\n  address payer;\\n  uint256 projectId;\\n  uint256 currentFundingCycleConfiguration;\\n  JBTokenAmount amount;\\n  uint256 projectTokenCount;\\n  address beneficiary;\\n  bool preferClaimedTokens;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x5466643df68a7bb1f88b781b7ac74379a1428d700edb1a22cd211c1fb8af458c","license":"MIT"},"contracts/structs/JBDidRedeemData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project with which the redeemed tokens are associated.\\n  @member currentFundingCycleConfiguration The configuration of the funding cycle during which the redemption is being made.\\n  @member projectTokenCount The number of project tokens being redeemed.\\n  @member reclaimedAmount The amount reclaimed from the treasury. Includes the token being reclaimed, the value, the number of decimals included, and the currency of the amount.\\n  @member beneficiary The address to which the reclaimed amount will be sent.\\n  @member memo The memo that is being emitted alongside the redemption.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidRedeemData {\\n  address holder;\\n  uint256 projectId;\\n  uint256 currentFundingCycleConfiguration;\\n  uint256 projectTokenCount;\\n  JBTokenAmount reclaimedAmount;\\n  address payable beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x52e35ebfda7cf16c90d920c63e450663c0d2b3395554b313e742d8fe74dc187f","license":"MIT"},"contracts/structs/JBFundAccessConstraints.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\n\\n/** \\n  @member terminal The terminal within which the distribution limit and the overflow allowance applies.\\n  @member token The token for which the fund access constraints apply.\\n  @member distributionLimit The amount of the distribution limit, as a fixed point number with the same number of decimals as the terminal within which the limit applies.\\n  @member distributionLimitCurrency The currency of the distribution limit.\\n  @member overflowAllowance The amount of the allowance, as a fixed point number with the same number of decimals as the terminal within which the allowance applies.\\n  @member overflowAllowanceCurrency The currency of the overflow allowance.\\n*/\\nstruct JBFundAccessConstraints {\\n  IJBPaymentTerminal terminal;\\n  address token;\\n  uint256 distributionLimit;\\n  uint256 distributionLimitCurrency;\\n  uint256 overflowAllowance;\\n  uint256 overflowAllowanceCurrency;\\n}\\n","keccak256":"0x47e778e94bec262633c2f9fe69bebd7e76cc8bedf6b3d8ba0481acdf3619cb5f","license":"MIT"},"contracts/structs/JBFundingCycle.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleBallot.sol\';\\n\\n/** \\n  @member number The funding cycle number for the cycle\'s project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project\'s first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle\'s parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn\'t configured the subsequent funding cycle with an explicit `weight`. If it\'s 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n","keccak256":"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905","license":"MIT"},"contracts/structs/JBFundingCycleData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleBallot.sol\';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle\'s parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn\'t configured the subsequent funding cycle with an explicit `weight`. If it\'s 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n","keccak256":"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc","license":"MIT"},"contracts/structs/JBFundingCycleMetadata.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBGlobalFundingCycleMetadata.sol\';\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\n\\n/** \\n  @member global Data used globally in non-migratable ecosystem contracts.\\n  @member reservedRate The reserved rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_RESERVED_RATE`.\\n  @member redemptionRate The redemption rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member ballotRedemptionRate The redemption rate to use during an active ballot of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member pausePay A flag indicating if the pay functionality should be paused during the funding cycle.\\n  @member pauseDistributions A flag indicating if the distribute functionality should be paused during the funding cycle.\\n  @member pauseRedeem A flag indicating if the redeem functionality should be paused during the funding cycle.\\n  @member pauseBurn A flag indicating if the burn functionality should be paused during the funding cycle.\\n  @member allowMinting A flag indicating if the mint functionality should be allowed during the funding cycle.\\n  @member allowChangeToken A flag indicating if changing tokens should be allowed during this funding cycle.\\n  @member allowTerminalMigration A flag indicating if migrating terminals should be allowed during this funding cycle.\\n  @member allowControllerMigration A flag indicating if migrating controllers should be allowed during this funding cycle.\\n  @member holdFees A flag indicating if fees should be held during this funding cycle.\\n  @member useTotalOverflowForRedemptions A flag indicating if redemptions should use the project\'s balance held in all terminals instead of the project\'s local terminal balance from which the redemption is being fulfilled.\\n  @member useDataSourceForPay A flag indicating if the data source should be used for pay transactions during this funding cycle.\\n  @member useDataSourceForRedeem A flag indicating if the data source should be used for redeem transactions during this funding cycle.\\n  @member dataSource The data source to use during this funding cycle.\\n*/\\nstruct JBFundingCycleMetadata {\\n  JBGlobalFundingCycleMetadata global;\\n  uint256 reservedRate;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  bool pausePay;\\n  bool pauseDistributions;\\n  bool pauseRedeem;\\n  bool pauseBurn;\\n  bool allowMinting;\\n  bool allowChangeToken;\\n  bool allowTerminalMigration;\\n  bool allowControllerMigration;\\n  bool holdFees;\\n  bool useTotalOverflowForRedemptions;\\n  bool useDataSourceForPay;\\n  bool useDataSourceForRedeem;\\n  address dataSource;\\n}\\n","keccak256":"0xbcf89f0855dc558c7761c6eb6942bd06c3ba9bf0cd1650c55930bfea33c3036f","license":"MIT"},"contracts/structs/JBGlobalFundingCycleMetadata.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBFundingCycleDataSource.sol\';\\n\\n/** \\n  @member allowSetTerminals A flag indicating if setting terminals should be allowed during this funding cycle.\\n  @member allowSetController A flag indicating if setting a new controller should be allowed during this funding cycle.\\n*/\\nstruct JBGlobalFundingCycleMetadata {\\n  bool allowSetTerminals;\\n  bool allowSetController;\\n}\\n","keccak256":"0x7f7855ebb0bc3ad0454c183a15730e2623a4a871aee5dbc98223050f35b224a3","license":"MIT"},"contracts/structs/JBGroupedSplits.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBSplit.sol\';\\n\\n/** \\n  @member group The group indentifier.\\n  @member splits The splits to associate with the group.\\n*/\\nstruct JBGroupedSplits {\\n  uint256 group;\\n  JBSplit[] splits;\\n}\\n","keccak256":"0x99e837531ffe541b8dd2eaf97c0c36a32e53ce24aaabac97c5b70dd93e7e86f5","license":"MIT"},"contracts/structs/JBOperatorData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member operator The address of the operator.\\n  @member domain The domain within which the operator is being given permissions. A domain of 0 is a wildcard domain, which gives an operator access to all domains.\\n  @member permissionIndexes The indexes of the permissions the operator is being given.\\n*/\\nstruct JBOperatorData {\\n  address operator;\\n  uint256 domain;\\n  uint256[] permissionIndexes;\\n}\\n","keccak256":"0xc108ff9bbeef8783e332522b8bd1c17bba071c34051de72dc5bfe38dfd39a3a3","license":"MIT"},"contracts/structs/JBPayParamsData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member terminal The terminal that is facilitating the payment.\\n  @member payer The address from which the payment originated.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectId The ID of the project being paid.\\n  @member currentFundingCycleConfiguration The configuration of the funding cycle during which the payment is being made.\\n  @member beneficiary The specified address that should be the beneficiary of anything that results from the payment.\\n  @member weight The weight of the funding cycle during which the payment is being made.\\n  @member reservedRate The reserved rate of the funding cycle during which the payment is being made.\\n  @member memo The memo that was sent alongside the payment.\\n  @member metadata Extra data provided by the payer.\\n*/\\nstruct JBPayParamsData {\\n  IJBPaymentTerminal terminal;\\n  address payer;\\n  JBTokenAmount amount;\\n  uint256 projectId;\\n  uint256 currentFundingCycleConfiguration;\\n  address beneficiary;\\n  uint256 weight;\\n  uint256 reservedRate;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0x1e36a8a71ed2274fd31b0475e69943acc6a2091397a0d6c4fa99db05d9aaa0fd","license":"MIT"},"contracts/structs/JBProjectMetadata.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n","keccak256":"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4","license":"MIT"},"contracts/structs/JBRedeemParamsData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBPaymentTerminal.sol\';\\nimport \'./JBTokenAmount.sol\';\\n\\n/** \\n  @member terminal The terminal that is facilitating the redemption.\\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project whos tokens are being redeemed.\\n  @member currentFundingCycleConfiguration The configuration of the funding cycle during which the redemption is being made.\\n  @member tokenCount The proposed number of tokens being redeemed, as a fixed point number with 18 decimals.\\n  @member totalSupply The total supply of tokens used in the calculation, as a fixed point number with 18 decimals.\\n  @member overflow The amount of overflow used in the reclaim amount calculation.\\n  @member reclaimAmount The amount that should be reclaimed by the redeemer using the protocol\'s standard bonding curve redemption formula. Includes the token being reclaimed, the reclaim value, the number of decimals included, and the currency of the reclaim amount.\\n  @member useTotalOverflow If overflow across all of a project\'s terminals is being used when making redemptions.\\n  @member redemptionRate The redemption rate of the funding cycle during which the redemption is being made.\\n  @member ballotRedemptionRate The ballot redemption rate of the funding cycle during which the redemption is being made.\\n  @member memo The proposed memo that is being emitted alongside the redemption.\\n  @member metadata Extra data provided by the redeemer.\\n*/\\nstruct JBRedeemParamsData {\\n  IJBPaymentTerminal terminal;\\n  address holder;\\n  uint256 projectId;\\n  uint256 currentFundingCycleConfiguration;\\n  uint256 tokenCount;\\n  uint256 totalSupply;\\n  uint256 overflow;\\n  JBTokenAmount reclaimAmount;\\n  bool useTotalOverflow;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  string memo;\\n  bytes metadata;\\n}\\n","keccak256":"0xefe0290796bd282e478bdcfc1eb91c1bb02a3c910edd89b67db9c7d7f566c069","license":"MIT"},"contracts/structs/JBSplit.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./../interfaces/IJBSplitAllocator.sol\';\\n\\n/** \\n  @member preferClaimed A flag that only has effect if a projectId is also specified, and the project has a token contract attached. If so, this flag indicates if the tokens that result from making a payment to the project should be delivered claimed into the beneficiary\'s wallet, or unclaimed to save gas.\\n  @member preferAddToBalance A flag indicating if a distribution to a project should prefer triggering it\'s addToBalance function instead of its pay function.\\n  @member percent The percent of the whole group that this split occupies. This number is out of `JBConstants.SPLITS_TOTAL_PERCENT`.\\n  @member projectId The ID of a project. If an allocator is not set but a projectId is set, funds will be sent to the protocol treasury belonging to the project who\'s ID is specified. Resulting tokens will be routed to the beneficiary with the claimed token preference respected.\\n  @member beneficiary An address. The role the of the beneficary depends on whether or not projectId is specified, and whether or not an allocator is specified. If allocator is set, the beneficiary will be forwarded to the allocator for it to use. If allocator is not set but projectId is set, the beneficiary is the address to which the project\'s tokens will be sent that result from a payment to it. If neither allocator or projectId are set, the beneficiary is where the funds from the split will be sent.\\n  @member lockedUntil Specifies if the split should be unchangeable until the specified time, with the exception of extending the locked period.\\n  @member allocator If an allocator is specified, funds will be sent to the allocator contract along with all properties of this split.\\n*/\\nstruct JBSplit {\\n  bool preferClaimed;\\n  bool preferAddToBalance;\\n  uint256 percent;\\n  uint256 projectId;\\n  address payable beneficiary;\\n  uint256 lockedUntil;\\n  IJBSplitAllocator allocator;\\n}\\n","keccak256":"0x03b5c632ad8c3b273d550bb334735d686fafa673b68ddb27fb77400d0de1eca1","license":"MIT"},"contracts/structs/JBSplitAllocationData.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport \'./JBSplit.sol\';\\n\\n/** \\n  @member token The token being sent to the split allocator.\\n  @member amount The amount being sent to the split allocator, as a fixed point number.\\n  @member decimals The number of decimals in the amount.\\n  @member projectId The project to which the split belongs.\\n  @member group The group to which the split belongs.\\n  @member split The split that caused the allocation.\\n*/\\nstruct JBSplitAllocationData {\\n  address token;\\n  uint256 amount;\\n  uint256 decimals;\\n  uint256 projectId;\\n  uint256 group;\\n  JBSplit split;\\n}\\n","keccak256":"0x11f19479dc1d20cc07f52edc994d24b2ac08f8074d03a72ccee68af40f884b02","license":"MIT"},"contracts/structs/JBTokenAmount.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/* \\n  @member token The token the payment was made in.\\n  @member value The amount of tokens that was paid, as a fixed point number.\\n  @member decimals The number of decimals included in the value fixed point number.\\n  @member currency The expected currency of the value.\\n**/\\nstruct JBTokenAmount {\\n  address token;\\n  uint256 value;\\n  uint256 decimals;\\n  uint256 currency;\\n}\\n","keccak256":"0xc606ed3c46a59e2e037897d2d749867919756d01f8e75a495d2dd4e03c3535fc","license":"MIT"},"prb-math/contracts/PRBMath.sol":{"content":"// SPDX-License-Identifier: Unlicense\\npragma solidity >=0.8.4;\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivFixedPointOverflow(uint256 prod1);\\n\\n/// @notice Emitted when the result overflows uint256.\\nerror PRBMath__MulDivOverflow(uint256 prod1, uint256 denominator);\\n\\n/// @notice Emitted when one of the inputs is type(int256).min.\\nerror PRBMath__MulDivSignedInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows int256.\\nerror PRBMath__MulDivSignedOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is MIN_SD59x18.\\nerror PRBMathSD59x18__AbsInputTooSmall();\\n\\n/// @notice Emitted when ceiling a number overflows SD59x18.\\nerror PRBMathSD59x18__CeilOverflow(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__DivInputTooSmall();\\n\\n/// @notice Emitted when one of the intermediary unsigned results overflows SD59x18.\\nerror PRBMathSD59x18__DivOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathSD59x18__ExpInputTooBig(int256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathSD59x18__Exp2InputTooBig(int256 x);\\n\\n/// @notice Emitted when flooring a number underflows SD59x18.\\nerror PRBMathSD59x18__FloorUnderflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format overflows SD59x18.\\nerror PRBMathSD59x18__FromIntOverflow(int256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format underflows SD59x18.\\nerror PRBMathSD59x18__FromIntUnderflow(int256 x);\\n\\n/// @notice Emitted when the product of the inputs is negative.\\nerror PRBMathSD59x18__GmNegativeProduct(int256 x, int256 y);\\n\\n/// @notice Emitted when multiplying the inputs overflows SD59x18.\\nerror PRBMathSD59x18__GmOverflow(int256 x, int256 y);\\n\\n/// @notice Emitted when the input is less than or equal to zero.\\nerror PRBMathSD59x18__LogInputTooSmall(int256 x);\\n\\n/// @notice Emitted when one of the inputs is MIN_SD59x18.\\nerror PRBMathSD59x18__MulInputTooSmall();\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__MulOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the intermediary absolute result overflows SD59x18.\\nerror PRBMathSD59x18__PowuOverflow(uint256 rAbs);\\n\\n/// @notice Emitted when the input is negative.\\nerror PRBMathSD59x18__SqrtNegativeInput(int256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows SD59x18.\\nerror PRBMathSD59x18__SqrtOverflow(int256 x);\\n\\n/// @notice Emitted when addition overflows UD60x18.\\nerror PRBMathUD60x18__AddOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when ceiling a number overflows UD60x18.\\nerror PRBMathUD60x18__CeilOverflow(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 133.084258667509499441.\\nerror PRBMathUD60x18__ExpInputTooBig(uint256 x);\\n\\n/// @notice Emitted when the input is greater than 192.\\nerror PRBMathUD60x18__Exp2InputTooBig(uint256 x);\\n\\n/// @notice Emitted when converting a basic integer to the fixed-point format format overflows UD60x18.\\nerror PRBMathUD60x18__FromUintOverflow(uint256 x);\\n\\n/// @notice Emitted when multiplying the inputs overflows UD60x18.\\nerror PRBMathUD60x18__GmOverflow(uint256 x, uint256 y);\\n\\n/// @notice Emitted when the input is less than 1.\\nerror PRBMathUD60x18__LogInputTooSmall(uint256 x);\\n\\n/// @notice Emitted when the calculating the square root overflows UD60x18.\\nerror PRBMathUD60x18__SqrtOverflow(uint256 x);\\n\\n/// @notice Emitted when subtraction underflows UD60x18.\\nerror PRBMathUD60x18__SubUnderflow(uint256 x, uint256 y);\\n\\n/// @dev Common mathematical functions used in both PRBMathSD59x18 and PRBMathUD60x18. Note that this shared library\\n/// does not always assume the signed 59.18-decimal fixed-point or the unsigned 60.18-decimal fixed-point\\n/// representation. When it does not, it is explicitly mentioned in the NatSpec documentation.\\nlibrary PRBMath {\\n    /// STRUCTS ///\\n\\n    struct SD59x18 {\\n        int256 value;\\n    }\\n\\n    struct UD60x18 {\\n        uint256 value;\\n    }\\n\\n    /// STORAGE ///\\n\\n    /// @dev How many trailing decimals can be represented.\\n    uint256 internal constant SCALE = 1e18;\\n\\n    /// @dev Largest power of two divisor of SCALE.\\n    uint256 internal constant SCALE_LPOTD = 262144;\\n\\n    /// @dev SCALE inverted mod 2^256.\\n    uint256 internal constant SCALE_INVERSE =\\n        78156646155174841979727994598816262306175212592076161876661_508869554232690281;\\n\\n    /// FUNCTIONS ///\\n\\n    /// @notice Calculates the binary exponent of x using the binary fraction method.\\n    /// @dev Has to use 192.64-bit fixed-point numbers.\\n    /// See https://ethereum.stackexchange.com/a/96594/24693.\\n    /// @param x The exponent as an unsigned 192.64-bit fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function exp2(uint256 x) internal pure returns (uint256 result) {\\n        unchecked {\\n            // Start from 0.5 in the 192.64-bit fixed-point format.\\n            result = 0x800000000000000000000000000000000000000000000000;\\n\\n            // Multiply the result by root(2, 2^-i) when the bit at position i is 1. None of the intermediary results overflows\\n            // because the initial result is 2^191 and all magic factors are less than 2^65.\\n            if (x & 0x8000000000000000 > 0) {\\n                result = (result * 0x16A09E667F3BCC909) >> 64;\\n            }\\n            if (x & 0x4000000000000000 > 0) {\\n                result = (result * 0x1306FE0A31B7152DF) >> 64;\\n            }\\n            if (x & 0x2000000000000000 > 0) {\\n                result = (result * 0x1172B83C7D517ADCE) >> 64;\\n            }\\n            if (x & 0x1000000000000000 > 0) {\\n                result = (result * 0x10B5586CF9890F62A) >> 64;\\n            }\\n            if (x & 0x800000000000000 > 0) {\\n                result = (result * 0x1059B0D31585743AE) >> 64;\\n            }\\n            if (x & 0x400000000000000 > 0) {\\n                result = (result * 0x102C9A3E778060EE7) >> 64;\\n            }\\n            if (x & 0x200000000000000 > 0) {\\n                result = (result * 0x10163DA9FB33356D8) >> 64;\\n            }\\n            if (x & 0x100000000000000 > 0) {\\n                result = (result * 0x100B1AFA5ABCBED61) >> 64;\\n            }\\n            if (x & 0x80000000000000 > 0) {\\n                result = (result * 0x10058C86DA1C09EA2) >> 64;\\n            }\\n            if (x & 0x40000000000000 > 0) {\\n                result = (result * 0x1002C605E2E8CEC50) >> 64;\\n            }\\n            if (x & 0x20000000000000 > 0) {\\n                result = (result * 0x100162F3904051FA1) >> 64;\\n            }\\n            if (x & 0x10000000000000 > 0) {\\n                result = (result * 0x1000B175EFFDC76BA) >> 64;\\n            }\\n            if (x & 0x8000000000000 > 0) {\\n                result = (result * 0x100058BA01FB9F96D) >> 64;\\n            }\\n            if (x & 0x4000000000000 > 0) {\\n                result = (result * 0x10002C5CC37DA9492) >> 64;\\n            }\\n            if (x & 0x2000000000000 > 0) {\\n                result = (result * 0x1000162E525EE0547) >> 64;\\n            }\\n            if (x & 0x1000000000000 > 0) {\\n                result = (result * 0x10000B17255775C04) >> 64;\\n            }\\n            if (x & 0x800000000000 > 0) {\\n                result = (result * 0x1000058B91B5BC9AE) >> 64;\\n            }\\n            if (x & 0x400000000000 > 0) {\\n                result = (result * 0x100002C5C89D5EC6D) >> 64;\\n            }\\n            if (x & 0x200000000000 > 0) {\\n                result = (result * 0x10000162E43F4F831) >> 64;\\n            }\\n            if (x & 0x100000000000 > 0) {\\n                result = (result * 0x100000B1721BCFC9A) >> 64;\\n            }\\n            if (x & 0x80000000000 > 0) {\\n                result = (result * 0x10000058B90CF1E6E) >> 64;\\n            }\\n            if (x & 0x40000000000 > 0) {\\n                result = (result * 0x1000002C5C863B73F) >> 64;\\n            }\\n            if (x & 0x20000000000 > 0) {\\n                result = (result * 0x100000162E430E5A2) >> 64;\\n            }\\n            if (x & 0x10000000000 > 0) {\\n                result = (result * 0x1000000B172183551) >> 64;\\n            }\\n            if (x & 0x8000000000 > 0) {\\n                result = (result * 0x100000058B90C0B49) >> 64;\\n            }\\n            if (x & 0x4000000000 > 0) {\\n                result = (result * 0x10000002C5C8601CC) >> 64;\\n            }\\n            if (x & 0x2000000000 > 0) {\\n                result = (result * 0x1000000162E42FFF0) >> 64;\\n            }\\n            if (x & 0x1000000000 > 0) {\\n                result = (result * 0x10000000B17217FBB) >> 64;\\n            }\\n            if (x & 0x800000000 > 0) {\\n                result = (result * 0x1000000058B90BFCE) >> 64;\\n            }\\n            if (x & 0x400000000 > 0) {\\n                result = (result * 0x100000002C5C85FE3) >> 64;\\n            }\\n            if (x & 0x200000000 > 0) {\\n                result = (result * 0x10000000162E42FF1) >> 64;\\n            }\\n            if (x & 0x100000000 > 0) {\\n                result = (result * 0x100000000B17217F8) >> 64;\\n            }\\n            if (x & 0x80000000 > 0) {\\n                result = (result * 0x10000000058B90BFC) >> 64;\\n            }\\n            if (x & 0x40000000 > 0) {\\n                result = (result * 0x1000000002C5C85FE) >> 64;\\n            }\\n            if (x & 0x20000000 > 0) {\\n                result = (result * 0x100000000162E42FF) >> 64;\\n            }\\n            if (x & 0x10000000 > 0) {\\n                result = (result * 0x1000000000B17217F) >> 64;\\n            }\\n            if (x & 0x8000000 > 0) {\\n                result = (result * 0x100000000058B90C0) >> 64;\\n            }\\n            if (x & 0x4000000 > 0) {\\n                result = (result * 0x10000000002C5C860) >> 64;\\n            }\\n            if (x & 0x2000000 > 0) {\\n                result = (result * 0x1000000000162E430) >> 64;\\n            }\\n            if (x & 0x1000000 > 0) {\\n                result = (result * 0x10000000000B17218) >> 64;\\n            }\\n            if (x & 0x800000 > 0) {\\n                result = (result * 0x1000000000058B90C) >> 64;\\n            }\\n            if (x & 0x400000 > 0) {\\n                result = (result * 0x100000000002C5C86) >> 64;\\n            }\\n            if (x & 0x200000 > 0) {\\n                result = (result * 0x10000000000162E43) >> 64;\\n            }\\n            if (x & 0x100000 > 0) {\\n                result = (result * 0x100000000000B1721) >> 64;\\n            }\\n            if (x & 0x80000 > 0) {\\n                result = (result * 0x10000000000058B91) >> 64;\\n            }\\n            if (x & 0x40000 > 0) {\\n                result = (result * 0x1000000000002C5C8) >> 64;\\n            }\\n            if (x & 0x20000 > 0) {\\n                result = (result * 0x100000000000162E4) >> 64;\\n            }\\n            if (x & 0x10000 > 0) {\\n                result = (result * 0x1000000000000B172) >> 64;\\n            }\\n            if (x & 0x8000 > 0) {\\n                result = (result * 0x100000000000058B9) >> 64;\\n            }\\n            if (x & 0x4000 > 0) {\\n                result = (result * 0x10000000000002C5D) >> 64;\\n            }\\n            if (x & 0x2000 > 0) {\\n                result = (result * 0x1000000000000162E) >> 64;\\n            }\\n            if (x & 0x1000 > 0) {\\n                result = (result * 0x10000000000000B17) >> 64;\\n            }\\n            if (x & 0x800 > 0) {\\n                result = (result * 0x1000000000000058C) >> 64;\\n            }\\n            if (x & 0x400 > 0) {\\n                result = (result * 0x100000000000002C6) >> 64;\\n            }\\n            if (x & 0x200 > 0) {\\n                result = (result * 0x10000000000000163) >> 64;\\n            }\\n            if (x & 0x100 > 0) {\\n                result = (result * 0x100000000000000B1) >> 64;\\n            }\\n            if (x & 0x80 > 0) {\\n                result = (result * 0x10000000000000059) >> 64;\\n            }\\n            if (x & 0x40 > 0) {\\n                result = (result * 0x1000000000000002C) >> 64;\\n            }\\n            if (x & 0x20 > 0) {\\n                result = (result * 0x10000000000000016) >> 64;\\n            }\\n            if (x & 0x10 > 0) {\\n                result = (result * 0x1000000000000000B) >> 64;\\n            }\\n            if (x & 0x8 > 0) {\\n                result = (result * 0x10000000000000006) >> 64;\\n            }\\n            if (x & 0x4 > 0) {\\n                result = (result * 0x10000000000000003) >> 64;\\n            }\\n            if (x & 0x2 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n            if (x & 0x1 > 0) {\\n                result = (result * 0x10000000000000001) >> 64;\\n            }\\n\\n            // We\'re doing two things at the same time:\\n            //\\n            //   1. Multiply the result by 2^n + 1, where \\"2^n\\" is the integer part and the one is added to account for\\n            //      the fact that we initially set the result to 0.5. This is accomplished by subtracting from 191\\n            //      rather than 192.\\n            //   2. Convert the result to the unsigned 60.18-decimal fixed-point format.\\n            //\\n            // This works because 2^(191-ip) = 2^ip / 2^191, where \\"ip\\" is the integer part \\"2^n\\".\\n            result *= SCALE;\\n            result >>= (191 - (x >> 64));\\n        }\\n    }\\n\\n    /// @notice Finds the zero-based index of the first one in the binary representation of x.\\n    /// @dev See the note on msb in the \\"Find First Set\\" Wikipedia article https://en.wikipedia.org/wiki/Find_first_set\\n    /// @param x The uint256 number for which to find the index of the most significant bit.\\n    /// @return msb The index of the most significant bit as an uint256.\\n    function mostSignificantBit(uint256 x) internal pure returns (uint256 msb) {\\n        if (x >= 2**128) {\\n            x >>= 128;\\n            msb += 128;\\n        }\\n        if (x >= 2**64) {\\n            x >>= 64;\\n            msb += 64;\\n        }\\n        if (x >= 2**32) {\\n            x >>= 32;\\n            msb += 32;\\n        }\\n        if (x >= 2**16) {\\n            x >>= 16;\\n            msb += 16;\\n        }\\n        if (x >= 2**8) {\\n            x >>= 8;\\n            msb += 8;\\n        }\\n        if (x >= 2**4) {\\n            x >>= 4;\\n            msb += 4;\\n        }\\n        if (x >= 2**2) {\\n            x >>= 2;\\n            msb += 2;\\n        }\\n        if (x >= 2**1) {\\n            // No need to shift x any more.\\n            msb += 1;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev Credit to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv.\\n    ///\\n    /// Requirements:\\n    /// - The denominator cannot be zero.\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The multiplicand as an uint256.\\n    /// @param y The multiplier as an uint256.\\n    /// @param denominator The divisor as an uint256.\\n    /// @return result The result as an uint256.\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator\\n    ) internal pure returns (uint256 result) {\\n        // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n        // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n        // variables such that product = prod1 * 2^256 + prod0.\\n        uint256 prod0; // Least significant 256 bits of the product\\n        uint256 prod1; // Most significant 256 bits of the product\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        // Handle non-overflow cases, 256 by 256 division.\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = prod0 / denominator;\\n            }\\n            return result;\\n        }\\n\\n        // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n        if (prod1 >= denominator) {\\n            revert PRBMath__MulDivOverflow(prod1, denominator);\\n        }\\n\\n        ///////////////////////////////////////////////\\n        // 512 by 256 division.\\n        ///////////////////////////////////////////////\\n\\n        // Make division exact by subtracting the remainder from [prod1 prod0].\\n        uint256 remainder;\\n        assembly {\\n            // Compute remainder using mulmod.\\n            remainder := mulmod(x, y, denominator)\\n\\n            // Subtract 256 bit number from 512 bit number.\\n            prod1 := sub(prod1, gt(remainder, prod0))\\n            prod0 := sub(prod0, remainder)\\n        }\\n\\n        // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n        // See https://cs.stackexchange.com/q/138556/92363.\\n        unchecked {\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 lpotdod = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by lpotdod.\\n                denominator := div(denominator, lpotdod)\\n\\n                // Divide [prod1 prod0] by lpotdod.\\n                prod0 := div(prod0, lpotdod)\\n\\n                // Flip lpotdod such that it is 2^256 / lpotdod. If lpotdod is zero, then it becomes one.\\n                lpotdod := add(div(sub(0, lpotdod), lpotdod), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * lpotdod;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel\'s lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don\'t need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f71e18) with full precision.\\n    ///\\n    /// @dev Variant of \\"mulDiv\\" with constant folding, i.e. in which the denominator is always 1e18. Before returning the\\n    /// final result, we add 1 if (x * y) % SCALE >= HALF_SCALE. Without this, 6.6e-19 would be truncated to 0 instead of\\n    /// being rounded to 1e-18.  See \\"Listing 6\\" and text above it at https://accu.org/index.php/journals/1717.\\n    ///\\n    /// Requirements:\\n    /// - The result must fit within uint256.\\n    ///\\n    /// Caveats:\\n    /// - The body is purposely left uncommented; see the NatSpec comments in \\"PRBMath.mulDiv\\" to understand how this works.\\n    /// - It is assumed that the result can never be type(uint256).max when x and y solve the following two equations:\\n    ///     1. x * y = type(uint256).max * SCALE\\n    ///     2. (x * y) % SCALE >= SCALE / 2\\n    ///\\n    /// @param x The multiplicand as an unsigned 60.18-decimal fixed-point number.\\n    /// @param y The multiplier as an unsigned 60.18-decimal fixed-point number.\\n    /// @return result The result as an unsigned 60.18-decimal fixed-point number.\\n    function mulDivFixedPoint(uint256 x, uint256 y) internal pure returns (uint256 result) {\\n        uint256 prod0;\\n        uint256 prod1;\\n        assembly {\\n            let mm := mulmod(x, y, not(0))\\n            prod0 := mul(x, y)\\n            prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n        }\\n\\n        if (prod1 >= SCALE) {\\n            revert PRBMath__MulDivFixedPointOverflow(prod1);\\n        }\\n\\n        uint256 remainder;\\n        uint256 roundUpUnit;\\n        assembly {\\n            remainder := mulmod(x, y, SCALE)\\n            roundUpUnit := gt(remainder, 499999999999999999)\\n        }\\n\\n        if (prod1 == 0) {\\n            unchecked {\\n                result = (prod0 / SCALE) + roundUpUnit;\\n                return result;\\n            }\\n        }\\n\\n        assembly {\\n            result := add(\\n                mul(\\n                    or(\\n                        div(sub(prod0, remainder), SCALE_LPOTD),\\n                        mul(sub(prod1, gt(remainder, prod0)), add(div(sub(0, SCALE_LPOTD), SCALE_LPOTD), 1))\\n                    ),\\n                    SCALE_INVERSE\\n                ),\\n                roundUpUnit\\n            )\\n        }\\n    }\\n\\n    /// @notice Calculates floor(x*y\\u00f7denominator) with full precision.\\n    ///\\n    /// @dev An extension of \\"mulDiv\\" for signed numbers. Works by computing the signs and the absolute values separately.\\n    ///\\n    /// Requirements:\\n    /// - None of the inputs can be type(int256).min.\\n    /// - The result must fit within int256.\\n    ///\\n    /// @param x The multiplicand as an int256.\\n    /// @param y The multiplier as an int256.\\n    /// @param denominator The divisor as an int256.\\n    /// @return result The result as an int256.\\n    function mulDivSigned(\\n        int256 x,\\n        int256 y,\\n        int256 denominator\\n    ) internal pure returns (int256 result) {\\n        if (x == type(int256).min || y == type(int256).min || denominator == type(int256).min) {\\n            revert PRBMath__MulDivSignedInputTooSmall();\\n        }\\n\\n        // Get hold of the absolute values of x, y and the denominator.\\n        uint256 ax;\\n        uint256 ay;\\n        uint256 ad;\\n        unchecked {\\n            ax = x < 0 ? uint256(-x) : uint256(x);\\n            ay = y < 0 ? uint256(-y) : uint256(y);\\n            ad = denominator < 0 ? uint256(-denominator) : uint256(denominator);\\n        }\\n\\n        // Compute the absolute value of (x*y)\\u00f7denominator. The result must fit within int256.\\n        uint256 rAbs = mulDiv(ax, ay, ad);\\n        if (rAbs > uint256(type(int256).max)) {\\n            revert PRBMath__MulDivSignedOverflow(rAbs);\\n        }\\n\\n        // Get the signs of x, y and the denominator.\\n        uint256 sx;\\n        uint256 sy;\\n        uint256 sd;\\n        assembly {\\n            sx := sgt(x, sub(0, 1))\\n            sy := sgt(y, sub(0, 1))\\n            sd := sgt(denominator, sub(0, 1))\\n        }\\n\\n        // XOR over sx, sy and sd. This is checking whether there are one or three negative signs in the inputs.\\n        // If yes, the result should be negative.\\n        result = sx ^ sy ^ sd == 0 ? -int256(rAbs) : int256(rAbs);\\n    }\\n\\n    /// @notice Calculates the square root of x, rounding down.\\n    /// @dev Uses the Babylonian method https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method.\\n    ///\\n    /// Caveats:\\n    /// - This function does not work with fixed-point numbers.\\n    ///\\n    /// @param x The uint256 number for which to calculate the square root.\\n    /// @return result The result as an uint256.\\n    function sqrt(uint256 x) internal pure returns (uint256 result) {\\n        if (x == 0) {\\n            return 0;\\n        }\\n\\n        // Set the initial guess to the closest power of two that is higher than x.\\n        uint256 xAux = uint256(x);\\n        result = 1;\\n        if (xAux >= 0x100000000000000000000000000000000) {\\n            xAux >>= 128;\\n            result <<= 64;\\n        }\\n        if (xAux >= 0x10000000000000000) {\\n            xAux >>= 64;\\n            result <<= 32;\\n        }\\n        if (xAux >= 0x100000000) {\\n            xAux >>= 32;\\n            result <<= 16;\\n        }\\n        if (xAux >= 0x10000) {\\n            xAux >>= 16;\\n            result <<= 8;\\n        }\\n        if (xAux >= 0x100) {\\n            xAux >>= 8;\\n            result <<= 4;\\n        }\\n        if (xAux >= 0x10) {\\n            xAux >>= 4;\\n            result <<= 2;\\n        }\\n        if (xAux >= 0x8) {\\n            result <<= 1;\\n        }\\n\\n        // The operations can never overflow because the result is max 2^127 when it enters this block.\\n        unchecked {\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1;\\n            result = (result + x / result) >> 1; // Seven iterations should be enough\\n            uint256 roundedDownResult = x / result;\\n            return result >= roundedDownResult ? roundedDownResult : result;\\n        }\\n    }\\n}\\n","keccak256":"0x62cbabae4910e168e99b9c2c3e3b5c9c7ad5e7abd961dcc63b7ea3d83d8ea87e","license":"Unlicense"}},"version":1}',
	bytecode:
		'0x6101406040523480156200001257600080fd5b5060405162005eb138038062005eb1833981016040819052620000359162000076565b6001600160601b0319606096871b811660805294861b851660a05292851b84166101205290841b831660c052831b821660e05290911b166101005262000123565b60008060008060008060c087890312156200009057600080fd5b86516200009d816200010a565b6020880151909650620000b0816200010a565b6040880151909550620000c3816200010a565b6060880151909450620000d6816200010a565b6080880151909350620000e9816200010a565b60a0880151909250620000fc816200010a565b809150509295509295509295565b6001600160a01b03811681146200012057600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c615bd5620002dc600039600081816104580152818161084801528181610a080152818161106c0152818161132b015281816116780152818161190c0152818161198e01528181611b4e01528181611c5a0152818161204d015261213c0152600081816102400152818161360a0152613b860152600081816102cc01528181610b3d01528181610fad0152818161115601528181611511015281816123090152818161272d015281816128cc015281816129f9015281816131b8015281816133a201528181613c820152613e570152600081816102a5015281816107760152818161093701528181610d1001528181610e9b015281816114170152818161181d01528181611e3401528181611ed80152818161265a0152818161310001526135210152600081816103d101528181610dd9015281816112620152818161175301528181611a8d01528181611f91015281816123f00152818161280c015281816132a80152613d0f01526000818161041e01528181612d5501528181612e2401528181612f3d015261300c0152615bd56000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80637fc19af5116100ee578063ad007d6311610097578063d101307311610071578063d10130731461047a578063e867c59c1461048d578063e8db2130146104a0578063f033b3b41461050f57600080fd5b8063ad007d6314610419578063b5f1e34d14610440578063c41c2f241461045357600080fd5b80638b79543c116100c85780638b79543c146103cc57806394b63795146103f3578063a40bb9c71461040657600080fd5b80637fc19af5146103935780638776c499146103a65780638ae9c07b146103b957600080fd5b80633e8c615b11610150578063619306301161012a57806361930630146102c75780636d4bae6b146102ee5780637a81b5621461030f57600080fd5b80633e8c615b1461027a578063405b84fa1461028d578063557e7155146102a057600080fd5b80631f510453116101815780631f51045314610206578063229bb824146102285780632bdfe0041461023b57600080fd5b806301ffc9a7146101a857806312b37b14146101d05780631665bc0f146101f1575b600080fd5b6101bb6101b6366004614918565b610522565b60405190151581526020015b60405180910390f35b6101e36101de366004614b0c565b610653565b6040516101c7929190615201565b6102046101ff366004614770565b610804565b005b610219610214366004614b0c565b610bee565b6040516101c79392919061527c565b610204610236366004614b63565b610daa565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101c7565b610204610288366004614b3e565b611033565b61020461029b366004614b3e565b611233565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6103016102fc366004614d43565b611721565b6040519081526020016101c7565b61037e61031d366004614ee3565b60009384526002602090815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b604080519283526020830191909152016101c7565b6103016103a1366004614646565b611a5a565b6101e36103b4366004614b0c565b611d11565b6103016103c7366004614e53565b611e63565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b610301610401366004614c6b565b6123be565b6101e3610414366004614e31565b612534565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b61030161044e366004614e31565b6126f1565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b610262610488366004614bf1565b6127da565b61030161049b366004614ba5565b612968565b61037e6104ae366004614ee3565b60009384526001602090815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b61030161051d366004614e31565b6129b4565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fe8469c850000000000000000000000000000000000000000000000000000000014806105b557507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e8c615b00000000000000000000000000000000000000000000000000000000145b8061060157507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061064d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6106ab6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e0820181905261020082015290517f5c550078000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635c550078906024015b6101206040518083038186803b1580156107ba57600080fd5b505afa1580156107ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f29190614ab1565b91506107fd82612a80565b9050915091565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810186905233602482015286908690600a906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b15801561088a57600080fd5b505afa15801561089e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c291906148fb565b6108ce84848484612ceb565b87610905576040517f7b38547b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018a90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190614ab1565b610100810151909150604b1c6001908116148015610a8c57506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e49181f9060440160206040518083038186803b158015610a5257600080fd5b505afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a91906148fb565b155b15610ac3576040517f78a4871800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008a815260208190526040902054610add908a90615839565b60008b8152602081905260409081902091909155517f906ebd0f0000000000000000000000000000000000000000000000000000000081526001600160a01b038c81166004830152602482018c9052604482018b905287151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063906ebd0f90608401600060405180830381600087803b158015610b8157600080fd5b505af1158015610b95573d6000803e3d6000fd5b50505050898b6001600160a01b03167fdf04e13ee4fcd48a81ab2fd114757093740a3efa9b6475d86e05878b4c59d0798b8b8b33604051610bd99493929190615406565b60405180910390a35050505050505050505050565b610c466040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101919091526040517febc8ca1f000000000000000000000000000000000000000000000000000000008152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ebc8ca1f906024016101406040518083038186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d939190614ace565b9093509050610da183612a80565b91509193909250565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b158015610e2357600080fd5b505afa158015610e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5b9190614629565b836008610e69838383612edd565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b158015610ee657600080fd5b505afa158015610efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1e9190614ab1565b610100810151909150604d1c600190811614610f66576040517f2ebc601300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f57e4c778000000000000000000000000000000000000000000000000000000008152600481018890526001600160a01b03878116602483015286811660448301527f000000000000000000000000000000000000000000000000000000000000000016906357e4c77890606401602060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110299190614629565b5050505050505050565b6040517f5dd8f6aa0000000000000000000000000000000000000000000000000000000081526004810183905230906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156110ae57600080fd5b505afa1580156110c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e69190614629565b6001600160a01b03161415611127576040517ffc2ce25a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b1580156111a057600080fd5b505afa1580156111b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d89190614b25565b600083815260208181526040918290209290925580516001600160a01b0384168152339281019290925283917ff389f4f5d01fe4903d6a7a63b8790b7bf80d374b6afed808c03795c3b323d4d3910160405180910390a25050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b1580156112ac57600080fd5b505afa1580156112c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e49190614629565b8260036112f2838383612edd565b6040517f5dd8f6aa0000000000000000000000000000000000000000000000000000000081526004810186905230906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b15801561136d57600080fd5b505afa158015611381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a59190614629565b6001600160a01b0316146113e5576040517fe0a0a87d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b15801561146257600080fd5b505afa158015611476573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149a9190614ab1565b610100810151909150604f1c6001908116146114e2576040517f46ace3f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018790527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b15801561155b57600080fd5b505afa15801561156f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115939190614b25565b600087815260208190526040902054146115c2576115c086604051806020016040528060008152506130c4565b505b6040517f3e8c615b000000000000000000000000000000000000000000000000000000008152600481018790523060248201526001600160a01b03861690633e8c615b90604401600060405180830381600087803b15801561162357600080fd5b505af1158015611637573d6000803e3d6000fd5b50506040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018990526001600160a01b0388811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063714e7f329150604401600060405180830381600087803b1580156116be57600080fd5b505af11580156116d2573d6000803e3d6000fd5b5050604080516001600160a01b03891681523360208201528993507f01f954abace731a88ab86e71186040cc2be49fe517ea06bc0d24f25b82b8345692500160405180910390a2505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561179d57600080fd5b505afa1580156117b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d59190614629565b8a60016117e3838383612edd565b6040517f2cee6deb000000000000000000000000000000000000000000000000000000008152600481018e90526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632cee6deb9060240160206040518083038186803b15801561185f57600080fd5b505afa158015611873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118979190614b25565b11156118cf576040517fffd0bc1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018e90523060248201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063714e7f3290604401600060405180830381600087803b15801561195057600080fd5b505af1158015611964573d6000803e3d6000fd5b505050506119828d8d8d8d8d8d9061197c91906158c4565b8c613453565b865190945015611a0d577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663821b9fd88e886040518363ffffffff1660e01b81526004016119da9291906153bc565b600060405180830381600087803b1580156119f457600080fd5b505af1158015611a08573d6000803e3d6000fd5b505050505b7f8621c3692c18d8ddd4cd26457d6a3e1d916e7001c4243a6c8dfa862a7e10a823848e8733604051611a42949392919061566d565b60405180910390a15050509998505050505050505050565b6040517f666d87a00000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063666d87a090611ac4908f908f9060040161511f565b602060405180830381600087803b158015611ade57600080fd5b505af1158015611af2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b169190614b25565b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018290523060248201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063714e7f3290604401600060405180830381600087803b158015611b9a57600080fd5b505af1158015611bae573d6000803e3d6000fd5b505050506000611c20828c8c8c8c8c90611bc891906158c4565b8b8b808060200260200160405190810160405280939291908181526020016000905b82821015611c1657611c0760c0830286013681900381019061495a565b81526020019060010190611bea565b5050505050613453565b845190915015611cc4576040517f821b9fd80000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063821b9fd890611c9190859088906004016153bc565b600060405180830381600087803b158015611cab57600080fd5b505af1158015611cbf573d6000803e3d6000fd5b505050505b7ff3e6948ba8b32d557363ea08470121c47c0127659aed09320812174d373afef281838533604051611cf9949392919061566d565b60405180910390a1509b9a5050505050505050505050565b611d696040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e0820181905261020082015290517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016107a1565b600086611e9c576040517f9fd13e5400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c20000000000000000000000000000000000000000000000000000000081526004810189905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b158015611f1b57600080fd5b505afa158015611f2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f539190614ab1565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018c90529091506120f0906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b158015611fd357600080fd5b505afa158015611fe7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200b9190614629565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018d90523360248201528c906009906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b15801561208f57600080fd5b505afa1580156120a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c791906148fb565b806120eb575061010085015160541c6001600160a01b0316336001600160a01b0316145b612ceb565b610100810151604c1c6001908116141580156121c057506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e49181f9060440160206040518083038186803b15801561218657600080fd5b505afa15801561219a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121be91906148fb565b155b80156121e6575061010081015160541c6001600160a01b0316336001600160a01b031614155b1561221d576040517f9d0ca8fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83612229576000612237565b61010081015160181c61ffff165b9150506127108114156122725760008981526020819052604090205461225e908990615839565b60008a815260208190526040902055612366565b61228a88612282836127106158ad565b612710613938565b9150806122bb576000898152602081905260409020546122ab9083906157ad565b60008a8152602081905260409020555b6040517fceddd3e40000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152602482018b90526044820184905285151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b15801561234d57600080fd5b505af1158015612361573d6000803e3d6000fd5b505050505b88876001600160a01b03167fe6fee9c572244c0c2238c3112ac12d411750a7ee00eeebd32521c3e5a666c14b8a858a8a87336040516123aa9695949392919061562b565b60405180910390a350979650505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018b90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561243a57600080fd5b505afa15801561244e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124729190614629565b8b6001612480838383612edd565b6124e28e8e8e8e8e8e9061249491906158c4565b8d8d808060200260200160405190810160405280939291908181526020016000905b82821015611c16576124d360c0830286013681900381019061495a565b815260200190600101906124b6565b93507f1a08ad37c93969a586fd0605d240c17113b20a9c9ac3847595d0ab425225f6af848f88883360405161251b9594939291906155f0565b60405180910390a15050509a9950505050505050505050565b61258c6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101919091526040517f669e48aa00000000000000000000000000000000000000000000000000000000815260048101859052602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063669e48aa906044016101206040518083038186803b1580156126a557600080fd5b505afa1580156126b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126dd9190614ab1565b91506126e882612a80565b90509250929050565b6040517f75b0d9cd0000000000000000000000000000000000000000000000000000000081526004810183905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b15801561276f57600080fd5b505afa158015612783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a79190614b25565b600085815260208190526040812054919250906127c5908584613a41565b90506127d18183615821565b95945050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561285657600080fd5b505afa15801561286a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061288e9190614629565b86600761289c838383612edd565b6040517fa7f2a70b0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a7f2a70b90612909908c908c908c908c908c9060040161543a565b602060405180830381600087803b15801561292357600080fd5b505af1158015612937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061295b9190614629565b9998505050505050505050565b60006129aa8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506130c492505050565b90505b9392505050565b6000828152602081905260408082205490517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018590526129ad919084907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b158015612a4357600080fd5b505afa158015612a57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7b9190614b25565b613a41565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810191909152604051806102200160405280612b2d84613ab2565b815261010084015160209091019060181c61ffff168152602001612b5084613b0a565b8152602001612b5e84613b27565b8152602001612b7a846101000151600160489190911c81161490565b15158152602001612b98846101000151600160499190911c81161490565b15158152602001612bb68461010001516001604a9190911c81161490565b15158152602001612bd48461010001516001604b9190911c81161490565b15158152602001612bf28461010001516001604c9190911c81161490565b15158152602001612c108461010001516001604d9190911c81161490565b15158152602001612c2e8461010001516001604e9190911c81161490565b15158152602001612c4c8461010001516001604f9190911c81161490565b15158152602001612c6a846101000151600160509190911c81161490565b15158152602001612c88846101000151600160519190911c81161490565b15158152602001612ca6846101000151600160529190911c81161490565b15158152602001612cc4846101000151600160539190911c81161490565b15158152602001612cda84610100015160541c90565b6001600160a01b0316905292915050565b80158015612d025750336001600160a01b03851614155b8015612dd157506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612d9757600080fd5b505afa158015612dab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dcf91906148fb565b155b8015612ea057506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612e6657600080fd5b505afa158015612e7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e9e91906148fb565b155b15612ed7576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b336001600160a01b03841614801590612fb957506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612f7f57600080fd5b505afa158015612f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fb791906148fb565b155b801561308857506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561304e57600080fd5b505afa158015613062573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061308691906148fb565b155b156130bf576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b6040517f43a266c20000000000000000000000000000000000000000000000000000000081526004810183905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b15801561314357600080fd5b505afa158015613157573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061317b9190614ab1565b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018690529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b1580156131fa57600080fd5b505afa15801561320e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132329190614b25565b60008681526020819052604090205461010084015191925061325b9160181c61ffff1683613a41565b92506132678382615821565b6000868152602081905260408082209290925590517f6352211e000000000000000000000000000000000000000000000000000000008152600481018790527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b1580156132f257600080fd5b505afa158015613306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332a9190614629565b90506000841561334a57613345878560200151600288613b44565b61334d565b60005b905080156133ff576040517fceddd3e40000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301526024820189905260448201839052600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b1580156133e657600080fd5b505af11580156133fa573d6000803e3d6000fd5b505050505b86846000015185602001517fb12d7a78048433f69fe6d30145bf08aad8e82985b96e4db6d5c6a7e94d57086e8589868c336040516134419594939291906151bd565b60405180910390a45050505092915050565b600061271085604001351115613495576040517f5623289500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612710856060013511156134d5576040517f9db9ee9300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271085608001351115613515576040517fddbf1bc600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a249d425898961355f61355a368c90038c018c614976565b614063565b896040518563ffffffff1660e01b815260040161357f9493929190615473565b61012060405180830381600087803b15801561359a57600080fd5b505af11580156135ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135d29190614ab1565b60208101516040517ff2da44b60000000000000000000000000000000000000000000000000000000081529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163f2da44b691613642918c919089906004016154c7565b600060405180830381600087803b15801561365c57600080fd5b505af1158015613670573d6000803e3d6000fd5b5050505060005b835181101561392857600084828151811061369457613694615b1b565b602002602001015190507cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016816040015111156136fb576040517fa9b8fbcf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606081015162ffffff101561373c576040517f9583faed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101517cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015613797576040517f5730278300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a081015162ffffff10156137d8576040517fd9b93c2500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408101511561383557606081015160408083015160008d815260016020908152838220888201518352815283822086516001600160a01b03908116845290825284832082880151909116835290529190912060e89290921b1790555b6080810151156138925760a0810151608082015160008c8152600260209081526040808320888301518452825280832086516001600160a01b039081168552908352818420838801519091168452909152902060e89290921b1790555b82516020808501516040805185516001600160a01b0390811682528685015116938101939093528085015190830152606080850151908301526080808501519083015260a080850151908301523360c08301528c92917f8a1c80ab9ab05d6bf02096dd94aa2fa05a9de212e793835a50dd5ffe8d8cbab89060e00160405180910390a4508061392081615a4b565b915050613677565b5060200151979650505050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156139915783828161398757613987615aec565b04925050506129ad565b8381106139d8576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000806000851215613a6557613a5685615a84565b613a609084615821565b613a6f565b613a6f85846158ad565b905080613a805760009150506129ad565b612710841415613a915790506129ad565b80613aa881612710613aa388826158ad565b613938565b6127d191906158ad565b604080518082019091526000808252602082015261064d6008836101000151901c6040805180820182526000808252602091820152815180830190925260018381168114835292831c83169092149181019190915290565b60006028826101000151901c61ffff1661271061064d91906158ad565b60006038826101000151901c61ffff1661271061064d91906158ad565b6040517f69e11cc500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905281906000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906369e11cc59060640160006040518083038186803b158015613bd057600080fd5b505afa158015613be4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052613c2a91908101906147ec565b905060005b8151811015614059576000828281518110613c4c57613c4c615b1b565b602002602001015190506000613c6b868360400151633b9aca00613938565b905080156140065760c08201516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163ceddd3e49116613d96576060840151613cda5760808401516001600160a01b0316613cd05733613d9c565b8360800151613d9c565b60608401516040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b158015613d5957600080fd5b505afa158015613d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d919190614629565b613d9c565b8360c001515b845160405160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b039092166004830152602482018d90526044820185905215156064820152608401600060405180830381600087803b158015613e0c57600080fd5b505af1158015613e20573d6000803e3d6000fd5b5050505060c08201516001600160a01b031615613ff9578160c001516001600160a01b0316639d740bfa6040518060c001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea78803f8e6040518263ffffffff1660e01b8152600401613ea391815260200190565b60206040518083038186803b158015613ebb57600080fd5b505afa158015613ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ef39190614629565b6001600160a01b03168152602001848152602001601281526020018c81526020018a8152602001858152506040518263ffffffff1660e01b8152600401613fc6919081516001600160a01b0390811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b600060405180830381600087803b158015613fe057600080fd5b505af1158015613ff4573d6000803e3d6000fd5b505050505b61400381866158ad565b94505b86888a7f990c1da5d280602f972ae3c429b6dc66a66569875205cc6e67f14e0b3fc4d2ac85853360405161403c9392919061533d565b60405180910390a45050808061405190615a4b565b915050613c2f565b5050949350505050565b80516001906008906140749061420b565b901b8117905060188260200151901b811790506028826040015161271061409b91906158ad565b901b81179050603882606001516127106140b591906158ad565b901b811790508160800151156140d2576901000000000000000000175b8160a00151156140e9576902000000000000000000175b8160c0015115614100576904000000000000000000175b8160e0015115614117576908000000000000000000175b8161010001511561412f576910000000000000000000175b81610120015115614147576920000000000000000000175b8161014001511561415f576940000000000000000000175b81610160015115614177576980000000000000000000175b81610180015115614190576a0100000000000000000000175b816101a00151156141a9576a0200000000000000000000175b816101c00151156141c2576a0400000000000000000000175b816101e00151156141db576a0800000000000000000000175b610200919091015160541b7e0ffffffffffffffffffffffffffffffffffffffff000000000000000000000161790565b805160009015614219576001175b816020015115614227576002175b919050565b803561422781615b79565b600082601f83011261424857600080fd5b8135602061425d61425883615789565b61573a565b80838252828201915082860187848660051b890101111561427d57600080fd5b60005b858110156142a557813561429381615b79565b84529284019290840190600101614280565b5090979650505050505050565b60008083601f8401126142c457600080fd5b50813567ffffffffffffffff8111156142dc57600080fd5b60208301915083602060c0830285010111156142f757600080fd5b9250929050565b600082601f83011261430f57600080fd5b8135602061431f61425883615789565b8281528181019085830160c08086028801850189101561433e57600080fd5b60005b86811015614365576143538a8461449e565b85529385019391810191600101614341565b509198975050505050505050565b60008083601f84011261438557600080fd5b50813567ffffffffffffffff81111561439d57600080fd5b6020830191508360208260051b85010111156142f757600080fd5b803561422781615b91565b805161422781615b79565b60008083601f8401126143e057600080fd5b50813567ffffffffffffffff8111156143f857600080fd5b6020830191508360208285010111156142f757600080fd5b600082601f83011261442157600080fd5b813567ffffffffffffffff81111561443b5761443b615b4a565b61446c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161573a565b81815284602083860101111561448157600080fd5b816020850160208301376000918101602001919091529392505050565b600060c082840312156144b057600080fd5b60405160c0810181811067ffffffffffffffff821117156144d3576144d3615b4a565b60405290508082356144e481615b79565b815260208301356144f481615b79565b8060208301525060408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b60006080828403121561453c57600080fd5b50919050565b6000610240828403121561453c57600080fd5b6000610120828403121561456857600080fd5b6145706156a6565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c08201526145be60e083016143c3565b60e082015261010080830151818301525092915050565b6000604082840312156145e757600080fd5b6145ef6156d0565b905081356145fc81615b91565b8152602082013561460c81615b91565b602082015292915050565b60006040828403121561453c57600080fd5b60006020828403121561463b57600080fd5b81516129ad81615b79565b60008060008060008060008060008060006103a08c8e03121561466857600080fd5b6146718c61422c565b9a5067ffffffffffffffff8060208e0135111561468d57600080fd5b61469d8e60208f01358f01614617565b9a506146ac8e60408f0161452a565b99506146bb8e60c08f01614542565b98506103008d01359750806103208e013511156146d757600080fd5b6146e88e6103208f01358f01614373565b90975095506103408d01358110156146ff57600080fd5b6147108e6103408f01358f016142b2565b90955093506103608d013581101561472757600080fd5b6147388e6103608f01358f01614237565b9250806103808e0135111561474c57600080fd5b5061475e8d6103808e01358e01614410565b90509295989b509295989b9093969950565b60008060008060008060a0878903121561478957600080fd5b863561479481615b79565b95506020870135945060408701359350606087013567ffffffffffffffff8111156147be57600080fd5b6147ca89828a016143ce565b90945092505060808701356147de81615b91565b809150509295509295509295565b600060208083850312156147ff57600080fd5b825167ffffffffffffffff81111561481657600080fd5b8301601f8101851361482757600080fd5b805161483561425882615789565b8181528381019083850160e0808502860187018a101561485457600080fd5b60009550855b858110156148ec5781838c031215614870578687fd5b6148786156f3565b835161488381615b91565b81528389015161489281615b91565b818a015260408481015190820152606080850151908201526080808501516148b981615b79565b9082015260a0848101519082015260c0808501516148d681615b79565b908201528552938701939181019160010161485a565b50919998505050505050505050565b60006020828403121561490d57600080fd5b81516129ad81615b91565b60006020828403121561492a57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146129ad57600080fd5b600060c0828403121561496c57600080fd5b6129ad838361449e565b6000610240828403121561498957600080fd5b614991615716565b61499b84846145d5565b81526040830135602082015260608301356040820152608083013560608201526149c760a084016143b8565b60808201526149d860c084016143b8565b60a08201526149e960e084016143b8565b60c08201526101006149fc8185016143b8565b60e0830152610120614a0f8186016143b8565b828401526101409150614a238286016143b8565b90830152610160614a358582016143b8565b828401526101809150614a498286016143b8565b908301526101a0614a5b8582016143b8565b828401526101c09150614a6f8286016143b8565b908301526101e0614a818582016143b8565b828401526102009150614a958286016143b8565b90830152614aa6610220850161422c565b908201529392505050565b60006101208284031215614ac457600080fd5b6129ad8383614555565b6000806101408385031215614ae257600080fd5b614aec8484614555565b915061012083015160038110614b0157600080fd5b809150509250929050565b600060208284031215614b1e57600080fd5b5035919050565b600060208284031215614b3757600080fd5b5051919050565b60008060408385031215614b5157600080fd5b823591506020830135614b0181615b79565b600080600060608486031215614b7857600080fd5b833592506020840135614b8a81615b79565b91506040840135614b9a81615b79565b809150509250925092565b600080600060408486031215614bba57600080fd5b83359250602084013567ffffffffffffffff811115614bd857600080fd5b614be4868287016143ce565b9497909650939450505050565b600080600080600060608688031215614c0957600080fd5b85359450602086013567ffffffffffffffff80821115614c2857600080fd5b614c3489838a016143ce565b90965094506040880135915080821115614c4d57600080fd5b50614c5a888289016143ce565b969995985093965092949392505050565b6000806000806000806000806000806103608b8d031215614c8b57600080fd5b8a359950614c9c8c60208d0161452a565b9850614cab8c60a08d01614542565b97506102e08b013596506103008b013567ffffffffffffffff80821115614cd157600080fd5b614cdd8e838f01614373565b90985096506103208d0135915080821115614cf757600080fd5b614d038e838f016142b2565b90965094506103408d0135915080821115614d1d57600080fd5b50614d2a8d828e016143ce565b915080935050809150509295989b9194979a5092959850565b60008060008060008060008060006103808a8c031215614d6257600080fd5b89359850614d738b60208c0161452a565b9750614d828b60a08c01614542565b96506102e08a013595506103008a013567ffffffffffffffff80821115614da857600080fd5b614db48d838e01614373565b90975095506103208c0135915080821115614dce57600080fd5b614dda8d838e016142fe565b94506103408c0135915080821115614df157600080fd5b614dfd8d838e01614237565b93506103608c0135915080821115614e1457600080fd5b50614e218c828d01614410565b9150509295985092959850929598565b60008060408385031215614e4457600080fd5b50508035926020909101359150565b600080600080600080600060c0888a031215614e6e57600080fd5b87359650602088013595506040880135614e8781615b79565b9450606088013567ffffffffffffffff811115614ea357600080fd5b614eaf8a828b016143ce565b9095509350506080880135614ec381615b91565b915060a0880135614ed381615b91565b8091505092959891949750929550565b60008060008060808587031215614ef957600080fd5b84359350602085013592506040850135614f1281615b79565b91506060850135614f2281615b79565b939692955090935050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000815180845260005b81811015614f9c57602081850181015186830182015201614f80565b81811115614fae576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b614ffa8282518051151582526020908101511515910152565b602081015160408301526040810151606083015260608101516080830152608081015161502b60a084018215159052565b5060a081015180151560c08401525060c081015180151560e08401525060e081015161010061505d8185018315159052565b82015190506101206150728482018315159052565b82015190506101406150878482018315159052565b820151905061016061509c8482018315159052565b82015190506101806150b18482018315159052565b82015190506101a06150c68482018315159052565b82015190506101c06150db8482018315159052565b82015190506101e06150f08482018315159052565b82015190506102006151058482018315159052565b8201516001600160a01b0381166102208501529050505050565b6001600160a01b038316815260406020820152600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261516657600080fd5b8301803567ffffffffffffffff81111561517f57600080fd5b80360385131561518e57600080fd5b6040808501526151a5608085018260208501614f2d565b91505060208401356060840152809150509392505050565b60006001600160a01b03808816835286602084015285604084015260a060608401526151ec60a0840186614f76565b91508084166080840152509695505050505050565b610360810161526e8285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526001600160a01b0360e08201511660e08301526101008082015181840152505050565b6129ad610120830184614fe1565b61038081016152e98286805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526001600160a01b0360e08201511660e08301526101008082015181840152505050565b6152f7610120830185614fe1565b6003831061532e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b82610360830152949350505050565b610120810161539e8286805115158252602081015115156020830152604081015160408301526060810151606083015260808101516001600160a01b03808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e08301526001600160a01b038316610100830152949350505050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156142a55784516001600160a01b0316835293830193918301916001016153e1565b848152606060208201526000615420606083018587614f2d565b90506001600160a01b038316604083015295945050505050565b858152606060208201526000615454606083018688614f2d565b8281036040840152615467818587614f2d565b98975050505050505050565b600060e08201905085825284356020830152602085013560408301526040850135606083015260608501356154a781615b79565b6001600160a01b0316608083015260a082019390935260c0015292915050565b60006060808301868452602086818601526040838187015282875180855260808801915060808160051b89010194508389016000805b838110156155de578a88037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800185528251805189528701518789018790528051878a018190529088019083908b8b01905b808310156155c9576155b3828551805115158252602081015115156020830152604081015160408301526060810151606083015260808101516001600160a01b03808216608085015260a083015160a08501528060c08401511660c085015250505050565b60e0820191508a8401935060018301925061554e565b509950505093860193918601916001016154fd565b50959c9b505050505050505050505050565b858152846020820152608060408201526000615610608083018587614f2d565b90506001600160a01b03831660608301529695505050505050565b86815285602082015260a06040820152600061564b60a083018688614f2d565b90508360608301526001600160a01b0383166080830152979650505050505050565b84815283602082015260806040820152600061568c6080830185614f76565b90506001600160a01b038316606083015295945050505050565b604051610120810167ffffffffffffffff811182821017156156ca576156ca615b4a565b60405290565b6040805190810167ffffffffffffffff811182821017156156ca576156ca615b4a565b60405160e0810167ffffffffffffffff811182821017156156ca576156ca615b4a565b604051610220810167ffffffffffffffff811182821017156156ca576156ca615b4a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561578157615781615b4a565b604052919050565b600067ffffffffffffffff8211156157a3576157a3615b4a565b5060051b60200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038413811516156157e7576157e7615abd565b827f800000000000000000000000000000000000000000000000000000000000000003841281161561581b5761581b615abd565b50500190565b6000821982111561583457615834615abd565b500190565b6000808312837f80000000000000000000000000000000000000000000000000000000000000000183128115161561587357615873615abd565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0183138116156158a7576158a7615abd565b50500390565b6000828210156158bf576158bf615abd565b500390565b60006158d261425884615789565b808482526020808301925084368760051b870111156158f057600080fd5b60005b87811015615a3f57813567ffffffffffffffff8082111561591357600080fd5b8189019150604080833603121561592957600080fd5b6159316156d0565b83358152868401358381111561594657600080fd5b939093019236601f85011261595a57600080fd5b8335925061596a61425884615789565b8381528781019085890160e03681880289018c01111561598957600080fd5b600097505b86881015615a23578082360312156159a557600080fd5b6159ad6156f3565b82356159b881615b91565b8152828c01356159c781615b91565b818d01528287013587820152606080840135908201526080808401356159ec81615b79565b9082015260a0838101359082015260c080840135615a0981615b79565b90820152845260019790970196928a01929081019061598e565b50508289015250885250505093820193908201906001016158f3565b50919695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615a7d57615a7d615abd565b5060010190565b60007f8000000000000000000000000000000000000000000000000000000000000000821415615ab657615ab6615abd565b5060000390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6001600160a01b0381168114615b8e57600080fd5b50565b8015158114615b8e57600080fdfea2646970667358221220fa982fde3e93747d9cb8438464eac3961e9d1cb9ed1fe4bed3f1802a7fbccb9064736f6c63430008060033',
	deployedBytecode:
		'0x608060405234801561001057600080fd5b50600436106101a35760003560e01c80637fc19af5116100ee578063ad007d6311610097578063d101307311610071578063d10130731461047a578063e867c59c1461048d578063e8db2130146104a0578063f033b3b41461050f57600080fd5b8063ad007d6314610419578063b5f1e34d14610440578063c41c2f241461045357600080fd5b80638b79543c116100c85780638b79543c146103cc57806394b63795146103f3578063a40bb9c71461040657600080fd5b80637fc19af5146103935780638776c499146103a65780638ae9c07b146103b957600080fd5b80633e8c615b11610150578063619306301161012a57806361930630146102c75780636d4bae6b146102ee5780637a81b5621461030f57600080fd5b80633e8c615b1461027a578063405b84fa1461028d578063557e7155146102a057600080fd5b80631f510453116101815780631f51045314610206578063229bb824146102285780632bdfe0041461023b57600080fd5b806301ffc9a7146101a857806312b37b14146101d05780631665bc0f146101f1575b600080fd5b6101bb6101b6366004614918565b610522565b60405190151581526020015b60405180910390f35b6101e36101de366004614b0c565b610653565b6040516101c7929190615201565b6102046101ff366004614770565b610804565b005b610219610214366004614b0c565b610bee565b6040516101c79392919061527c565b610204610236366004614b63565b610daa565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101c7565b610204610288366004614b3e565b611033565b61020461029b366004614b3e565b611233565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b6103016102fc366004614d43565b611721565b6040519081526020016101c7565b61037e61031d366004614ee3565b60009384526002602090815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b604080519283526020830191909152016101c7565b6103016103a1366004614646565b611a5a565b6101e36103b4366004614b0c565b611d11565b6103016103c7366004614e53565b611e63565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b610301610401366004614c6b565b6123be565b6101e3610414366004614e31565b612534565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b61030161044e366004614e31565b6126f1565b6102627f000000000000000000000000000000000000000000000000000000000000000081565b610262610488366004614bf1565b6127da565b61030161049b366004614ba5565b612968565b61037e6104ae366004614ee3565b60009384526001602090815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020547cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169160e89190911c90565b61030161051d366004614e31565b6129b4565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fe8469c850000000000000000000000000000000000000000000000000000000014806105b557507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e8c615b00000000000000000000000000000000000000000000000000000000145b8061060157507fffffffff0000000000000000000000000000000000000000000000000000000082167fad007d6300000000000000000000000000000000000000000000000000000000145b8061064d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6106ab6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e0820181905261020082015290517f5c550078000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635c550078906024015b6101206040518083038186803b1580156107ba57600080fd5b505afa1580156107ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f29190614ab1565b91506107fd82612a80565b9050915091565b6040517f6e49181f0000000000000000000000000000000000000000000000000000000081526004810186905233602482015286908690600a906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b15801561088a57600080fd5b505afa15801561089e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c291906148fb565b6108ce84848484612ceb565b87610905576040517f7b38547b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018a90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190614ab1565b610100810151909150604b1c6001908116148015610a8c57506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e49181f9060440160206040518083038186803b158015610a5257600080fd5b505afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a91906148fb565b155b15610ac3576040517f78a4871800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008a815260208190526040902054610add908a90615839565b60008b8152602081905260409081902091909155517f906ebd0f0000000000000000000000000000000000000000000000000000000081526001600160a01b038c81166004830152602482018c9052604482018b905287151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063906ebd0f90608401600060405180830381600087803b158015610b8157600080fd5b505af1158015610b95573d6000803e3d6000fd5b50505050898b6001600160a01b03167fdf04e13ee4fcd48a81ab2fd114757093740a3efa9b6475d86e05878b4c59d0798b8b8b33604051610bd99493929190615406565b60405180910390a35050505050505050505050565b610c466040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101919091526040517febc8ca1f000000000000000000000000000000000000000000000000000000008152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ebc8ca1f906024016101406040518083038186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d939190614ace565b9093509050610da183612a80565b91509193909250565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b158015610e2357600080fd5b505afa158015610e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5b9190614629565b836008610e69838383612edd565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b158015610ee657600080fd5b505afa158015610efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1e9190614ab1565b610100810151909150604d1c600190811614610f66576040517f2ebc601300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f57e4c778000000000000000000000000000000000000000000000000000000008152600481018890526001600160a01b03878116602483015286811660448301527f000000000000000000000000000000000000000000000000000000000000000016906357e4c77890606401602060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110299190614629565b5050505050505050565b6040517f5dd8f6aa0000000000000000000000000000000000000000000000000000000081526004810183905230906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b1580156110ae57600080fd5b505afa1580156110c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e69190614629565b6001600160a01b03161415611127576040517ffc2ce25a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b1580156111a057600080fd5b505afa1580156111b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d89190614b25565b600083815260208181526040918290209290925580516001600160a01b0384168152339281019290925283917ff389f4f5d01fe4903d6a7a63b8790b7bf80d374b6afed808c03795c3b323d4d3910160405180910390a25050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b1580156112ac57600080fd5b505afa1580156112c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e49190614629565b8260036112f2838383612edd565b6040517f5dd8f6aa0000000000000000000000000000000000000000000000000000000081526004810186905230906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b15801561136d57600080fd5b505afa158015611381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a59190614629565b6001600160a01b0316146113e5576040517fe0a0a87d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906343a266c2906024016101206040518083038186803b15801561146257600080fd5b505afa158015611476573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149a9190614ab1565b610100810151909150604f1c6001908116146114e2576040517f46ace3f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018790527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b15801561155b57600080fd5b505afa15801561156f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115939190614b25565b600087815260208190526040902054146115c2576115c086604051806020016040528060008152506130c4565b505b6040517f3e8c615b000000000000000000000000000000000000000000000000000000008152600481018790523060248201526001600160a01b03861690633e8c615b90604401600060405180830381600087803b15801561162357600080fd5b505af1158015611637573d6000803e3d6000fd5b50506040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018990526001600160a01b0388811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063714e7f329150604401600060405180830381600087803b1580156116be57600080fd5b505af11580156116d2573d6000803e3d6000fd5b5050604080516001600160a01b03891681523360208201528993507f01f954abace731a88ab86e71186040cc2be49fe517ea06bc0d24f25b82b8345692500160405180910390a2505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018a90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561179d57600080fd5b505afa1580156117b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d59190614629565b8a60016117e3838383612edd565b6040517f2cee6deb000000000000000000000000000000000000000000000000000000008152600481018e90526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632cee6deb9060240160206040518083038186803b15801561185f57600080fd5b505afa158015611873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118979190614b25565b11156118cf576040517fffd0bc1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018e90523060248201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063714e7f3290604401600060405180830381600087803b15801561195057600080fd5b505af1158015611964573d6000803e3d6000fd5b505050506119828d8d8d8d8d8d9061197c91906158c4565b8c613453565b865190945015611a0d577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663821b9fd88e886040518363ffffffff1660e01b81526004016119da9291906153bc565b600060405180830381600087803b1580156119f457600080fd5b505af1158015611a08573d6000803e3d6000fd5b505050505b7f8621c3692c18d8ddd4cd26457d6a3e1d916e7001c4243a6c8dfa862a7e10a823848e8733604051611a42949392919061566d565b60405180910390a15050509998505050505050505050565b6040517f666d87a00000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063666d87a090611ac4908f908f9060040161511f565b602060405180830381600087803b158015611ade57600080fd5b505af1158015611af2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b169190614b25565b6040517f714e7f32000000000000000000000000000000000000000000000000000000008152600481018290523060248201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063714e7f3290604401600060405180830381600087803b158015611b9a57600080fd5b505af1158015611bae573d6000803e3d6000fd5b505050506000611c20828c8c8c8c8c90611bc891906158c4565b8b8b808060200260200160405190810160405280939291908181526020016000905b82821015611c1657611c0760c0830286013681900381019061495a565b81526020019060010190611bea565b5050505050613453565b845190915015611cc4576040517f821b9fd80000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063821b9fd890611c9190859088906004016153bc565b600060405180830381600087803b158015611cab57600080fd5b505af1158015611cbf573d6000803e3d6000fd5b505050505b7ff3e6948ba8b32d557363ea08470121c47c0127659aed09320812174d373afef281838533604051611cf9949392919061566d565b60405180910390a1509b9a5050505050505050505050565b611d696040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052818301819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e0820181905261020082015290517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016107a1565b600086611e9c576040517f9fd13e5400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c20000000000000000000000000000000000000000000000000000000081526004810189905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b158015611f1b57600080fd5b505afa158015611f2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f539190614ab1565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018c90529091506120f0906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b158015611fd357600080fd5b505afa158015611fe7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200b9190614629565b6040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018d90523360248201528c906009906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636e49181f9060440160206040518083038186803b15801561208f57600080fd5b505afa1580156120a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c791906148fb565b806120eb575061010085015160541c6001600160a01b0316336001600160a01b0316145b612ceb565b610100810151604c1c6001908116141580156121c057506040517f6e49181f000000000000000000000000000000000000000000000000000000008152600481018b90523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e49181f9060440160206040518083038186803b15801561218657600080fd5b505afa15801561219a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121be91906148fb565b155b80156121e6575061010081015160541c6001600160a01b0316336001600160a01b031614155b1561221d576040517f9d0ca8fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83612229576000612237565b61010081015160181c61ffff165b9150506127108114156122725760008981526020819052604090205461225e908990615839565b60008a815260208190526040902055612366565b61228a88612282836127106158ad565b612710613938565b9150806122bb576000898152602081905260409020546122ab9083906157ad565b60008a8152602081905260409020555b6040517fceddd3e40000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152602482018b90526044820184905285151560648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b15801561234d57600080fd5b505af1158015612361573d6000803e3d6000fd5b505050505b88876001600160a01b03167fe6fee9c572244c0c2238c3112ac12d411750a7ee00eeebd32521c3e5a666c14b8a858a8a87336040516123aa9695949392919061562b565b60405180910390a350979650505050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018b90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561243a57600080fd5b505afa15801561244e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124729190614629565b8b6001612480838383612edd565b6124e28e8e8e8e8e8e9061249491906158c4565b8d8d808060200260200160405190810160405280939291908181526020016000905b82821015611c16576124d360c0830286013681900381019061495a565b815260200190600101906124b6565b93507f1a08ad37c93969a586fd0605d240c17113b20a9c9ac3847595d0ab425225f6af848f88883360405161251b9594939291906155f0565b60405180910390a15050509a9950505050505050505050565b61258c6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081018290526102008101919091526040517f669e48aa00000000000000000000000000000000000000000000000000000000815260048101859052602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063669e48aa906044016101206040518083038186803b1580156126a557600080fd5b505afa1580156126b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126dd9190614ab1565b91506126e882612a80565b90509250929050565b6040517f75b0d9cd0000000000000000000000000000000000000000000000000000000081526004810183905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b15801561276f57600080fd5b505afa158015612783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a79190614b25565b600085815260208190526040812054919250906127c5908584613a41565b90506127d18183615821565b95945050505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561285657600080fd5b505afa15801561286a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061288e9190614629565b86600761289c838383612edd565b6040517fa7f2a70b0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a7f2a70b90612909908c908c908c908c908c9060040161543a565b602060405180830381600087803b15801561292357600080fd5b505af1158015612937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061295b9190614629565b9998505050505050505050565b60006129aa8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506130c492505050565b90505b9392505050565b6000828152602081905260408082205490517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018590526129ad919084907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906375b0d9cd9060240160206040518083038186803b158015612a4357600080fd5b505afa158015612a57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7b9190614b25565b613a41565b6040805161026081018252600061022082018181526102408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810191909152604051806102200160405280612b2d84613ab2565b815261010084015160209091019060181c61ffff168152602001612b5084613b0a565b8152602001612b5e84613b27565b8152602001612b7a846101000151600160489190911c81161490565b15158152602001612b98846101000151600160499190911c81161490565b15158152602001612bb68461010001516001604a9190911c81161490565b15158152602001612bd48461010001516001604b9190911c81161490565b15158152602001612bf28461010001516001604c9190911c81161490565b15158152602001612c108461010001516001604d9190911c81161490565b15158152602001612c2e8461010001516001604e9190911c81161490565b15158152602001612c4c8461010001516001604f9190911c81161490565b15158152602001612c6a846101000151600160509190911c81161490565b15158152602001612c88846101000151600160519190911c81161490565b15158152602001612ca6846101000151600160529190911c81161490565b15158152602001612cc4846101000151600160539190911c81161490565b15158152602001612cda84610100015160541c90565b6001600160a01b0316905292915050565b80158015612d025750336001600160a01b03851614155b8015612dd157506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612d9757600080fd5b505afa158015612dab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dcf91906148fb565b155b8015612ea057506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612e6657600080fd5b505afa158015612e7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e9e91906148fb565b155b15612ed7576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b336001600160a01b03841614801590612fb957506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b158015612f7f57600080fd5b505afa158015612f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fb791906148fb565b155b801561308857506040517fc161c93f0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561304e57600080fd5b505afa158015613062573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061308691906148fb565b155b156130bf576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b6040517f43a266c20000000000000000000000000000000000000000000000000000000081526004810183905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343a266c2906024016101206040518083038186803b15801561314357600080fd5b505afa158015613157573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061317b9190614ab1565b6040517f75b0d9cd000000000000000000000000000000000000000000000000000000008152600481018690529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906375b0d9cd9060240160206040518083038186803b1580156131fa57600080fd5b505afa15801561320e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132329190614b25565b60008681526020819052604090205461010084015191925061325b9160181c61ffff1683613a41565b92506132678382615821565b6000868152602081905260408082209290925590517f6352211e000000000000000000000000000000000000000000000000000000008152600481018790527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b1580156132f257600080fd5b505afa158015613306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332a9190614629565b90506000841561334a57613345878560200151600288613b44565b61334d565b60005b905080156133ff576040517fceddd3e40000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301526024820189905260448201839052600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063ceddd3e490608401600060405180830381600087803b1580156133e657600080fd5b505af11580156133fa573d6000803e3d6000fd5b505050505b86846000015185602001517fb12d7a78048433f69fe6d30145bf08aad8e82985b96e4db6d5c6a7e94d57086e8589868c336040516134419594939291906151bd565b60405180910390a45050505092915050565b600061271085604001351115613495576040517f5623289500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612710856060013511156134d5576040517f9db9ee9300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271085608001351115613515576040517fddbf1bc600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a249d425898961355f61355a368c90038c018c614976565b614063565b896040518563ffffffff1660e01b815260040161357f9493929190615473565b61012060405180830381600087803b15801561359a57600080fd5b505af11580156135ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135d29190614ab1565b60208101516040517ff2da44b60000000000000000000000000000000000000000000000000000000081529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163f2da44b691613642918c919089906004016154c7565b600060405180830381600087803b15801561365c57600080fd5b505af1158015613670573d6000803e3d6000fd5b5050505060005b835181101561392857600084828151811061369457613694615b1b565b602002602001015190507cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016816040015111156136fb576040517fa9b8fbcf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606081015162ffffff101561373c576040517f9583faed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101517cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015613797576040517f5730278300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a081015162ffffff10156137d8576040517fd9b93c2500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408101511561383557606081015160408083015160008d815260016020908152838220888201518352815283822086516001600160a01b03908116845290825284832082880151909116835290529190912060e89290921b1790555b6080810151156138925760a0810151608082015160008c8152600260209081526040808320888301518452825280832086516001600160a01b039081168552908352818420838801519091168452909152902060e89290921b1790555b82516020808501516040805185516001600160a01b0390811682528685015116938101939093528085015190830152606080850151908301526080808501519083015260a080850151908301523360c08301528c92917f8a1c80ab9ab05d6bf02096dd94aa2fa05a9de212e793835a50dd5ffe8d8cbab89060e00160405180910390a4508061392081615a4b565b915050613677565b5060200151979650505050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156139915783828161398757613987615aec565b04925050506129ad565b8381106139d8576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000806000851215613a6557613a5685615a84565b613a609084615821565b613a6f565b613a6f85846158ad565b905080613a805760009150506129ad565b612710841415613a915790506129ad565b80613aa881612710613aa388826158ad565b613938565b6127d191906158ad565b604080518082019091526000808252602082015261064d6008836101000151901c6040805180820182526000808252602091820152815180830190925260018381168114835292831c83169092149181019190915290565b60006028826101000151901c61ffff1661271061064d91906158ad565b60006038826101000151901c61ffff1661271061064d91906158ad565b6040517f69e11cc500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905281906000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906369e11cc59060640160006040518083038186803b158015613bd057600080fd5b505afa158015613be4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052613c2a91908101906147ec565b905060005b8151811015614059576000828281518110613c4c57613c4c615b1b565b602002602001015190506000613c6b868360400151633b9aca00613938565b905080156140065760c08201516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163ceddd3e49116613d96576060840151613cda5760808401516001600160a01b0316613cd05733613d9c565b8360800151613d9c565b60608401516040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b158015613d5957600080fd5b505afa158015613d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d919190614629565b613d9c565b8360c001515b845160405160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b039092166004830152602482018d90526044820185905215156064820152608401600060405180830381600087803b158015613e0c57600080fd5b505af1158015613e20573d6000803e3d6000fd5b5050505060c08201516001600160a01b031615613ff9578160c001516001600160a01b0316639d740bfa6040518060c001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea78803f8e6040518263ffffffff1660e01b8152600401613ea391815260200190565b60206040518083038186803b158015613ebb57600080fd5b505afa158015613ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ef39190614629565b6001600160a01b03168152602001848152602001601281526020018c81526020018a8152602001858152506040518263ffffffff1660e01b8152600401613fc6919081516001600160a01b0390811682526020808401518184015260408085015181850152606080860151818601526080808701518187015260a096870151805115158888015293840151151560c0808801919091529284015160e08701529083015161010086015282015183166101208501529381015161014084015292909201519091166101608201526101800190565b600060405180830381600087803b158015613fe057600080fd5b505af1158015613ff4573d6000803e3d6000fd5b505050505b61400381866158ad565b94505b86888a7f990c1da5d280602f972ae3c429b6dc66a66569875205cc6e67f14e0b3fc4d2ac85853360405161403c9392919061533d565b60405180910390a45050808061405190615a4b565b915050613c2f565b5050949350505050565b80516001906008906140749061420b565b901b8117905060188260200151901b811790506028826040015161271061409b91906158ad565b901b81179050603882606001516127106140b591906158ad565b901b811790508160800151156140d2576901000000000000000000175b8160a00151156140e9576902000000000000000000175b8160c0015115614100576904000000000000000000175b8160e0015115614117576908000000000000000000175b8161010001511561412f576910000000000000000000175b81610120015115614147576920000000000000000000175b8161014001511561415f576940000000000000000000175b81610160015115614177576980000000000000000000175b81610180015115614190576a0100000000000000000000175b816101a00151156141a9576a0200000000000000000000175b816101c00151156141c2576a0400000000000000000000175b816101e00151156141db576a0800000000000000000000175b610200919091015160541b7e0ffffffffffffffffffffffffffffffffffffffff000000000000000000000161790565b805160009015614219576001175b816020015115614227576002175b919050565b803561422781615b79565b600082601f83011261424857600080fd5b8135602061425d61425883615789565b61573a565b80838252828201915082860187848660051b890101111561427d57600080fd5b60005b858110156142a557813561429381615b79565b84529284019290840190600101614280565b5090979650505050505050565b60008083601f8401126142c457600080fd5b50813567ffffffffffffffff8111156142dc57600080fd5b60208301915083602060c0830285010111156142f757600080fd5b9250929050565b600082601f83011261430f57600080fd5b8135602061431f61425883615789565b8281528181019085830160c08086028801850189101561433e57600080fd5b60005b86811015614365576143538a8461449e565b85529385019391810191600101614341565b509198975050505050505050565b60008083601f84011261438557600080fd5b50813567ffffffffffffffff81111561439d57600080fd5b6020830191508360208260051b85010111156142f757600080fd5b803561422781615b91565b805161422781615b79565b60008083601f8401126143e057600080fd5b50813567ffffffffffffffff8111156143f857600080fd5b6020830191508360208285010111156142f757600080fd5b600082601f83011261442157600080fd5b813567ffffffffffffffff81111561443b5761443b615b4a565b61446c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161573a565b81815284602083860101111561448157600080fd5b816020850160208301376000918101602001919091529392505050565b600060c082840312156144b057600080fd5b60405160c0810181811067ffffffffffffffff821117156144d3576144d3615b4a565b60405290508082356144e481615b79565b815260208301356144f481615b79565b8060208301525060408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b60006080828403121561453c57600080fd5b50919050565b6000610240828403121561453c57600080fd5b6000610120828403121561456857600080fd5b6145706156a6565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c08201526145be60e083016143c3565b60e082015261010080830151818301525092915050565b6000604082840312156145e757600080fd5b6145ef6156d0565b905081356145fc81615b91565b8152602082013561460c81615b91565b602082015292915050565b60006040828403121561453c57600080fd5b60006020828403121561463b57600080fd5b81516129ad81615b79565b60008060008060008060008060008060006103a08c8e03121561466857600080fd5b6146718c61422c565b9a5067ffffffffffffffff8060208e0135111561468d57600080fd5b61469d8e60208f01358f01614617565b9a506146ac8e60408f0161452a565b99506146bb8e60c08f01614542565b98506103008d01359750806103208e013511156146d757600080fd5b6146e88e6103208f01358f01614373565b90975095506103408d01358110156146ff57600080fd5b6147108e6103408f01358f016142b2565b90955093506103608d013581101561472757600080fd5b6147388e6103608f01358f01614237565b9250806103808e0135111561474c57600080fd5b5061475e8d6103808e01358e01614410565b90509295989b509295989b9093969950565b60008060008060008060a0878903121561478957600080fd5b863561479481615b79565b95506020870135945060408701359350606087013567ffffffffffffffff8111156147be57600080fd5b6147ca89828a016143ce565b90945092505060808701356147de81615b91565b809150509295509295509295565b600060208083850312156147ff57600080fd5b825167ffffffffffffffff81111561481657600080fd5b8301601f8101851361482757600080fd5b805161483561425882615789565b8181528381019083850160e0808502860187018a101561485457600080fd5b60009550855b858110156148ec5781838c031215614870578687fd5b6148786156f3565b835161488381615b91565b81528389015161489281615b91565b818a015260408481015190820152606080850151908201526080808501516148b981615b79565b9082015260a0848101519082015260c0808501516148d681615b79565b908201528552938701939181019160010161485a565b50919998505050505050505050565b60006020828403121561490d57600080fd5b81516129ad81615b91565b60006020828403121561492a57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146129ad57600080fd5b600060c0828403121561496c57600080fd5b6129ad838361449e565b6000610240828403121561498957600080fd5b614991615716565b61499b84846145d5565b81526040830135602082015260608301356040820152608083013560608201526149c760a084016143b8565b60808201526149d860c084016143b8565b60a08201526149e960e084016143b8565b60c08201526101006149fc8185016143b8565b60e0830152610120614a0f8186016143b8565b828401526101409150614a238286016143b8565b90830152610160614a358582016143b8565b828401526101809150614a498286016143b8565b908301526101a0614a5b8582016143b8565b828401526101c09150614a6f8286016143b8565b908301526101e0614a818582016143b8565b828401526102009150614a958286016143b8565b90830152614aa6610220850161422c565b908201529392505050565b60006101208284031215614ac457600080fd5b6129ad8383614555565b6000806101408385031215614ae257600080fd5b614aec8484614555565b915061012083015160038110614b0157600080fd5b809150509250929050565b600060208284031215614b1e57600080fd5b5035919050565b600060208284031215614b3757600080fd5b5051919050565b60008060408385031215614b5157600080fd5b823591506020830135614b0181615b79565b600080600060608486031215614b7857600080fd5b833592506020840135614b8a81615b79565b91506040840135614b9a81615b79565b809150509250925092565b600080600060408486031215614bba57600080fd5b83359250602084013567ffffffffffffffff811115614bd857600080fd5b614be4868287016143ce565b9497909650939450505050565b600080600080600060608688031215614c0957600080fd5b85359450602086013567ffffffffffffffff80821115614c2857600080fd5b614c3489838a016143ce565b90965094506040880135915080821115614c4d57600080fd5b50614c5a888289016143ce565b969995985093965092949392505050565b6000806000806000806000806000806103608b8d031215614c8b57600080fd5b8a359950614c9c8c60208d0161452a565b9850614cab8c60a08d01614542565b97506102e08b013596506103008b013567ffffffffffffffff80821115614cd157600080fd5b614cdd8e838f01614373565b90985096506103208d0135915080821115614cf757600080fd5b614d038e838f016142b2565b90965094506103408d0135915080821115614d1d57600080fd5b50614d2a8d828e016143ce565b915080935050809150509295989b9194979a5092959850565b60008060008060008060008060006103808a8c031215614d6257600080fd5b89359850614d738b60208c0161452a565b9750614d828b60a08c01614542565b96506102e08a013595506103008a013567ffffffffffffffff80821115614da857600080fd5b614db48d838e01614373565b90975095506103208c0135915080821115614dce57600080fd5b614dda8d838e016142fe565b94506103408c0135915080821115614df157600080fd5b614dfd8d838e01614237565b93506103608c0135915080821115614e1457600080fd5b50614e218c828d01614410565b9150509295985092959850929598565b60008060408385031215614e4457600080fd5b50508035926020909101359150565b600080600080600080600060c0888a031215614e6e57600080fd5b87359650602088013595506040880135614e8781615b79565b9450606088013567ffffffffffffffff811115614ea357600080fd5b614eaf8a828b016143ce565b9095509350506080880135614ec381615b91565b915060a0880135614ed381615b91565b8091505092959891949750929550565b60008060008060808587031215614ef957600080fd5b84359350602085013592506040850135614f1281615b79565b91506060850135614f2281615b79565b939692955090935050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000815180845260005b81811015614f9c57602081850181015186830182015201614f80565b81811115614fae576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b614ffa8282518051151582526020908101511515910152565b602081015160408301526040810151606083015260608101516080830152608081015161502b60a084018215159052565b5060a081015180151560c08401525060c081015180151560e08401525060e081015161010061505d8185018315159052565b82015190506101206150728482018315159052565b82015190506101406150878482018315159052565b820151905061016061509c8482018315159052565b82015190506101806150b18482018315159052565b82015190506101a06150c68482018315159052565b82015190506101c06150db8482018315159052565b82015190506101e06150f08482018315159052565b82015190506102006151058482018315159052565b8201516001600160a01b0381166102208501529050505050565b6001600160a01b038316815260406020820152600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261516657600080fd5b8301803567ffffffffffffffff81111561517f57600080fd5b80360385131561518e57600080fd5b6040808501526151a5608085018260208501614f2d565b91505060208401356060840152809150509392505050565b60006001600160a01b03808816835286602084015285604084015260a060608401526151ec60a0840186614f76565b91508084166080840152509695505050505050565b610360810161526e8285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526001600160a01b0360e08201511660e08301526101008082015181840152505050565b6129ad610120830184614fe1565b61038081016152e98286805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526001600160a01b0360e08201511660e08301526101008082015181840152505050565b6152f7610120830185614fe1565b6003831061532e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b82610360830152949350505050565b610120810161539e8286805115158252602081015115156020830152604081015160408301526060810151606083015260808101516001600160a01b03808216608085015260a083015160a08501528060c08401511660c085015250505050565b8360e08301526001600160a01b038316610100830152949350505050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156142a55784516001600160a01b0316835293830193918301916001016153e1565b848152606060208201526000615420606083018587614f2d565b90506001600160a01b038316604083015295945050505050565b858152606060208201526000615454606083018688614f2d565b8281036040840152615467818587614f2d565b98975050505050505050565b600060e08201905085825284356020830152602085013560408301526040850135606083015260608501356154a781615b79565b6001600160a01b0316608083015260a082019390935260c0015292915050565b60006060808301868452602086818601526040838187015282875180855260808801915060808160051b89010194508389016000805b838110156155de578a88037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800185528251805189528701518789018790528051878a018190529088019083908b8b01905b808310156155c9576155b3828551805115158252602081015115156020830152604081015160408301526060810151606083015260808101516001600160a01b03808216608085015260a083015160a08501528060c08401511660c085015250505050565b60e0820191508a8401935060018301925061554e565b509950505093860193918601916001016154fd565b50959c9b505050505050505050505050565b858152846020820152608060408201526000615610608083018587614f2d565b90506001600160a01b03831660608301529695505050505050565b86815285602082015260a06040820152600061564b60a083018688614f2d565b90508360608301526001600160a01b0383166080830152979650505050505050565b84815283602082015260806040820152600061568c6080830185614f76565b90506001600160a01b038316606083015295945050505050565b604051610120810167ffffffffffffffff811182821017156156ca576156ca615b4a565b60405290565b6040805190810167ffffffffffffffff811182821017156156ca576156ca615b4a565b60405160e0810167ffffffffffffffff811182821017156156ca576156ca615b4a565b604051610220810167ffffffffffffffff811182821017156156ca576156ca615b4a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561578157615781615b4a565b604052919050565b600067ffffffffffffffff8211156157a3576157a3615b4a565b5060051b60200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038413811516156157e7576157e7615abd565b827f800000000000000000000000000000000000000000000000000000000000000003841281161561581b5761581b615abd565b50500190565b6000821982111561583457615834615abd565b500190565b6000808312837f80000000000000000000000000000000000000000000000000000000000000000183128115161561587357615873615abd565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0183138116156158a7576158a7615abd565b50500390565b6000828210156158bf576158bf615abd565b500390565b60006158d261425884615789565b808482526020808301925084368760051b870111156158f057600080fd5b60005b87811015615a3f57813567ffffffffffffffff8082111561591357600080fd5b8189019150604080833603121561592957600080fd5b6159316156d0565b83358152868401358381111561594657600080fd5b939093019236601f85011261595a57600080fd5b8335925061596a61425884615789565b8381528781019085890160e03681880289018c01111561598957600080fd5b600097505b86881015615a23578082360312156159a557600080fd5b6159ad6156f3565b82356159b881615b91565b8152828c01356159c781615b91565b818d01528287013587820152606080840135908201526080808401356159ec81615b79565b9082015260a0838101359082015260c080840135615a0981615b79565b90820152845260019790970196928a01929081019061598e565b50508289015250885250505093820193908201906001016158f3565b50919695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415615a7d57615a7d615abd565b5060010190565b60007f8000000000000000000000000000000000000000000000000000000000000000821415615ab657615ab6615abd565b5060000390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6001600160a01b0381168114615b8e57600080fd5b50565b8015158114615b8e57600080fdfea2646970667358221220fa982fde3e93747d9cb8438464eac3961e9d1cb9ed1fe4bed3f1802a7fbccb9064736f6c63430008060033',
	devdoc: {
		details:
			"Adheres to - IJBController: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules. IJBMigratable: Allows migrating to this contract, with a hook called to prepare for the migration.Inherits from - JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfifigured to be an operator of the project. ERC165: Introspection on interface adherance. ",
		kind: 'dev',
		methods: {
			'burnTokensOf(address,uint256,uint256,string,bool)': {
				details:
					"Only a token's holder, a designated operator, or a project's terminal can burn it.",
				params: {
					_holder: 'The account that is having its tokens burned.',
					_memo: 'A memo to pass along to the emitted event.',
					_preferClaimedTokens:
						"A flag indicating whether a project's attached token contract should be burned first if they have been issued.",
					_projectId: 'The ID of the project to which the tokens being burned belong.',
					_tokenCount: 'The number of tokens to burn.'
				}
			},
			'changeTokenOf(uint256,address,address)': {
				details: "Only a project's owner or operator can change its token.",
				params: {
					_newOwner:
						"An address to transfer the current token's ownership to. This is optional, but it cannot be done later.",
					_projectId: 'The ID of the project to which the changed token belongs.',
					_token: 'The new token.'
				}
			},
			constructor: {
				params: {
					_directory:
						'A contract storing directories of terminals and controllers for each project.',
					_fundingCycleStore: 'A contract storing all funding cycle configurations.',
					_operatorStore: 'A contract storing operator assignments.',
					_projects:
						"A contract which mints ERC-721's that represent project ownership and transfers.",
					_splitsStore: 'A contract that stores splits for each project.',
					_tokenStore: 'A contract that manages token minting and burning.'
				}
			},
			'currentFundingCycleOf(uint256)': {
				params: {
					_projectId: 'The ID of the project to which the funding cycle belongs.'
				},
				returns: {
					fundingCycle: 'The current funding cycle.',
					metadata: "The current funding cycle's metadata."
				}
			},
			'distributeReservedTokensOf(uint256,string)': {
				params: {
					_memo: 'A memo to pass along to the emitted event.',
					_projectId: 'The ID of the project to which the reserved tokens belong.'
				},
				returns: {
					_0: 'The amount of minted reserved tokens.'
				}
			},
			'distributionLimitOf(uint256,uint256,address,address)': {
				details:
					'The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ',
				params: {
					_configuration: 'The configuration during which the distribution limit applies.',
					_projectId: 'The ID of the project to get the distribution limit of.',
					_terminal: 'The terminal from which distributions are being limited.',
					_token: 'The token for which the distribution limit applies.'
				},
				returns: {
					_0: 'The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.',
					_1: 'The currency of the distribution limit.'
				}
			},
			'getFundingCycleOf(uint256,uint256)': {
				params: {
					_projectId: 'The ID of the project to which the funding cycle belongs.'
				},
				returns: {
					fundingCycle: 'The funding cycle.',
					metadata: "The funding cycle's metadata."
				}
			},
			'issueTokenFor(uint256,string,string)': {
				details:
					"Deploys a project's ERC20 JBToken contract.Only a project's owner or operator can issue its token.",
				params: {
					_name: "The ERC20's name.",
					_projectId: 'The ID of the project being issued tokens.',
					_symbol: "The ERC20's symbol."
				}
			},
			'latestConfiguredFundingCycleOf(uint256)': {
				params: {
					_projectId: 'The ID of the project to which the funding cycle belongs.'
				},
				returns: {
					ballotState: 'The state of the configuration.',
					fundingCycle: 'The latest configured funding cycle.',
					metadata: "The latest configured funding cycle's metadata."
				}
			},
			'launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)':
				{
					details:
						'Each operation within this transaction can be done in sequence separately.Only a project owner or operator can launch its funding cycles.',
					params: {
						_data:
							"Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.",
						_fundAccessConstraints:
							'An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.',
						_groupedSplits: 'An array of splits to set for any number of groups. ',
						_memo: 'A memo to pass along to the emitted event.',
						_metadata:
							'Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.',
						_mustStartAtOrAfter: 'The time before which the configured funding cycle cannot start.',
						_projectId: 'The ID of the project to launch funding cycles for.',
						_terminals: 'Payment terminals to add for the project.'
					},
					returns: {
						configuration: 'The configuration of the funding cycle that was successfully created.'
					}
				},
			'launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)':
				{
					details:
						"Each operation within this transaction can be done in sequence separately.Anyone can deploy a project on an owner's behalf.",
					params: {
						_data:
							"Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.",
						_fundAccessConstraints:
							'An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.',
						_groupedSplits: 'An array of splits to set for any number of groups. ',
						_memo: 'A memo to pass along to the emitted event.',
						_metadata:
							'Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.',
						_mustStartAtOrAfter: 'The time before which the configured funding cycle cannot start.',
						_owner:
							'The address to set as the owner of the project. The project ERC-721 will be owned by this address.',
						_projectMetadata:
							'Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.',
						_terminals: 'Payment terminals to add for the project.'
					},
					returns: {
						projectId: 'The ID of the project.'
					}
				},
			'migrate(uint256,address)': {
				details: "Only a project's owner or a designated operator can migrate it.",
				params: {
					_projectId: 'The ID of the project that will be migrated from this controller.',
					_to: 'The controller to which the project is migrating.'
				}
			},
			'mintTokensOf(uint256,uint256,address,string,bool,bool)': {
				details:
					"Only a project's owner, a designated operator, one of its terminals, or the current data source can mint its tokens.",
				params: {
					_beneficiary: 'The account that the tokens are being minted for.',
					_memo: 'A memo to pass along to the emitted event.',
					_preferClaimedTokens:
						"A flag indicating whether a project's attached token contract should be minted if they have been issued.",
					_projectId: 'The ID of the project to which the tokens being minted belong.',
					_tokenCount:
						'The amount of tokens to mint in total, counting however many should be reserved.',
					_useReservedRate:
						"Whether to use the current funding cycle's reserved rate in the mint calculation."
				},
				returns: {
					beneficiaryTokenCount: 'The amount of tokens minted for the beneficiary.'
				}
			},
			'overflowAllowanceOf(uint256,uint256,address,address)': {
				details:
					'The number of decimals in the returned fixed point amount is the same as that of the specified terminal. ',
				params: {
					_configuration: 'The configuration of the during which the allowance applies.',
					_projectId: 'The ID of the project to get the overflow allowance of.',
					_terminal: 'The terminal managing the overflow.',
					_token: 'The token for which the overflow allowance applies.'
				},
				returns: {
					_0: 'The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.',
					_1: 'The currency of the overflow allowance.'
				}
			},
			'prepForMigrationOf(uint256,address)': {
				details: "This controller should not yet be the project's controller.",
				params: {
					_from: 'The controller being migrated from.',
					_projectId: 'The ID of the project that will be migrated to this controller.'
				}
			},
			'queuedFundingCycleOf(uint256)': {
				params: {
					_projectId: 'The ID of the project to which the funding cycle belongs.'
				},
				returns: {
					fundingCycle: 'The queued funding cycle.',
					metadata: "The queued funding cycle's metadata."
				}
			},
			'reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)':
				{
					details:
						"Only a project's owner or a designated operator can configure its funding cycles.",
					params: {
						_data:
							'Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.',
						_fundAccessConstraints:
							'An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.',
						_groupedSplits: 'An array of splits to set for any number of groups. ',
						_memo: 'A memo to pass along to the emitted event.',
						_metadata:
							'Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.',
						_mustStartAtOrAfter: 'The time before which the configured funding cycle cannot start.',
						_projectId: 'The ID of the project whose funding cycles are being reconfigured.'
					},
					returns: {
						configuration:
							'The configuration of the funding cycle that was successfully reconfigured.'
					}
				},
			'reservedTokenBalanceOf(uint256,uint256)': {
				params: {
					_projectId: 'The ID of the project to get a reserved token balance of.',
					_reservedRate: 'The reserved rate to use when making the calculation.'
				},
				returns: {
					_0: 'The current amount of reserved tokens.'
				}
			},
			'supportsInterface(bytes4)': {
				details: ' See {IERC165-supportsInterface}.',
				params: {
					_interfaceId: 'The ID of the interface to check for adherance to.'
				}
			},
			'totalOutstandingTokensOf(uint256,uint256)': {
				params: {
					_projectId: 'The ID of the project to get total outstanding tokens of.',
					_reservedRate: 'The reserved rate to use when making the calculation.'
				},
				returns: {
					_0: 'The current total amount of outstanding tokens for the project.'
				}
			}
		},
		stateVariables: {
			_packedDistributionLimitDataOf: {
				details:
					'bits 0-231: The amount of token that a project can distribute per funding cycle.bits 232-255: The currency of amount that a project can distribute. _projectId The ID of the project to get the packed distribution limit data of. _configuration The configuration during which the packed distribution limit data applies. _terminal The terminal from which distributions are being limited. _token The token for which distributions are being limited.'
			},
			_packedOverflowAllowanceDataOf: {
				details:
					'bits 0-231: The amount of overflow that a project is allowed to tap into on-demand throughout the configuration.bits 232-255: The currency of the amount of overflow that a project is allowed to tap. _projectId The ID of the project to get the packed overflow allowance data of. _configuration The configuration during which the packed overflow allowance data applies. _terminal The terminal managing the overflow. _token The token for which overflow is being allowed.'
			}
		},
		version: 1
	},
	userdoc: {
		errors: {
			'PRBMath__MulDivOverflow(uint256,uint256)': [
				{
					notice: 'Emitted when the result overflows uint256.'
				}
			]
		},
		kind: 'user',
		methods: {
			'burnTokensOf(address,uint256,uint256,string,bool)': {
				notice: "Burns a token holder's supply."
			},
			'changeTokenOf(uint256,address,address)': {
				notice:
					"Swap the current project's token that is minted and burned for another, and transfer ownership of the current token to another address if needed."
			},
			'currentFundingCycleOf(uint256)': {
				notice: "A project's current funding cycle along with its metadata."
			},
			'directory()': {
				notice: 'The directory of terminals and controllers for projects.'
			},
			'distributeReservedTokensOf(uint256,string)': {
				notice: 'Distributes all outstanding reserved tokens for a project.'
			},
			'distributionLimitOf(uint256,uint256,address,address)': {
				notice:
					"The amount of token that a project can distribute per funding cycle, and the currency it's in terms of."
			},
			'fundingCycleStore()': {
				notice: 'The contract storing all funding cycle configurations.'
			},
			'getFundingCycleOf(uint256,uint256)': {
				notice: "A project's funding cycle for the specified configuration along with its metadata."
			},
			'issueTokenFor(uint256,string,string)': {
				notice: "Issues an owner's ERC20 JBTokens that'll be used when claiming tokens."
			},
			'latestConfiguredFundingCycleOf(uint256)': {
				notice:
					"A project's latest configured funding cycle along with its metadata and the ballot state of the configuration."
			},
			'launchFundingCyclesFor(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)':
				{
					notice: 'Creates a funding cycle for an already existing project ERC-721.'
				},
			'launchProjectFor(address,(string,uint256),(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],address[],string)':
				{
					notice:
						"Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits."
				},
			'migrate(uint256,address)': {
				notice: 'Allows a project to migrate from this controller to another.'
			},
			'mintTokensOf(uint256,uint256,address,string,bool,bool)': {
				notice:
					"Mint new token supply into an account, and optionally reserve a supply to be distributed according to the project's current funding cycle configuration."
			},
			'operatorStore()': {
				notice: ' A contract storing operator assignments.'
			},
			'overflowAllowanceOf(uint256,uint256,address,address)': {
				notice:
					"The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of."
			},
			'prepForMigrationOf(uint256,address)': {
				notice:
					'Allows other controllers to signal to this one that a migration is expected for the specified project.'
			},
			'projects()': {
				notice: "Mints ERC-721's that represent project ownership."
			},
			'queuedFundingCycleOf(uint256)': {
				notice: "A project's queued funding cycle along with its metadata."
			},
			'reconfigureFundingCyclesOf(uint256,(uint256,uint256,uint256,address),((bool,bool),uint256,uint256,uint256,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,bool,address),uint256,(uint256,(bool,bool,uint256,uint256,address,uint256,address)[])[],(address,address,uint256,uint256,uint256,uint256)[],string)':
				{
					notice:
						"Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot."
				},
			'reservedTokenBalanceOf(uint256,uint256)': {
				notice: 'Gets the amount of reserved tokens that a project has available to distribute.'
			},
			'splitsStore()': {
				notice: 'The contract that stores splits for each project.'
			},
			'supportsInterface(bytes4)': {
				notice: 'Indicates if this contract adheres to the specified interface.'
			},
			'tokenStore()': {
				notice: 'The contract that manages token minting and burning.'
			},
			'totalOutstandingTokensOf(uint256,uint256)': {
				notice:
					'Gets the current total amount of outstanding tokens for a project, given a reserved rate.'
			}
		},
		notice:
			'Stitches together funding cycles and community tokens, making sure all activity is accounted for and correct.',
		version: 1
	},
	storageLayout: {
		storage: [
			{
				astId: 4718,
				contract: 'contracts/JBController.sol:JBController',
				label: '_processedTokenTrackerOf',
				offset: 0,
				slot: '0',
				type: 't_mapping(t_uint256,t_int256)'
			},
			{
				astId: 4730,
				contract: 'contracts/JBController.sol:JBController',
				label: '_packedDistributionLimitDataOf',
				offset: 0,
				slot: '1',
				type: 't_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256))))'
			},
			{
				astId: 4742,
				contract: 'contracts/JBController.sol:JBController',
				label: '_packedOverflowAllowanceDataOf',
				offset: 0,
				slot: '2',
				type: 't_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256))))'
			}
		],
		types: {
			t_address: {
				encoding: 'inplace',
				label: 'address',
				numberOfBytes: '20'
			},
			't_contract(IJBPaymentTerminal)17954': {
				encoding: 'inplace',
				label: 'contract IJBPaymentTerminal',
				numberOfBytes: '20'
			},
			t_int256: {
				encoding: 'inplace',
				label: 'int256',
				numberOfBytes: '32'
			},
			't_mapping(t_address,t_uint256)': {
				encoding: 'mapping',
				key: 't_address',
				label: 'mapping(address => uint256)',
				numberOfBytes: '32',
				value: 't_uint256'
			},
			't_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256))': {
				encoding: 'mapping',
				key: 't_contract(IJBPaymentTerminal)17954',
				label: 'mapping(contract IJBPaymentTerminal => mapping(address => uint256))',
				numberOfBytes: '32',
				value: 't_mapping(t_address,t_uint256)'
			},
			't_mapping(t_uint256,t_int256)': {
				encoding: 'mapping',
				key: 't_uint256',
				label: 'mapping(uint256 => int256)',
				numberOfBytes: '32',
				value: 't_int256'
			},
			't_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256)))':
				{
					encoding: 'mapping',
					key: 't_uint256',
					label:
						'mapping(uint256 => mapping(contract IJBPaymentTerminal => mapping(address => uint256)))',
					numberOfBytes: '32',
					value: 't_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256))'
				},
			't_mapping(t_uint256,t_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256))))':
				{
					encoding: 'mapping',
					key: 't_uint256',
					label:
						'mapping(uint256 => mapping(uint256 => mapping(contract IJBPaymentTerminal => mapping(address => uint256))))',
					numberOfBytes: '32',
					value:
						't_mapping(t_uint256,t_mapping(t_contract(IJBPaymentTerminal)17954,t_mapping(t_address,t_uint256)))'
				},
			t_uint256: {
				encoding: 'inplace',
				label: 'uint256',
				numberOfBytes: '32'
			}
		}
	}
};
