import type { Chain, WalletInit, WalletModule } from '@web3-onboard/common';
import type {
	Account,
	AccountCenter,
	WalletState,
	Notification,
	CustomNotification,
	UpdateNotification,
	CustomNotificationUpdate,
	Notify
} from '../types';
export declare function addChains(chains: Chain[]): void;
export declare function addWallet(wallet: WalletState): void;
export declare function updateWallet(id: string, update: Partial<WalletState>): void;
export declare function removeWallet(id: string): void;
export declare function updateAccount(id: string, address: string, update: Partial<Account>): void;
export declare function updateAccountCenter(update: AccountCenter | Partial<AccountCenter>): void;
export declare function updateNotify(update: Partial<Notify>): void;
export declare function addNotification(notification: Notification): void;
export declare function addCustomNotification(notification: CustomNotificationUpdate): void;
export declare function customNotification(updatedNotification: CustomNotification): {
	dismiss: () => void;
	update: UpdateNotification;
};
export declare function removeNotification(id: Notification['id']): void;
export declare function resetStore(): void;
export declare function setWalletModules(wallets: WalletInit[]): void;
export declare function setLocale(locale: string): void;
export declare function updateAllWallets(wallets: WalletState[]): void;
export declare function initializeWalletModules(modules: WalletInit[]): WalletModule[];
export declare function uniqueWalletsByLabel(walletModuleList: WalletModule[]): WalletModule[];
