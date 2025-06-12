import AwcDialog from './awc-dialog';
import { AwcDialogVariant } from './awc-dialog.types';
import AwcButton from '../awc-button/awc-button';
import { AwcButtonVariant, AwcButtonColor } from '../awc-button/awc-button.types';

interface AwcDialogButtonConfig {
    text: string;
    variant: AwcButtonVariant;
    background: AwcButtonColor;
    onClick: () => void;
}

interface AwcDialogConfig {
    heading?: string;
    description?: string;
    variant?: AwcDialogVariant;
    buttons?: AwcDialogButtonConfig[];
    timer?: number;
}

interface SweetAlertOptions {
    title?: string;
    text?: string;
    variant?: AwcDialogVariant;
    // не нужен так-как иконки зашиты в зависимости от variant
    // icon?: 'warning' | 'error' | 'info' | 'success';
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    // Убираем
    // confirmButtonClass?: VariantType;
    // Убираем
    // cancelButtonClass?: VariantType;
    // Что-то бесполезное в коде sweetAlert если параметр true то вызывается метод clode();
    // closeOnConfirm?: boolean;
    // Что-то бесполезное в коде sweetAlert если параметр true то вызывается метод clode();
    // closeOnCancel?: boolean;
    // Убираем так-как не используется
    // allowOutsideClick?: boolean;
    // allowEscapeKey?: boolean;
    // В будущем возможно понадобится, предлагаю оставить
    timer?: number;
}

class AwcDialogService {
    private static currentDialog: AwcDialog | null = null;

    static createDialog(config: AwcDialogConfig = {}): AwcDialog | null {
        if (this.currentDialog && this.currentDialog.opened) {
            return null;
        }

        const { heading = 'Title', description = '', variant = 'info', buttons = [], timer = 0 } = config;

        const dialog = document.createElement('awc-dialog') as AwcDialog;

        dialog.heading = heading;
        dialog.description = description;
        dialog.variant = variant;

        if (timer > 0) {
            setTimeout(() => {
                dialog.close();
            }, timer);
        }

        buttons.forEach((buttonConfig) => {
            const button = document.createElement('awc-button') as AwcButton;
            button.textContent = buttonConfig.text;
            button.variant = buttonConfig.variant;
            button.background = buttonConfig.background;

            button.addEventListener('click', () => {
                buttonConfig.onClick();
                dialog.close();
            });

            button.setAttribute('slot', 'awc-dialog-button');
            dialog.appendChild(button);
        });

        document.body.appendChild(dialog);

        dialog.open();
        this.currentDialog = dialog;

        dialog.addEventListener(
            'awc-dialog-close',
            () => {
                document.body.removeChild(dialog);
                this.currentDialog = null;
            },
            { once: true }
        );

        return dialog;
    }

    static info(options?: AwcDialogConfig): void {
        if (!this.createDialog({ ...options, variant: 'info' })) {
            console.warn('A dialog is already open.');
        }
    }

    static error(options?: AwcDialogConfig): void {
        if (!this.createDialog({ ...options, variant: 'error' })) {
            console.warn('A dialog is already open.');
        }
    }

    static sweetAlertAdapter(options: SweetAlertOptions, callback?: (isConfirm: boolean) => void): void {
        if (this.currentDialog && this.currentDialog.opened) {
            console.warn('A dialog is already open.');
            return;
        }

        // Тут проработать получше, нужно будет
        const {
            title = '',
            text = '',
            variant = 'info',
            showCancelButton = false,
            confirmButtonText = 'OK',
            cancelButtonText = 'Cancel',
            timer = 0,
            ...rest
        } = options;

        const buttons: AwcDialogButtonConfig[] = [];

        buttons.push({
            text: confirmButtonText,
            variant: 'primary',
            background: 'blue',
            onClick: () => {
                if (callback) callback(true);
                // if (closeOnConfirm) this.currentDialog?.close();
            },
        });

        if (showCancelButton) {
            buttons.push({
                text: cancelButtonText,
                variant: 'transparent',
                background: 'gray',
                onClick: () => {
                    if (callback) callback(false);
                    // if (closeOnCancel) this.currentDialog?.close();
                },
            });
        }

        if (
            !this.createDialog({
                heading: title,
                description: text,
                variant,
                buttons,
                timer,
                ...rest,
            })
        ) {
            console.warn('A dialog is already open.');
        }
    }
}

window.showAwcDialog = {
    info: AwcDialogService.info.bind(AwcDialogService),
    error: AwcDialogService.error.bind(AwcDialogService),
    sweetAlert: AwcDialogService.sweetAlertAdapter.bind(AwcDialogService),
};

declare global {
    interface Window {
        showAwcDialog: {
            info: (options?: AwcDialogConfig) => void;
            error: (options?: AwcDialogConfig) => void;
            sweetAlert: (options: SweetAlertOptions, callback?: (isConfirm: boolean) => void) => void;
        };
    }
}

export default AwcDialogService;
